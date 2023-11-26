# 使用源代码控制与 VPM

我们非常喜欢源代码控制系统，用于保存你的工作和协作内容。我们使用 [Git](https://git-scm.com/) 来管理我们自己的包，甚至 VRChat 客户端也是如此。VPM 被设计为与源代码控制友好相处，以下是具体的工作方式。如果你使用其他系统，如 [Plastic](https://docs.unity3d.com/2019.4/Documentation/Manual/PlasticSCMPlugin.html)，你可以通过 [反馈](https://feedback.vrchat.com/creator-companion-beta) 向我们发送分享的提示。

## 包含和排除的内容

我们通常使用 [这个 Unity .gitignore](https://github.com/github/gitignore/blob/main/Unity.gitignore) 来开始我们的项目，它会忽略大多数生成的文件等。

VRChat SDK 从技术上讲只允许由 VRChat 分发，不应该提交到源代码控制。我们基于这个想法来管理所有与源代码控制一起使用的 VPM 兼容包。有了这个想法，以下是应该包含或不包含的内容：

### 包含：
* `Assets` 文件夹
  * Unity 所需，包含你的所有项目特定资产
* `ProjectSettings` 文件夹
  * Unity 所需，包含你的所有项目设置，如物理和标签。
* `Packages` 文件夹
  * Unity 所需，包含你的项目清单（Unity 包依赖项）以及 [解析器](/vcc.docs.vrchat.com/vpm/resolver) 和 VPM 清单。
* `Packages\com.vrchat.core.vpm-resolver` 文件夹
  * 这个工具可以在没有 VCC 的情况下将 VPM 包恢复到你的项目中。
  0
### 排除：
* 所有 VPM 包（在 `Packages/` 中），除了解析器
* 典型的临时/缓存文件夹，如 `Library`，`Temp` 等。

如果你的项目的 `Packages` 文件夹中没有 `.gitignore` 文件，VPM 将添加一个，并排除所有以 `com.vrchat.*` 开头的文件夹，同时通过特别包含 `com.vrchat.core.*` 来添加解析器的排除。

## 在新克隆的项目中会发生什么
当有人从源代码控制获取你的项目时，如果创建者遵循了上述指南，项目将缺少一些必需的包。此时最好的做法就是简单地在 Unity 中打开项目，并在提供恢复缺失包的对话框中按 "OK" - 参见 [解析器](/vcc.docs.vrchat.com/vpm/resolver#using-it)。