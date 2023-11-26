
# 命令行界面
VRChat 包管理器提供了一个命令行界面应用程序，供高级用户和自动化使用。

## 安装与更新
你需要安装 [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)。
然后只需打开一个终端并输入：

```console
dotnet tool install --global vrchat.vpm.cli
```

这将使得你在任何终端下只需输入 `vpm` 就可以使用它！你需要最新的模板来创建/迁移项目，因此在首次运行时推荐输入 `vpm install templates` 来安装模板体验更多功能 - 在 [安装模板](#install-templates) 部分有更多内容。

将工具更新到最新版本：
```console
dotnet tool update --global vrchat.vpm.cli
```

你始终可以使用以下命令来卸载它：
```console
dotnet tool uninstall --global vrchat.vpm.cli
```

要了解更多信息，请阅读 [.NET 工具文档](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools#install-a-global-tool)。

## 项目
VRChat 项目是包含 VRChat SDK 的 Unity 项目。
### 新建
从模板创建新的 VRChat 项目

```console
vpm new <projectName> [template] [-p path]
```

**参数**

* **projectName**：新项目的名称。如果目标目录中已经存在具有此名称的其他项目，则会在其后添加数字。

* **template**：可选的模板。如果你没有提供，将使用只包含 VRChat Base SDK 包的基础 "Base" 模板。你可以使用内置模板的名称，或者提供你自己模板的绝对路径。
  **内置模板**："Base", "World", "Avatar", "UdonSharp"

* **path**：创建项目时使用的可选绝对路径。如果未提供，将使用当前目录。

### 检查项目
检查给定的名称或路径是否指向兼容的 VRChat 项目。

```console 
vpm check project [<name>]
```

**参数**

* **name**：可选的项目名称。如果未提供，将检查当前目录。否则，将在以下位置进行搜索：
  * 绝对路径里的名称
  * 当前目录的相对路径的名称
  * 在 `userProjects` 中存储的设置列表中的名称

如果找到了项目，其类型将被打印到控制台。

如果找到项目，返回 0，如果没有找到，返回 1。

### 解析项目
恢复项目的 `vpm-manifest.json` 文件中指定的所有 VPM 包。当你在 Unity 中打开一个项目时，[解析器](/vcc.docs.vrchat.com/vpm/resolver)会自动完成这个操作，但你也可以使用这个命令手动完成。

```console 
vpm resolve project [<name>]
```

**参数**

* **name**：可选的项目名称。如果未提供，将检查当前目录。否则，将在以下位置进行搜索：
  * 名称作为绝对路径
  * 名称作为当前目录的相对路径

如果找到了项目，其包将被恢复。

如果包成功恢复，返回 0，如果没有恢复，返回 1。

### 迁移项目
如果他们使用 SDK3 Worlds 或 Avatars unitypackages（不支持 SDK2），将使用旧版 .unitypackage SDK 创建的项目迁移到新系统。他们可以是 Unity 2017、2018 或 2019 的项目。也将 UdonSharp 和 CyanEmu 迁移到新的基于包的版本。

```console 
vpm migrate project [projectPath]
```

**参数**
* **projectPath**：你想要迁移的 Unity 项目的路径。

**选项**
* **--inplace**：在原地迁移项目，而不是创建一个副本。除非你有自己的项目备份，否则不推荐这样做。

如果找到了项目并且可以迁移，它将自动升级到新系统。

如果找到了项目并且可以迁移，返回 0；如果未找到或无法迁移，返回 1。

## 包
[包](packages) 是以便携格式存储在 zip 文件中的代码和资产，由 VRChat 包管理器拉入你的项目。

### 检查包
报告来自包的信息，或者告诉你它是否未找到/无效。

```console 
vpm check package <name>
```

**参数**

* **name**：要检查的包。这可以是官方或策划包列表中任何包的唯一名称，如 `com.vrchat.worlds` 或 `com.vrchat.udonsharp`，或者可以是本地包的相对或绝对路径。

**示例**
* `vpm check package com.vrchat.avatars`
  * 打印关于官方 Avatars 包的信息
* `vpm check package "C:/MyPackages/MirrorExploder"`
  * 打印关于本地包 "MirrorExploder" 的信息。

### 添加包
将 VPM 包添加到现有项目

```console 
vpm add package <packageName> [-p <project>]
```

**参数**
* **packageName**：要添加的包。这可以是官方或策划包列表中任何包的唯一名称，如 `com.vrchat.worlds` 或 `com.vrchat.udonsharp`，或者可以是本地包的相对或绝对路径。

**选项**
* **-p|--project**：指定将添加包的项目。如果未提供参数，方法将在当前目录中查找。如果提供，该值可以是 Unity 项目的绝对或相对路径，或者是你已添加到 `userProjects` 列表中的项目的名称。

**示例**
* `vpm add package com.vrchat.avatars`
  * 将官方 Avatars 包添加到当前目录中的项目。
* `vpm add package "C:/MyPackages/MirrorExploder" "../MyProjectDir"`
  * 将我的本地包 "MirrorExploder" 添加到当前工作目录上一级的项目。

### 移除包
从现有项目中移除 VPM 包

```console 
vpm remove package <packageName> [-p <project>] [-f]
```

**参数**
* **packageName**：要移除的包。这可以是项目中任何包的唯一名称。

**选项**
* **-p|--project**：指定将从中移除包的项目。如果未提供参数，方法将在当前目录中查找。如果提供，该值可以是 Unity 项目的绝对或相对路径。
* **-f|--force**：即使这样做可能会破坏项目，也要移除包。

**示例**
* `vpm remove package com.vrchat.clientsim`
  * 从当前目录中的项目移除 ClientSim 包。
* `vpm remove package "com.vrchat.base" "../MyProjectDir" -f`
  * 即使这样做可能会破坏项目，也从当前工作目录上一级的项目中移除 VRChat Base 包。

## 模板
[模板](templates) 是用作新项目起点的基础 VRChat 项目，可以快速拉取你喜欢的包、预制件和工具。

::: 提示

我们还提供了你可以直接使用的 git 仓库模板。[这里是指南](/vcc.docs.vrchat.com/guides/using-project-template-repos)，包含所有链接和说明。

:::

### 安装模板
将 VRChat 模板的最新版本安装到 `AppData/Local/VRChatCreatorCompanion/VRCTemplates`，覆盖那里的文件。如果你在没有安装 VCC GUI 的情况下使用 CLI，这将非常有用。

```console 
vpm install templates
```

注意，这将首先清除现有的模板 - 用户模板应放入 `AppData/Local/VRChatCreatorCompanion/Templates` 中。

### 列出模板
打印出官方 VRChat 模板的名称和路径，以及已安装的用户模板的路径。

```console 
vpm list templates
```

### 检查模板
报告模板的版本，或者告诉你它是否未找到/无效。

```console 
vpm check template <template>
```

**参数**

* **template**：要检查的模板。这可以是任何内置模板的 displayName，或者是你自己的项目模板的绝对路径。

**内置模板**："Base", "World", "Avatar", "UdonSharp"

## 仓库
仓库是包的列表。你总是可以访问官方和策划的仓库，你也可以添加你自己的社区仓库。

### 列出仓库
列出所有可用于加载包的源。这包括官方和策划的包列表，以及添加到设置中的任何用户仓库。

```console 
vpm list repos
```

### 添加仓库
添加本地或远程的包仓库。

```console 
vpm add repo <path> [--headers key:value key:value]
```

**参数**

* **path**：要添加的路径。它可以是指向本地 json 文件的绝对路径，或者是指向远程 json 文件的 url。如果是本地文件，必须存在才能被添加。如果是远程文件，必须在请求后的10秒内连接才能被添加。

**选项**

* **-h|--headers**：从命令行添加的键/值对。一些仓库 url 需要不同的头部，此选项可适应任意数量的头部。对于明确的本地路径，这不是必需的，只对远程 url 必需。应按照 `<name>:<value>` 的模式添加头部。应注意，如果值中有空格，应将头部包裹在引号中。

```console
vpm add repo https://test.com/index.json --headers "Authorization:Bearer my_token"
```

添加位于 `https://test.com/index.json` 的仓库，并在请求列表时发送 Authorization 请求头。

```console
vpm add repo https://test.com/index.json -h "Authorization:Bearer my_token" Accept:text/html
```

添加位于 `https://test.com/index.json` 的仓库，并在请求列表时发送 Authorization 和 Accept 请求头。

如果仓库被添加，返回 0；如果没有被添加，返回 1。

### 新建仓库
创建一个新的包列表的 json 文件。

```console 
vpm new repo [path] [--name MyName] [--author email@domain.com]
``` 

**参数**

* **path**：创建文件的路径，可以是绝对路径，也可以是相对于当前目录的路径。如果未提供，它将在默认的源目录（~User/AppData/Local/VRChatCreatorCompanion/Sources）中创建，并给予一个 GUID 名称，如 `4d6ffbe7-fe91-449f-ae7e-c8688e315a83.json`。

**选项**
* **-n|--name**：源的名称，如 "VRChat Official Packages" 或 "Momo's Messy Mix"
* **-a|--author**：人们可以通过此电子邮件地址联系你提问。

### 移除单个仓库
通过 id 从你的设置中移除仓库。
如果仓库被移除，返回 0；如果没有被移除，返回 1。

如果仓库列表没有提供明确的 id - 可以使用 url 代替。

```console 
vpm remove repo [id]
```
 
### 移除所有仓库
从你的设置中移除所有仓库。
如果仓库被移除，返回 0；如果没有被移除，返回 1。

```console 
vpm remove repos
```

## 要求
VCC 和 VPM 需要安装一些东西才能正常运行。这些命令可以帮助你快速设置你的机器或云构建。

### 检查 hub
在 Windows 上，检查是否在 `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\unityhub\DefaultIcon` 有 Unity Hub 的注册表键。
在 Mac 上，检查是否在 `/Applications/Unity Hub.app/Contents/MacOS/Unity Hub` 有文件。

```console 
vpm check hub
```

如果找到则返回 0，如果未找到则返回 1。

### 安装 hub
为 Windows 安装 Unity Hub 3.0

```console 
vpm install hub
```

具体来说，它从以下位置下载了 hub 安装程序：
```console 
https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.exe
``` 
并使用参数 `/S` 来静默安装。

如果 Hub 已安装，则返回 0；如果未安装，则返回 1。

### 检查 Unity
检查在设置中指定为 `pathToUnityExe` 的路径是否有有效的 Unity 安装。如果安装了 Unity Hub，使用以下参数在后台进程中运行 Hub，列出任何 Unity 编辑器：
```console
-- --headless editors -i
```
如果找到，将更新设置中的 Unity 编辑器路径。

```console 
vpm check unity
```
如果在那里指定了兼容的 Unity 版本，则返回 0；如果没有，则返回 1。

### 安装 Unity
为 Windows 安装带有 Android 构建支持的兼容版本的 Unity 编辑器

```console 
vpm install unity
```

具体来说，它使用以下参数运行 Unity Hub：
```console
-- --headless install -v 2019.4.31f1 -c bd5abf232a62 -m android
``` 

returns 0 if Unity was installed and 1 if it was not.

### 列出 Unity
列出当前系统上找到的 Unity 编辑器。

```console 
vpm list unity
```

检查：
* Windows 注册表
* Unity Hub（通过使用参数 `-- --headless editors -i` 运行它）
* Unity Hub 的子目录

## Mac 和 Linux 支持
目前唯一完全支持的平台是 Windows 10。
然而，我们正在努力使 vpm 工具对 Mac 和 Linux 用户可用。

::: tips

如果你在非 Windows 平台上使用 CLI 遇到问题，你可以查看我们的 [项目模板](/vcc.docs.vrchat.com/guides/using-project-template-repos)，以便在不依赖 VCC 的情况下开始使用最新的 VRChat 包。

:::

### Mac 设置

1. 按照上面的 [安装和更新](#installation--updating) 部分的指示进行操作。
2. 安装 [Mac 版 Unity Hub](https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.dmg) 然后安装 [Unity 2019.4.31f1](unityhub://2019.4.31f1/bd5abf232a62)。
3. 打开终端并运行 [vpm install templates](#install-templates) 来安装最新的 VRChat 项目模板。
4. 运行 [vpm check hub](#check-hub) 来查找并保存 Unity Hub 的位置。目前，我们假设它已经安装到其默认位置 `/Applications/Unity Hub.app/Contents/MacOS/Unity Hub`。如果不是这样，你需要手动打开你的设置文件，并将 `pathToUnityHub` 设置为正确的绝对路径。确保目标是 UnityHub.app 内的可执行文件，如默认路径所示。
5. 运行 [vpm check unity](#check-unity) 来查找并保存 Unity 编辑器的位置。VPM 将使用 Hub 来查找并保存路径，所以请确保 VPM 首先可以找到 Hub。

就是这样！你应该能够[从模板创建新项目](#new)，[向项目添加包](#add-package)以及执行大多数其他功能。你可以[提交一个 Canny](https://vrchat.canny.io/creator-companion-beta) 来报告任何不起作用的方法。

### Linux 设置
目前，CLI 在 Linux 发行版上完全未经测试，但由于为 Mac 版本所做的工作，它可能仍然可以工作。然而，VPM 将无法找到你的 Unity Hub 或 Unity 编辑器路径，所以你现在需要手动更新你的 settings.json 文件来设置它们。
