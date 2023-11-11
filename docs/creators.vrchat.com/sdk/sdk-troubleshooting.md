# SDK 疑难解答

以下是您在使用 SDK 时可能遇到的常见问题及解决方法。您可以在我们的[帮助知识库](http://help.vrchat.com)中找到更多帮助。

## 构建控制面板没有出现在 VRChat SDK 菜单下拉菜单中

出现这种情况有两个主要原因

确保您使用的是 VRChat 的推荐 Unity 版本。（请参阅 [安装 SDK](./sdk.md)）。

检查控制台选项卡，确保没有来自第三方脚本或组件的编译错误。如果有，您可能需要删除这些组件/脚本。

## 我上传了内容，但在游戏中看不到

出现这种情况有几个原因。以下是一些需要检查的事项：

- 确保您使用的是 [正确的 Unity 版本](./current-unity-version.md)。
- 确保您在游戏中使用的是正确的账户，而不是第三方平台登录账户。
- 检查控制面板窗口中的 `Content Manager` 选项卡，查看是否有您的内容。
- 检查编辑器控制台，查看上传时是否有任何错误。

## 我看不到其中一个窗口，但没有任何错误

在极少数情况下，Unity 标签可能会移出屏幕并无法操作。您需要删除一些注册表键值，让这些窗口重新出现在屏幕上。

1. 关闭 Unity。
2. 按下 Windows 键并输入 `regedit`。按 Enter 键。UAC 会提示您允许管理员访问。
3. 使用 `regedit` 时要非常小心！此应用程序包含电脑的所有设置。
4. 找到以下键：`Computer\HKEY_CURRENT_USER\Software\Unity Technologies\Unity Editor 5.x`。你可以把它粘贴到 `regedit` 顶部的地址栏中，如果窗口顶部没有地址栏，也可以通过左侧的目录列表进行导航。
5. 删除目录中所有以 `VRC` 开头的键，包括 `VRCSDK2` 或其他相关键。
6. 关闭 `regedit`。
7. 重新打开 Unity。这样就可以正常运行了！

## 我在使用 SDK2 的项目中遇到与 SDK3 或 Udon 有关的错误，在使用 SDK3 的项目中遇到与 VRC_SpatialAudioSource 有关的错误

1. 按照[正确步骤](./updating-the-sdk.md)升级 SDK，关闭 Unity 并删除所有 SDK 相关文件夹及其相关的 `.meta` 文件来删除 SDK。
2. 进入 `项目设置`，在 `Player > 其他设置` 下找到 `脚本定义符号`。
3. 删除与项目所使用的 SDK 无关的符号。对于使用 SDK2 制作的项目，删除 `UDON` 和 `VRC_SDK_VRCSDK3`。对于使用 SDK3 制作的项目，删除 `VRC_SDK_VRCSDK2`。符号之间用 `;` 分隔。然后按 `Enter` 保存更改。
4. 将正确的 SDK 导入项目。

## 我有一个问题知识库没有解决，也没有在这里列出

很抱歉！请浏览我们的 [官方知识库](http://help.vrchat.com/) 或 [提交支持请求](https://help.vrchat.com/hc/en-us/requests/new)。我们很乐意为您提供帮助。