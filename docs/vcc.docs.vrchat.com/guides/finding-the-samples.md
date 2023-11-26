# 查找示例

在[旧版包](glossary#legacy-packages)中，示例资源会直接解压到你的 Assets 文件夹中。这使得它们更易于找到，但是当你更新包版本时，你对它们所做的任何更改都会丢失，而且无论你是否需要，它们都会成为你项目结构的一部分。

## VRChat SDK 示例
现在，官方 SDK 包的示例位于该包的 "Samples" 文件夹中。通过 "VRChat SDK/Samples" 下的新菜单项找到并打开它们是最快的方式，这将显示你已加载的包的示例。每个项目都是你可以选择加载的场景。

![菜单中的示例](/vcc.docs.vrchat.com/images/samples.png)

这些示例不允许被编辑，如果你试图保存它们，将会显示警告。你应该使用 "File > Save As..." 来创建一个不会被包更新覆盖的场景副本。

## 其他包示例

一些包可能使用 Unity 包管理器的示例导入功能。对于这些，你可以在 "Unity 包管理器" 窗口中的 "In Project" 集合中找到它们，从左上角的下拉菜单中选择。

![导入示例](/vcc.docs.vrchat.com/images/import-samples.png)

使用这些按钮导入一个示例将会将其解压到像 `Assets/Samples/packageName/1.0.0/SampleName` 这样的文件夹中。这些资源可以安全地编辑，并且不会被从包的新版本导入的示例覆盖，因为它被放置在特定版本的文件夹中。