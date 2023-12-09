# 制作您的第一个世界

::: info
在开始之前，请确保您已经准备好了[一个安装好 SDK 的 Unity 项目](/creators.vrchat.com/sdk/)。

如果您需要帮助，请访问我们的 [Discord](https://discord.gg/vrchat) 或 [官方论坛](https://ask.vrchat.com)。
:::

## 第一步 - 设置场景

首先，您需要一个 Unity 场景。你可以创建一个新场景或者使用一个已有内容的已有场景。

打开场景后，您需要添加一个 **VRC Scene Descriptor** 到你的场景里。你可以很轻松的使用 VRChat SDK 完成这件事：

![Adding a scene descriptor automatically via the VRChat SDK build panel.](/creators.vrchat.com/images/worlds/build-panel-add-vrc-scene-descriptor.png)

1. Click **VRChat SDK** > **Show Control Panel**.
	- If you do not see this menu at the top of your Unity window, your SDK may not be installed correctly. Try clicking **Assets** > **Reimport All**, and check our [SDK troubleshooting guide](/creators.vrchat.com/sdk/sdk-troubleshooting).
2. In the **Authentication**, log into your VRChat account.
3. Switch to the **Builder** tab and click **Add a VRCSceneDescriptor**.

## 第二步 - 创建出生点

您需要在场景中设置至少一个重生点。这是当玩家加入世界时他们会出现在的位置。默认情况下，玩家将在您的 VRCWorld 预制件的位置出现。你只需要简单地移动 VRCWorld 预制件到你想要玩家出现的地方。

![Move your scene descriptor to change your spawn.](/creators.vrchat.com/images/worlds/vrc-scene-descriptor-gizmo.png)

如果您想创建额外的出生点，请创建一个空的 GameObject 并将其放置在您希望用户重生的位置。将 GameObject 添加到 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md) 组件中的 **Spawns** 列表中。重复此操作以获得您想要的出生点数量。

如果您有多个出生点，可以通过更改 Spawn Order 属性来选择玩家重生位置的顺序。

## 第三步 - Descriptor 的设置

您可以设置 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md)，这些设置会改变世界中的行为。以下是一些更重要的选项。

_Spawns_ - 这是一个坐标数组，决定玩家进入世界时的生成位置。默认情况下，玩家会在 "Scene Descriptor" 的位置生成。

_Respawn Height_ - 这是玩家重生及其拾取物重置或被摧毁时的高度。任何在这个 Y 值以下的物体都会被重置（或者被销毁，取决于 "Object Behaviour At Respawn" 设置）。

_Reference Camera_ - 这个相机上的设置会在玩家进入房间时应用到玩家的相机上。通常用于调整相机裁切面及添加后处理效果。

更多设置可以在 [VRC_SceneDescriptor](./components/vrc_scenedescriptor.md) 页面上找到。

## Step 4 - Configure your World in the SDK build panel

Click  `VRChat SDK > Show Control Panel`. Before you can upload your world, you need to give VRChat some basic information about it, such as the world's name, capacity, or content warnings.

![VRChat's SDK World build panel.](/creators.vrchat.com/images/worlds/build-panel-worlds-2023.png)

- World name - The name of your world, as shown to everyone.
- Description - This will be displayed on the 'World Details' page in VRChat and on the website.
- Content warnings - Warnings that work in conjunction with VRChat's [Content Gating system](https://hello.vrchat.com/blog/content-gating).
- Maximum capacity - The maximum amount of players allowed in your world.
  - If an instance has reached its player capacity, new players cannot join.
  - The instance creator, world creator, or group owner can always join, even if it would exceed the player capacity. (Unless they do not have permission to enter/see that instance)
- Recommended capacity - The recommended maximum amount of players for your world.
  - If a public instance has reached its recommended capacity, VRChat will discourage more players from joining. The instance will stop appearing in VRChat's list of public instances.
  - Players can still try to join the instance under some circumstances if they have a direct invite URL on vrchat.com.
- Tags - Keyworlds that help users find your world in VRChat.
- World debugging - Allows other users to debug your Udon code.
- Thumbnail - A preview image of your world.

::: info What if my world doesn't have a recommended capacity?

If you uploaded your VRChat world with an old VRChast SDK, without 'recommended capacity', player capacity works differently:

 - 'Recommended capacity' will be the same as your player capacity value
 - 'Player capacity' will be **twice** your player capacity value
 
 For example: If you set 'Player capacity' to 10 and did not set 'Recommended capacity', your _actual_ 'Player capacity' will be 20. 'Player capacity' was sometimes referred to as the 'soft cap' for this reason.
:::

## Step 5 - Check for warnings or validation messages

![Validations in the SDK build panel.](/creators.vrchat.com/images/worlds/build-panel-validations-everything-looks-good.png)

At the bottom of the VRChat SDK build panel, you'll find a section called **Validations**. It contains suggestions on how to set up your scene and build your world. For example:

- Is your scene missing a VRC Scene Descriptor?
- Is your scene missing VRChat's layers and collision layer matrix?
- Are there any issues with Audio Sources, textures, or Udon scripts?

The SDK will often give you the option to fix these issues automatically. If not, please read the validation messages carefully to learn how to improve your world. Some of the messages are optional and are not required for uploading your world.

## 第六步 - 构建和发布您的世界

接下来您需要构建世界！首先您需要决定您要做什么：您可以先构建测试版本，以在不上传的情况下测试您的世界，或者直接将您的世界发布到 VRChat 中。在 "Offline Testing" 和 "Online Publishing" 标题下，您会找到 "Build" 或 "Last Build" 的按钮。"Last Build" 会将此世界的最后一个成功构建的版本用于测试或上传。选择 "Build" 会将一个重新构建一个版本进行测试或上传。 

_(可选)_  
如果您希望测试您的世界，请您在测试标题下按 "Build & Test New Build" 按钮。这将立即重新构建构建您的世界，自动启动 VRChat 客户端并进入构建完成的世界用于测试。客户端数量选项用于当您想打开多个客户端以测试网络同步相关的行为时。

现在，我们可以通过按下发布标题下的 "Build and Upload" 按钮来构建并上传您的世界！这将构建您的世界并准备上传。请记住，您不被允许上传违反我们的[社区指南](https://vrchat.com/community-guidelines)或[服务条款](https://vrchat.com/legal)的内容到 VRChat 中。如果您执意这样做将导致我们对您采取处罚措施。

上传您的世界后，它将立即在 VRChat 中可用！您应该能够在游戏中看到它，或者您可以通过 SDK 的内容管理器在 `VRChat SDK > Show Control Panel > Content Manager` 中看到它。

::: danger 世界上传失败

如果您的世界上传失败，请[检查 Unity 的控制台](https://docs.unity3d.com/Manual/Console.html)以查看是否有任何错误。如果有，请在尝试再次构建您的世界之前解决它们。确保您已经阅读了 Unity 日志中的全部内容，并点击错误以查看更多信息。

如果您需要帮助，请查看我们的其他文档、在[论坛](https://ask.vrchat.com/)中或在[Discord](https://discord.com/invite/vrchat)上提问。确保提供尽可能多的信息，例如 Unity 控制台的错误信息。
:::
