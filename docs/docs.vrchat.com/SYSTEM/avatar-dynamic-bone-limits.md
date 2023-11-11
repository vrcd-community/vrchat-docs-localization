# 虚拟形象的动态骨骼 (Dynamic Bones) 限制

::: warning 🧑‍💻译者警告
当前版本文档内容落后于当前版本应用状态，我们会将当前版本应用状态以引用形式编写进本文档中，同时保留当前版本文档内容。
:::

动态骨骼是一个非常消耗性能的组件，虚拟形象创建者很容易过度使用该组件。VRChat 提供了一种方法，用户可以通过该方法限制虚拟形象允许的动态骨骼用量。

## 设置动态骨骼限制

您可以通过进入“安全”选项卡并单击右上角的“性能选项”按钮来设置动态骨骼限制。图片中的位置并不是最终位置，这会随着我们进一步的迭代而更改。

::: warning 🧑‍💻译者核对-1
目前“性能选项”入口已被删除，当前虚拟形象动态骨骼限制功能UI被迁移到了`设置>虚拟虚拟形象>模型性能优化`当中。

<center>

![img](../img/avatar-dynamic-bone-limits-proof-1.png)

</center>

:::

为简洁高效，此系统是**可选**的，您可以通过设置禁用此系统。

<center>

![img](../img/avatar-dynamic-bone-limits-1.png)

</center>

单击“性能选项”按钮将弹出一个窗口，其中包含当前可用选项的详细信息。目前的唯一选项是动态骨骼限制系统。

::: warning 🧑‍💻译者核对-2
如**译者核对-1**所示。
:::

单击“限制动态骨骼使用”可以打开和关闭该系统。关闭窗口将自动应用更改。这一过程不需要重新加载虚拟形象 - 因为该更改会立即应用。

您还可以查看窗口右侧设置的当前限制，以及通过“查看文档”按钮访问此文档。

<center>

![img](../img/avatar-dynamic-bone-limits-2.png)

</center>

如果虚拟形象上的动态骨骼用量超过了这些限制，**则会禁用所有虚拟形象的相关组件并将其固定到“初始位置”。**

如果虚拟形象通过动画启用/禁用动态骨骼组件，使其用量高于/低于限制，则组件将停止更新/开始相应地更新。

值名称 | 描述 | 默认值
-- | -- | --
最多受影响的转换值 | 如果虚拟形象具有比此处默认值更多的由动态骨骼带来的变换，则所有动态骨骼和动态骨骼碰撞体组件都将被禁用。 | 32
最大碰撞检查值 | 如果虚拟形象的动态骨碰撞体检查数量多于此处列出的数量，则所有动态骨碰撞体组件都将被禁用。 | 8

有关这些值确切指示内容的更详细说明，请查看我们关于[虚拟形象性能排名系统](../../creators.vrchat.com/avatars/avatar-performance-ranking-system.md)的文档。

默认限制与虚拟形象性能排名中的中排名匹配。因此，如果虚拟形象由于动态骨骼组件而被标记为“差”或“非常差”，它们将会被禁用。

如果您发现自己的虚拟形象超出了这些限制，但仍希望开启默认设置的用户看到您的动态骨骼，请查看我们的[虚拟形象优化提示](../../creators.vrchat.com/avatars/avatar-optimizing-tips.md)。

## 修改动态骨骼限制

如果您想，您可以为动态骨骼限制系统定义自己的限制。自定义这些数字的方式与[虚拟形象粒子系统限制](./avatar-particle-system-limits.md)类似，设置文件位于同一文件位置中。

::: warning 🚧需要重新启动
编辑这些值需要重新启动应用程序才能生效。
:::

您可以通过在以下目录中添加或编辑`config.json`文件来覆盖默认值：

`%AppData%\..\LocalLow\VRChat\vrchat`

如果该文件不存在，请创建该文件并按以下方式命名该文件：`config.json`

确保文件扩展名为 `json` ，而不是 `txt` 。最好使用 Notepad++ 等编辑器编辑配置文件。

### 动态骨骼限制配置选项

以下是您可以为动态骨骼限制系统更改的变量。

::: tip 📘完全禁用
将值设置为 0 将删除所有虚拟形象上的所有相关动态骨骼组件，无论组件扫描的结果如何。
:::

变量名称 | 描述 | 违约
-- | -- | --
dynamic_bone_max_affected_transform_count | 更改动态骨骼变换的限制。任何超过此数量的头像都将所有动态骨骼和动态骨骼碰撞体组件设置为非更新。 | 32
dynamic_bone_max_collider_check_count | 更改动态骨骼碰撞体变换检查的限制。任何超过此数量的头像都将所有动态骨碰撞体组件设置为不更新。 | 8

### 配置示例

下面是一些可用于 `config.json` 文件的示例。您可以将鼠标悬停在代码块上，然后单击“复制”以将它们复制到剪贴板。您可以将它们直接粘贴到 `config.json` 文件中。请记住，如果您在玩游戏时更改限制，则需要重新启动 VRChat 。

例如，您的`config.json`在设置为禁用时所有动态骨骼将如下所示。请记住，这将忽略“[虚拟形象粒子系统限制](./avatar-particle-system-limits.md)”配置中的任何设置。

```json
{
  "dynamic_bone_max_affected_transform_count" : 0,
  "dynamic_bone_max_collider_check_count" : 0
}
```

如果您使用默认的虚拟形象粒子系统配置文件，您的`config.json`将如下所示：

```json
{
	"betas": [
		"particle_system_limiter"
	],
	"ps_max_particles": 50000,
	"ps_max_systems": 200,
	"ps_max_emission": 5000,
	"ps_max_total_emission": 40000,
	"ps_mesh_particle_divider": 60,
	"ps_mesh_particle_poly_limit": 50000,
	"ps_collision_penalty_high": 50,
	"ps_collision_penalty_med": 30,
	"ps_collision_penalty_low": 10,
	"ps_trails_penalty": 10,
	"dynamic_bone_max_affected_transform_count" : 0,
	"dynamic_bone_max_collider_check_count" : 0
}
```
