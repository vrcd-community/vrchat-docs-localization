# 包

## 概述
VPM（VRChat 包管理器）使用与 [Unity 包管理器](https://docs.unity3d.com/2019.4/Documentation/Manual/Packages.html) 兼容的格式，以便更轻松地安装、更新和管理您用于制作 VRChat 内容的资产、工具和预制件。

## 包类型
包可以来自各种来源，并一起管理。
### 官方包
有三种官方包：
* VRChat 基础
  * 包括世界和头像 SDK 都需要的文件，如控制面板。
* VRChat 世界
  * 包括创建 VRChat 交互世界所需的所有文件，以前被称为 SDK3。
* VRChat 头像
  * 包括创建 VRChat 自定义头像所需的所有文件，以前被称为 SDK3A 或 Avatars 3.0。

### 精选包
这些包已经过 VRChat 的审查，被认为特别有用且相对安全。我们正在建立一个提交过程，以便您的包被审查并包含在内，目前是邀请制。

### 社区包
我们将引入一种托管和分发社区包列表的方法。我们将包括可以分发的包的类型指南，以及提交您自己的社区列表的方式。它们并不能保证可用或安全。

### 用户包
您可以创建自己的 VPM 兼容包库，用于您的项目。它们的可用性和安全性取决于您如何制作它们！这个功能在开发包时也很有帮助 - 将它从之前的预制件或 .unitypackage 文件转变为可以通过 Creator Companion 分发的新格式。您可以使用这些包在发布前测试您的包的结构和清单。要添加用户包，导航到 '设置' 屏幕，按下 '用户包' 下的 '添加' 按钮，并选择包含一个或多个包的文件夹。如果它们有效，它们将被添加到此处的列表和您向项目添加和删除包的屏幕上。

这里有一个极其简单的包，您可以用作示例。将其解压到某个地方，然后您可以将其添加到您的 VCC：[com.mmmlabs.utilities.zip](https://github.com/vrchat/packages/releases/download/3.0.3/com.mmmlabs.utilities.zip)

### 预发布包
如果您想测试 SDK 和包的最新版本，您可以选择在 VCC 中显示预发布版本。要做到这一点：
1. 打开设置屏幕。
2. 切换到 "Packages" 标签。
3. 向下滚动到 "Pre-Release Packages" 标题，并勾选 "Show Pre-Release Packages" 旁边的框。

![image](https://user-images.githubusercontent.com/737888/234437096-5c3013e9-c957-40ff-aba4-86cf3839750b.png)

现在，您将能够在每个有 beta 版本的包的下拉菜单中看到它们。

## 包格式
VPM 格式遵循 Unity 包格式，并进行了一些添加。我们建议您首先阅读关于[自定义包](https://docs.unity3d.com/2019.4/Documentation/Manual/CustomPackages.html)的官方文档，以熟悉这些内容。

我们使用相同的必需[包清单](https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html)文件，但有一些重要的区别：

### VPM 包清单
VPM 包清单与常规 Unity 清单有一些区别：

1. `vpmDependencies` 属性列出了您的项目所需的基于 vpm 的依赖项。
2. `url` 属性提供了直接下载您的包的 zip 文件的链接。
3. _可选的_ `legacyFolders` 属性可以用来检测并从您的项目的旧版 .unitypackage 版本迁移到这个版本。找到的任何与匹配路径的文件夹都将被删除。如果您想搜索并找到文件夹，即使它已经从原来的位置移动，您也可以包含 GUID 作为对象的值。如果没有提供 GUID，它将只匹配路径。
4. _可选的_ `legacyFiles` 属性用作上述 `legacyFolders` 对象。
5. _可选的_ `legacyPackages` 属性在一个次要包已经集成到一个主要包中，并且应该从清单和项目中删除次要包时使用。例如，VRChat Worlds 包现在包含 ClientSim 和 UdonSharp 包，所以它们在这里列出，当添加 VRChat Worlds 包时，它们将从项目中删除。
6. _可选的_ `zipSHA256` 属性用于验证您提供的 zip 文件的完整性。目前，它只用于缓存失效。但是，我们可能会开始强制进行哈希检查，以确保用户下载的包的完整性。
7. _可选的_ `changelogUrl` 属性可以用来指向您的包的更改日志文件。这目前还没有被 VCC 使用，但是未来可能会被利用。

总的来说，必填字段列表如下：

- `name`
- `displayName`
- `version`
- `url`
- `author`
  - `name`
  - `email`

其余字段都是可选的，但我们建议您尽可能多地填写。查看 [Unity 包清单](https://docs.unity3d.com/2019.4/Documentation/Manual/upm-manifestPkg.html) 文档以查看可选字段列表。

```json
{
  "name" : "com.mydomain.avatarTool",
  "displayName" : "My Avatar Tools",
  "version" : "1.0.0",
  "author": {
    "name": "My Name",
    "email": "contact@mydomain.com"
  },
  "unity" : "2019.4",
  "description" : "Tools for easier Avatar Creation",
  "vpmDependencies" : {
    "com.vrchat.avatars" : "3.1.0"
  },
  "url" : "https://packages.vrchat.com/com.vrchat.avatars-3.1.0.zip",
  "legacyFolders" : {
    "Assets\\FolderName" : "vr031f928e5c709x9887f6513084aaa51"
  },
  "legacyFiles" : {
    "ProjectVersion.txt" : "jf988739jfdskljf098323jjhf"
  },
  "legacyPackages": [
    "com.vrchat.clientsim",
    "com.vrchat.udonsharp"
  ]
}
```

W我们**强烈建议**在包清单中列出您的包的 `license`。如果您的项目中没有 LICENSE 文件，Unity 将需要这个字段，但即使您有 LICENSE 文件，我们也建议指定它。这个字段可能会在未来的 VCC 界面中显示。许可证应使用 [SPDX 格式](https://spdx.org/licenses/)。

### 版本和范围
我们通过支持包的依赖项的依赖项，并将依赖项版本视为范围，改进了 Unity 包管理器提供的功能。我们使用 [SemanticVersioning](https://github.com/adamreeve/semver.net) 库来实现这一点，该库支持 [SemVer 2.0](https://semver.org/) 和 [各种范围指定符](https://github.com/adamreeve/semver.net#ranges)。

例如，我们在许多官方模板和 VRC SDK 包中使用 "^3.1.x" 格式。这种格式旨在匹配 3.1.0 之后的任何版本，但它限制了主版本号的更改。这是因为主版本号的更改表示可能与以前版本不兼容的重大更改。例如，如果一个包的版本为 3.5.2，它将匹配 "^3.1.x" 格式，而版本 4.1.0 则不会。

这种格式也支持 [预发布包](#prerelease-packages)。
::: warning

不要在发布后删除您的 VPM 包的旧版本。
删除旧版本将破坏使用[版本控制](https://vcc.docs.vrchat.com/vpm/source-control)的项目。

:::