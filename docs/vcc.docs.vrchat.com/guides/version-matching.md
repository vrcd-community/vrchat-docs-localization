# 版本匹配

我们使用 [语义化版本](https://semver.org/) 来管理 VRChat 包管理器 (VPM) 中的 SDK 包，而不是 `.unitypackage` 格式中使用的基于日期的格式。本文档显示了最新 SDK 版本的两种版本之间的匹配。

## 3.2.0

### 概述

添加 DataContainers，PhysBones 1.1 ('Squishy PhysBones')，AsyncGPUReadback 等。

### 特性

- **DataContainers！** 为 Udon 提供列表，字典和 JSON！
  - 添加了 DataLists 和 DataDictionaries，为 Udon 提供了类似于 Lists 和 Dictionaries 的功能。
    - 列表和字典通常需要支持泛型，而 Udon 不支持它们，所以这是通过首先将您的数据放入 DataTokens 中来完成的，这些 DataTokens 能够存储任何值。
  - 添加了 VRCJSON，一个帮助类，可以将 JSON 字符串（例如从 [远程字符串加载](/creators.vrchat.com/worlds/udon/string-loading) 接收到的）转换为 DataLists 和 DataDictionaries，反之亦然。
  - [阅读 Data Containers / VRCJSON 文档页面](https://creators.vrchat.com/worlds/udon/data-containers/) 以了解更多。

- **AsyncGPUReadback！** 这允许您从 GPU 和着色器读取数据，而不会产生重大的性能损失
  - 添加了 `VRCAsyncGPUReadback.Request` 函数和相应的 `OnAsyncGpuReadbackComplete` 事件
  - 这些可以在不产生太大性能影响的情况下，将数据从 GPU 读取到 CPU 内存中，但需要延迟一帧或更多帧的数据
  - 查看 [ASyncGPUReadback](/creators.vrchat.com/worlds/vrc-graphics/asyncgpureadback) 的文档以获取更多信息。

### 改进

- **Squishy PhysBones！** 您现在可以实现 PhysBones，它们可以 "squish" 或压缩，而不是拉伸！
  - 要设置 Squishy PhysBone，将您的 PhysBone 组件切换到版本 1.1 并调整 "Max Squish" 值。
  - **所有的 PhysBones 现在都有版本了！** 您可以在 PhysBone 组件中更改版本。这样做是为了让我们能够安全地添加新功能。
    - 旧的 PhysBones 自动在版本 1.0 上。1.0 包括 SquishyBones。
    - 重力和刚度的变化在版本 1.1 上。下面还有一些其他的变化。
    - **所有版本都将得到维护。** 1.0 不会被弃用，但它是功能锁定的，不会添加新功能。每次我们添加一个新的 "破坏性" 功能，我们都会增加版本。
  - PhysBones 1.1：**重力和刚度的行为不同，如果您从 1.0 升级，需要新的值。**
    - 重力现在是骨头在静止时应该直接指向世界空间上/下的比例。
    - 刚度现在是骨头试图保持在其先前方向的比例。
    - 以前，这些值是您需要与拉力因子平衡的直接力。我们认为这应该更直接，更容易使用。
    - 这些变化也是为了支持添加到组件的新功能所必需的。
  - **已添加 Max Squish 值。** 这是骨头可以缩小的百分比。
    - 已添加 `_Squish` 参数。它的工作方式类似于 `_Stretch` 参数。
  - PhysBones 1.1：**已添加 Stretch Motion 值。** 这是运动影响骨头拉伸或压缩的比例。
  - 现在可以折叠 VRCPhysBone 组件 UI 中的值类别。
    - 类别还包括一个帮助按钮，它将带您到该主题的在线文档。
  - [PhysBones](/creators.vrchat.com/avatars/avatar-dynamics/physbones) 文档将在 PhysBones 1.1 和 Squishy PhysBones 的公开测试期间更新。
  - 网络 ID 工具现在适用于 Avatar 项目中的 PhysBones
    - 这个工具允许在不同平台上的虚拟形象之间同步 PhysBones，即使它们有不同的 GameObject 层次结构
      - 这个高级工具只有在您的 PC 和 Quest 虚拟形象有不同的层次结构时才有用！
      - 如果您不知道为什么要这样做，您不需要担心这个。
    - [查看完整文档以获取更多信息](/creators.vrchat.com/worlds/udon/networking/network-id-utility)

### 自 3.2.0-beta.1 以来的变化
- 重新添加了一些被移除的公共方法，包括 `GetOrAddComponent`
  - 这些现在被标记为 `[Obsolete]`，请确保迁移不再使用它们，因为它们将在以后的日期被正确地移除
- 修复了在 Unity 中抓取 PhysBones 的一些问题
- PhysBone 的拉伸不再被限制
  - 这恢复了之前的行为
- DataContainers：修复了在使用 `Add` 后 `GetKeys` 和 `GetValues` 返回错误值的问题

### SDK API 变化
我们正在努力记录 SDK 的 "公共 API"，这将保证在小版本和补丁版本之间不会改变。与此同时，这里有一些自 3.1.13 以来发生的变化：

#### 扩展方法
我们已经将一些扩展方法移动到 VRC.Core 命名空间。
如果您正在使用 `Transform.Reset()` 方法，您应该改用 `VRC.Core.ExtensionMethods.Reset(Transform t)`。
以下是您应该做的其他类似的变化：
- `Transform.GetHierarchyPath` > `VRC.Core.ExtensionMethods.GetHierarchyPath(Transform t, Transform relativeTransform)`
- `Transform.GetShortHierarchyPath` > `VRC.Core.ExtensionMethods.GetShortHierarchyPath(Transform t, Transform relativeTransform)`
- `GameObject.GetOrAddComponent` > `VRC.Core.ExtensionMethods.GetOrAddComponent(GameObject go)`
- `Type.GetFriendlyGenericTypeName` > `VRC.Core.ExtensionMethods.GetFriendlyGenericTypeName(Type t, bool includeNamespaces)`

#### 程序集移动

PhysBoneGrabHelper 已经移动到其他程序集，您可能需要在您的代码中现在引用 `VRC.SDK3A` 程序集。[这里有一个修复示例](https://github.com/BlackStartx/VRC-Gesture-Manager/pull/22)。

#### 不适用于公共使用的变更
此外，我们对以下类进行了一些更改，这些类并不被视为 SDK 的公共 API 的一部分，您应尽快停止使用它们。
我们将在五月底前发布一份列出我们 SDK 中所有排除项的文档。
- `ApiCacheEditor`
- `VRC.Core.ApiCache`
- `VRC.Core.ApiCache.CachedResponse`
- `VRC.Core.ApiCache.CacheEntry`
- `VRC.Core.ApiFeedback`
- `VRC.Core.ApiFile`
- `VRC.Core.ApiModel`
- `VRC.Core.ApiModel.SupportedPlatforms`
- `VRC.Core.APIResponseHandler`
- `VRC.Dynamics.PhysBoneManager.Bone`
- `VRC.Dynamics.PhysBoneManager.Chain`
- `VRC.Dynamics.PhysBoneManager.PhysBoneJob`
- `VRC.Dynamics.PhysBoneManager.Pose`
- `VRC.Dynamics.VRCPhysBoneBase`
- `VRC.SDK3.Dynamics.PhysBone.VRCPhysBoneEditor`
- `VRC.Udon.ClientBindings.UdonClientInterface`
- `VRC.Udon.Security.UnityEngineObjectSecurityBlacklist`
  UdonManager 将有部分属于公共 SDK API 的部分，但对 '黑名单' 方法进行了更改，这些方法不应直接使用。

## 3.1.13

### 概述

修复了与 Avatars 3.0 Manager 的兼容性问题。

### Bug 修复

* 将 VRC_AvatarParameterDriver 中的 'hasInitialized' 字段名称恢复为 'initialized'，以避免破坏任何期望此字段名称的现有包。

## 3.1.12

### 概述

为 Udon 提供了新的 VRCGraphics 功能，新的虚拟形象性能指标和 bug 修复。现已与 VRChat 2023.1.2p4 同步。

### 新功能

* 约束现在在虚拟形象的性能统计中被计数。它们目前不会影响您的性能排名。
* 为虚拟形象添加了对 "VelocityMagnitude" 动画属性的支持。
* 为 VRCPhysBone 添加了 "Snap To Hand" 选项。启用后，抓取骨骼时，它会对准用户的手，否则抓取会有偏移，除非被拖动，否则不会初始移动。
* 为 VRCPhysBones 添加了 "Reset When Disabled" 选项。启用后，当组件被禁用时，骨骼将重置到它们的休息位置。
* 在 VRCPhysBones 的各种权限中添加了自我/他人过滤。
  * 允许碰撞
  * 允许抓取
  * 允许摆姿势
* 纹理 VRAM 使用现在计入您的虚拟形象的总体性能评级。
* 添加了设置虚拟形象参数以不同步的能力，解决了 [从表达菜单控制不同步参数](https://vrchat.canny.io/avatar-30/p/feedback-control-the-not-sync-parameters-from-expressions-menu) 的问题。
* Udon 现在可以访问临时 RenderTextures，以及通过 [VRCGraphics](/creators.vrchat.com/worlds/vrc-graphics/#vrcgraphics) 为 RenderTexture，Texture2D，Texture3D 和 Sprite 提供构造函数。


### Bug 修复

* GraphicsSettings 只在进行更改时保存到磁盘，以防止不必要的缓存破坏。
* 修复了在启用 isAnimated 时可能导致 PhysBones 抖动的问题。
* 当连接丢失时，重新连接到 Creator Companion。
* 确保 UdonEvent 从主线程调用。这避免了当图像下载失败并且 UdonBehaviour 尝试使用 Unity API 方法时出现的意外线程错误。

### 其他更改

* 在 UdonBehaviours 的 OnDeserialization() 方法中添加了 OnDeserializationResult 参数。这使您能够查看此数据发送和接收的时间。

## 3.1.11

从这个版本开始，我们将不再发布解压到您的 `Assets` 文件夹的传统 `.unitypackage` 文件。此页面将作为 SDK 的更新日志！

### 概述

添加了远程字符串加载、远程图像加载、MIDI 播放和模拟时间功能！

### 新功能

* Udon 现在可以[加载远程图像](/creators.vrchat.com/worlds/udon/image-loading)。关闭了[这个 Canny](https://feedback.vrchat.com/feature-requests/p/hey-when-will-dynamic-image-be-implemented)
* Udon 现在可以[加载远程字符串](/creators.vrchat.com/worlds/udon/string-loading)。关闭了[这个 Canny](https://feedback.vrchat.com/vrchat-udon-closed-alpha-feedback/p/vrchat-udon-web-api)
* Udon 可以[播放 MIDI 数据](/creators.vrchat.com/worlds/udon/midi/midi-playback)，与音频同步。
* Udon 现在可以访问[玩家](/creators.vrchat.com/worlds/udon/players/#simulationtime)和[具有网络功能的 GameObjects](/creators.vrchat.com/worlds/udon/networking/network-components#networking-properties)的模拟时间。
* OnDeserialization 现在包含 [DeserializationResult](/creators.vrchat.com/worlds/udon/networking/network-components#ondeserializationdeserializationresult)。

### Bug 修复
![UdonBehaviour Inspector With Warning](https://user-images.githubusercontent.com/737888/218818072-92616039-c135-4c6c-86f0-02195bddffcd.png)
* UdonBehaviours 的 Unity 检查器现在会检测缺失的 `VRCUrlInputField` 变量，并提供重新加载 SDK 的选项，以防这个组件没有正确加载。关闭了[这个 Canny](https://feedback.vrchat.com/sdk-bug-reports/p/vrc-url-input-field-component-missing-from-project-randomly)。（这是一个已知问题，将在我们可以升级到 Unity 2020 或更高版本时修复。）
* 修复了在从通用切换到人形骨架时，虚拟形象描述符中 FX 层重复的问题。
* 修复了 Unity 无限重载程序集卡住的问题。
* 将您可以从 SDK 窗口进行构建和测试的客户端数量限制在最少 0 个和最多 8 个。

### 其他更改

* 添加了 `MidiPlaybackExampleScene.scene` 和相关资源以演示 Midi 播放。
* 在 `UdonExampleScene.scene` 中添加了一个简单的远程图像加载器。
* 加快了 Udon 程序的加载速度。
* 移除了旧的 SDK 更新窗口。

### 已知问题

* 如果您在 Midi 播放器中更改 midi 轨道，而可视化器是打开的，那么可视化器不会更新到新的轨道，除非它被关闭然后重新打开。

## 3.1.9
* 世界 - VRCSDK3-WORLD-2022.10.18.19.47_Public.unitypackage
* 虚拟形象 - VRCSDK3-AVATAR-2022.10.18.19.47_Public.unitypackage

* Udon 节点图：添加了大量的热键！
  * 按住以下键之一，然后在图上任意位置点击以创建相应的节点：
    * `1` : float
    * `2` : Vector2
    * `3` : Vector3
    * `4` : Vector4
    * `b` : Branch
    * `+` : float addition
    * `-` : float subtraction
    * `=` : float equality comparison
    * `Shift+B` : Block
  * 按住 `C`，然后点击一个常量将其转换为变量
    * 您也可以通过右键点击常量来做到这一点
  * `Ctrl+G` 快速分组
  * `L+Click` 记录选定节点的值
  * `Shift+A` 对齐节点
  * 按住 `Shift+F`，然后点击一个输出数组类型的节点，自动生成 ForEach 循环
  * 上述大多数操作也可以通过右键菜单完成
* 添加了一个新的顶部栏，显示当前打开的图，并在您打开更多图时向其打开新的 "标签"
  * 您可以使用 X 按钮关闭每个标签
* 侧边栏中的事件/组条目可点击，便于快速导航
* 在顶部添加了搜索栏，允许您搜索您的活动图
  * 按 `Ctrl+F` 将焦点移动到搜索栏
  * 输入至少 3 个字母后激活搜索
  * 当有多个搜索结果时，按 Enter 将在它们之间跳转
* 顶部栏上有一个新的 "高亮流" 切换，启用后，将高亮通过流边缘连接的节点
  * 使用此功能快速查看程序如何到达特定节点
  * 如果节点没有任何流连接 - 什么都不会发生
      
### 变更
* 在 UdonSyncPlayer 示例中更改视频链接，指向新的位置

---

## 3.1.8
* 世界 - VRCSDK3-WORLD-2022.10.12.21.07_Public.unitypackage
* 虚拟形象 - VRCSDK3-AVATAR-2022.10.12.21.07_Public.unitypackage

添加了3个可以被任何虚拟形象或世界着色器访问的着色器全局变量：
* float _VRChatCameraMode:
  * 0 - 正常渲染
  * 1 - 在 VR 手持相机中渲染
  * 2 - 在桌面手持相机中渲染
  * 3 - 为截图渲染

* float _VRChatMirrorMode:
  * 0 - 正常渲染，不在镜像中
  * 1 - 在 VR 中查看的镜像中渲染
  * 2 - 在桌面模式下查看的镜像中渲染

* float3 _VRChatMirrorCameraPos - 镜像相机的世界空间位置（独立于眼睛，"居中"在 VR 中）

* 世界中的 InputFields 现在在与之交互时会打开键盘模式。如果不希望这种行为，可以添加新创建的 `VRCInputFieldKeyboardOverride` 组件来指定如何覆盖此行为。将其设置为 `Default` 将打开触摸模式，而 `Override` 则不会。
* VRCMirrorReflection 上的新选项 `cameraClearFlags`，可以覆盖镜像中使用的相机清除标志
  * 默认值是 `MirrorClearFlags.FromReferenceCamera`，保留当前的行为，即与活动相机一样渲染
* 选项 `customSkybox` 和 `customClearColor` 允许镜像特定的天空盒和清除颜色
* 现在可以在世界中将重力设置为 0 或负值
* 修复：用户提供的 FX 层上的遮罩被忽略，并阻止了 Gesture transform 动画的工作。[文档已更新](/creators.vrchat.com/worlds/udon/using-build-test#fx)。
* 添加了几个与图形和着色器操作相关的新 Udon 节点：
  * VRCGraphics.DrawMeshInstanced
  * VRCShader.SetGlobalFloat
  * VRCShader.SetGlobalFloatArray
  * VRCShader.SetGlobalVector
  * VRCShader.SetGlobalVectorArray
  * VRCShader.SetGlobalMatrix
  * VRCShader.SetGlobalMatrixArray
  * VRCShader.SetGlobalInteger
  * VRCShader.SetGlobalTexture
  * VRCShader.SetGlobalColor
* VRCShader 函数在某些情况下接受字符串输入（主要是纹理名称）。对于这些输入，您必须使用 _Udon 前缀
  * 有一个例外。VRCShader 函数也会接受精确的字符串 _AudioTexture，以适应现有的广泛使用的社区创建的 AudioLink 系统

## 3.1.7

没有匹配的 .unitypackage 版本

* 在尝试获取长度之前，检查场景描述符是否有空的生成对象，修复了手动向您的世界添加场景描述符时的问题。
* 在加载示例场景之前提示用户保存他们的场景，修复了[这个 Canny 问题](https://feedback.vrchat.com/sdk-bug-reports/p/switching-to-the-example-scene-deletes-unsaved-changes)。

## 3.1.6
* 世界 - VRCSDK3-WORLD-2022.08.29.20.48_Public.unitypackage
* 虚拟形象 - VRCSDK3-AVATAR-2022.08.29.20.48_Public.unitypackage

---

* 世界中的 InputFields 现在在与之交互时会打开键盘模式。如果不希望这种行为，可以添加新创建的 `VRCInputFieldKeyboardOverride` 组件来指定如何覆盖此行为。将其设置为 `Default` 将打开触摸模式，而 `Override` 则不会。
* VRCMirrorReflection 上的新选项 `cameraClearFlags`，可以覆盖镜像中使用的相机清除标志
  * 默认值是 `MirrorClearFlags.FromReferenceCamera`，保留当前的行为，即与活动相机一样渲染
* 选项 `customSkybox` 和 `customClearColor` 允许镜像特定的天空盒和清除颜色
* 现在可以在世界中将重力设置为 0 或负值
* 修复：用户提供的 FX 层上的遮罩被忽略，并阻止了 Gesture transform 动画的工作。[文档已更新](/creators.vrchat.com/worlds/udon/using-build-test#fx)。
* 添加了几个与图形和着色器操作相关的新 Udon 节点：
  * VRCGraphics.DrawMeshInstanced
  * VRCShader.SetGlobalFloat
  * VRCShader.SetGlobalFloatArray
  * VRCShader.SetGlobalVector
  * VRCShader.SetGlobalVectorArray
  * VRCShader.SetGlobalMatrix
  * VRCShader.SetGlobalMatrixArray
  * VRCShader.SetGlobalInteger
  * VRCShader.SetGlobalTexture
  * VRCShader.SetGlobalColor
* VRCShader 函数在某些情况下接受字符串输入（主要是纹理名称）。对于这些输入，您必须使用 _Udon 前缀
  * 有一个例外。VRCShader 函数也会接受精确的字符串 _AudioTexture，以适应现有的广泛使用的社区创建的 AudioLink 系统

## 3.1.6-beta.1

* 世界 - VRCSDK3-WORLD-2022.08.12.22.39_Public.unitypackage
* 虚拟形象 - VRCSDK3-AVATAR-2022.08.12.22.39_Public.unitypackage

---

- 修复：用户提供的 FX 层上的遮罩被忽略，并阻止了 Gesture transform 动画的工作。文档已更新：/creators.vrchat.com/worlds/udon/using-build-test#fx
- 所有输入字段都将弹出键盘，我们添加了一个组件，如果您不希望在字段上使用这个功能，可以禁用它
- 添加了自定义镜像天空盒和清除标志的能力
- 添加了几个与图形和着色器操作相关的新 Udon 节点：
  - `VRCGraphics.DrawMeshInstanced`
  - `VRCShader.SetGlobalFloat`
  - `VRCShader.SetGlobalFloatArray`
  - `VRCShader.SetGlobalVector`
  - `VRCShader.SetGlobalVectorArray`
  - `VRCShader.SetGlobalMatrix`
  - `VRCShader.SetGlobalMatrixArray`
  - `VRCShader.SetGlobalInteger`
  - `VRCShader.SetGlobalTexture`
  - `VRCShader.SetGlobalColor`
- 现在可以在世界中将重力设置为 0 或负值

## 3.1.5

没有匹配的 .unitypackage 版本

---

* 在重新导入给定的 SDK 后，将 "canary file" 写入项目的 Library 文件夹（所以只有在 Library 重建时才会再次自动重新加载）。
* 使用 EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo() 替代我自己编写的检测方法
* 使用 Async Task 替代 EditorCoroutine 来等待编译完成

## 3.1.4

没有匹配的 .unitypackage 版本

---

* 现在会等到场景加载完毕后再运行 SDK3ImportFix
* 将一个文件写入 Assets 目录时解释如何找到样本，而不是弹出一个窗口并写入项目注册表。
* 在检查受保护的文件路径时，使用跨平台的 `Path.DirectorySeparatorChar` 而不是 `/`。

## 3.1.3

没有匹配的 .unitypackage 版本

---

* 在重新加载 SDK 后自动重新加载当前场景，这应该可以自动修复损坏的 VRCUrlInputFields 和其他缺失的脚本。
* 在重新加载 SDK 后清除控制台，以帮助用户查看是否有任何错误持续存在。
* 当项目首次打开时，显示关于样本被移动的消息。

## 3.1.2

* 世界 - VRCSDK3-WORLD-2022.07.26.21.44_Public
* 虚拟形象 - VRCSDK3-AVATAR-2022.07.26.21.45_Public

---

* 在启动多个本地客户端之间添加暂停，以避免触发 EAC
* 项目加载时总是重新加载 SDK
- 转换后的 DB 组件现在将在应用程序和 SDK 中匹配启用/禁用状态
- 在多个本地测试客户端启动之间添加了短暂的延迟，以解决同时启动时可能出现的一些问题
- 修复了在虚拟形象设置过程中左/右脚交换的问题