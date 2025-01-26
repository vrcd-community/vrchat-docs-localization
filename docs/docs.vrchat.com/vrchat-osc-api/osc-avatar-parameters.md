# OSC 模型参数

## 概述

该应用程序接口可让您在形象上驱动参数，并向另一个 OSC 应用程序发送参数。

## 模型更改

当启用 OSC 的本地玩家加载新形象时，将向 `/avatar/change` 发送一条带有形象 ID 的信息。

## 模型参数和配置文件

总体思路是，在地址 `/avatar/parameters/name` 输入的值将赋值给名字相匹配的形象参数。因此，`/avatar/parameters/VRCEmote` 将赋值给默认的 VRCEmote 参数 (如果您保留这个参数的话)，您的形象就会开始挥手、跳舞等。下面是一个非常简单的 TouchOSC 文档，可以完全做到这一点：[vrc-emote.tosc](https://github.com/vrchat-community/osc/raw/main/files/touch-osc/vrc-emote.tosc)

为使您能对 “模型参数” 进行更多操作，我们会自动生成可编辑的配置文件，以便进行自定义。请注意，使用 “构建与测试” 功能时，配置文件不会保存到硬盘中，因此您可以使用 OSC，但在上传形象之前不会看到配置文件。

当您载入一个已发布的 “形象” 时，将检查您的本地存储是否有已经存储了匹配该形象 ID 的 OSC 配置文件 (它在 `~\AppData\LocalLow\VRChat\VRChat\OSC\{userId}\Avatars\{avatarId}.json` 里)。

下面是一个实际的完整路径例子：

```
C:\Users\Momo\AppData\LocalLow\VRChat\VRChat\OSC\usr_9381c776-ce11-4def-9331-6ffeacce027e\Avatars\avtr_9d58037b-23c7-4c9c-adbd-b1338178cd81.json
```

如果找到了，在输入时，给定的输入地址会将信息驱动到模型参数里，而输出地址会发送带有参数值的信息 (当参数值变动的时候)。

如果找不到已有的配置文件，就会自动生成并加载新的配置文件，监听并发送所有可能的信息。

#### 配置文件示例代码段

```
{
    "id" : "avtr_9d58037b-23c7-4c9c-adbd-b1338178cd81",
    "name" : "PurpleMomo",
    "parameters" : [
        {
            "name" : "Face",
            "input" : {
                "address" : "/avatar/parameters/Face",
                "type" : "Int"
            },
            "output" : {
                "address" : "/ableton/trackselect",
                "type" : "Float"
            }
        },
        {
            "name" : "VelocityZ",
            "output" : {
                "address" : "/avatar/parameters/VelocityZ",
                "type" : "Float"
            }
        }
    ]
}
```

为了便于阅读，形象的名字也包括在内，但其只有其 ID 被实际上在 OSC 中使用 (文件名里也是一样)。请注意，上面的 VelocityZ 输入端口留空了，因为它只有输入功能。此外，我还更改了 Face 的输出地址和类型，以展示一个对于配置的更改如何帮助您直接控制另一个应用程序 -- 在本例中，更改 Face 参数将通过地址 “/ableton/trackselect” 向 Ableton Live 发送值，而 Ableton 期望使用 Float，因此我们要求 VRChat 对其进行即时转换。

完整配置如右：[example-avatar-config.json](https://github.com/vrchat-community/osc/raw/main/files/avatar-parameters/configs/example-avatar-config.json "example-avatar-config.json")

下面是数组中每个成员的详细说明：

- 名称：**字符串**，必须与模型参数的名称一致
- 输入
    - 地址：**字符串**，用于监听输入数据
    - 类型：**字符串**，其内容只能是 “Int” (整型)，“Bool” (布尔)，“Float” (浮点) 三者之一，也就是输入数据的数据类型
- 输出
    - 地址：用于发送 OSC 信息，在参数发生变化时发送参数的新值
    - 类型：**字符串**，其内容*只能是* “Int” (整型)，“Bool” (布尔)，“Float” (浮点) 三者之一，其发送的数据类型与参数实际数据类型无关。

在默认生成的配置中，类型和地址将完全匹配，但如果您希望输入不同的数据，可以更改*输入*类型和地址；如果您希望输出不同的数据，可以更改*输出*类型和地址。通过这种方式，该配置提供了一种与其他系统交互的好方法，而不需要第三方程序 (不过，对于更高级的设置，您可以使用此类程序进行进一步操作、缩放和合并数据等)。

**请注意**，在我们为 OSC 集成适当的客户端用户界面之前，配置文件只是允许用户进行一些自定义操作的权宜之计，这个配置方式可能会在未来某个时候被移除。
