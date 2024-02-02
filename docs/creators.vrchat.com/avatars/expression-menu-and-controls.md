# Expressions Menu 与 Controls
<!--标题需要再修改-->
::: warning 需要了解 Unity

本文档的编写假定您对[Unity Animator](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html)有一定的了解。

:::

## 创建 Expressions Menu (模型菜单)

1. 在 Unity 项目窗口中右键单击，选择“Create/VRChat/Avatars/Expressions Menu”
2. 在项目窗口中选择新创建的对象

您还需要创建一个 ExpressionParameters 对象，在其中可以定义您使用的所有自定义参数。您可以在这里为它们命名并定义其类型。创建方法与上述相同：

3. 在 Unity 项目窗口中右键单击，选择“Create/VRChat/Avatars/Expression Parameters”
4. 在项目窗口中选择新创建的对象。
5. 使用名称和类型设置您的自定义参数。 `Int` 的范围是0-255，`Float` 的范围是-1.0至1.0。您可以使用自定义名称访问参数，以便更轻松地进行管理。

完成上述操作后，您需要返回到表情菜单。

6. 在检视器中点击“Add Control”。一个菜单中最多可以添加 8 个操作控件 (Controls)。
7. 您还可以在此处命名状态、添加图标并更改操作控件(Controls)的顺序。
8. 完成后，将此对象拖到 Avatar Descriptor 中的 “Expressions Menu” 属性中。
9. 将 ExpressionParameters 对象拖到 Avatar Descriptor 中的 “Expressions Parameters” 属性中。

提示：我们在 `Packages/VRChat SDK - Avatars/Samples/AV3 Demo Assets/Expression Menu/Icons/` 中包含了一些默认图标供您使用。

### Controls (操作控件)类型

* **Button** - 单击时设置参数，在发送同步值或重置模型的一秒钟后重置参数。不能长按。
* **Toggle** - 打开开关时设置参数，关闭开关时重置参数。
* **Sub-Menu** - 打开另一个模型菜单。此外，如果进入该菜单时设置了参数，则退出该菜单时将重置该参数。
  * **重要提示：** 您可以嵌套(套娃)设置子菜单！

* **Two Axis Puppet** - 打开一个摇杆圆盘菜单，根据摇杆位置控制两个浮点参数。参数映射到垂直和水平方向。浮点值的范围是-1.0至1.0。
* **Four Axis Puppet** - 打开一个摇杆圆盘菜单，根据摇杆位置控制四个浮点参数。参数按顺序映射为上、右、下、左。浮点值的范围是0.0至1.0。
* **Radial Puppet** - 打开一个转盘圆盘菜单，控制单个浮点参数，就像一个您可以手动控制的进度条！浮点值的范围是 0.0 至 1.0。

::: info 圆盘菜单同步

**Puppet** (圆盘)菜单在打开时使用[**IK** ](/creators.vrchat.com/avatars/animator-parameters#参数同步模式)同步模式。如果您希望同步速度能尽量匹配输入速度，以实现快速操作，可以使用 Puppet (圆盘)菜单。

**Button**/**Toggle** 使用 **Playable**同步模式，它按需瞬时更新，而不是持续更新，适用于您“开启/关闭”但不需要高度精确同步的内容。

Puppet (圆盘)菜单同步始终以最大速率更新，并且它平滑了远端玩家的值-当您十分需要定时同步时，这个菜单的表现效果更好。

:::

Puppet (圆盘)菜单还可以在进入菜单时设置参数。

如果使用摇杆按下退出，则被操作的参数的值将保持不变，直到您再次更改它们--无论是重新进入使用那些参数的 Puppet (圆盘)菜单，还是在其他地方使用它们。
<!--是否替换需要再考虑-->
<!--这里批量替换了control，考虑到control在中文社区不是一个常用的概念-->