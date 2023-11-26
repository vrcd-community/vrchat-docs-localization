# 模板
模板用于创建预装了 VRChat 包和设置的新 Unity 项目。

## 官方模板
创作者助手包含三个模板：

### Avatar
此模板包括基础和 Avatar SDK，你可以使用 [Avatars 3.0](https://docs.vrchat.com/docs/avatars-30) 构建和上传 Avatar。

### World
此模板包括基础和 World SDK，你可以使用 Udon 程序和预设构建和上传 World。它还包括 [ClientSim](https://clientsim.docs.vrchat.com/)，以便你在开发过程中轻松测试你的 World。

### UdonSharp
此模板包括上述 World 模板中的所有内容，以及 [UdonSharp](https://github.com/vrchat-community/UdonSharp)，用于使用类似 C# 的语法编写你的程序。

::: tip

这些模板在你安装创作者助手时会自动提供，但我们也将它们作为 git 仓库提供，你可以直接下载和使用。
你可以在[这里阅读更多相关信息](/vcc.docs.vrchat.com/guides/using-project-template-repos)。

:::

## 用户模板

<iframe width="100%" class="ratio-16-by-9" src="https://www.youtube-nocookie.com/embed/_hK7FIJ1gTU" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
你也可以添加自己的模板，以便轻松地启动带有你喜欢的包、工具和预设的项目。最简单的方法是从其中一个包含的模板构建。以下是一个示例，说明如何为包含一个名为 `HypeGenerator` 的虚构工具的 World 模板执行此操作。

1. 将文件夹 `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\VRCTemplates\World` 复制到 `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\Templates`（如果实际驱动器字母与 C 不同，请使用实际驱动器字母）。
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
4b. 如果这个工具还没有迁移到 VPM，而是应该放在 Assets 文件夹中，我可以将它复制到 `HypeWorld\Assets` 中。Assets、Packages 和 ProjectSettings 文件夹中的所有内容都将被复制到我的新项目中。确保你*不*包含文件 ProjectSettings/ProjectVersion.txt。这不包含在 World 模板中，但如果你从现有项目中复制文件，它将在你的 ProjectSettings 文件夹中。

有了这个文件夹，当选择创建新项目时，你的模板现在应该会出现在模板屏幕的右侧：
![用户模板](/vcc.docs.vrchat.com/images/user-templates.png)
