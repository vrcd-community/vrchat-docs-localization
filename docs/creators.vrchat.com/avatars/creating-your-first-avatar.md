# 制作您的第一个化身

## 请先安装 SDK

在开始之前，请确保您有一个[安装了 SDK 的 Unity 项目](https://creators.vrchat.com/sdk)。

在安装 SDK 后，你可以查看我们的**示例化身**。打开你的化身项目文件并转到 `VRChat SDK > Samples > Avatar Dynamics Robot Avatar`。

::: info 需要帮助？
制作你的第一个化身通常是个充满挑战的过程。如果你遇到了问题，你可以从以下几个渠道寻求帮助：

- 阅读我们的文档（你已经在这么做了）
- 浏览我们的[官方论坛](https://ask.vrchat.com/)
- 加入我们的 [Discord 服务器](https://discord.com/invite/vrchat)
:::

## Step 0 - 创建一个模型

尽管大多数用户选择寻找现成模型（详见 [Step 1 – 寻找一个模型](/official-creator-docs/avatars/creating-your-first-avatar#step-1-%E2%80%93-%E5%AF%BB%E6%89%BE%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9E%8B)），但您完全可以从头开始制作一个模型。您可以使用任何您喜欢的 3D 软件，只要它支持导出带骨架的 FBX！Blender 和 Maya 是非常常见的选择。

先把话说明白：对于以前从未进行过 3D 建模的人来说，这将是漫长旅程的开始。学习如何进行 3D 建模是复杂的，学习如何绑定和纹理也是如此。创造一个绑定模型需要精通许多技能！

如果您选择创建模型，我们建议您从简单的东西开始。即便这些模型不像现成模型一样精致好看，它也是*您的*模型，您可以在您的模型上尽情发挥创造力。

为了帮助您入门，以下是我们的一位社区成员创建的 VRChat 独占教程：

- [Rainhet's Blender 3D Virtual Avatar Tutorial 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1) - Rainhet 的教程偏长，她将说明在模型制作过程中遇到的所有的知识点。
- [Rainhet's 3D Avatar Class](https://www.youtube.com/watch?v=w-yhjgnhaNw) - 这是Rainhet 早期的教程集合。这里也有 [10 分钟版本](https://www.youtube.com/watch?v=in9rNze4FD4)的教程用于带你粗略了解模型制作过程。

## Step 0.5 - 使用化身制作器

您也可以试着使用化身制作器！我们在这里列出了一些复杂程度不同的方法。

### 我只想要一个 RPG 角色制作器，能直接上传那种

[VRChat Avatar Systems Page](https://hello.vrchat.com/avatar-systems) - 我们在这里列出了一些使用简单的制作器，列表持续更新。

### 给我来点带滑动条和能自己画图的东西

您也许想了解 VRoid Studio，这是个同样在 Steam 发售的软件。这是一个以动漫为主题的角色创建软件，主要用于创建 VTuber 风格的模型，但它的参数非常灵活！请查看 [VRoid subreddit](https://www.reddit.com/r/VRoid/) 来了解软件的大体功能。

::: info 一个使用 VRoid Studio 需要注意的地方
VRoid Studio 以 .vrm 格式输出形象，Unity 本身并不支持该格式！如果您想直接导入 VRoid Studio 模型以在 VRchat 中使用。 您可能需要查看用于 .vrm 化身文件的 [VRMtoVRChat](https://github.com/esperecyan/VRMConverterForVRChat) 转换器。如果您使用此插件，请务必在使用前阅读[它的文档](https://www.store.vket.com/ec/items/122/detail/)。
:::

## Step 1 – 寻找一个模型

这是最为重要的部分，您需要一个 3D 模型作为您的化身，由于这是您的第一个化身，我们建议您从 [Unity Asset Store](https://assetstore.unity.com/) 获取一个化身，因为它们通常已经完成了绑定，这意味着您无需执行任何特殊操作即可上传它。如果您决定在 Unity Asset Store 外寻找模型，请确保模型已完成绑定，并且使用的是 Unity 接受的格式。

请确保您获得使用要使用的模型的许可证。艺术家们在他们的模型上投入了数百小时。在没有许可证的情况下使用它们违反了 VRChat 服务条款，也侵犯了模型作者的权利。

请确保您使用的模型低于 70,000 个三角面（Oculus Quest 的 VRChat 为 7,500 个）。在 PC 上您可以上传超过此数量的模型，但形象将自动标记性能为“非常差”，因为过多的面数可能会导致性能问题。

## Step 2 – 将模型载入您的工程

现在您已经找到了所需的模型，是时候将其放入您的项目中了。如果您是从 Unity Asset Store 获取的梦想，则可以下载并直接将其直接导入到您的项目中。如果您从其他地方获得的模型，则需要将其和相关纹理导入 `Assets` 文件夹。

如果要从 3D 编辑器导入模型，请确保牢记坐标系之间的差异。例如，Blender 的默认坐标和单位系统与 Unity 不同。您必须从 Blender 按如下方式定义导出FBX文件：

![](/img/avatars/creating-your-first-avatar-blender.png)

在你把模型导入到 `Assets` 文件夹之后，您需要确保其被正确设置，在 Inspector 的 Rig 选项卡下，确保 Animation Type 设置为 Humanoid。

## Step 3 – 将模型导入场景

当你设置完你的模型之后，接下来请将其拖到层级窗口或场景中。我们建议每个化身都使用一个独立场景，并将其放置在坐标 0, 0, 0 中。如果形象没有垂直于地面，请手动旋转到垂直于地面为止。此外，请确保形象不要小于或者大于 5x5x5m，您可以使用默认的 Unity 立方体（即 1x1x1m 大小）进行比较。

::: warning 化身优化
优化您的化身非常重要，这样您就不会对自己和他人造成性能困扰。如果出现此类问题，SDK 会告知您。查看我们的[化身优化技巧](https://docs.vrchat.com/docs/avatar-optimizing-tips)来了解提高形象性能评级的方法。
:::

## Step 4 – 添加一个 Avatar Descriptor

完成以上操作后，我们现在要添加一个 `VRC_AvatarDescriptor`，然后为其修改设置。

1. 在层级窗口中选中化身。
2. 单击 Inspector 窗口中的“添加组件”。
3. 搜索并选择 `VRC Avatar Descriptor`
4. 修改设置，将会在下文详细说明

![](/img/avatars/creating-your-first-avatar-Unity.png)

### 视角位置

首先，您需要设置视角位置。这将是您的相机在 VRChat 中的位置。您可以在场景中将其直观地表示为一个小的白色球体。如果您的形象有一个头，那么视野的最佳位置是在眼睛之间。如果它没有头部，请将其放置在您认为合适的位置。

![](/img/avatars/creating-your-first-avatar-Unity-1.png)

### 口型同步模式

当您说话时，您可以让您的化身的嘴（或其他任何东西）自动做出反应。打开您的 `VRC Avatar Descriptor` 并展开下拉 LipSync 列表。有五种模式可供选择：

#### Default（默认）

点击 `Auto Detect!` 通常足以让您的 VRChat 化身对你的语音做出反应。点击 `Auto Detect!` 让 VRChat SDK 自动检测适合的口型同步模式。然后将模式切换到以下模式之一。

#### Jaw Flap Bone

如果您的头像使用单个骨骼来为下颌设置动画，您可以在选择该项。你的角色的下巴会张开，这取决于您在 VRChat 中说话声音的大小。请确保您已在 Unity 的 Humanoid Rig 中为您的头像配置了颚部骨骼。

#### Viseme Blend Shape (推荐)

Blend shapes/shape keys（根据您使用的软件命名）根据顶点位置修改网格。许多模型将其用于详细口型动画。如果您的模型具有这些，则应使用它们！

我们使用 Oculus 音频库来检测和设置口型。[您可以在此处看到对所有口型的外观以及触发它们的声音的引用](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)。

VRChat 通常可以自动检测您的化身的嘴型。如果没有，您可以从下拉列表中选择口型。

![](/img/avatars/creating-your-first-avatar-Unity-2.png)

`Viseme Blend Shape` 模式是让你的角色在说话的同时最常见的方法。

::: warning SIL 形状
Unity 会删除导入时为空的 Blend Shapes/Shape Keys，因此请确保您的 SIL 形状（未检测到声音但麦克风处于活动状态时嘴巴的形状 - 例如单词之间的间隔）将单个顶点以极微量移动。这将阻止 Unity 删除该节点。
:::

::: info 性能提示
如果您是一名化身制作者，请考虑将您的模型分成两个皮肤网格 - 一个用于您的身体，另一个用于您的头部/面部。
Blend Shape 消耗的性能成本取决于它们对 3D 模型的影响程度。将 Blend Shape 留在单独的头部网格上，并在身体网格上减少 Blend Shape 可能会提高模型的性能。
:::

##### Jaw Flap Blend Shape

如果您的头像仅使用单个 Blend Shape 来为其嘴部设置动画，请在此处进行配置。它的效果类似于 ·Jaw Flap Bone·，但是通过动画化 `Jaw Blend Shape` 而不是颚部骨骼完成动作。

##### Viseme Parameter Only

如果您是高级创作者，则可以使用此模式通过 VRChat 的内置[动画参数](https://docs.vrchat.com/docs/animator-parameters)控制形象对语音的反应。

## Step 5 - 转到 Builder 选项卡并检查化身是否正常

接下来，我们要检查 Builder 窗口中的一切是否正常，为此您需要打开 `VRChat SDK > Show Control Panel > Builder`，在其中您可以看到包含您的形象的 GameObject，其下方有一个 `Build & Publish` 按钮。在两者之间，您将看到多边形数量，错误和警告。如果有任何错误，您需要先修复它们，最常见的错误是多边形太多，要解决此问题，您需要重新搭建您的形象网格，如果您知道如何做，那就去做吧，如果不行，请选择另一个模型。

## Step 6 -上传化身

现在一切准备就绪。按下 `Build & Publish` 按钮，SDK 将构建您的化身并进行上传。接下来，您将进入上传界面，您可以在其中命名头像，为其设置封面图和其他元数据。要更改图像，请在场景中移动 VRCCam。

::: warning 警告
**敏感内容警告功能已被弃用，目前不再使用**。您不能向 VRChat 上传违反我们的[社区准则](https://vrchat.com/community-guidelines)或[服务条款](https://vrchat.com/legal)的内容。这样做（即使您已选中敏感内容警告）也会导致审核操作。
:::

输入完所有内容后，您需要确认您有权将内容上传到 VRChat，然后您可以点击上传按钮~~并开始烧高香~~，形象将开始上传，完成后，您应该能够在游戏中或通过 SDK 中 `VRChat SDK > Show Control Panel > Content Manager` 的内容管理器查看。