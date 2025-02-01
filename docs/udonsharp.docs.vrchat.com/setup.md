---
upstreamCommit: 66e5a0c1bb2b12b3de3d1341bb8de76083f7d070
---

# 准备工作

**所需工具**
- [Unity 2019.4.31f1](https://unity3d.com/get-unity/download/archive)
- [VRCSDK3 + Udon](https://vrchat.com/home/download)

**获取和安装**

你可以通过使用[VRChat Creator Companion](https://vcc.docs.vrchat.com/)（也称为VCC）、其[命令行界面（CLI）](https://vcc.docs.vrchat.com/vpm/cli/)或一个[启动模板](https://github.com/vrchat-community/template-udonsharp)来获取UdonSharp。

## 使用VRChat Creator Companion创建新的UdonSharp项目：
1. 安装最新版本的[Creator Companion](https://vrchat.com/home/download)。
2. 在主界面中，选择“新建”，然后选择“UdonSharp”，并选择一个文件夹。
3. 点击“打开项目”。就这样！

## 使用源代码控制创建新的UdonSharp项目：
1. 访问[UdonSharp项目模板仓库](https://github.com/vrchat-community/template-udonsharp)。
2. 使用“使用此模板”功能。
3. 使用你喜欢的Git客户端将项目克隆到你的电脑上。
4. 直接在Unity中打开项目，或者将其添加到VCC以便稍后轻松访问和更新。

## 将UdonSharp添加到现有Udon项目：
1. 将项目添加到VCC，如果需要的话进行迁移。
2. 从项目列表中选择项目。
3. 在Package列表上方的Repo下拉菜单中，确保选择了“Curated”。
   ![](/udonsharp.docs.vrchat.com/images/repos-official-curated.png)
4. 在列出的包中找到UdonSharp并点击“添加”。

## 通过CLI创建或添加UdonSharp
CLI是一个高级用户工具，目前是非Windows系统上管理VPM项目的最佳方式。
1. [从模板创建新项目](https://vcc.docs.vrchat.com/vpm/cli/#new)
2. [将包添加到项目](https://vcc.docs.vrchat.com/vpm/cli/#add-package)

**开始使用**

1. 在你的场景中创建一个新的对象。
2. 向你的对象添加一个Udon行为组件。
3. 在“新建程序”按钮下方点击下拉菜单，选择“Udon C#程序资产”。
4. 现在点击“新建程序”按钮，这将为你创建一个新的UdonSharp程序资产。
5. 点击“创建脚本”按钮，选择保存脚本的目的地和名称。
6. 这将创建一个准备好开始工作的模板脚本，请在你选择的编辑器中打开该脚本并开始编程。

**资源浏览器资产创建**

除了从UdonBehaviour创建资产外，你还可以这样做：
1. 在你的项目资源浏览器中右键点击。
2. 导航到“创建”>“U#脚本”。
3. 点击“U#脚本”，这将打开一个创建文件对话框。
4. 为你的脚本选择一个名称并点击保存。
5. 这将创建一个.cs脚本文件和一个设置好的UdonSharp程序资产，它们位于同一目录中。