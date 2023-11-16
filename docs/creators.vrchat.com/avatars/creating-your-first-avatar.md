# 创建您的第一个形象
## 要求：首先设置好 SDK !
在开始之前，请确保已经有一个[已安装SDK的 Unity 项目](https://creators.vrchat.com/sdk)。

设置好 SDK 后，请查看我们的示例形象。打开形象项目，转到 `VRChat SDK > Samples > Avatar Dynamics Robot Avatar`。

![这个示例虚拟形象可以帮助您理解一个完整的 VRChat 虚拟形象项目是什么样子的。](/creators.vrchat.com/images/avatars/creating-your-first-avatar-3dfc191-Unity_YrUFLEWWDe.png)


::: info 需要帮助？
制作您的第一个形象通常是个充满挑战的过程。如果您遇到了问题，您可以从以下几个渠道寻求帮助：

- 阅读我们的文档（就是您现在正在做的事！）
- 浏览我们的[官方论坛](https://ask.vrchat.com/)
- 加入我们的 [Discord 服务器](https://discord.com/invite/vrchat)
:::

## 第 0 步 - 创建模型
虽然大多数用户选择找一个模型来代替（详见 [步骤 1 - 找个模型](/creators.vrchat.com/avatars/creating-your-first-avatar#step-1-%E2%80%93-%E5%AF%BB%E6%89%BE%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9E%8B)），但从头开始创建一个形象模型也不是不行。您可以使用任何您喜欢的 3D 软件，只要它支持导出带有骨骼的 FBX！Blender 和 Maya 是非常常见的选择。

让我们明确一点：对于从未做过 3D 建模的人来说，这是一段漫长旅程的开始。学习 3D 建模很复杂，学习绑骨和贴图也很复杂。创建一个配置好的角色需要综合运用所有这些技能！

如果您选择创建自己的模型，我们建议您从简单的开始。即使它看起来不会像那些预制模型那么好看，但这是*您自己*的模型，您可以对它做任何您想做的事情。

下面是我们的一位社区成员编写的以 VRChat 为中心的教程，希望能帮到您：

- [Rainhet's Blender 3D Virtual Avatar Tutorial 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1)  - Rainhet 的教程篇幅很长，她在学习过程中对所有内容都做了详尽的解释。
- [Rainhet's 3D Avatar Class](https://www.youtube.com/watch?v=w-yhjgnhaNw)- Rainhet 教程系列的旧版本。这里也有一个[10 分钟版本](https://www.youtube.com/watch?v=in9rNze4FD4)，让您从全局视角了解整个过程。

如果您有教程建议，请将其通过"编辑本页"功能提交到我们的文档！

## 步骤 0.5 - 使用形象创建器
您还可以尝试使用形象创建工具！现在市面上有多种不同复杂程度的形象制作工具。

### 我只想要捏脸捏身子，捏好就能点击上传的那种
[VRChat Avatar Systems Page](https://hello.vrchat.com/avatar-systems)  - 我们在此页面列出了几种易于使用的创建器。该页面保持更新。

### 好吧，除了一堆捏脸用的滑块儿，我还想要可以自己随便画点东西上去的能力
您可能需要了解一下 [VRoid Studio](https://vroid.com/en/studio)，它也可以在 Steam 上下载。这是一款以动漫为主题的角色创建工具，主要用于创建 VTuber 风格的模型，但它非常灵活！有关它的一些示例，请查看[VRoid subreddit](https://www.reddit.com/r/VRoid/) 。

::: info 一个使用 VRoid Studio 需要注意的地方
VRoid Studio 以 .vrm 格式输出形象，Unity 本身并不支持该格式！如果您想直接导入 VRoid Studio 模型以在 VRchat 中使用。 您可能需要查看用于 .vrm 化身文件的 [VRMtoVRChat](https://github.com/esperecyan/VRMConverterForVRChat) 转换器。如果您使用此插件，请务必在使用前阅读[它的文档](https://www.store.vket.com/ec/items/122/detail/)。
:::

## 步骤 1 - 找个模型
可以说这是最重要的一步，您必须找到一个 3D 模型来用作于您的形象。由于这是您的第一个形象，我们建议您从 [Unity 资产商店](https://assetstore.unity.com/) 中获取一个，因为它们通常是完全设置好的，这意味着您无需做任何特殊处理即可将其上传。如果您决定从资产商店以外的地方获取模型，请确保该模型是完全设置好的，并且是 Unity 可以直接读取的格式。

**请确保您遵循了您希望使用的模型的使用许可。**艺术家们在模型上花费了数百个小时。在不遵循许可证的情况下使用这些模型违反了 VRChat 服务条款，也侵犯了模型作者的权利。

确保您要使用的模型低于 70,000 个三角面（在Oculus Quest 上的 VRChat 上，这一标准为 7500）。在 PC 上，您可以上传面数高于此标准的模型，但相应形象会被自动标记为性能 "极差"，因为过多的面数会导致性能问题。

## 第 2 步 - 将模型导入到您的 Unity 项目中
现在您已经找到了想要的模型，是时候将它导入到您的项目中了。如果您是从资产商店获得的，那么可以下载并直接导入到项目中。如果您是从其他地方获得模型，则需要将模型和相关纹理导入到 `Assets` 文件夹中。

如果您是从 3D 编辑器导入模型，请确保您牢记不同坐标系之间的区别。例如，Blender 的默认坐标系和单位制与 Unity 的不同。您必须从 Blender 导出 FBX 文件，并将导出器按下图所示设置好：

![](/creators.vrchat.com/images/avatars/creating-your-first-avatar-b066a1b-2022-05-27_11-13-48_blender.png)

在您把模型导入到 `Assets` 文件夹之后，您需要确保其被正确设置，在 Inspector 的 Rig 选项卡下，确保 Animation Type 设置为 Humanoid。

## 第 3 步 - 将模型添加到场景中
将模型放入资产中并进行正确导入设置后，接下来就可以将其放入场景中了。您可以将其拖入层级窗口或场景窗口中，来达到这个目的。我们建议一个场景只导入一个形象，并将其放置在 0, 0, 0 （原点）处。如果形象没有垂直于地面，请手动旋转到垂直于地面为止。此外，请确保形象不会太小或者不会大的超过 5x5x5m，您可以使用默认的体积为 1x1x1m 的 unity 默认立方体进行比较。

::: warning 形象优化
优化您的形象非常重要，这样您就不会对自己和他人造成性能困扰。如果出现此类问题，SDK 会告知您。查看我们的[形象优化技巧](https://docs.vrchat.com/docs/avatar-optimizing-tips)来了解提高形象性能评级的方法。
:::

## 步骤 4 - 添加一个 Avatar Descriptor
之后，我们要添加一个 " VRC Avatar Descriptor "组件，然后对其进行设置。

1. 在层级窗口中选择您的形象。
2. 在检查器窗口中点击 "添加组件"。
3. 搜索 " VRC Avatar Descriptor "组件并添加。
4. 自定义其设置，说明如下。

![](/creators.vrchat.com/images/avatars/creating-your-first-avatar-fd027ea-Unity_qH7NJfAzzn.png)

### 视角球
首先，您需要设置视角球位置。这将是您的视角摄像机在 VRChat 中的位置。您可以在场景中看到一个小的白色球体。如果您的形象有头部，那么视角球的最佳位置就是两眼之间。如果形象没有头部，则将其放置在您认为合适的位置。

![](/creators.vrchat.com/images/avatars/creating-your-first-avatar-d69289f-Unity_FgsAtEU75F.png)

### 口型同步模式
当您说话时，您可以让您的形象的嘴（或其他任何东西）自动做出反应。 打开您形象下的`VRC Avatar Descriptor`，展开`LipSync`下拉菜单。一共有五种模式可供选择：

#### Default 默认模式
![]()

按 "自动检测！"，VRChat SDK 将自动检测适当的口型同步模式。然后，该模式将切换到以下模式之一。

#### Jaw Flap Bone 模式
如果您的形象使用单根骨头来让下巴能动起来，您可以使用这个模式。角色的下巴会根据您在 VRChat 中说话的声音大小而进行相应程度的张开。请确保您已在 Unity 的人形装备中为您的形象配置了下巴骨骼。

#### Viseme Blend Shape（推荐使用）
混合形状/形状键（名称取决于您使用的软件）根据顶点位置修改网格。 许多模型使用这种方法制作详细的动画。如果您的模型有这些形态键，就应该使用它们！

我们使用 Oculus 音频库来检测和设置口型。[您可以在此处看到对所有口型的外观以及触发它们的声音的引用](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

VRChat 通常可以自动检测您形象的口型。如果不能，您可以从选择模式的下拉列表中选择口型模式。

![](/creators.vrchat.com/images/avatars/creating-your-first-avatar-6272723-Unity_w5nQONGtcb.png)

::: warning SIL 形状
Unity 会删除导入时为空的 Blend Shapes/Shape Keys，因此请确保您的 "SIL "形状（未检测到声音但麦克风处于活动状态时嘴巴的形状 - 例如在说每个词语之间的小停顿时）将单个顶点以极微量移动。这将阻止 Unity 删除该形状。
:::

::: info 性能提示
如果您是一名形象创作者，请考虑将您的模型分成两个皮肤网格 - 一个用于您的身体，另一个用于您的头部/面部。
形态键消耗的性能成本取决于它们对 3D 模型的影响程度。将形态键留在单独的头部网格上，并在身体网格上减少形态键可能会提高模型的性能。
:::


##### Jaw Flap Blend Shape
如果您的形象只使用一个形态键来制作嘴部动画，请在此处进行配置。它的作用类似于 ·Jaw Flap Bone·，对`Jaw Blend Shape` 进行动画处理而不是对下巴骨骼进行动画处理。

##### Viseme Parameter Only
如果您是高级创作者，您可以使用该模式，利用 VRChat 内置的[动画参数](https://docs.vrchat.com/docs/animator-parameters)控制您的形象对语音的反应。

### 第 5 步 - 转到 "构建 "选项卡/检查形象是否 OK
接下来，我们要检查构建窗口中是否一切正常，为此，您需要打开 `VRChat SDK > Show Control Panel > Builder`，在控制面板中，您会看到形象的 GameObject，下方有一个 `Build & Publish` 按钮。在这中间，您会看到设置、内容标签、"整体性能 "评级、错误和警告。

[![](The VRChat SDK build panel.)](http://blank)

只需按照 VRChat SDK 构建面板中的步骤操作即可：

- 给您的形象起个名字。您还可以为其添加描述。
- 确保用适当的内容标签标记您的形象，以符合VRChat 的[内容分级系统](http://blank)。
- 选择您形象的可见性。私人形象不能被其他 VRChat 用户克隆或使用。
- 选择一个形象缩略图。您可以选择一幅图像或使用从 Unity 场景中截取的图像。
- 阅读 "验证 "部分。其中包含许多有用的错误和警告。例如，SDK 可能会警告您的形象有太多面数，您可以通过优化网格来解决这个问题。如果无法优化网格，您可能需要返回并选择另一个模型。
- 准备就绪后，继续构建形象

### 步骤 6 - 构建并上传形象
现在一切准备就绪。按下 `Build & Publish` 按钮，SDK 将开始构建和上传您的形象。上传形象前，请仔细检查形象是否符合 VRChat 的[服务条款](https://hello.vrchat.com/legal)和[社区准则](https://hello.vrchat.com/community-guidelines)。

上传形象后，您就可以在 VRChat 上看到您的形象了。您也可以在`VRChat SDK > 显示控制面板 > 内容管理器`中看到您的形象。

您也可以不上传形象，直接测试形象。为此，请点击 "构建并测试"。您的形象将出现在 VRChat 形象菜单的 "其他 "部分。测试形象只能由您自己看到。要让其他玩家看到您的形象，您需要上传形象。

### 第 7 步 - 欣赏您的形象
恭喜您创建了第一个形象！我们希望一切都能顺利。如果您需要任何帮助，请访问我们的["提问 "论坛](http://blank ""提问 "论坛")或[Discord 服务器](http://blank "Discord 服务器")。

创建和上传 VRChat 形象是一件既有趣又充满创意的事情。如果您想提高创建形象的技巧，请查看我们形象文档的[其他部分](http://blank "其他部分")。

何不了解更多信息：

- 优化您的形象？
- VRChat 的性能分级系统？
- 动态化形象？
- 创建您的第一个世界？
