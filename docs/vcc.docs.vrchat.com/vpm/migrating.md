# 迁移项目

## 概述

如果使用 SDK3 世界或虚拟形象的 `.unitypackage` SDK 创建的项目，可以迁移到新系统（不支持 SDK2）。它们可以是 Unity 2017、2018 或 2019 的项目。SDK 必须在其原始安装位置才能被检测到 - 具体来说，必须存在以下之一：
* `Assets/Udon`
* `VRCSDK/Plugins/VRCSDK3A.dll`

::: warning
如果你的项目正在使用 [UdonSharp](https://udonsharp.docs.vrchat.com/)，请阅读我们的[已知问题](https://udonsharp.docs.vrchat.com/migration#known-issues)页面。
:::

## 迁移过程

1. 将你的项目添加到项目列表中，然后点击迁移。<br/>
![迁移项目](/vcc.docs.vrchat.com/images/migrate-button.png)
2. 你有两种迁移项目的方式。
- **迁移副本**：将你的项目复制到一个新文件夹，命名为 `ProjectName-Migrated`，末尾带有数字。你的旧文件夹保持不变。
- **就地迁移**：你的文件夹将在不创建副本的情况下进行升级。这对于你已经做了自己的备份，或者你使用版本控制软件如 [Git](https://git-scm.com/) 或 [Plastic](https://docs.unity3d.com/2019.4/Documentation/Manual/PlasticSCMPlugin.html) 的情况非常有用。*除非你有备份，否则不要选择 '就地迁移'*！<br/>
![备份提示](/vcc.docs.vrchat.com/images/migrate-project-backup.png)
3. 确认你想要开始迁移。
![备份提示](/vcc.docs.vrchat.com/images/migrate-project-backup-2.png)
4. 你的项目中所有可见的文件都被复制到新文件夹，除了以下文件：
    - `Library`
    - `Logs`
    - `Assets\VRCSDK`
    - `Assets\Udon`
    - `Assets\VRChat Examples`
    - `Packages\com.vrchat.vrcsdk3`
    - `ProjectSettings\ProjectVersion.txt`
    - [精选社区包](/vcc.docs.vrchat.com/vpm/curated-community-packages)使用的文件夹
5. 从 VCC 包含的基础模板中，`EditorSettings.asset` 文件被复制到你的项目中，覆盖你的旧文件以强制升级到 Asset Database v2。
6. 如果需要，将创建一个名为 `package.json` 的项目清单文件。
7. VRChat SDK "Base" 包被添加为嵌入式包。
8. 项目类型被检测为 LegacySDK3Avatar 或 LegacySDK3World，并将相应的包添加到项目清单中。
9. 如果上述步骤顺利地完成了，那么一个名为 `migration-log.txt` 的文本文件将在项目中创建，其中包含该过程的输出。如果有错误，那么一个名为 `migration-log-error.txt` 的文本文件将在 VCC 日志位置（当前为 `AppData/Local/VRChatCreatorCompanion/Logs`）创建。如果你有错误，你可以在 Unity 中打开项目并尝试修复它们，我们经常看到预制件和脚本的问题，这些预制件和脚本期望某些文件仍在 "Assets" 文件夹中，或者是为 Unity 2018 编写的。
10. 一旦完成，如果项目成功迁移，它将出现在列表中。

### 特殊包迁移

我们支持自动迁移包含在[精选包](/vcc.docs.vrchat.com/vpm/curated-community-packages)列表中的包 - 即 UdonSharp、AudioLink 或 GestureManager。如果在你的项目中找到这些包的旧版（`.unitypackage` 提取到 `/Assets/`）版本，它们将被移除并替换为新版本。