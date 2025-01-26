---
upstreamCommit: 75cd9a85ccd1537326752c8cac33938b93fe9147
---

---
upstreamCommit: 75cd9a85ccd1537326752c8cac33938b93fe9147
---

# 术语表

创作者助手有很多不同的部分，我们经常使用缩写来简化表达。以下是一些基本的解释，帮助您理解所有的部分如何协同工作。

## VCC
VRChat 创作者助手

创作者助手是 “在 VRChat 中创建内容的入口”。它是一个您可以下载和安装的独立应用程序。它可以帮助您：
* 安装 VRChat 开发所需的特定版本的 Unity。
* 创建新项目
* 管理您现有的项目
  * 在您的硬盘上找到它们
  * 将它们迁移到新格式
  * 更新它们的包
  * 创建备份
* 了解 VRChat 内容创作领域

创建和管理项目的大部分功能来自于 [VPM](#vpm)，它作为一个库嵌入到 VCC 中。

## VPM
VRChat 包管理器

包管理器是我们开发的一个库，用于管理您的 VRChat Unity 项目的包。

**技术规格**：该库是针对。NET Standard 2.0 构建的，因此它可以在使用。NET Framework 4.x 的 Unity 项目，以及原生的。NET Standard 和 Core 项目中运行，比如 [CLI](#cli)。

## CLI
VPM 命令行接口

CLI 将 VPM 库包装起来，并使其作为一个跨平台程序从命令行可用。这对于高级用户以及可以在云中自动构建项目的 CI 系统非常有用。

## Repos
包仓库

[Repos](/vcc.docs.vrchat.com/vpm/repos) 是兼容包的列表，创作者可以在他们的项目中使用。

## 旧版包
现在我们使用 VPM 包，我们将以 `.unitypackage` 格式分发的旧版 SDK 称为旧版包。

## VRChat 快捷启动工具 (VRCQL)
VRC 快捷启动工具可以帮助您在同一实例的 VRChat 中启动多个配置文件，同时也提供了一个修改调试选项的接口。这避免了需要创建大量快捷方式进行调试的问题。