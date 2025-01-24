---
upstreamCommit: b30aec8ae69d86b6db951b628cbd3698f21766c9
---

# 模板
模板用于创建预装了 VRChat 包和设置的新 Unity 项目。

## 官方模板
创作者助手包含三个模板：

### Avatar
此模板包括基础和 Avatar SDK，您可以使用 [Avatars 3.0](/creators.vrchat.com/avatars/) 构建和上传 Avatar。

### World
此模板包括基础和 World SDK，您可以使用 Udon 程序和预设构建和上传 World。它还包括 [ClientSim](https://clientsim.docs.vrchat.com/)，以便您在开发过程中轻松测试您的 World。

### UdonSharp
此模板包括上述 World 模板中的所有内容，以及 [UdonSharp](https://github.com/vrchat-community/UdonSharp)，用于使用类似 C# 的语法编写您的程序。

::: tip

这些模板在您安装创作者助手时会自动提供，但我们也将它们作为 git 仓库提供，您可以直接下载和使用。
您可以在[这里阅读更多相关信息](/vcc.docs.vrchat.com/guides/using-project-template-repos)。

:::

## 用户模板

@[youtube](https://www.youtube.com/watch?v=_hK7FIJ1gTU)

您也可以添加自己的模板，以便轻松地使用您喜欢的包、工具和预制开始项目。最简单的方法是从其中一个包含的模板构建。这是一个我们在世界模板中包含一个名为 `HypeGenerator` 的虚构工具的例子。

1. 将文件夹 `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\VRCTemplates\World` 复制到 `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\Templates`（如果实际的盘符不是 C，使用您的实际盘符）。
2. 将文件夹从 `World` 重命名为描述性的名称，如 `HypeWorld`。
3. 修改 HypeWorld\package.json：

```json
{
	"name" : "user.vrchat.template.hypeWorld",
	"displayName" : "Hype World Project",
	"description" : "Udon world with my auto-Hype-Generator tool",
	"defaultScene" : "Assets/Hype.unity",
	"version" : "1.0.0",
	"category" : "ProjectTemplate",
	"dependencies" : {}
}
```
目前只需要 "name" 和 "displayName" 字段。请注意，"defaultScene" 是 Unity 规范的一部分，但似乎不起作用。

4a. 如果我的 Hype Generator 工具在 VCC 中作为一个 VPM 兼容的包可用，我可以将它添加到 HypeWorld\Packages\vpm-manifest.json 中的 vpmDependencies 列表中：
```json
{
	"dependencies" : {
		"com.vrchat.worlds" : {
			"version" : "^3.1.x"
		},
		"com.mydomain.hype" : {
			"version" : "1.0.x"
		}
	}
}
```
4b. 如果这个工具还没有迁移到 VPM，而是应该放在 Assets 文件夹中，您可以将它复制到 `HypeWorld\Assets` 中。Assets、Packages 和 ProjectSettings 文件夹中的所有内容都将被复制到您的新项目中。确保您*排除*文件 ProjectSettings/ProjectVersion.txt。这不包含在 World 模板中，但如果您从现有项目中复制文件，它将在您的 ProjectSettings 文件夹中。

有了这个文件夹，当选择创建新项目时，您的模板现在应该会出现在模板功能界面的右侧：
![用户模板](/vcc.docs.vrchat.com/images/user-templates.png)
