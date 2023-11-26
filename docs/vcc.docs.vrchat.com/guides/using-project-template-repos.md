# 使用项目模板

为了让你快速开始 VRChat 内容创建，我们提供了一套官方的 Unity 项目模板。

你可以通过 [VCC 应用程序](/vcc.docs.vrchat.com/guides/getting-started)、[CLI](/vcc.docs.vrchat.com/vpm/cli) 或直接下载仓库来使用它们。

目前我们提供以下模板：

### Avatar

这个模板包括基础和 Avatar SDK，准备好让你使用 [Avatars 3.0](https://docs.vrchat.com/docs/avatars-30) 构建和上传 Avatar。

[仓库链接](https://github.com/vrchat-community/template-avatar) | [下载链接](https://github.com/vrchat-community/template-avatar/archive/refs/heads/main.zip)

### World
这个模板包括基础和 World SDK，准备好让你使用 Udon 程序和预制件构建和上传 World。它还包括 [ClientSim](https://clientsim.docs.vrchat.com/)，方便你在开发过程中测试你的 World。

[仓库链接](https://github.com/vrchat-community/template-world) | [下载链接](https://github.com/vrchat-community/template-world/archive/refs/heads/main.zip)

### UdonSharp
这个模板包括上面的 World 模板中的所有内容，再加上 [UdonSharp](https://github.com/vrchat-community/UdonSharp)，用于使用类似 C# 的语法编写你的程序。

[仓库链接](https://github.com/vrchat-community/template-udonsharp) | [下载链接](https://github.com/vrchat-community/template-udonsharp/archive/refs/heads/main.zip)

## 使用方法

::: tip

我们强烈建议你使用 [VCC 应用程序](/vcc.docs.vrchat.com/guides/getting-started) 或 [CLI](/vcc.docs.vrchat.com/vpm/cli) 来自动使用官方模板设置新项目。
但是，如果你想手动操作，或者你无法使用这些方法 - 那么请按照以下说明操作

:::

每个模板仓库都包含使用说明，所以请使用上面的仓库链接查看。
但这里有一个太长不看的概述：

- 使用上面的链接下载模板代码，或者访问仓库页面并按 'Use This Template' 来建立一个新的 GitHub 仓库，这个仓库已经准备好了。如果你下载了一个 zip 文件，按照剩下的指示进行。
- 将 ZIP 文件解压到你的系统上你想要新项目的文件夹。
- 打开 Unity Hub 并点击 "Open"。
- 导航到你的新项目文件夹并点击 "Select Folder"。
- 这应该会打开 Unity 并开始包导入过程。
  - 确保你已经安装了正确的 Unity 版本，查看[我们的文档](https://docs.vrchat.com/docs/current-unity-version)了解相关信息。
  - 你可以使用 VCC 来确保你总是使用正确的 Unity 版本。
- 当被要求下载所需的包时，点击 "OK"。
- 你现在应该已经设置好并可以开始了！

::: info

每个模板的 README.md 文件都包含了创建和发布相应内容的详细指示。

:::

## 用户模板

除了官方模板，你也可以创建你自己的！[查看这个指南](/vcc.docs.vrchat.com/vpm/templates#user-templates) 来了解更多信息。