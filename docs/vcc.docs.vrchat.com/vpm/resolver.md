# 解析器

![包解析器窗口](/vcc.docs.vrchat.com/images/resolver.png)

## 概述
包解析器是一个 Unity 编辑器工具，可以在没有 VCC 的情况下下载并安装 VPM 项目所需的包。

解析器在底层使用 [VPM 库](/vcc.docs.vrchat.com/guides/glossary#vpm) - 这是驱动 [VCC](/vcc.docs.vrchat.com/guides/glossary#vcc) 的同一库，因此它以完全相同的方式下载包并解析依赖项。

## 获取方式
它被添加到每个 VPM 兼容的项目中，无论是在项目创建还是迁移期间。它被特别排除在您项目的 Packages 文件夹中的 .gitignore 文件之外，以确保它存在于您的项目中，帮助恢复它。在 VCC 中，它没有 'remove' 按钮，因为它不应该从您的项目中移除。但是，如果它被移除了 - 您可以使用 VCC 轻松地将其添加回来。

## 如何使用

当您打开一个 VRChat Unity 项目时，解析器会检查是否缺少任何 VPM 包。它通过比较您的 VPM 清单（在 Packages/vpm-manifest.json 中）和您的项目的 Packages 文件夹来实现这一点。
如果有任何项目缺失或者与指定的版本不匹配，您将看到以下对话框：

![VRChat 包缺失](/vcc.docs.vrchat.com/images/resolver-missing.png)

如果您按 "OK"，这些包将被恢复到您的项目中。如果您想先查看它们，您可以按 "Show Me What's Missing"，这将弹出一个窗口，如下所示：

![缺失的包具体信息](/vcc.docs.vrchat.com/images/resolver-specifics.png)

您可以按 "Resolve All" 来恢复所有的包到您的项目中，这等同于在初始对话框上按 "OK"。

如果您想选择并解决特定版本，您可以从其下拉菜单中更改单个包的目标版本，并按包右侧的 "Resolve" 按钮来恢复该特定包和版本。如果该包需要额外的包，那么这些其他包也将被恢复。请注意，如果您按 "Resolve All"，您选择的版本将不会被使用（解析器将使用 VPM 清单中指定的版本）。

您可以按 "Refresh" 让解析器再次比较您的 Packages 目录和您的清单，以防您在外部更新了一些内容。