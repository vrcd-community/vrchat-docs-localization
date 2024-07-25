# 模型菜单与菜单选项
<!--标题需要再修改-->
::: warning 阅读本篇文章需要特定的前置知识

您需要先了解 [Unity 动画控制器](https://.unity3d.com/cn/2019.4/Manual/class-AnimatorController.html) ，这样能帮助您更好的了解本文。

:::

## 创建 Expressions Menu (模型菜单)

1. 在 Unity 项目窗口中，在 Assets 文件夹单击鼠标右键，选择`Create/VRChat/Avatars/Expressions Menu`
2. 打开`Expressions Menu`文件以自定义它。（见第 13 步）

在继续之前，您需要创建一个**Expression Parameters**资源，您可以在其中您模型上使用的所有自定义参数。

![默认情况下表情参数的外观。](/creators.vrchat.com/images/avatars/animator-parameters/avatar-descriptor-params.png)

3. 在Assets文件夹中右键单击，选择**Create > VRC Scriptable Objects > Expression Parameters**。
4. 打开`Expression Parameters`文件以自定义它。

    - 该资源默认包含[三个参数](/creators.vrchat.com/avatars/animator-parameters#vrchat-动画器默认参数)（`VRCEmote`、`VRCFaceBlendH`、`VRCFaceBlendV`）。如果您用不到这些参数，则可以直接删除它们，
5. 输入您的参数名称。
    - 这些名称应与您的动画器中的参数匹配。
    - 您可以使用`/`对参数进行分类。例如，`Clothing/Hoodie`和`Clothing/Hat`。
    - VRChat 有一些[内置参数](/creators.vrchat.com/avatars/animator-parameters#模型动画参数列表)。您可以直接在动画器中使用它们，无需添加它们到您的`Expression Parameters`文件。
6. 为每个参数选择一个类型。

    - `Int`范围为 0 - 255 。
    - `Float`范围为 -1.0 至 1.0 。
    - `Bool`为`True`（真）或`False`（假）。
7. 更改`Default`值以设置每个参数的默认值。当模型被重置时，参数将恢复为此值。
8. 如果您希望某个自定义参数的值不会随着切换世界或模型被重置，请启用`Saved`。
9. 如果您希望此参数的值应同步给所有远端玩家，请启用`Synced`。

接下来，您应将这两个资源添加到您的`VRCAvatarDescriptor`中。

![默认情况下表情参数的外观。](/creators.vrchat.com/images/avatars/animator-parameters/avatar-descriptor-params.png)

10. 选择您的`VRCAvatarDescriptor`并向下滚动到`Expressions`部分。
11. 将“Menu”填选框更改为您的`Expressions Menu`文件。
12. 将“Parameters”填选框更改为您的`Expression Parameters`文件。

在将这两个文件添加到您的`VRCAvatarDescriptor`之后，您就可以在模型菜单中自定义所有的模型参数。

![默认情况下表情参数的外观。](/creators.vrchat.com/images/avatars/animator-parameters/menu-default.png)

13. 在检查器中，单击`Add Control`。一个菜单最多可以添加 8 个选项。
14. 选择一个名称和[选项类型](/creators.vrchat.com/avatars/expression-menu-and-controls.md#controls-(操作选项)类型)。
15. 您还可以在这里添加图标和子菜单，或更改选项的顺序。
  - 您可以在`Packages/VRXhat SDK - Avatars/Samples/AV3 Demo Assets/Expressions Menu`中找到一些默认选项图标。

### Controls (操作选项)类型

* **Button** - 单击时设置参数，在发送同步值或重置模型的一秒钟后重置参数。不能长按。
* **Toggle** - 打开开关时设置参数，关闭开关时重置参数。
* **Sub-Menu** - 打开另一个模型菜单。此外，如果进入该菜单时设置了参数，则退出该菜单时将重置该参数。
  * **重要提示：** 您可以嵌套(套娃)设置子菜单！

* **Two Axis Puppet** - 打开一个摇杆圆盘菜单，根据摇杆位置控制两个浮点参数。参数映射到垂直和水平方向。其可控制的浮点值的范围是-1.0至1.0。
* **Four Axis Puppet** - 打开一个摇杆圆盘菜单，根据摇杆位置控制四个浮点参数。参数按顺序映射为上、右、下、左。其可控制的浮点值的范围是0.0至1.0。
* **Radial Puppet** - 打开一个转盘圆盘菜单，控制单个浮点参数，类似一个可自行拖动的环形进度条！其可控制的浮点值的范围是 0.0 至 1.0。

::: info 圆盘菜单同步

**Puppet** (圆盘)菜单在打开时使用[**IK** ](/creators.vrchat.com/avatars/animator-parameters#参数同步模式)同步模式。如果您希望同步速度能尽量匹配输入速度，以实现快速操作，可以使用 Puppet (圆盘)菜单。

**Button**/**Toggle** 使用 **Playable**同步模式，它按需瞬时更新，而不是持续更新，适用于不需要高度精确同步的内容，例如开关物体。

Puppet 菜单同步始终以最大速率更新，并且它平滑了远端玩家的值-当您十分需要定时同步时，这个菜单的表现效果更好。

:::

Puppet 菜单还可以在进入菜单时设置参数。

如果使用摇杆按下退出，那么之后无论是重新进入同样的 Puppet (圆盘)菜单，还是在其他地方使用这些参数，被操作的参数的值将保持不变，直到您再次更改其值。
<!--是否替换需要再考虑-->
<!--这里批量替换了control，考虑到control在中文社区不是一个常用的概念-->