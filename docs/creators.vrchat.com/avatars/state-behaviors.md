# State Behaviors （动画状态行为）
 
::: warning 您需要了解 Unity 动画器

本文档假设您对[ Unity 动画器](https://docs.unity3d.com/cn/2019.4/Manual/class-AnimatorController.html)有一定了解。
:::
当您在动画器窗口中选择特定动画状态时，您可以给它添加 State Behavior 。它们类似于"状态的组件"，可以执行很多操作。您可以通过添加它们来使用它们的功能！

所有 State Behavior 都在转换到该动画状态的第一帧上运行。

 State Behavior *应该*可以在任意运行时间长度的动画状态中的状态机上持续运行。
<!--状态机是否要翻译？如果要翻译，对应的状态行为要怎么处理才显得自然？-->

::: warning

这里故意使用了"应该"这个词，因为在对应的[ Unity 文档](https://docs.unity3d.com/2019.4/Documentation/Manual/StateMachineBehaviours.html)中，没有任何可以确保 State Behavior 可以在非常短的过渡(或状态持续时间内)执行的办法。

如果您想要一种**完全**稳定运行的办法，请确保包含 State Behavior 的状态，以及直接过渡到该状态的任何过渡的总时间至少为 0.02 秒，虽然实践证明这一预留时间不是很有必要。

:::

## Animator Layer Controller (动画层控制器)

![Unity_2020-07-08_12-50-04.png](/creators.vrchat.com/images/avatars/state-behaviors-e78eb77-Unity_2020-07-08_12-50-04.png)

Animator Layer Controller 允许您在任何给定的 (Playable Layer)[/creators.vrchat.com/avatars/playable-layers.md] 上在任何给定的时间内指定特定动画层的权重。
<!--之后加一个引用-->
如果状态在未过渡到指定权重时退出，那么目标层将立即设置为目标权重。

运行结束后，被操作的层权重将保持不变，直到其他状态再次运行此 State Behavior 并重置它。

| 属性名称       | 目的                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Playable (可播放层)       | 允许您选择要影响的可播放层。                                                                               |
| Layer (层)          | 您希望影响的可播放层的索引。您无法更改第0个（基本）层的权重--它始终设置为 1.0 权重。 |
| Goal Weight (目标权重)    | 定义您要过渡到的权重。                                                                                                   |
| Blend Duration (混合持续时间) | 定义过渡所需的时间段（以秒为单位）。0表示即时。                                                     |
| Debug String (调试字符串)   | 当此 State Behavior 在运行时，此字符串将打印到输出日志中。用于调试。                                        |
<!--混合有更好的定义吗-->
<!--暂时使用过渡一词-->

## Animator Locomotion Control (动画器移动控制器)

![state-behaviors-f6f3250-Unity_2020-07-08_13-16-13.png](/creators.vrchat.com/images/avatars/state-behaviors-f6f3250-Unity_2020-07-08_13-16-13.png)
Animator Locomotion Control 允许您在动画器的给定状态中禁用移动。之前的移动状态将保持不变，直到其他状态再次运行此 State Behavior 并更改它。

在桌面模式下，这将禁用平移运动，并将旋转（视角）运动限制在纵向轴上。在 VR 中，这将禁用手柄上的平移和旋转运动，并限制半身 IK（全身 IK 不受影响）。在这两种模式下，玩家的胶囊体将被冻结在原地。

| 参数          | 描述                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disable Locomotion（禁用运动） | 如果设置为 True ，则禁用您使用以上输入设备进行运动的能力，但您仍然可以在 VR 中通过在房间中走动来运动您的模型。如果设置为 False，则启用运动。 |
| Debug String（调试字符串）       | 当此 State Behavior 运行时，此字符串将打印到输出日志中。用于调试。                                                          |

<!--roomscale需要更好的解释-->
## Animator Temporary Pose Space (动画器临时姿势空间)
![state-behaviors-467daaf-Unity_2020-07-14_21-38-14.png](/creators.vrchat.com/images/avatars/state-behaviors-467daaf-Unity_2020-07-14_21-38-14.png)

Animator Temporary Pose Space 允许您将您当前使用的模型的头部视角球移动到该动画状态的给定点位置。

视角球移动后的位置将保持不变，直到其他状态再次运行此 State Behavior 并重置或清除它。

此行为在延迟时间到达后执行。

您应**仅在**视图高度需因姿势变化（如坐下或躺在地上）而更新时，才使用 Animator Temporary Pose Space。它不能用于"缩放"您当前使用的模型，并且如果您尝试以这种方式"缩放"模型，那么将导致严重的问题。
::: danger

如果在此行为所在的状态退出或中断之后，`延迟时间`才结束，那么此 State Behavior **不会执行**！
:::

| 属性名称 | 目的                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Pose Space（姿势空间）    | 从 Enter 或 exit 选择一个选项。Enter 将设置视角球位置，exit 将视角球位置清除为默认值。                                                    |
| Fixed Delay（固定延迟 ）  | 延迟时间是否为固定时间段，还是状态持续时间的百分比？                                   |
| Delay Time（延迟时间）    | 如果给定一个值，视角球位置将在该值对应的延迟时间后设置。您可以使用这个设置，例如您要在一定时间后再设置到动画中时。 |
| Debug String（调试字符串） | 当此 State Behavior 运行时，此字符串将打印到输出日志中。用于调试。                          |


## Animator Tracking Control (动画器追踪控制器)

![state-behaviors-076baca-Unity_2020-07-08_13-26-00.png](/creators.vrchat.com/images/avatars/state-behaviors-076baca-Unity_2020-07-08_13-26-00.png)

Animator Tracking Control 允许您在动画角色身体的各个部位上启用或禁用 IK 或模拟运动。将选项设置为"No Change"将不会更改该身体部位的当前追踪控制模式。"Tracking" 将该身体部位设置为跟随 IK 或模拟运动。"Animation" 将该身体部位设置为跟随动画运动。

如果将所有 IK 追踪点设置为跟随动画运动，则您的动画将作为远程动画播放，而不是通过网络同步的 IK 进行移动。对于各种类型的 IK 追踪，这些" IK 追踪点"是：

- 桌面：头部、左手、右手
- 3点追踪：头部、左手、右手
- 6点/全身追踪：头部、左手、右手、臀部、左脚、右脚

::: tip

除了眼睛和眼睑之外，所有部位都是由 IK 驱动的，眼睛和眼睑是模拟的。嘴巴和下颌由面部表情驱动。

例如，将左手和右手设置为 Animation 将忽略由 IK 定义的手（和手臂）的位置，并将使用当前的动画状态的运动来定义手和手臂的位置。将它们设置回 Tracking 将使用 IK 。 

将眼睛和眼睑设置为 Animation 将禁用眼睛运动和眼睑眨动。将眼睛和眼睑设置为 Tracking 将重新启用模拟的眼睛运动和眨眼。

将嘴巴和下颌设置为 Animation 将禁用面部表情，面部表情参数将停止更新。将嘴巴和下颌设置为 Tracking 将重新启用面部表情，并且它们将重新开始更新。
:::
追踪设置将保持不变，直到其他状态再次运行此 State Behavior 并重置它。

| 参数        | 描述                                                                                         |
| :--------------- | :-------------------------------------------------------------------------------------------------- |
| Tracking Control（追踪控制） | 请参阅上面的描述。                                                                              |
| Debug String（调试字符串）     | 当此 State Behavior 运行时，此字符串将打印到输出日志中。用于调试。                                                          |

## Avatar Parameter Driver (模型参数驱动器)

![image](/creators.vrchat.com/images/avatars/state-behaviors-fa19a1d-2022-06-02_18-11-06_Unity.png)

Avatar Parameter Driver 可以以各种方式操作动画器参数，也可针对单个模型参数执行多个操作，并且按照从上到下的顺序完成这些操作。这些操作在进入行为所在的状态时完成*一次*。

`Local Only`将使该 State Behavior 仅在本地操作，作为检测`isLocal`的快捷方式。

单击"Add (添加)"将向该 State Behavior添加新操作。第一个类型（默认选择）是"Set (设置)"。

如果修改同步参数（在 VRCExpressionParameters 对象中定义的任何内容），这些值将被限制在其最大范围内。Int [0,255] Float [-1,1]。

但是，仅在动画控制器中定义的参数（即"本地参数"）仍然可以由 Avatar Parameter Driver 修改。这些值不会被限制。

您也不能驱动任何[VRChat定义的动画器参数](/creators.vrchat.com/avatars/animator-parameters)。

设置、添加、随机和复制适用于`float`和`int`。设置、随机和复制适用于`bool`。

### Set (设置) 
Set 将简单地将目标中的命名参数设置到指定值。

![state-behaviors-121fe2a-2022-06-02_18-11-13_NVIDIA_Share.png](/creators.vrchat.com/images/avatars/state-behaviors-121fe2a-2022-06-02_18-11-13_NVIDIA_Share.png)

### Add (添加)
Add 将给目标中的命名参数添加指定值。

正如该组件指出的，使用 Add 可能在远程实例的动画化模型上运行时产生不同的结果。使用 Add 时，建议使用同步的目标参数，并仅在本地运行该 State Behavior。

![state-behaviors-e10bb6a-2022-06-02_18-11-17_Unity.png](/creators.vrchat.com/images/avatars/state-behaviors-e10bb6a-2022-06-02_18-11-17_Unity.png)
        
### Random (随机)
Random 将目标参数设置到介于最小值和最大值之间的某一随机数。

正如组件指出的，使用 Random 可能在远程实例的动画化模型上运行时产生不同的结果。使用 Random 时，建议使用同步的目标参数，并仅在本地运行该 State Behavior。

![state-behaviors-99c6248-2022-06-02_18-11-23_Unity.png](/creators.vrchat.com/images/avatars/state-behaviors-99c6248-2022-06-02_18-11-23_Unity.png)

### Copy (复制)
Copy 将目标参数设置到源参数的值。这可以用于例如将一个浮点数的值传递到另一个浮点数，使它们的数值完全相等，将一个浮点数重新映射到不同的大小范围，或者将某种数转换为其他完全不同的类型。
::: warning

VRChat的内置参数，如`GestureLeftWeight`，**可以**指定，但不起作用作为源参数。
:::

![state-behaviors-bffdb10-2022-06-02_18-11-30_Unity.png](/creators.vrchat.com/images/avatars/state-behaviors-bffdb10-2022-06-02_18-11-30_Unity.png)

#### Converting between types (类型转换)
从`bool`转换时，False 计为 0，True 计为 1。

转换为`bool`时，0 为 False ，*任何其他值*为 True。
转换为`int`时，它将始终向下舍入到最近的整数。
转换为`float`时，它将直接复制值，即使超出了它能够与其他玩家同步的范围。

#### Custom Ranges (自定义范围)
您还可以使用`Custom Ranges`复选框来启用一些额外的 UI，以便您可以设置自定义转换范围。这可以用于重新映射值或更好地控制从一种类型转换为另一种类型的方式。

![state-behaviors-cab639b-2022-06-02_18-35-32_Unity.png](/creators.vrchat.com/images/avatars/state-behaviors-cab639b-2022-06-02_18-35-32_Unity.png)

## Playable Layer Control (可播放层控制器)

![state-behaviors-33760a2-Unity_2020-07-08_13-36-13.png](/creators.vrchat.com/images/avatars/state-behaviors-33760a2-Unity_2020-07-08_13-36-13.png)
        
Playable Layer Control 允许您在指定的时间内将整个可播放层的权重过渡到指定的值。与 Animator Layer Controller 非常相似，但是控制整个可播放层。

Action 可播放层通常会经常使用此 State Behavior ，因为 Action 层默认情况下权重为零，并且在动画完成后应始终过渡回零。

如果在过渡持续时间中退出状态，可播放层将立即设置为目标权重。

| 属性名称  | 作用                                                             |
| -------------- | -----------------------------------------------------------|
| Layer（层）          | 要影响的可播放层。                                              |
| Goal Weight（目标权重）    | 过渡完成后要达到的可播放层权重。                                  |
| Blend Duration（混合持续时间） | 过渡到层所需的时间。零表示即时。                                 |
| Debug String（调试字符串）   | 当此 State Behavior 运行时，此字符串将打印到输出日志中。用于调试。 |

<!--暂时使用过渡一词-->