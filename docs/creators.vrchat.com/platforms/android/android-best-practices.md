# 移动设备最佳实践

让您的 VRChat 世界跨平台是让更多玩家能够享受它的好方法。有许多 VRChat 玩家都在 Android 上，因此值得创建一个属于您的 VRChat 世界的 Android。

然而，移动设备玩家和VR玩家将体验到完全不同的世界！在本指南中，我们将解释一些使您的移动 VRChat 世界更加舒适和愉快的方法。

::: tip 情报
VRChat *尚不适用于* Android。它将计划于今年晚些时候发布。
:::

## 1. 将您的 VRChat World 发布到 Android 平台

在 PC 和 VRChat 支持的所有其他平台上发布您的世界一直都是一个好主意。

上传到 Android 的任何世界都可以在 Oculus Quest 2 和 Android 移动设备上使用。如果您之前发布过 Quest 版本的世界，它也可以在手机和平板电脑上使用！

要了解如何将您的世界上传到 Android，请参阅我们的[跨平台设置](./cross-platform-setup.md)文档。

::: info 笔记
如果您看到“Quest”一词指的是 VRChat SDK，它通常也适用于 Android。

例如：[EasyQuestSwitch](../../../vcc.docs.vrchat.com/vpm/curated-community-packages.md) 等现有工具非常适合跨平台开发。您并不真正需要一台 Meta Quest！
:::

## 2.自动检测您世界中的移动玩家

当 Android 玩家加入您的世界时，您可能需要调整它的某些方面。Android 移动设备上的玩家将无法访问 VR 控制器，就像 VR 玩家无法访问触摸屏一样。

您可以使用 [UdonSharp](../../../udonsharp.docs.vrchat.com/udonsharp.md) 来检测您世界中的 Android 玩家：

```
public bool IsUsingPhoneOrTablet()
{
  #if UNITY_ANDROID
  return !VRC.SDKBase.Networking.LocalPlayer.IsUserInVR();
  #endif
  return false;
}
```

其工作原理如下：

- 使用 [conditional compilation（条件编译）](https://docs.unity3d.com/2019.4/Documentation/Manual/PlatformDependentCompilation.html)检测当前平台
- 使用 [Networking.LocalPlayer](../../worlds/udon/players/players.md) 检索有关本地玩家的数据
- 使用 [IsUserInVR](../../worlds/udon/players/players.md) 检查本地玩家是否在 VR 中。

如果本地玩家使用的是 Android，而不是 VR，则意味着他们正在 Android 手机或平板电脑上玩游戏。

我们正在研究一种以轻松使用 Udon Graph 和 UdonSharp 检测此类平台的方法。

## 3. 针对 Android 优化您的世界

Android 设备通常不如 PC 强大，请阅读我们的 [Quest 内容优化指南](./quest-content-optimization.md)，以优化您的世界性能。

好消息是：如果您的世界在 Quest 2 上运行良好，它也有可能会在 Android 移动设备上运行良好。手机和平板电脑的分辨率通常低于 VR 头戴式设备，并且性能方面会比 VR 少更多恶心的问题。

您仍应确保 Quest 2 玩家游玩的帧率在可接受的范围内。

## 4. 在 Android 上测试您的世界

在 Android 手机上测试您的世界将帮助您改善移动设备玩家的体验。即使您的世界仍处于开发的早期阶段，也要考虑它在移动设备上的游玩方式。

在 VRChat 世界中快速迭代时，在 Unity 编辑器或 Steam 版本的 VRChat 中测试它们可能很方便。操纵杆游戏手柄可以作为 VRChat 移动控制屏幕的合适替代品。

- 在触摸屏上，玩家用 *虚拟* 操纵杆移动和控制相机。
- 触摸屏使屏幕空间界面更容易与其他输入设备进行交互。
- 找一位移动平台玩家来测试您的世界

## 5. 设计触摸屏用户的使用界面

手机屏幕不同于 PC 和 VR 设备。您可能需要调整用户界面，使其更易于移动用户阅读和交互。

- 使文本易于阅读。使用清晰的字体、大文本和大按钮。
- 删除不必要的文本。在移动设备上阅读大量文本是很困难的。
- 本地化文本。与其他平台相比，移动用户使用的语言范围要广泛得多。
- 避免依赖需要 VR 设备或复杂相机移动的交互。
- 尝试使用[屏幕空间用户界面](https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/UICanvas.html)。在触摸屏上，它们比世界空间画布更容易交互。考虑添加一个用户界面，用户可以从任何地方打开该界面，而无需转到世界的菜单面板。

## 结论：给玩家一个流畅的用户体验

当玩家加入您的世界时，尽量使体验尽可能流畅。尝试应用本文中提到的其他技巧，并思考如何在您的世界中使用它们。

- 不要在不优化材质的情况下重新上传您的 PC 世界。

- 务必为 Android 用户优化您的世界并增强玩家们的体验。

- 不要在享受您的世界之前，强迫玩家遵循复杂的步骤。

- 务必让您的世界变得更加愉易上手快，而无需任何用户操作。

- 不要在没有测试的情况下上传您的世界。

- 请听取用户反馈。

---

遵循这些步骤将有助于您的世界为移动玩家带来绝佳体验。

您有什么希望我们在本文中加入的提示或窍门吗？请在下面提交您的反馈，我们将尽最大努力帮助与 VRChat 社区分享您的知识。
