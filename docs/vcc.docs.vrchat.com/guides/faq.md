# 常见问题解答
## 'VCC' 是什么意思？
**V**RChat **C**reator **C**ompanion。这是用于创建和更新 VRChat Unity 项目的官方工具。在我们的[术语表页面](https://vcc.docs.vrchat.com/guides/glossary/)上阅读更多关于创作者助手的信息。

## 为什么我的项目缺少包？或者为什么我无法创建备份？
我们发现的最常见原因是**您的项目路径超过了 Windows 可处理的长度**。
* 尝试在路径字符较少的地方创建您的项目，比如
  `C:\Projects\My Project` 而不是
  `C:\Users\Username\Documents\Projects\VRChat\NewStuff\2022\My very very very very very very very very very very very very very very very very very long project`
* 或者，[在您的 Windows 设置中启用 Win32 长路径](https://learn.microsoft.com/zh-cn/windows/win32/fileio/maximum-file-path-limitation?tabs=registry#enable-long-paths-in-windows-10-version-1607-and-later)。（这个设置在 Windows 中默认是禁用的，可能会导致旧软件出现问题。）

## 创作者助手有什么好处？
创作者助手使 VRChat 世界或模型创建更加容易和快速。它可以自动安装 Unity 编辑器和 Hub，下载 VRChat SDK 并创建和更新您的项目。
从 2023 年开始，新的 [VRChat SDK](/vcc.docs.vrchat.com/) 更新将只通过创作者助手提供。如果您想在新的或现有的项目中使用 VRChat 的最新 SDK 功能，[使用 VCC](https://vcc.docs.vrchat.com/guides/getting-started/)。

## 我的场景去哪了？为什么是空白的？
迁移后，Unity 可能会显示一个空白场景（带有 `Main Camera` 和 `Directional Light`）。您的场景*可能*还在那里 - 浏览您的 `/Assets/` 文件夹找到它。
一些文件夹在迁移过程中**不会**被复制。如果您的场景之前被保存为 SampleScene 或 UdonExampleScene，您必须在迁移之前先将其保存到您的 `/Assets/` 文件夹。阅读关于[迁移项目](https://vcc.docs.vrchat.com/vpm/migrating)的内容了解更多。

## 我应该使用创作者助手导入旧版 SDK 包 `VRCSDK3[...].unitypackage` 吗？
不应该。VRChat SDK 包由 VCC 管理。将 VRChat 的旧版 SDK 导入到 VCC 项目可能会破坏它。阅读我们的 [入门指南](https://vcc.docs.vrchat.com/guides/getting-started) 页面，了解更多关于 VCC 如何导入 VRChat SDK 的信息。
对于更喜欢旧版设置 SDK 的用户，我们在我们的网站上提供 `VRChat-Worlds-SDK-[...].unitypackage` 文件。这些文件只能用于新项目，并且与创作者助手完全兼容。

## 我还可以使用 `.unitypackage` 文件导入自定义资产吗？
可以。VCC 改变了 VRChat SDK 的导入方式，但 `.unitypackage` 旧版包仍可以像以前一样分发和导入。请注意，兼容旧版 SDK 的旧版包可能无法在 SDK 的新版本中工作。
如果您为其他用户创建资产，确保使用这些新的 SDK 测试它们，以发现并修复任何兼容性问题。如果您引用了 VRChat 的内置资产，或者您的 Udon 程序使用了 [UdonSharp](https://udonsharp.docs.vrchat.com) 的旧版本，您可能需要创建相关资产的新版本。
VCC 还允许您使用新的 VPM 格式分发包，使您的用户安装和更新您的自定义内容更加容易。阅读 [Packages](https://vcc.docs.vrchat.com/vpm/packages) 页面了解更多。

## 如果 Webview2 没有正确安装，我应该怎么做？
![VRC 快捷启动工具 GUI](/vcc.docs.vrchat.com/images/webview2-error.png)
创作者助手使用 Webview2 来渲染其用户界面。当您启动创作者助手时，它会尝试自动安装。

如果您之前从您的系统中移除了 Microsoft Edge，创作者助手可能无法正确启动。WebView2 通常与 Microsoft Edge 一起安装。

通常可以通过正确地重新安装 Webview2 来解决这个问题。如果 Microsoft Edge 运行正常，那么创作者助手也应该能正常工作。

下载链接
- Webview2: https://developer.microsoft.com/en-us/microsoft-edge/webview2
- Microsoft Edge: https://www.microsoft.com/en-us/edge

## 我刚安装了 Unity Hub 和 Unity。为什么 Unity 没有启动？

如果您已经安装了 Unity Hub 但从未启动过，您的许可证可能尚未激活。没有有效许可证，Unity 无法运行。它可能会尝试启动，但会默默失败。

[点击这里](https://support.unity.com/hc/en-us/articles/211438683-How-do-I-activate-my-license-) 学习如何激活您的个人许可证。（它是免费的！）

如果 Unity 仍然无法启动，您可能需要查看 Unity 或 Unity Hub 的日志文件以获取更多信息。[这是方法。](https://docs.unity3d.com/Manual/LogFiles.html)

## 我在哪里可以找到创作者助手的日志文件？
创作者助手的日志可以在以下位置找到：
- 在 'Logs' 标签页
- 在 'Settings' 标签页 -> Files and Folders -> Logs
- 在文件夹 `C:\Users\[Your Name]\AppData\Local\VRChatCreatorCompanion\Logs`

每次启动创作者助手，它都会创建一个像这样的日志文件：
`20230307T025652-log.txt`（年，月，日，小时，分钟，秒）

## 我如何更改创作者助手将要安装的位置？
如果需要，您可以使用命令行运行带有 `/DIR` 参数的安装程序来设置其安装位置。例如，如果我想将 2.1.3 版本安装到我的 "F" 驱动器，我可以从存放 Setup 文件的文件夹运行以下命令：
```cmd
VRChat_CreatorCompanion_Setup_2.1.3.exe /DIR = "F:/CreatorCompanion"
```

## 如果我被卡在了`Requirements`屏幕上，我该怎么办？

过时的创作者助手版本可能会被卡在 'Requirement' 屏幕上。这通常发生在您的设置文件可能被损坏，或者包列表可能下载不正确的情况下。
![image](https://user-images.githubusercontent.com/737888/204419137-d4a3a4ee-5035-4540-a27a-f871531bee7c.png)
要解决这个问题，请在 https://vrchat.com/download/vcc 下载创作者助手的最新版本，并按照以下步骤操作。

## 如果我的设置文件无效，我该怎么办？
如果您的设置文件被损坏（无论是通过手动编辑还是发生了 bug），创作者助手可能无法正确启动。您可能会看到一个错误消息，或者创作者助手可能无法启动。

您可以在 `%LocalAppData%\VRChatCreatorCompanion\settings.json` 或 `C:\Users\You\AppData\Local\VRChatCreatorCompanion\settings.json` 找到设置文件。

要修复它，您可能需要删除您的 `settings.json` 文件。
1. 关闭 VCC。
2. 打开文件夹 `%LocalAppData%\VRChatCreatorCompanion\` 
  - 例如：`C:\Users\Username\AppData\Local\VRChatCreatorCompanion\`
3. 删除 `settings.json`。
4. 打开 VCC。
  - 这应该会自动重新创建 `settings.json`。
  - 您的偏好设置和项目列表将被重置。

## 如何向创作者助手添加更多包？

除了 VRChat 和创作者们提供的包，您还可以向创作者助手添加自己的包。

您可以通过两种方式来做到这一点：

1. 添加已经存在于您的计算机上的本地包。您可以在设置页面的包标签下的用户包部分进行此操作。
2. 通过安装社区仓库来添加社区包。要向创作者助手添加新的仓库，[请参阅此指南](/vcc.docs.vrchat.com/guides/community-repositories)。

## 我在哪里可以提问？
确保阅读 [VCC 文档](https://vcc.docs.vrchat.com/)，了解更多关于创作者助手的信息。

请将错误报告和功能请求提交到我们的 [GitHub 问题跟踪器](https://vcc.docs.vrchat.com/guides/bugs-features/)。如果您想与其他创作者讨论 VCC，可以前往官方的 [VRChat Discord 服务器](https://discord.com/invite/vrchat)。
