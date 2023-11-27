# 包管理器

VRChat 包管理器（VPM）目前是创作者伴侣的主要功能。它帮助您保持 VRChat SDK 和包的更新，并加速 VRChat 项目的创建和管理。

## 先决条件
当您首次启动创作者伴侣时，它会检查您是否拥有所有必需的程序，参见[创作者伴侣概述：要求](/#requirements)。

## 功能
包管理器可以帮助您执行以下操作：
* 创建新的 VRChat Unity 项目
* 管理现有项目中的包
* 迁移使用我们的[旧版 SDK](https://vcc.docs.vrchat.com/legacy-sdk)创建的旧 VRChat 项目

## 创建新的 VRChat 项目
* 点击 "项目" 打开您的*项目列表*，当您首次使用包管理器时，这将是空的。
* 点击 "新建" 打开模板选择屏幕。
* 选择 "世界" 或 "虚拟形象" 来创建一个新的 VRChat 项目，该项目已经设置好创建 Udon-Powered 世界或 AV3-powered 虚拟形象。如果您已经创建或安装了自己的[模板](templates)，您可以在这里选择其中一个。
* 一旦您选择了您的起始模板，为您的项目输入一个名称，并选择它将被创建的父文件夹。最终的项目路径将显示在屏幕底部。
* 一旦您对您的项目名称和位置满意，点击 "创建项目"。
* 此时，您的项目将被创建。等待初始导入完成。Unity 导入所有指定的包，处理资产，并运行包管理器传递给它的一些特殊命令，这可能需要几分钟的时间。
* 如果成功，应用程序将转到您的新项目的 "管理包" 屏幕，并列出已安装和可用的包。


### 当您点击 "创建" 时，实际上发生了什么？
1. 在您在 "位置" 字段中指定的 `targetDir`（目标目录）下创建一个目录，该目录是您的项目名称。
2. 您选择的模板被复制到这个目录。
3. ProjectSettings 文件被更新，您的项目名称作为 `productName`。
4. 如果上述步骤之一失败，并且 `targetDir` 看起来不是一个有效的 Unity 项目，那么目标目录及其内容将被删除，并显示错误。
5. 否则，VRChat 包管理器将其添加到已知的 VRChat 项目列表中（存储在设置文件中，名为 `userProjects` 的 string[]），并转到 "管理包" 屏幕。

## 在现有项目中管理包
包管理器使在现有项目中更新包变得容易。
* 点击菜单中的 "项目" 打开您的*项目列表*，当您首次使用包管理器时，这将是空的。
* 点击 "添加现有项目" 打开一个文件夹选择屏幕。您可以选择一个单独的 Unity 项目文件夹将其添加到您的项目列表，或选择一个包含许多 Unity 项目的文件夹以轻松添加它们全部。
* 在将您的项目添加到列表后，点击 '管理项目' 按钮打开其详细信息。
* 如果项目尚未迁移到使用 VPM 包，您需要首先[迁移它](#migrate-older-vrchat-projects)。
* 如果一个包显示 "已安装版本"，那么它已经安装在您的项目中。未安装的包将显示 "未安装"。
* 对于任何包，您可以选择版本下拉菜单查看该包的所有以前发布的版本。
* 选择一个版本将该包添加到您的项目，或选择右侧的 "+" 图标自动安装最新版本。
* 如果有可用的更新，您可以通过点击 "最新版本" 按钮来下载它。

![官方包列表](/vcc.docs.vrchat.com/images/official-packages.png)

## 迁移旧的 VRChat 项目（旧版 SDK）
如果您有使用我们的[旧版 SDK](https://vcc.docs.vrchat.com/legacy-sdk)的现有 SDK3 世界或虚拟形象项目，他们的 VRChat SDK 可以自动迁移到这种新的 VPM 兼容格式。

* 点击菜单中的 "项目" 打开您的*项目列表*，当您首次使用 VPM 时，这将是空的。
* 点击 "添加现有项目" 打开一个文件夹选择屏幕。您可以选择一个单独的 Unity 项目文件夹将其添加到您的项目列表，或选择一个包含许多 Unity 项目的文件夹以轻松添加它们全部。
* 在将您的项目添加到列表后，点击 '管理项目' 按钮打开其详细信息。
* 如果这个项目是一个 `.unitypackage` 格式的 SDK3 世界或虚拟形象项目，并且有一个 `Assets/VRCSDK` 文件夹，那么将出现一个标签为 "迁移项目" 的按钮。

![迁移屏幕](/vcc.docs.vrchat.com/images/migrate-button.png)

* 如果项目没有被识别为 VRChat 项目，按钮将不会出现。尝试打开项目让创作者伴侣识别它。
* 不支持的 SDK（SDK2）是不被支持的。

![不支持的项目](/vcc.docs.vrchat.com/images/unsupported-project.png)

* 如果您的项目类型是被支持的，点击 "迁移项目" 并稍作休息。这个过程对于一个小项目可能需要几分钟的时间，对于一个大项目可能需要更长的时间。一旦完成，您可以通过创作者伴侣管理您的项目的包并打开它。

### 当您点击 "迁移项目" 时，实际上发生了什么？
1. 在 `targetDir` 下创建一个名为 {ProjectName}-Migrated 的目录，根据需要附加 "-#" 以保证文件夹名称的唯一性（如 myproject-Migrated-1，myproject-Migrated-2 等）。
2. `originalProjectDir` 中的所有文件都被复制到 `targetDir`，除了 Library，Logs，Assets/VRCSDK，Assets/Udon，Assets/VRChat Examples，Packages/com.vrchat.vrcsdk3 和 ProjectSettings/ProjectVersion.txt。
3. EditorSettings.asset 从包含的 "Base" 模板复制到新项目的 ProjectSettings 文件夹，以确保项目使用 AssetDatabase v2 和一些其他重要设置。
4. 如果新项目在 Packages/manifest.json 没有清单，那么 "Base" 模板中的清单将被复制到新项目的 Packages 文件夹。
5. 清单将添加 VRChat Base 包，以及根据迁移的项目类型添加 World 或 Avatar 包。
6. 如果上述步骤成功，那么该过程的输出将写入 *targetDir* 作为 migration-log.txt。如果有问题，那么错误日志的输出将写入标准日志路径作为 {projectName}-migration-log-error.txt保存，一般日志的输出将写入标准日志路径作为 {projectName}-migration-log.txt保存。
