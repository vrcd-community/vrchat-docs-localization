# 创建包列表

你可以创建并分享你自己的自定义包列表，包括你自己的包以及来自社区的开源包。

::: warning

发布后不要删除你的 VPM 包的旧版本!
删除旧版本将破坏使用[版本控制](https://vcc.docs.vrchat.com/vpm/source-control)的项目。

:::

## 使用 GitHub

发布包和列表的最简单方法是使用 [GitHub](https://github.com/)。你可以使用免费账户完成所有需要的操作。如果你使用其他版本控制服务，或只是想自己实现一个，参见下面的[使用你自己的服务](#using-your-own-services)。

### 1. 创建一个新的列表仓库

点击 [![Use This Template](https://user-images.githubusercontent.com/737888/185467681-e5fdb099-d99f-454b-8d9e-0760e5a6e588.png)](https://github.com/vrchat-community/template-package-listing/generate)
开始一个基于官方包列表模板的新 GitHub 项目，并按照那里的指示完成创建你自己版本的操作。然后你只需要修改 source.json 文件，指向你想要列出的包。

### 2. 选择一个兼容的 GitHub 仓库
你必须选择一个托管在 GitHub 上的、兼容 VPM 的包，并使用我们作为[包模板](https://github.com/vrchat-community/template-package)的一部分发布的[自动化配置](https://github.com/vrchat-community/template-package/blob/main/.github/workflows/release.yml)。如果你已经找到了，跳到[将仓库添加到你的列表源](#3-add-repos-to-your-listing-source)。

#### 2A. 向现有仓库添加自动化
开始的最简单方法是使用[包模板](https://github.com/vrchat-community/template-package)仓库从头开始创建一个新包。然而，向现有仓库添加自动化也很简单。

1. 将 [release](https://github.com/vrchat-community/template-package/blob/main/.github/workflows/release.yml) GitHub action 添加到你的仓库，位置为 `.github/workflows/release.yml`。如果你可以在你的仓库中点击 "Actions" 标签并看到一个名为 "Build Release" 的 action，那么它就在正确的位置。
2. 按照 [设置自动化](https://github.com/vrchat-community/template-package#-setting-up-the-automation) 下的指示进行操作。
3. 通过从你的 Actions 标签页运行 "Build Release" 的 action，创建至少一个兼容的 Release。

### 3. 将仓库添加到你的列表源
编辑 `source.json` 文件以添加要包含的包。

要包含托管在 GitHub 上并通过使用我们的模板具有 VPM 兼容的 Releases 的包，你可以简单地编辑 "githubRepos" 数组，用新的列表替换示例 "vrchat-community/clientsim" 条目，格式为 "owner/repository"。

要包含托管在其他地方的包，你需要编辑 'packages' 数组。
1. 将 "com.vrchat.udonsharp" 的条目更改为目标包的 ID。
2. 从这个第一条目的 'releases' 数组中删除现有的 urls，并添加实际的下载链接。

### 4. 运行构建仓库列表的 Action
每当你直接在 GitHub 的主分支上编辑 source.json，或者将对 source.json 的更改推送到你的主分支时，这应该会自动发生。

## 使用你自己的服务

请参考 [示例列表](https://vrchat-community.github.io/template-package/index.json)。为了使列表有效，你需要以下字段：

* name
* author
* id
* url
* packages
  * {package id}
    * versions
    * {version string in SemVer}
      * {valid VPM manifest} _(完整的 `package.json` 内容)_

如果你将这些内容发布到公开可访问的 URL ，创作者助手将能够读取它并提供在列表中的包
