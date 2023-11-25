# 在虚拟机中使用 VRChat

::: warning 🚧仅限进阶用户阅读！
这些信息通常只对高阶用户有参考价值，特别是只对在虚拟机中运行 VRChat 的用户有用。其中包含的术语对大多数用户来说可能无法识别或完全无用。
:::

::: danger ❗️VRChat 不支持在虚拟机中直接运行！
**我们并不直接支持通过虚拟机使用 VRChat**，但我们还是做了一些研究，为那些选择尝试这么做的用户提供方便。

**本文档的存在并不意味着我们支持直接在虚拟机中运行 VRChat。**本文或任何其他的方法都有可能随时失效。无论如何，我们都会努力保持本文档的更新。

如果您发现本文档已过时或需要更新，请使用右上角的 "suggest edit"链接。
:::

在虚拟机环境中运行时，VRChat 的反作弊 Easy Anti-Cheat (EAC) 通常会失效。

在某些情况下，您可以让虚拟化与 EAC 同时运行，我们不介意您这样做。

根据我们的观察，这些变通方法不会影响性能。

### libvirt

使用命令 `virsh edit VM_NAME` ，用您喜欢的编辑器打开虚拟机的 XML 配置。然后只需在 `features > hyperv` 下添加以下一行即可：


```xml
<vendor_id state='on' value='0123756792CD'/>
```

最后，您的 `features` 块应该是这样的：

```xml
  <features>
    <hyperv mode='custom'>
      <!-- 这里有其他东西 -->
      <vendor_id state='on' value='0123756792CD'/>
    </hyperv>
    <!-- 这里有其他东西 -->
  </features>
```

同样，这不会影响性能。您可以保留其他设置，如 `hypervisor` , `topoext` 和 `invtsccpuid` 标志或 `Hyper-V clock`（这些设置都有性能优势）。

事实上，这里有一个小窍门：您可以将 Hyper-V 模式设置为直通模式，而无需添加 vendor_id 参数：

```xml
<hyperv mode='passthrough'>
  <!-- 管他呢 -->
</hyperv>
```

这将启用您的当前版本的内核/QEMU *所有* 可用的 **Hyper-V enlightenments** 特性，包括vendor ID，这也意味着 EAC 不会发病然后拒绝启动，但这个操作也会启用以前可能没有启用的其他功能，也就是说这很可能会 *提高* 您的性能！

*“enlightenments”* 是 Hyper-V 对 "准虚拟化扩展 "的一种说法，即 Linux 内核或 QEMU 为 Windows 客户端提供的，用于增强虚拟环境中的性能或功能的接口。

2022 年 8 月 26 日之后，上述修复措施可能不足以让游戏正常启动（您仍应执行这些措施）。如果仍有问题，请尝试手动设置虚拟机的 SMBIOS 字符串。理论上，任何有效的硬件配置都可以正常工作，但最好的办法是通过 `dmidecode` 获取自己系统的硬件信息。

您应该可以从这些命令中推断出有关系统硬件的信息：

```
dmidecode --type bios
dmidecode --type baseboard
dmidecode --type system`
```

为此，请将其添加到域根目录，**最好使用您系统硬件的自带信息**，例如：

```xml
  <sysinfo type="smbios">
    <bios>
      <entry name="vendor">American Megatrends Inc.</entry>
      <entry name="version">F31o</entry>
      <entry name="date">12/03/2020</entry>
    </bios>
    <system>
      <entry name="manufacturer">Gigabyte Technology Co., Ltd.</entry>
      <entry name="product">X570 AORUS ULTRA</entry>
      <entry name="version">x.x</entry>
      <entry name="serial">BASEBOARD SERIAL HERE (or "Default string")</entry>
      <entry name="uuid">BASEBOARD UUID HERE</entry>
      <entry name="sku">BASEBOARD SKU HERE (or "Default string"</entry>
      <entry name="family">X570 MB</entry>
    </system>
  </sysinfo>
```
  
对于 UUID 条目，您可以使用域 XML 顶部生成的虚拟机 UUID。域 XML 中的 UUID 和 `sysinfo` 中的 UUID 必须匹配，否则 libvirt 将报错。

此外，请将其添加到 `<os>` 组，以便使用这些新的系统参数：

```xml
<os><smbios mode="sysinfo"/> <!
```
### QEMU
如果您使用 QEMU 命令行启动虚拟机，只需在 `-cpu` 标志中添加 vendor ID。比如像下面这样：

```
-cpu 'host,migratable=off,hypervisor=on,topoext=on,hv_relaxed,hv_reset,hv_runtime,hv_stimer,hv_synic,hv_time,hv_vapic,hv_vpindex,hv-frequencies,hv-avic,hv-vendor-id=0123456789AB,host-cache-info=on,apic=on,invtsc=on'
```

`-cpu` 参数中可能已经包含了其他内容，在这种情况下，只需在最后添加 `,hv-vendor-id=0123756792CD` 即可，如上图所示。上述推荐设置不仅能实现 Hyper-V 的要求，还能确保 CPU L2/L3 缓存拓扑等更高阶的方法也能正确传递。

在这里,也可以使用 Hyper-V 直通模式：

```
-cpu host,migratable=off,hypervisor=on,invtsc=on,hv-time=on,hv-passthrough=on。
```

不过，[不建议使用 `hv-passthrough`](https://www.qemu.org/docs/master/system/i386/hyperv.html#supplementary-features)，因为该选项会激活 KVM 本身支持的所有 Hyper-V 特性（而不仅仅是硬件支持的）。

（注意：在这种情况下，（大概？）除了 `hv-time` 之外，您不需要任何其他 `hv-foo` 参数，直通将处理其余参数）

如 QEMU 文档所述，QEMU 在所有类型的 SMBIOS 仿真处理中，支持使用多个 `-smbios type=#,...`条目。从头开始填写所有参数比较麻烦，不过这很容易实现自动化。建议使用脚本从自己的硬件获取真实参数值：[https://gist.github.com/kiler129/5d437a37c07ac6eb1cdf0e595e488fd2](https://gist.github.com/kiler129/5d437a37c07ac6eb1cdf0e595e488fd2)。这样可以确保参数值与真实硬件相对应，并且不会出现不同用户间有完全相同参数的情况。使用脚本生成的命令行参数示例如下：

```shell
-smbios 'type=0,version=F31o,vendor=American Megatrends International,, LLC.,uefi=on,release=5.17,date=12/03/2020' \
-smbios 'type=1,version=-CF,sku=Default string,product=X570 AORUS ULTRA,manufacturer=Gigabyte Technology Co.,, Ltd.,uuid=d30dbc2a-d9b0-11ed-afa1-0242ac120002,serial=Default string,family=X570 MB' \
-smbios 'type=2,asset=Default string,version=Default string,product=X570 AORUS ULTRA,location=Default string,manufacturer=Gigabyte Technology Co.,, Ltd.,serial=Default string' \
-smbios 'type=3,asset=Default string,version=Default string,sku=Default string,manufacturer=Default string,serial=Default string' \
-smbios 'type=4,asset=Unknown,version=AMD Ryzen 9 5950X 16-Core Processor            ,part=Zen,manufacturer=Advanced Micro Devices,, Inc.,serial=Unknown,sock_pfx=AM4' \
-smbios 'type=11,value=Default string' \
-smbios 'type=17,bank=Bank 0,asset=Not Specified,part=OV_8GR1,manufacturer=OEM_VENDOR,speed=2666,serial=OEM33161,loc_pfx=DIMM 0'
```

### Proxmox/PVE

确保在虚拟机的 "选项" 选项卡中将操作系统设置为 "Windows 7" 或更高版本。

虽然严格来说与 EAC 无关，但在 Proxmox（以及任何其他虚拟机）中运行 VR 游戏需要一致且可预测的性能。Proxmox 上专门针对游戏的性能调整教程可在 Proxmox 论坛上找到：[https://forum.proxmox.com/threads/hey-proxmox-community-lets-talk-about-resources-isolation.124256/](https://forum.proxmox.com/threads/hey-proxmox-community-lets-talk-about-resources-isolation.124256/)

### 技术说明

您可能会注意到，其中有些内容与过去臭名昭著的 "NVIDIA 代码 43 "问题非常相似。这里唯一的区别是，隐藏 kvm 虚拟机监控程序（`kvm=off` 或 `<kvm><hidden state='on'/></kvm>` ）不是必需的（但这么做也无妨）。如果您以前曾使用过此类指南（如[https://passthroughpo.st/apply-error-43-workaround/](https://passthroughpo.st/apply-error-43-workaround/)）设置过虚拟机，那么带有 EAC 的 VRC 对您来说应该是可以直接运行的。

在技术层面上，Hyper-V vendor ID 的作用是将客户机 `cpuid` 信息的 `0x40000000`地址处设置为其所提供的任何信息。这里的默认值是 "Microsoft HV"，EAC 会直接拒绝这个值。使用 Hyper-V 直通模式时，此处将变成 "Linux KVM Hv"，它仍然会显示为一个虚拟机，但 EAC 不会对此作出任何反应。

由于这不需要更改 `hypervisor` 标志，客户机（Windows NT）中的操作系统内核仍会将环境识别为虚拟机，并应用相应的性能增强措施。这也意味着客户机中的任务管理器会报告其运行在虚拟机中。在 KVM 环境中测试 EAC 时，这不会有什么影响。

### 一个*非常* 技术性的说明

下面是一个小小的 windows c++ 程序，用于演示更改后的效果，代码为：

```cpp
#include <iostream>
#include <intrin.h>

void print_leaf(int leaf)
{
    int res[4];
    __cpuid(res, leaf);

    std::cout << "leaf: 0x" << std::hex << leaf << std::endl;

    for (size_t i = 0; i < 4; i++)
    {
        std::cout << "res" << i << ": 0x" << std::hex << res[i] << " (";
        for (size_t j = 0; j < 4; j++)
        {
            char part = (res[i] >> j * 8) & 0xff;
            std::cout << part;
        }
        std::cout << ")" << std::endl;
    }
}

int main()
{
    // cf:
    // https://docs.microsoft.com/en-us/virtualization/Hyper-V-on-windows/tlfs/feature-discovery
    // https://docs.microsoft.com/en-us/cpp/intrinsics/cpuid-cpuidex?view=msvc-170

    std::cout << "manufacturer id:" << std::endl;
    print_leaf(0); // Manufacturer ID

    std::cout << "Hyper-V id:" << std::endl;
    print_leaf(0x40000000); // Hypervisor CPUID Leaf Range

    return 0;
}
```

使用 `hv-passthrough` 的示例机器上的输出结果为：

```
manufacturer id:
leaf: 0x0
res0: 0x10 (►   )
res1: 0x68747541 (Auth)
res2: 0x444d4163 (cAMD)
res3: 0x69746e65 (enti)
Hyper-V id:
leaf: 0x40000000
res0: 0x40000005 (♣  @)
res1: 0x756e694c (Linu)
res2: 0x564b2078 (x KV)
res3: 0x7648204d (M Hv)`
```
