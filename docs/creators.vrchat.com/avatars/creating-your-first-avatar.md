# 创建您的第一个虚拟形象

VRChat 拥有数千万个虚拟形象，而且任何人都可以创建它们！本页面将试着解释如何创建您的第一个 VRChat 虚拟形象。创建形象有两种方法：

- 您可以使用[模型创建工具](https://hello.vrchat.com/avatar-systems)在没有 Unity 的情况下创建简单的模型。

- 您可以使用[创作者助手 (Vrchat Creator Companion)](/vcc.docs.vrchat.com) 安装 Unity，安装 VRChat 软件开发工具包（SDK），并上传自定义头像。

## 要求

如果您要使用 Unity 和 VRChat SDK 上传自定义模型的话，您必须满足以下要求：

- 您必须在 [ VRChat.com ](vrchat.com) 上拥有一个账户

    - 如果您在 Steam ， Meta 或 Pico 账户上玩游戏的话，您需要先链接将您的账户链接至一个 VRChat 账户。

- 您的 VRChat 账户必须具有“萌新”或更高的信誉等级。

    - 如果你是 VRChat 的新手，一旦你被允许上传模型，你将会立即收到一封电子邮件。

::: info 需要帮助？
制作您的第一个虚拟形象通常是个充满挑战的过程。如果您遇到了困难，您可以从以下几个渠道寻求帮助：

- 阅读我们的文档（就是您现在正在做的事！）

- 浏览我们的[官方论坛](https://ask.vrchat.com/)或在我们的 [Discord 服务器](https://discord.com/invite/vrchat)中向社区提问
:::

## 第 1 步 - 找到一个 3D 模型

也许你已经有一个想用作虚拟形象的 3D 模型——或者你可能是第一次下载 3D 模型。选择以下四种方式之一开始：

1. 使用模型创建工具

    如果您从未使用过 Unity 或 VRChat SDK，请尝试使用以下其中一个头像创建工具

    - [VRChat Avatar Systems](https://hello.vrchat.com/avatar-systems)页面列出了几个适合初学者的模型创建工具。

        - 这些工具类似于在其他游戏中自定义您的角色。

        - 这些工具不需要 VRChat SDK！如果您使用这些工具的话，您可以跳过本页上的所有其他步骤。

        - 任何 VRChat 用户都可以使用这些工具。即使您还没有达到“萌新”信誉等级。
    
    - VRoid Studio 是一个动漫主题角色创建工具，用于创建 VTuber 风格的模型。

        - 角色有数百个自定义滑块，并且可以亲手绘制。

        - 如果您想知道它能做些什么，请查看 [VRoid](https://www.reddit.com/r/VRoid/) 社区版块。

        - 她也可以在 [Steam](https://store.steampowered.com/app/1486350/VRoid_Studio_v1263/) 上下载到

        - ⚠VRoid Studio 输出的模型为 **.vrm** 格式，Unity 并不原生支持该格式！

            - 如果您想直接导入 VRoid Studio 模型以在 VRChat 中使用，您可能需要查看社区创建的 [VRMtoVRChat](https://github.com/esperecyan/VRMConverterForVRChat) 转换器，用于 .vrm 头像。如果您使用此插件，请务必阅读[此插件的文档](https://www.store.vket.com/ec/items/122/detail/)。

2. 使用 VRChat 的演示模型

    如果您想将自己的模型上传到 VRChat 中，您需要使用 VRChat SDK。

    如果你是 VRChat SDK 新手的话，先尝试上传一下内置的演示模型。

    在您成功上传演示模型后，试试上传您自己的模型！

3. 下载模型 

    互联网上有许多电商中可以下载免费的或付费的 VRChat 模型。

    一些商店会出售可以在 VRChat 或其他应用程序中使用的 3D 模型。这些模型非常适合您学习 VRChat SDK 并创建您自己的 VRChat 模型。

    - [100 avatars](https://github.com/PolygonalMind/100Avatars) 是一个免费的数百个开源模型的集合。它们简单易用，可以轻松导入到 VRChat SDK 中。

    - Unity 资产商店中也有一些免费的和付费的 3D 模型。它们很容易导入到 Unity 中，并且通常与 VRChat SDK 兼容，但可能包含在 VRChat 中无法使用的资产或脚本。

    一些商店中会出售已经为 VRChat 准备好的模型。它们可能会让您在 Unity 中设置模型时跳过一些步骤，但也可能包含本文未涉及的高级功能。如果您想要一个外观酷炫的模型，并且不太想去学习如何创建自己的模型的话，它们是您最好的选择。

    - [BOOTH](https://booth.pm/en/items?tags%5B%5D=VRChat) 是一个日本的 VRChat 模型商店。它是最大的动漫风格模型商店，但你也可以在那里找到其他类型的模型。

    - [Gumroad](https://gumroad.com/discover)在西方创作者中更受欢迎，专注于动漫风格和毛茸茸（福瑞）的模型。

    当你寻找模型时，请记住以下几点：

    - 如果您决定从资产商店之外的地方获取模型，请确保模型已经被作者完全“绑定”过了。

        - 一个被“绑定”过的模型有一个骨架，使其能够移动。自行绑定模型的过程可能会非常困难，但像 [Mixamo](https://www.mixamo.com/) 和 [Rigify](https://docs.blender.org/manual/en/latest/addons/rigging/rigify/index.html) 这样的工具可以自动完成绑定过程。
        
        - 您还应该检查模型是否采用[与 Unity 兼容的格式](https://docs.unity3d.com/Manual/3D-formats.html)，例如 `.fbx` 。
    
    - 确保您拥有在 VRChat 中使用该模型的许可证。

        - 大多数资产商店在 3D 模型的商店页面上会显示其许可证。

        - 未经许可使用它们是对模型作者权利和 [VRChat 服务条款](https://hello.vrchat.com/legal)的侵犯。

    - 确保您使用的模型在 Meta Quest 上的多边形数低于 20,000，在 PC 上低于 70,000 。

        - 上传多边形数量过多的头像可能会导致性能问题。

        - 在 PC 上，您可以上传超过此限制的模型，但该模型将被评为“非常差”的性能分级，这意味着会有更多的玩家看不到它。

4. 自行创建模型

    虽然大多数用户选择去寻找一个模型作为他们的起点，但任何人都可以从头开始为自己的虚拟形象创建一个模型。您可以使用任何您喜欢的 3D 软件，只要它支持导出带有骨架的 FBX。[Blender](https://www.blender.org/) 是一个免费开源的建模软件，也是一个非常合适的选择。

    如果你从未进行过 3D 建模，这可能是一个漫长旅程的开始。学习如何建模、绑定和贴图一个 3D 模型是非常复杂的。创建一个 VRChat 模型需要结合上述所有的这些技能！

    如果你选择自己创建模型，我们建议从非常简单的东西开始。即使你看起来没有预制模型那么华丽，这仍然是只属于你的模型，你可以随心所欲地使用它。

    下面是我们的一位社区成员编写的以 VRChat 为中心的教程，希望能帮到您：

- [Rainhet's Blender 3D Virtual Avatar Tutorial 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1)  - Rainhet 的教程篇幅很长，她在学习过程中对所有内容都做了详尽的解释。
- [Rainhet's 3D Avatar Class](https://www.youtube.com/watch?v=w-yhjgnhaNw)- Rainhet 教程系列的旧版本。这里也有一个[10 分钟版本](https://www.youtube.com/watch?v=in9rNze4FD4)，让您从全局视角了解整个过程。

如果您有教程建议，请将其通过"编辑本页"功能提交到我们的文档！

## 第 2 步 - 设置VRChat SDK

恭喜你找到或自己构建了一个模型！在继续之前，你需要设置 [VRChat Creator Companion](/vcc.docs.vrchat.com)。它将帮助你安装 [Unity](https://unity.com/) 并使用 [VRChat SDK](creators.vrchat.com/sdk) 创建项目。

阅读[创作者助手](/vcc.docs.vrchat.com)的入门页面以了解更多信息。在设置好您的 Unity 项目后，您就可以继续了！

::: info 你是 Unity 的新手吗？访问 [Unity Learn](https://learn.unity.com/)，去获取关于如何使用 Unity 的免费教程。
:::

### 尝试 VRChat 的演示头像

在将自己的 3D 模型导入 Unity 之前，您可以先尝试使用 VRChat 的演示模型。这使您可以在不担心接触到与 3D 模型相关的问题的情况下学习如何上传一个模型。

打开你的模型项目，前往 'VRChat SDK > Samples > Avatar Dynamics Robot Avatar.'

![img](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-1.png)

如果示例模型成功的被加载了，您可以跳到[第 7 步](#第-7-步---构建并上传形象)。如果您想导入自己的模型，请继续下面的第 3 步。

## 第 3 步 - 将模型导入到您的项目中

现在您已经设置了 VRChat SDK，是时候将它导入到您的项目中了。如果您是从资产商店获得的，那么可以下载并直接导入到项目中。如果您是从其他地方获得模型，则需要将模型和相关纹理导入到 `Assets` 文件夹中。

如果您是从 3D 编辑器导入模型，请确保您牢记不同坐标系之间的区别。例如，Blender 的默认坐标系和单位制与 Unity 的不同。您必须从 Blender 导出 FBX 文件，并将导出器按下图所示设置好：

![](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-2.png)

在您把模型导入到 `Assets` 文件夹之后，您需要确保其被正确设置，在 Inspector 的 Rig 选项卡下，确保 Animation Type 设置为 Humanoid。

## 第 4 步 - 将模型添加到场景中
将模型放入资产中并进行正确导入设置后，接下来就可以将其放入场景中了。您可以将其拖入层级窗口或场景窗口中，来达到这个目的。我们建议一个场景只导入一个形象，并将其放置在 0, 0, 0 （原点）处。如果形象没有垂直于地面，请手动旋转到垂直于地面为止。此外，请确保形象不会太小或者不会大的超过 5x5x5m，您可以使用默认的体积为 1x1x1m 的 unity 默认立方体进行比较。

::: warning 形象优化
优化您的形象非常重要，这样您就不会对自己和他人造成性能困扰。如果出现此类问题，SDK 会告知您。查看我们的[形象优化技巧](/creators.vrchat.com/avatars/avatar-optimizing-tips)来了解提高形象性能评级的方法。
:::

## 第 5 步 - 添加一个 Avatar Descriptor
之后，我们要添加一个 " VRC Avatar Descriptor "组件，然后对其进行设置。

1. 在层级窗口中选择您的形象。
2. 在检查器窗口中点击 "添加组件"。
3. 搜索 " VRC Avatar Descriptor "组件并添加。
4. 自定义其设置，说明如下。

![](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-3.png)

### 视角球
首先，您需要设置视角球位置。这将是您的视角摄像机在 VRChat 中的位置。您可以在场景中看到一个小的白色球体。

如果您的形象有头部，那么视角球的最佳位置就是两眼之间。如果你的模型的头部非常的大，抬头和低头时它的脚可能会离开地面。为避免这种情况，请将视角位置放得更靠近正常大小头部的位置。

如果形象没有头部，则将其放置在您认为合适的位置。

![](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-4.png)

### 口型同步模式

当您说话时，您可以让您的形象的嘴（或其他任何东西）自动做出反应。 打开您形象下的`VRC Avatar Descriptor`，展开`LipSync`下拉菜单。一共有五种模式可供选择：

#### Default 默认模式

![](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-5.png)

按 "自动检测！"，VRChat SDK 将自动检测适当的口型同步模式。然后，该模式将切换到以下模式之一。

#### Jaw Flap Bone 模式

如果您的形象使用单根骨头来让下巴能动起来，您可以使用这个模式。角色的下巴会根据您在 VRChat 中说话的声音大小而进行相应程度的张开。请确保您已在 Unity 的人形装备中为您的形象配置了下巴骨骼。

#### Viseme Blend Shape（推荐使用）
混合形状/形状键（名称取决于您使用的软件）根据顶点位置修改网格。 许多模型使用这种方法制作详细的动画。如果您的模型有这些形态键，就应该使用它们！

我们使用 Oculus 音频库来检测和设置口型。[您可以在此处看到对所有口型的外观以及触发它们的声音的引用](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference)

VRChat 通常可以自动检测您形象的口型。如果不能，您可以从选择模式的下拉列表中选择口型模式。

![](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-6.png)

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
如果您是高级创作者，您可以使用该模式，利用 VRChat 内置的[动画参数](/creators.vrchat.com/avatars/animator-parameters)控制您的形象对语音的反应。

### 第 6 步 - 转到 "构建 "选项卡/检查形象是否 OK
接下来，我们要检查构建窗口中是否一切正常，为此，您需要打开 `VRChat SDK > Show Control Panel > Show Control Panel`，在控制面板中，您会看到形象的 GameObject，下方有一个 `Build & Publish` 按钮。在这中间，您会看到设置、内容标签、"整体性能"、评级、错误和警告。

![The VRChat SDK build panel.](https://cn-nb1.rains3.com/docs-image/controls/creating-your-first-avatar-7.png)

只需按照 VRChat SDK 构建面板中的步骤操作即可：

- 给您的形象起个名字。您还可以为其添加描述。
- 确保用适当的内容标签标记您的形象，以符合VRChat 的[内容分级系统](https://hello.vrchat.com/blog/content-gating)。
- 选择您形象的可见性。私人形象不能被其他 VRChat 用户克隆或使用。
- 选择一个形象缩略图。您可以选择一幅图像或使用从 Unity 场景中截取的图像。
- 阅读 "验证 "部分。其中包含许多有用的错误和警告。例如，SDK 可能会警告您的形象有太多面数，您可以通过优化网格来解决这个问题。如果无法优化网格，您可能需要返回并选择另一个模型。
- 准备就绪后，继续构建形象

### 第 7 步 - 构建并上传形象
现在一切准备就绪。按下 `Build & Publish` 按钮，SDK 将开始构建和上传您的形象。上传形象前，请仔细检查形象是否符合 VRChat 的[服务条款](https://hello.vrchat.com/legal)和[社区准则](https://hello.vrchat.com/community-guidelines)。

上传形象后，您就可以在 VRChat 上看到您的形象了。您也可以在`VRChat SDK > 显示控制面板 > 内容管理器`中看到您的形象。

您也可以不上传形象，直接测试形象。为此，请点击 "构建并测试"。您的形象将出现在 VRChat 形象菜单的 "其他 "部分。测试形象只能由您自己看到。要让其他玩家看到您的形象，您需要上传形象。

### 第 8 步 - 欣赏您的形象
恭喜您创建了第一个形象！我们希望一切都能顺利。如果您需要任何帮助，请访问我们的["提问 "论坛](https://ask.vrchat.com/)或[Discord 服务器](https://discord.com/invite/vrchat)。

创建和上传 VRChat 形象是一件既有趣又充满创意的事情。如果您想提高创建形象的技巧，请查看我们形象文档的[其他部分](/creators.vrchat.com/avatars/index.md)。

何不了解更多信息：

- 优化您的形象？
- VRChat 的性能分级系统？
- 动态化形象？
- 创建您的第一个世界？
