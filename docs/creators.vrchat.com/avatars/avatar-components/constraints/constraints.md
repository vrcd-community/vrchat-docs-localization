# 约束

VRChat 提供了自定义约束系统，允许您模型上的骨骼相对于其他骨骼而进行移动、旋转和缩放。

这旨在作为 Unity 约束系统的逐一替代，并根据 VRChat 模型通常使用约束的方式增加了一些额外功能。如果您从未使用过约束，您可能会发现参考[Unity 的约束文档](https://docs.unity3d.com/Manual/Constraints.html)会很有用。

在创建模型时，您应该使用 VRChat 的约束，而不是 Unity 的约束。如果您的模型包含任何 Unity 约束，它们将在游戏中加载您的模型时自动转换为 VRChat 约束，因此直接使用 VRChat 约束将为您提供更准确的模型行为表现以及更准确的性能等级。

## 约束类型

VRChat 目前提供以下约束类型，这些类型的工作方式与 Unity 的六种内置约束相同：

- [VRCAimConstraint](./aim-constraints) - 旋转物体，使其朝向设置的目标。您可以自定义哪个方向被视为前方。
- [VRCLookAtConstraint](./look-at-constraints) - 一种简化的 Aim Constraint，它通过旋转物体以保持其 Z 轴朝向设置的目标。
- [VRCParentConstraint](./parent-constraints)物体会和设置的目标一样同时移动和旋转。
- [VRCPositionConstraint](./position-constraints) - 将目标的位置与其设置的目标的位置同步。
- [VRCRotationConstraint](./rotation-constraints) - 将目标的旋转角度与其设置的目标的旋转角度同步。
- [VRCScaleConstraints](./scale-constraints) - 将目标的缩放与其设置的目标的缩放值同步。

## 高级约束设置

高级设置部分包含一些由 VRChat 约束提供的附加功能

### 目标变换（Target Transform）

`Target Transform` 设置允许您更改此约束所针对的变换。默认情况下，此设置为空，约束应用于附加了约束组件的变换。请注意，不能用动画器更改此设置。

如果您希望将所有约束组件保留在您的模型中，或者如果您正在设置一个使用约束的系统并希望它能够在不同模型之间共享和转移，这可能会很有用。

### 在本地空间内解算

通常，约束是在世界空间中进行解算的，这意味着它将匹配其所在世界位置/旋转/缩放。如果启用 Solve In Local Space 选项，约束将匹配其选定目标的局部位置/旋转/缩放。

这在设置额外的虚拟肢体时可能会很有用。例如，您可能会有一系列本地求解的旋转约束，指向虚拟角色真实手臂的每个骨骼，这将导致该链条随着真实手臂的运动而旋转。然而，这并不仅限于旋转约束 - 所有类型都可以使用本地解算。

下面的视频展示了全局和局部解决的旋转约束之间的区别的例子。在这个片段中，中间和右侧的箭头都使用旋转约束来匹配左侧箭头的旋转，其中中间箭头使用世界空间求解，而右侧箭头使用局部空间求解。请注意，世界求解的约束始终与目标在世界空间中的旋转匹配。相比之下，局部求解的约束始终与目标相对于其父骨骼的朝向匹配。

@[youtube](6iBJ5QntrMU)

### 冻结到世界中

当 Freeze To World 启用时，约束会忽略其所有的目标，并在世界空间中锁定其目标变换。变换的位置/旋转/缩放将保持不变，直到 Freeze To World 被禁用。

此设置在开关动画时效果最佳。例如：

1. 为 Freeze To World 设置一个切换开关，并默认禁用。

2. 当在您的动画剪辑中启用 Freeze To World 时，物体的变换在世界空间中被锁定。

3. 当 Freeze To World 在您的动画剪辑中被禁用时，物体的变换会再次匹配他所约束的目标。

这允许模型在世界中的固定位置放置一个物体。当你走开时，物体不会跟随你的模型。父约束非常适合和它一起使用，因为它们可以冻结目标变换的位置和旋转。然而，Freeze To World 也适用于所有其他约束类型。

Freeze To World 属性仅影响在约束设置部分选择为冻结的轴向。如果您希望某个对象完全停止在原地，则必须冻结所有的轴向。否则，这些轴将不会更新，变换将不会在世界空间中保持锁定。

::: info 启用 Freeze To World 并不等同于禁用约束组件！

- 当约束被禁用时，受影响的变换停止在局部空间中移动。它仍然跟随你的模型移动。
- 当您启用 Freeze To World 时，约束会主动在局部空间中移动变换，以防止其在世界空间中移动。

此外，默认开启 Freeze To World 意味着约束将在加载时立即相对于您的模型 冻结于其起始的位置/旋转/缩放。这并不是将其放置在世界空间中的某个特定位置/旋转/缩放的有效方法。

#### 解冻时重新烘焙偏移量

当 Rebake Offsets When Unfrozen 启用时，约束将在 Freeze To World 禁用时解冻时相对于其源重新计算偏移量，而不是保持其原始偏移量的常规行为。

切换此值本身没有效果 - 它只是决定在 Freeze To World 被禁用时应该发生什么。

## 性能

与约束相关的两个性能类别。请参阅性能等级页面以了解每个平台施加的限制。

### 约束数量

约束数量相当简单 - 它是附加到您的模型上的约束总数，也包括禁用的约束。这包括 VRChat 约束和 Unity 约束。当您的模型在游戏中加载时，Unity 约束会自动转换为 VRChat 约束。

减少约束的总数可以显著提高您模型的性能。

### 约束深度

当您在您的模型上设置一系列约束时（例如，沿着额外肢体的旋转约束链），这些约束需要按照特定顺序逐个评估，从链的初始约束位置到链的末端约束位置。如果链上有 3 个约束，那么这意味着链的约束深度为 3。模型的整体约束深度评级是整个模型中依赖关系最长的约束链。

通过减少约束链中最长链的长度，可以降低约束深度。请记住，这个类别是寻找最长链，而不是所有链的总和——如果您的模型有几只手臂，且每只手臂的深度都是 3，那么模型的整体得分仍然是 3（假设模型的其他地方没有更长的约束链）。

约束深度很重要，因为它比仅仅计算约束的总数更能准确估计一个模型上的约束如何执行。通过组织约束以最小化它们之间的依赖关系，许多约束将能够同时运行，这与必须一个接一个运行约束的情况相比，能够获得更好的性能。

::: info 与 Unity 约束的约束深度

只有在模型仅使用 VRChat 约束时，才能准确计算约束深度。

如果您的模型包含任何 Unity 约束，则约束深度可能会被高估，因为该类别假设 Unity 约束只能一次运行一个。您可以通过在 SDK 的控制面板中使用相关的自动修复选项，将模型上的所有 Unity 约束转换为等效的 VRChat 约束。

## 使用技巧

- 如果您的约束似乎不起作用，请确保它实际上正在运行。
  
  - Is Active 选项应启用。
  - 该组件本身应该被启用（其名称旁边的复选框），并且应该附加到您模型上的一个活动游戏对象。
  - 确保启用 Lock 选项。否则，约束将重新计算其 At Rest 和 Offset 值，而不是直接影响变换。
- Target Transform 选项不能被动画器更改。这是因为更改约束所针对的变换将需要重新计算模型的性能等级。如果您想更改约束的目标变换，您可以尝试在几个不同的约束组件之间切换，每个组件都有不同的目标变换。
- 如果可以避免，请不要使用动画来更改约束所引用的变换。动画变换引用可能会导致您的模型出现性能问题，因为每次引用更改时，约束可能需要重新计算。
  - 这特别指的是对约束的引用进行动画处理 - 使用动画器处理其他物体变换的位置、旋转和缩放是可以的！
  - 由于技术限制，无法为单个动画源引用变换。作为更简单的替代方案，您可以设置多个具有不同变换的目标，并动画化它们的权重。

## 编辑工具信息

如果你是一个高级 Unity 用户，你可以用 C# 编写自己的自定义编辑工具，与约束转换器进行交互。

这些工具在这里仅作简要总结。有关它们的完整工作描述，请参阅内联文档。

### 转换方法

SDK 类 AvatarDynamicsSetup 包含 SDK 用于将 Unity 约束转换为等效 VRChat 约束的转换方法。以下约束转换方法已公开供用户工具使用：

| 方法 | 描述 |
| --- | --- |
|`ConvertUnityConstraintsAcrossAnimationClips(List<AnimationClip> targetAnimationClips)`|修改动画剪辑列表，以便其中任何针对 Unity 约束的轨道更新为针对 VRChat 的约束。|
|`DoConvertUnityConstraints(IConstraint[] unityConstraints, VRCAvatarDescriptor avatarDescriptor, bool convertReferencedAnimationClips)`|将 Unity 约束数组转换为 VRChat 约束，可选择性地包括任何引用的动画剪辑。此操作立即运行，无需确认对话框|
|`RebindConstraintAnimationClip(AnimationClip clip, IConstraint oldConstraint)`|尝试修改单个动画剪辑，以将轨道从 Unity 约束重新定向到 VRChat 约束，选择性地将转换限制为给定的 Unity 约束。|
|`TryGetSubstituteAnimationBinding(Type unityConstraintType, string unityConstraintPropertyName, out Type vrcConstraintType, out string vrcConstraintPropertyName, out bool isArrayProperty)`|尝试将 Unity 约束属性名称和类型翻译为等效的 VRChat 约束属性名称和类型。|

### Delegate Functions

为了补充上述方法，类 `AvatarDynamicsSetup` 还提供了 Delegate ，允许您的工具控制转换器的行为。以下 Delegate 可用：

|Delegate|描述|
| --- | --- |
|`bool IsUnityConstraintAutoConverted(IConstraint constraint)`|给定一个 Unity 约束，如果该约束将在构建时通过用户工具转换为 VRChat 约束，则返回 true 。您可以使用此方法来抑制 SDK 通常生成的验证警告，该警告提示用户将其 Unity 约束转换为 VRChat 约束。|
|`bool ConvertUnityConstraintsAcrossGameObjects(List<GameObject> gameObjects, bool isAutoFix)`|给定一个 GameObject 列表，将它们上的所有约束和底层动画剪辑转换为 VRChat 约束。如果用户在验证列表中点击自动修复触发了此操作，则将 isAutoFix 参数设置为 true ，如果是通过菜单项或自定义用户脚本触发的，则设置为 false 。返回 true 以防止本机 SDK 转换器运行。|
|`bool ConvertUnityConstraintsAcrossAnimationClips(List<AnimationClip> animationClips)`|给定一组动画剪辑，更新所有引用 Unity 约束的轨道，以引用 VRChat 约束。返回 true 以防止本机 SDK 转换器运行。|