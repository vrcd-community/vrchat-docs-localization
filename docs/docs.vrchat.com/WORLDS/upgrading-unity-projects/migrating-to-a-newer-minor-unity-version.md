# 迁移到新的 Unity 大版本

VRChat 偶尔会更新 Unity 大版本。

与大版本的升级相比，在小版本之间升级项目非常简单。

## 升级步骤

### 步骤 1 - 安装新的 Unity 版本

关闭所有打开的项目。

检查[当前支持的 Unity 版本](/creators.vrchat.com/sdk/current-unity-version)并通过 Unity Hub 安装新版本的 Unity。

虽然我们在该页面上列出了独立安装程序，但我们 *非常建议* 您使用 Hub。在这些步骤中，我们假设您使用的是 Hub。

### 第 2 步 - 制作项目副本

在进行可能具有破坏性的重大修改之前，请务必创建项目备份。您可以复制一份临时项目，然后在临时项目中操作，而不是主项目。如果出现问题您就可以删除临时项目并重新开始。

如果您是高级用户，知道如何使用版本控制，比如 [git](https://git-scm.com/)，那就一定要使用它。这样管理备份就变得轻而易举了。

### 第 3 步 - 打开项目

打开新版本中的临时项目。

您会收到一些升级警告。这并不代表出了什么问题！点击“是”，“确定”或其他有"肯定"含义的按钮。

等待一段时间后，迁移将自动完成。

### 第 4 步 - 更新 SDK

小版本升级并不总是需要 SDK 更新。但是如果需要，请更新 SDK。

迁移后关闭项目，然后使用 [VCC](/vcc.docs.vrchat.com/index.md) 升级 SDK。

### 提示和其他信息

以下是一些额外的提示，可能会对您的工作有所帮助。

### Unity 警告

在迁移过程中，可能会弹出一些 Unity 警告，您可以放心点击继续。以下是您可能会看到的一些警告。

<center>

![img](/docs.vrchat.com/images/migrating-to-a-newer-minor-unity-version-1.png)

![img](/docs.vrchat.com/images/migrating-to-a-newer-minor-unity-version-2.png)

</center>

### 清理副本

如果项目很大，迁移可能需要很长时间。如果项目特别大，有几个文件夹不需要迁移。您可以从副本中安全地删除这些文件夹。

您可以安全地删除以下文件

```txt
/Library/
/Temp/
/Obj/
/Build/
/Builds/
/Logs/
/UserSettings/
```

## 版本警告

SDK 可能会警告您使用了错误的版本，即使您 _知道_ 使用的是正确的版本。

<center>

![img](/docs.vrchat.com/images/migrating-to-a-newer-minor-unity-version-3.png)

</center>

如果您确定使用的是正确的版本，则可以忽略此消息。