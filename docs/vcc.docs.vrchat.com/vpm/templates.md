# 模板
模板用于创建预装了 VRChat 包和设置的新 Unity 项目。

## 官方模板
创作者助手包含三个模板：

### Avatar
此模板包括基础和 Avatar SDK，您可以使用 [Avatars 3.0](https://docs.vrchat.com/docs/avatars-30) 构建和上传 Avatar。

### World
此模板包括基础和 World SDK，您可以使用 Udon 程序和预设构建和上传 World。它还包括 [ClientSim](https://clientsim.docs.vrchat.com/)，以便您在开发过程中轻松测试您的 World。

### UdonSharp
此模板包括上述 World 模板中的所有内容，以及 [UdonSharp](https://github.com/vrchat-community/UdonSharp)，用于使用类似 C# 的语法编写您的程序。

::: tip

这些模板在您安装创作者助手时会自动提供，但我们也将它们作为 git 仓库提供，您可以直接下载和使用。
您可以在[这里阅读更多相关信息](/vcc.docs.vrchat.com/guides/using-project-template-repos)。

:::

## User Templates

@[youtube](https://www.youtube.com/watch?v=_hK7FIJ1gTU)

You can also add your own templates to easily start projects with your favorite packages, tools and prefabs. The easiest way to do this is to build from one of the included templates. Here's an example of how to do that for a World template where we include an imaginary tool called `HypeGenerator`. 

1. Copy the folder `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\VRCTemplates\World` to `C:\Users\{username}\AppData\Local\VRChatCreatorCompanion\Templates` (use your actual drive letter if it's different than C).
2. Rename the folder from `World` to something descriptive like `HypeWorld`.
3. Modify HypeWorld\package.json:

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
