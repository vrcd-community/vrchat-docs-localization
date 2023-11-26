# 仓库

仓库是创作者可以在其项目中使用的兼容包的列表。

## 格式
仓库列表以 JSON 格式提供，包含名称、作者和包列表。

由于每个 VPM 兼容的包都有一个包含所有信息的清单文件（package.json），我们在此列表中使用它。每个清单作为[版本号](https://semver.org/)的**值**包含在内，包名作为**packages**对象的一部分列出。

了解更多关于[包清单格式](/vcc.docs.vrchat.com/vpm/packages#vpm-manifest-additions)。

以下是一个仓库列表的示例：

```json
{
  "name": "VRChat Official SDK Packages",
  "id": "com.vrchat.official",
  "url": "https://vrchat.github.io/packages/index.json",
  "author": "hello@vrchat.com",
  "packages": {
    "com.vrchat.base": {
      "versions": {
        "3.0.0": {
          "name": "com.vrchat.base",
          "url" : "https://packages.vrchat.com/com.vrchat.avatars-3.1.0.zip",
          // rest of the manifest goes here...
        },
        "3.0.1": {
          "name": "com.vrchat.base",
          "url" : "https://packages.vrchat.com/com.vrchat.base-3.1.0.zip",
          // rest of the manifest goes here...
        }
      }
    },
    "com.vrchat.worlds": {
      "versions": {
        "3.0.0": {
          "name": "com.vrchat.worlds",
          "url" : "https://packages.vrchat.com/com.vrchat.worlds-3.1.0.zip",
          // rest of the manifest goes here...
        }
      }
    }
  }
}
```
在上述示例中，每个版本清单的其余部分将按键值逐一列出，而不是使用 "例如" 等含糊不清的字眼。要查看带有完整数据的实时示例，请查看 [官方 VRChat 包仓库](https://packages.vrchat.com/official)。

请注意，如果你正在使用本地仓库列表文件并通过 [CLI](/vcc.docs.vrchat.com/vpm/cli) 添加包，你可以省略 URL 字段。