# 制作您的第一个世界

> 🚧
> 
> 部分页面内容正在更新中。
> 如果您需要帮助，请访问我们的 [Discord](https://discord.gg/vrchat) 或 [官方论坛](https://ask.vrchat.com)。

在开始之前，请确保您已经设置了一个带有 SDK 的 [Unity 项目](../sdk)。

## 第一步 - 设置场景

首先，您需要一个场景。这可以是一个预制过的现有场景，或者一个新场景。打开场景后，您需要将 VRCWorld 预制件拖放到您的场景中。

您可以在“项目”选项卡中搜索 VRCWorld Prefab，并将搜索设置为 "In Packages" 或 "All" 。

![](../images/worlds/creating-your-first-world-b1946d4-Unity_4t4quWsgTY.png)

## 第二步 - 创建出生点

现在，您需要在场景中设置至少一个玩家可以重生的点。默认情况下，玩家将在您的 "VRCWorld" 物体的位置出现。这是最简单的设置方式，也是大多数人的选择。

如果您想创建额外的出生点，请创建一个空的 GameObject 并将其放置在您希望用户重生的位置。将 GameObject 添加到 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md) 中的 `spawns` 列表中。重复此操作以获得您想要的出生点数量。

如果您有多个出生点，可以通过更改 Spawn Order 属性来选择玩家重生位置的顺序。

## 第三步 - Descriptor 的设置

您可以设置 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md)，这些设置会改变房间中的行为。以下是一些更重要的选项。

_Spawns_ - 这是一个坐标数组，决定玩家进入世界时的生成位置。默认情况下，玩家会在 "Scene Descriptor" 游戏物体的坐标处生成。

_Respawn Height_ - 这是玩家重生及其拾取物重置或被摧毁时的高度。任何在这个 Y 值以下的物体都会被重置（如果是被配置过的对象，则销毁）。

_Reference Camera_ - 在玩家进入房间时可以将玩家的（自定义）设置应用到上面的一个相机。通常用于调整相机裁切面及添加后处理效果。

更多设置可以在 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md) 页面上找到。

## 第四步 - 设置场景

让我们开始吧！转到 `VRChat SDK > Show Control Panel > Builder` 在这里您可以看到一些用于搭建场景、构建世界的选项。继续执行这些操作：

- 设置匹配 VRChat layer的层。这是必要的步骤，否则您的世界可能无法正常运行。
- 设置匹配 VRChat 的碰撞层矩阵。详情见上文，请勿跳过这一步！
- 运行时自动将 3D 空间化应用于 3D 音频源。如果您希望场景中的所有音频源都是空间化的，请使用此选项。
- 将 3D 空间化应用于当前场景中的 3D 音频源。如果您以后想添加 2D 音频源（如背景音乐），则应使用它。

## 第五步 - 在 SDK 面板中配置您的世界

在您可以上传您的世界之前，您需要向 VRChat SDK 提供一些关于您的世界的基本信息 - 比如其名称、玩家容量或内容警告。

![VRChat SDK 的世界构建面板。](../images/worlds/build-panel-worlds-2023.png)

- Name - 您的世界向所有人显示的名称。
- Description - 这将显示在 VRChat 和网页中的“世界详情”页面上。
- Content Warnings - 与 VRChat 的 [内容限制系统](https://hello.vrchat.com/blog/content-gating) 配合使用的警告。
- Max. Capacity（最大容量）- 您的世界允许的最大玩家数量。
  - 如果房间达到其玩家容量上限，新玩家将无法加入。
  - 房间创建者、世界创建者或组所有者将总是可以加入，即使这会超过玩家容量。（除非他们没有权限进入/看到该实例）
- Rec. Capacity（推荐容量）- 您的世界推荐的最大玩家数量。
  - 如果公共房间达到其推荐容量，VRChat 将尝试阻止更多玩家加入。房间将会停止出现在 VRChat 的公共房间列表中。
  - 如果玩家在 vrchat.com 上有该房间的邀请链接，他们在某些情况下仍然可以尝试加入该房间。
- Tags - 帮助用户在 VRChat 中找到您的世界的关键词。
- World Debugging - 允许其他用户调试您的 Udon 代码。
- Thumbnail - 您世界的预览图像。

::: info 如果我的世界没有推荐容量怎么办？

如果您使用旧的 VRChat SDK 上传了您的世界，没有设置“推荐容量”，那么玩家容量的工作方式将有所不同：

 - “推荐容量”将与您设置的玩家容量值相同
 - “最大容量”将是您设置的玩家容量值的**两倍**
 
 例如：如果您将“玩家容量”设置为 10 并且没有设置“推荐容量”，那么您的_实际_“最大容量”将是 20。“玩家容量”有时被称为“软上限”，因此得名。

:::

## 第六步 - 构建和发布您的世界

接下来您需要构建世界！您需要首先选择您将要做的事情：您可以进行构建测试版本，以在不上传的情况下测试您的世界，或者直接将您的世界发布到 VRChat 中。在 "Offline Testing" 和 "Online Publishing" 标题下，您会找到 "Build" 或 "Last Build" 的按钮。"Last Build" 会将此世界的最后一个成功构建用于测试或上传。选择 "Build" 会将一个新世界重新构建起来进行测试或上传。 

_(可选)_  
如果您希望测试您的世界，请您在测试标题下按 "Build & Test New Build" 按钮。这将立即重新构建构建您的世界，自动启动 VRChat 客户端并进入构建完成的世界用于测试。客户端数量选项用于当您想打开多个客户端以测试网络同步相关的行为时。

现在，我们可以通过按下发布标题下的 "Build and Upload" 按钮来构建并上传您的世界！这将构建您的世界并准备上传。请记住，您不被允许上传违反我们的[社区指南](https://vrchat.com/community-guidelines)或[服务条款](https://vrchat.com/legal)的内容到 VRChat 中。如果您执意这样做将导致我们对您做出管理行为。

上传您的世界后，它将立即在 VRChat 中可用！您应该能够在游戏中看到它，或者您可以通过 SDK 的内容管理器在 `VRChat SDK > Show Control Panel > Content Manager` 中看到它。

::: danger 世界上传失败

如果您的世界上传失败，请[检查 Unity 的控制台](https://docs.unity3d.com/Manual/Console.html)以查看是否有任何错误。如果有，请在尝试再次构建您的世界之前解决它们。确保您已经阅读了 Unity 日志中的全部内容，并点击错误以查看更多信息。

如果您需要帮助，请查看我们的其他文档、在[论坛](https://ask.vrchat.com/)中或在[Discord](https://discord.com/invite/vrchat)上提问。确保提供尽可能多的信息，例如 Unity 控制台的错误信息。
:::
