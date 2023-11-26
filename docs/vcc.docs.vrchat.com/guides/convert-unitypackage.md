# 将现有资源转换为 VPM 包

## 开始之前

你已经制作了一个编辑器工具、预制件或其他一些应与 VRChat SDK 一起使用的东西。你将其作为 .unitypackage 或 .zip 文件分发，你和其他用户在导入所有相关的 SDK 包（如 Worlds SDK 和 UdonSharp）后导入到他们的项目中。

## 需要的更改

为了转换成 VPM 包，你的代码和资源需要进行一些更改。[包制作器](#package-maker-tool)工具将处理其中的大部分内容，但并非所有：
1. 相关资需要手动分离到 `Editor` 和 `Runtime`文件夹。使用 UnityEditor 类的任何内容都需要在 `Editor` 文件夹中。
2. 具有[兼容的包清单](/vcc.docs.vrchat.com/vpm/packages#package-format)，其中包括相关 VRChat SDK 包的 `vpmDependencies`。
3. 将任何硬编码到 "Assets/YourPackageName" 路径的路径替换为使用你的包路径 - 请参见下面的[转换资源路径](#converting-asset-paths)。
4. 为包中的所有脚本提供程序集定义文件。

## 包制作器工具

我们提供这个工具来简化过渡。以下步骤将指导你如何创建一个新项目，以从现有资产创建和管理一个兼容 VPM 的包。

1. 访问 [GitHub 上的 VPM 包模板仓库](https://github.com/vrchat-community/template-package)，并点击 "Use this Template" 在你自己的账户下创建一个新的包仓库。
2. 使用 git 克隆仓库，或从 Github 的 Code > Download zip 下载它。
3. 在 Unity 中打开新项目。
4. 将你的包导入到这个新项目的 Assets 文件夹中，就像它是一个 `.unitypackage` 样式的项目一样。

    ![导入 Assets 文件夹](/vcc.docs.vrchat.com/images/package-maker/folder-imported.png)

5. 从菜单选项 `VRChat SDK / Utilities / Package Maker` 打开包制作器工具窗口。

   ![包制作器窗口](/vcc.docs.vrchat.com/images/package-maker/window.png)

6. 在 "Project" 面板中，找到所有你的包资产的父文件夹，从 Assets 文件夹中拖放到窗口的 "Target Folder" 字段中。

   ![拖放 Assets 文件夹](/vcc.docs.vrchat.com/images/package-maker/drag-drop-folder.png)

7. 在包制作器的 "Package ID" 字段中为你的包输入一个 ID。标准做法是使用你拥有的域的反向域名表示法，如 com.vrchat.packagename。它需要在 VRChat 中是唯一的，以便与其他包友好相处，所以如果你没有域名，那么你可以尝试使用你的用户名。
8. 如果你的包需要任何 VRChat SDK 包，从 "Related VRChat Package" 下拉菜单中选择最合适的一个。
9. 一旦你选择了一个有效的目标文件夹和包 ID，"Convert Assets to Package" 按钮将被启用。现在按下它。
10. 工具将显示一个关于它即将进行的永久性更改的确认对话框。阅读它们并确认执行迁移，或取消返回并更改某些内容。

   ![确认对话框](/vcc.docs.vrchat.com/images/package-maker/confirm.png)

11. 确认后，迁移时将出现一个进度条。首先，工具将在你的项目的 "Packages" 目录中为你的包创建适当的文件和文件夹布局。然后它将把所有文件移动到相应的文件夹。你的 Assets 中的任何 "Editor" 文件夹中的内容，即使它是嵌套在几层下，也将被移动到你的包的顶级 Editor 文件夹中。所有其他文件将被移动到 Runtime 文件夹。
12. 如果你在 Unity 中关闭了自动刷新，你需要在这个时候按 Ctrl-R 刷新。此时，你的包 _可能_ 已经全部迁移并正常工作。你可以安全地从你的项目中移除包制作器工具和相关的 "PackageMakerWindowData.asset" 文件。

如果你的项目在这个时候有错误，你可能需要做一些[故障排除](#troubleshooting-migration-issues)工作。

## 自定义你的包
一旦你的包被创建，你可以通过在项目窗口中选择 'package.json' 文件来修改名称、描述等，路径为 `Packages/YourPackageName/package.json`。

![Manifest in the Inspector](/vcc.docs.vrchat.com/images/package-maker/manifest-inspector.png)

你可以在这里更改显示名称（例如 VRChat - Worlds 而不是 com.vrchat.worlds）、版本、描述、unity 包依赖等。如果你更改了包的 'Name'，那么你的程序集引用可能会断裂，因为它们引用的是你在迁移时输入的包名。

## 自动化

查看 [Package Template Repo 中的 Readme](https://github.com/vrchat-community/template-package/blob/main/README.md) 学习如何轻松设置自动化操作，让系统自动为你构建和存储包的新版本！

## 故障排除迁移问题

### 转换资源路径
如果你的包预期从自身找到并加载文件，那么这些路径可能需要更新。例如，如果你有一个编辑器窗口加载样式表，它可能长这样：
```c#
var styleSheet = AssetDatabase.LoadAssetAtPath<StyleSheet>("Assets/MyPackage/Editor/MyPackageStyle.uss");
```
这将不再起作用，因为该文件不再位于 Assets 文件夹中。有两种处理方式 - 你可以将项目转换为资源，或者将路径转换为在你的包内工作。以下是两种方法的示例。

#### 转换为资源

资源可以从任何文件夹加载，无需知道实际路径。Unity 会在你的 Assets 和 Packages 文件夹中的每个名为 "Resources" 的文件夹中查找。
1. 在我们的新包文件夹中，创建一个名为 "Resources" 的文件夹，放在顶级的 "Editor" 文件夹下。
2. 将文件 "MyPackageStyle.uss" 移动到这个 resources 文件夹。
3. 从 `AssetDatabase.LoadAssetAtPath` 切换到 `Resources.Load`，如下所示：

```c#
var styleSheet = Resources.Load<StyleSheet>("MyPackageStyle");
```
注意，上面的文件名已经去掉了扩展名 - 所以如果你的任何资源有相同的名字但扩展名不同，你需要重命名其中一个。

#### 使用 GUID

找出你的资源的 GUID，然后让 AssetDatabase 将 GUID 转换为 AssetPath，如下所示：
```c#
string styleSheetPath = AssetDatabase.GUIDToAssetPath("de965059f7f21034b8c112bfc7a0dc5f");
var styleSheet = AssetDatabase.LoadAssetAtPath<StyleSheet>(styleSheetPath);
```

### 其他问题
如果你遇到了因迁移而需要进行的手动更改，[在这里提交一个issues](https://github.com/vrchat-community/vpm-package-maker/issues)，这样我们就可以将信息添加到这个页面！