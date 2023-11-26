# 社区仓库

从创作者助手的 2.1.0 版本开始，你可以将社区仓库添加到你的可用包列表中。这使你可以轻松地使用和更新其他创作者提供的包。

## 如何添加社区仓库

一些仓库可能在他们的网站上提供一个 "添加到 VCC" 的按钮。如果是这样，你只需点击该按钮就可以将仓库添加到你的 VCC。

如果没有这个按钮 - 请按照以下步骤操作。

- 打开 VCC 并转到设置页面。
- 确保你的版本是 2.1.0 或更新版本（它显示在右上角）。
  - 如果不是，请向下滚动并点击 "check updates"。
- 点击 "Packages" 标签。

![已添加的仓库](/vcc.docs.vrchat.com/images/installed-repositories.png)

- 点击 "添加仓库" 按钮。
- 在出现的字段中，输入你想要添加的仓库的 URL。

![通过仓库索引添加](/vcc.docs.vrchat.com/images/add-listing-field.png)

- 点击 "添加"。
- 一个弹窗会出现，显示你关于仓库的信息，以及它包含的包的列表。
- 如果一切看起来都好，点击 "我明白了，添加仓库" 按钮。

![添加仓库](/vcc.docs.vrchat.com/images/add-listing-modal.png)

- 仓库将被添加到你已安装的仓库列表中。
- 你应该能够导航到你的任何项目，并在列表中看到新仓库的包。

![添加列出的包](/vcc.docs.vrchat.com/images/add-listing-new-package.png)

## 高级用法

### 提供请求头

一些仓库可能需要你在请求中提供额外的请求头。例如，如果你想访问一个私有仓库，你可能需要提供一个授权令牌。

VCC 允许你向你的请求添加自定义请求头。要做到这一点，按照以下步骤操作：

- 按照上述步骤操作，直到 URL 字段出现。
- 点击字段旁边的齿轮图标。
- 一个请求头列表将出现，允许你添加新的请求头信息。

![添加请求头](/vcc.docs.vrchat.com/images/add-listing-field-headers.png)

- 提供所需的请求头信息，然后点击 "添加"。
- 照常进行仓库添加。

## 如何移除社区仓库

你可以通过简单地点击已安装仓库列表中的 "移除" 按钮来移除任何仓库。

## 如何启用或禁用社区仓库

已安装仓库列表中的每个仓库左边都有一个复选标记。如果复选标记被选中，那么仓库就被启用，并会在项目页面的可用包列表中显示其包。

你也可以通过使用 "已选仓库" 下拉菜单在项目页面上切换启用的仓库。

![已选仓库](/vcc.docs.vrchat.com/images/selected-repos.png)

## 如何创建你自己的仓库

如果你是一个想要为社区发布你自己的包的创作者，你可以创建你自己的仓库。你可以在 [创建包列表](/vcc.docs.vrchat.com/guides/create-listing) 部分找到更多关于如何做到这一点的信息。

## 社区仓库信息存放位置

仓库信息存储在你的 settings.json 文件中，你可以通过在设置页面点击 "settings.json" 按钮来访问它。

它保存在 `userRepos` 键下，可能看起来像这样

```json
"userRepos": [
  {
    "localPath": "C:\\Users\\userName\\AppData\\Local\\VRChatCreatorCompanion\\Repos\\5036b8ee-5853-49e6-82bb-a626a0da0080.json",
    "url": "https://vrchat-community.github.io/template-package/index.json",
    "name": "VRChat Example Package Listing",
    "id": "com.vrchat.demo-template.listing",
    "headers": {}
  }
]
```

`localPath` 键是你计算机上缓存的仓库文件的路径。缓存是 VCC 的内部机制，一般情况下，你不需要修改它。