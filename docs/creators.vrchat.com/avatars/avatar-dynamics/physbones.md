---
title: "Physbones"
---

# Physbones

 Physbones 是可以为模型的头发、尾巴、耳朵、服装等部件增加物理效果的组件，它们能使您的模型看起来更加灵动和真实。

 在技术迭代关系上，Physbones 是 Dynamic Bones 的替代品。虽然两者存在着很多共同点，但 Physbones 提供了一些完全不同的参数，因此不是所有的 Dynamic Bones 组件都可以直接自动转换为 VRChat 的 Physbone.

在SDK的`VRCSDK/Examples3/Dynamics/Robot Avatar`目录下可以找到使用 Avatar Dynamics 的示例。

## VRCPhysbone 

它定义了一个通过 Physbones 的功能实现动画的骨骼链。这些骨骼链可以用于模拟例如头发、尾巴、耳朵等身体部位跟随躯干运动的效果。VRCPhysbone 提供了一些选项参数供您对其效果进行精细化调整。

此外，Physbones 能与玩家发生交互。如果您给予其他玩家权限，那么其他人可以抓住您模型上的 Physbones ，同时按下扳机键来锁定它的位置。您也可以在组件的配置选项中禁用此功能，例如不允许锁定、不允许抓取或不允许碰撞。

虽然 Physbones 没有专门为布料效果而优化，但它也可以作为布料组件的下位替代品，直到我们实现自己的布料组件为止。

![](/creators.vrchat.com/images/avatars/physbones-ca9ee06-2022-05-04_18-23-09_Unity.png)

### 版本选择

您现在可以直接在组件中，选择要使用的 VRCPhysbone 组件的版本。当您创建新组件时，将默认选择最新版本。现有的模型将继续使用旧版本 VRCPhysbone ，除非您手动更新它们并重新上传模型。

版本1.0：

- VRCPhysbone 组件的最初版本。

版本1.1：


- 弹性骨骼更新，允许骨骼被挤压、拉伸。
- 重力现在表现为影响骨骼在静止时旋转的程度系数。骨骼向重力方向移动需要一个正的拉力。
- 刚度现在表现为影响骨骼停留在其先前方向的程度系数。

## Transform

`Root Transform` - 骨骼链的起点变换。如果此处留空，则默认为拥有该组件的游戏对象。
`Ignore Transforms` - 不受此组件影响的变换列表。除被列入的变换外，这些变换的所有子级变换也不会受此组件影响。
`Endpoint Position` - 用于在骨骼链的各个终点添加额外骨骼的向量，值非零时生效。通常，您会希望沿着 +Y 增加此值，即沿着起点指向骨骼终点的方向。
`Multi-Child Type` - 当定义了多个骨骼链时，根骨骼的运动模式。这包括三种模式：


 如果设置为 **Ignore** ，根骨骼将不会出现物理效果。这对于头发等物体非常有用，因为您可以只在根骨骼上设置一个 Physbone 组件即可作用于所有子级头发骨骼！

 如果设置为 **First** ，根骨骼将与层级中的第一个骨骼连接形成一个连续的链。其他所有链仍然有效，但它们将从每个相应链的第一个骨骼开始，而不是从根骨骼开始。

 ::: info 第一个骨骼指的是什么？
 第一个骨骼指的是具有 VRCPhysbone 组件的根骨骼下的各个子级骨骼，它们就是根骨骼下不同骨骼链的起点。
 :::

 如果设置为 **Average** ，则 VRCPhysbone 会以根骨骼为起点，生成一个不一定与子级骨骼重合的虚拟骨骼链，这个虚拟链的位置与大小取根骨骼下的各骨骼变换平均值，其摆动时，会带动根骨骼下的各骨骼摆动。


::: danger
如果您要放置 VRCPhysbone 组件的目标骨骼是单个根骨骼，或着单个根骨骼及其多个子级（但没有孙级），则您 **必须** 定义一个非零的`Endpoint Position`！

例如，如果您将 Physbone 组件放在下面的任何一个 `根骨骼` 上，那么为了使 Physbones 正常工作，您**必须**定义一个 **Endpoint Position** 。这与 Dynamic Bones 不同！

单个根骨骼：

- `根骨骼`

多个子骨骼，单个根骨骼：

- `根骨骼`
  - `子骨骼1`
  - `子骨骼2`
  - `子骨骼3`
  - `子骨骼4`

您还可以通过在每个`子骨骼`之后添加“末端骨骼”来解决此问题，但这涉及对骨架的编辑工作。
:::

### Forces (受力)

**Integration Type** 定义了用于模拟骨骼变换运动受外界影响的受力表现类型。根据您选择的类型，该部分的可用选项将发生变化。您可以在以下两种类型之间选择：

- `Simplified` 是一种更稳定的方法，表现更慢，对外部冲击和外力反应不太敏感，但更容易配置。
- `Advanced` 不太稳定，并且对外部冲击和外力反应更敏感，但允许更复杂的配置。
  在默认设置下，这两种模式的表现非常相似，它们之间的差异可以通过细调设置和测试来体现。

::: info
下面的大多数（不是全部）选项都可以通过在滑块旁边按下 C 按钮来使用曲线。曲线可以让您微调 Physbone 在链的不同长度上的受力属性，借此您可以让骨骼呈现出一些复杂的力学表现！

下方的大多数 Physbones 设置都可以使用曲线！
:::

![physbones-054e326-2022-04-19_11-32-12_Unity.png](/creators.vrchat.com/images/avatars/physbones-054e326-2022-04-19_11-32-12_Unity.png)

`Pull` - 用于将骨骼恢复到其静止位置的力量大小。
`Spring` - 当骨骼试图达到其静止位置时，骨骼发生摆动的程度。仅在`Simplified`类型中可用。
`Momentum` - 当骨骼试图达到其静止位置时，骨骼发生摆动的程度。仅在`Advanced`类型中可用。其实际效果与`Spring`略有不同。
`Stiffness` - 骨骼试图保持在其静止位置的程度。仅在`Advanced`类型中可用。
`Gravity` - 影响骨骼的重力大小。是正值则向下拉动骨骼，是负值则向上拉动骨骼。
`Gravity Falloff` - 仅在`Gravity`值非零时可用。它控制骨骼在静止位置时忽略重力影响的程度。值为 1.0 则表示在静止位置时完全不受重力影响。这样，当骨骼由旋转离开初始位置时，重力可以影响骨骼的运动状态，而不会影响骨骼的静止状态。

使用`Gravity Falloff`参数的一种方法是，如果您的头发已经被建模为在正常站立时的静止状态，您可以将该参数设置为 1.0。这样，当您只是站立不动时，您的头发不会受到重力影响，并保持在其原始建模位置。如果您的头发被建模为 45 度向外伸展，并且您希望它受到足够的重力影响以形成漂亮的曲线（但不完全向外伸展或完全向下伸展），那么您可以调整滑块，来使用 0.5-0.8 之间的值，这样会在静止姿势时对头发施加一部分重力。

`Immobile Type`更改`Immobile`的工作模式。

 如果设置为**All Motion**，`Immobile` 会减少从根变换的父级计算出的任何运动的程度。这是新的 Physbones 和转换后的 Dynamic Bones 的**默认模式**。在此模式下，`Immobile` 系数将抑制场景空间或播放空间中的所有 Physbone 运动。

如果设置为 **World (Experimental)** ， `Immobile` 仅从场景根变换的参考位置减少位置运动。动画或 IK 引起的运动仍会正常影响骨骼。_此模式可能会在将来更改！_
<!--Immobile需要更多解释！-->
这意味着在播放空间中移动仍会正常影响 Physbones 的运动，但是这时`Immobile` 系数也会同样抑制 Physbones 的运动。

### Limits (限制)

设置 Limits (限制)可以限制 Physbone 链的旋转程度。这种办法适用于阻止头发穿模进入头部，并比设置碰撞器**更加高效**！

此外，在配置限制选项时，当您选择 Physbone 链上的物体时，场景视图中将可视化显示这些限制。在微调限制时，这些显示将非常有帮助！

`Limit Type` 有多种模式。这些模式都允许在 `Pitch` 、`Yaw` 和 `Roll` 等方面对 `Rotation` 进行调整，或者分别沿 X、Y 和 Z 轴进行调整。

##### None

`None` 表示此骨骼链上没有启用限制。这个模式没有配置选项。

#### Angle

![Angle](/creators.vrchat.com/images/avatars/physbones-b7abe1f-2022-04-19_11-49-26_Unity.png)

`Angle` 表示骨骼链将以 `Rotation` 定义的轴为中心，限制在 `Max Angle` 内。在场景视图中，这被可视化为一个圆锥体。

#### Hinge

![Hinge](/creators.vrchat.com/images/avatars/physbones-b7723cc-2022-04-19_11-50-04_Unity.png)

 `Hinge` 表示骨骼链将仅在由 `Rotation` 定义的平面上，并被限制在 `Max Angle` 内。在场景视图中，这被可视化为一个圆片的切片，类似于披萨或馕。

#### Polar

![](/creators.vrchat.com/images/avatars/physbones-824db3c-2022-04-19_11-51-22_Unity.gif)

`Polar` 有点复杂。它就像用 `Hinge` 沿 `Yaw` 扫过一定角度得到的图形球段。您可以配置 `Max Pitch` 和 `Max Yaw` 来调整球段的大小，并使用 `Rotation` 来定义该段在球体上的位置。它的可视化可以帮助您更好的配置其选项。

不要过度使用 `Polar` 限制，因为它们会产生一定的性能成本。大量使用它（超过64个）可能会导致一些问题。如果您的 `Max Pitch` 和 `Max Yaw` 值相似或相同，则考虑转用 `Angle` 限制，因为它在性能方面成本较低。

### 碰撞

`Radius` - 骨骼的碰撞半径（以米为单位）。用于碰撞和抓取。
`Allow Collision` - 允许骨骼与此组件上碰撞器列表以外的碰撞器发生碰撞。目前，这些碰撞器仅包括每个玩家的手和手指，它们的大小和位置由对应的模型定义。
`Colliders` - 会与这些骨骼发生碰撞的碰撞器列表。

### 伸缩和压缩

`Stretch Motion` - 运动对骨骼的伸展/压缩的影响程度。值为零意味着骨骼只会因抓取或碰撞而伸展/压缩。
`Max Stretch` - 骨骼可以伸展的最大量。该值是原始骨骼长度的倍数。[注意：最大边界](#maximum-bounds)
`Max Squish` - 骨骼可以压缩的最大量。该值是原始骨骼长度的倍数。

### 抓取和定位

`Allow Grabbing` - 允许玩家抓取骨骼。
`Allow Posing` - 允许玩家在抓取后锁定骨骼。
`Grab Movement` - 控制被抓取的骨骼的移动速度。值为零时， `Pull` 和 `String` 将影响骨骼移动到抓取位置的速度。值为 1 时，骨骼
将立即移动到抓取位置。
`Snap To Hand` - 当骨骼被抓取时，它是否要与抓取它的骨骼对齐。

### 选项

- `Parameter` - 用于为模型控制器提供多个参数的前缀。如将该参数设置为`Tail`，则下文参数名中的`{parameter}`将被替换为`Tail`。
- `{parameter}_IsGrabbed` - [Bool] 骨骼是否被抓取。
- `{parameter}_IsPosed` - [Bool] 骨骼是否被锁定。
- `{parameter}_Angle` - [Float] 值范围为 0.0-1.0。从其原始静止位置到末端骨骼的 180 度角度的归一化值。换句话说，如果您完全扭曲一个骨骼，使其与起始方向相反，那么此参数的值将为 1.0。
- `{parameter}_Stretch` - [Float] 值范围为 0.0-1.0。骨骼被拉伸到其最大伸展长度的百分比量。
- `Is Animated` - 允许对骨骼变换进行动画处理。每帧骨骼静止位置将根据动画进行更新。如果您想让 Physbone 链中的任何骨骼（包括根骨骼！）的位置能被动画更新，则必须启用此选项。
- `Reset When Disabled` - 如果启用该选项，则当此组件被禁用时，骨骼将自动重置到其默认位置。

### 重要说明、使用技巧等

**不要在同一个游戏对象上同时放置约束和 Physbone 组件**，因为这会导致执行顺序问题。

您仍然可以将约束放在父游戏对象上，并把将约束的目标设置为原含有 Physbone 组件的游戏对象。

::: warning Quest限制

** Physbones 在 Meta Quest （一体机 VR）上有严格的限制。**这是为了防止这些设备遇到性能问题，因为通常这些设备的 CPU 处理能力受限。
<!--需句意重整-->
您可以将这些限制视为 Quest 的 Very Poor 的限制，详细信息请参阅[最低显示性能等级](/creators.vrchat.com/avatars/avatar-performance-ranking-system#quest-limits)文档。

:::

#### 每个组件的限制

**单个 Physbone 组件不能同时影响超过 256 个变换。**这包括根骨骼以及其所有子级。_这也会影响 Dynamic Bone 的转换！_

您应该在一开始就尽量避免有太多的骨骼。尝试将链中的骨骼向上合并到其直接父级。社区创建的工具（如Cat's Blender插件）可以为您完成此操作。

#### 动画属性

 Physbone 的受力属性，如 Spring、Pull、Stiffness 等，在模型初始化时就会被设置，**之后无法被动画处理**。

但是，如果您设置动画为：关闭 Physbone 组件，对组件的属性进行动画处理，然后再打开组件，那么您可能可以完成对受力属性的动画化更改。请注意，我们不会官方支持和维护这一种对属性进行动画处理的方法。（换句话说，它可能会失效。如果失效，我们不会尝试修复它。）

#### 人体骨骼

**不要将人体躯干的骨骼设置为 Physbone 的根骨骼。**换句话说，不要将 Hip、Spine、Chest、Upper Chest、Neck、Head 或任何肢体骨骼设置为根骨骼。这将导致严重问题。

相反，复制要用作根骨骼的骨骼，并将要动画的所有子骨骼重新连接到新的复制根骨骼。这应该在 Blender 中完成。社区制作的工具（如 Cat's Blender 插件）可以为您完成此操作。

####  Physbone 旋转

与 Dynamic Bones 不同，** Physbone 链的根骨骼可以旋转**。但是它不能平移。这可能会对某些设置产生一些影响-请自行尝试以了解其表现。

####  Physbone  AV3参数

您**无需出于需要同步的目的，在 `VRCExpressionParameters` 对象中定义 Physbone 的参数**，因为这些参数会自动在本地和远端机器间同步。

####  Physbone `Immobile` 行为

 Dynamic Bones 的 `Inert` 值基于组件的放置位置，而不是根变换。这可能是 Dynamic Bones 的一个错误。因此， Physbones 的 `Immobile` 值基于根变换。这可能会影响某些情况下的行为。

#### 最佳组件使用

由于 Physbones 的多线程特性，不推荐将所有骨骼定义到同一个链中，因为这不会那么高效。多个组件使我们能够在线程之间分解工作。尽管如此，您仍然应该努力减少组件的数量...但是与 Dynamic Bones 相比，模型上拥有多个组件不会带来大量的性能代价。

如果您*真的*需要提高帧数，那么当您的单个组件影响超过 128 个骨骼时，您应考虑拆分它，例如如果您有一个包含 256 个骨骼的裙子，并且它们从根出发，分为数条骨骼链，那么将其分割为两个或三个组件将起到优化作用。

但是，如果单个组件只影响大约 32 个骨骼时...不用担心。正如您可能已经注意到的，这些都不是严格的限制！当它们看起来能被以更好的方式设置时，我们会提出一些软警告。

#### 最大边界

每个 VRCPhysbone 组件都有一个边界框，随着骨骼的移动而增长和收缩。这些边界框有助于检测触摸和抓取 Physbones 的玩家的碰撞。为了效率起见，边界框被强制为最大为 10×10×10 米。 Physbones 可以超出此范围并继续正常工作。但是玩家可能由于超出边界框范围，而无法触摸或抓取这些骨骼。

边界框仅考虑具有碰撞和半径大于零的骨骼。在需要提供非常长的伸展的情况下，只要在伸展点之后存在具有碰撞的骨骼，您就可以避免达到此最大边界限制。
<!--这里不太明白-->
## VRCPhysboneCollider

定义了一个会影响 Physbones 的碰撞器（前提是对应的 Physbone 有正确地配置了碰撞选项）。

![](/creators.vrchat.com/images/avatars/physbones-ac38f46-2022-05-04_18-35-11_Unity.png)

- `Root Transform` - 放置此碰撞器的变换。如果为空，则默认为含有该组件的游戏对象。
- `Shape Type` - 此碰撞器使用的碰撞形状类型。您可以选择球体、胶囊体或平面碰撞器。
- `Radius` - 从其原点延伸的碰撞器的大小。
- `Height` - 沿 Y 轴的胶囊体高度。
- `Position` - 相对于根变换的位置偏移量。
- `Rotation` - 相对于根变换的旋转偏移量。
- `Inside Bounds` - 启用时，此碰撞器将会把骨骼吸附在其形状内，而不是把骨骼排斥在其形状外。
- `Bones As Sphere` - 启用时，此碰撞器将 Physbone 碰撞半径视为以骨骼位置为中心的球体，而不是沿骨骼长度的胶囊体。

<!--需要保留而不是吗?-->

### 标准碰撞器

在 Avatar Descriptor 中定义了一组“标准碰撞器”，这些碰撞器位于一个名为 “Colliders” 的新部分中。此部分允许您定义一些存在于每个模型上的标准碰撞器。如果您不进行任何更改，则将自动设置这些碰撞器，但也可以进行微调以完全适应您的模型。这些碰撞器不会影响性能评级。

- Head
- Torso
- Hands L/R
- Feet L/R
- Fingers L/R
  - Index
  - Middle
  - Ring
  - Little

这些碰撞器主要作为 [Contact](/creators.vrchat.com/avatars/avatar-dynamics/contacts) 发送器，其他人可以用其模型检测到。但同时，手指和手部碰撞器也用于创建全局的 [Physbone](physbones) 碰撞器，它们可以与其他人的 Physbones 发生互动。

### 自动 Dynamic Bone 转换

默认情况下，客户端将自动将 Dynamic Bones 转换为 Physbones。这样做是为了提高整体性能，并且这对于模型之间的交互也是必要的。如果需要，您可以在主菜单的性能选项部分关闭此选项，但您会失去对应的性能提升和模型交互能力。

默认情况下，Dynamic Bone 转换后使用 Advanced 模式，因为我们能够更精确地将 DB 配置与使用 Advanced 模式的 Physbone 配置匹配。此外，DB 转换使用 Ignore 作为 Multi-Child 类型（因为使用 First 或 Average 类型会使得几乎所有情况下的 Physbone 出现问题。）。这可能会导致某些特殊的 DB 设置出现问题。

关闭转换意味着您将无法与由 Dynamic Bones 驱动的模型骨骼进行任何交互。但是，原生使用 Physbones 和 Contacts 的模型将不受影响。

**重要说明： Dynamic Bones 和 Physbones 并不相同。**自动转换过程并不完美，我们打算随着时间的推移对其实施更多更新。但请记住：不会存在完美的自动转换！自动转换旨在大多数设置工作表现正常，而不是完全还原 Dynamic Bones 中的表现。_我们预计所有创作者都将逐渐过渡到使用 Physbones ，以确保其模型的准确渲染和未来兼容性。_

### 手动 Dynamic Bone 转换

您可以选择使用 SDK 将模型从 Dynamic Bones 转换为 Physbones。

此过程将从模型中删除以前的 Dynamic Bone 组件，且它们无法轻易被恢复。因此，在尝试此转换之前，请备份您的模型。

您可以通过查看 Build Control Panel 或在 Unity 菜单中访问 `VRChat SDK/Utilities/Convert DynamicBones to  Physbones` 来访问此工具。在此之前，您必须先选择一个模型。

### 未迁移的 Dynamic Bone 组件

 Dynamic Bones 中的某些功能和行为在 Physbones 中不存在，因此不会迁移。

`Force` - Dynamic Bone中 X 或 Z 方向的 `Gravity` 和 `Force` 值不会被转换与迁移，因为在 Physbones 中没有相应的值。

### Dynamic Bone 最终将被弃用

 Dynamic Bones 最终将从 VRChat 中完全删除。到那时，所有旧模型的 Dynamic Bones 将被自动转换。

稍后，我们将提供一个弃用日期，以便允许模型作者有足够的时间进行转换。
