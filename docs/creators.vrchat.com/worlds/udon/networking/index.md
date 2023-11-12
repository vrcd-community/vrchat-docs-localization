# Udon 网络
::: info 总览
多人游戏体验是 VRChat 的核心，所以创建一个可以和玩家互动并在玩家间同步数据的世界是创建世界的金科玉律。

这个页面介绍了驱动我们的网络系统的概念。当你理解了这些基础内容，你就可以深入了解以下内容了：

- [网络组件 (Network Components)](https://creators.vrchat.com/worlds/udon/networking/network-components)
- [网络系统限制和窍门 (Network Specs and Tips)](https://creators.vrchat.com/worlds/udon/networking/)
:::
## 总览：Udon 的网络系统是怎么工作的

::: details Youtube 源视频
<iframe width="650" height="380" src="https://www.youtube-nocookie.com/embed/Mb6ZYBEhxiI?si=mcsfXwkM1qMYdkod" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::
::: info
BiliBili 搬运版本有 CC 字幕，受限于 BiliBili 平台限制，仅 BiliBili 网站或客户端可显示字幕。
:::
<iframe src="//player.bilibili.com/player.html?bvid=BV1Zj41127zo&page=1" width="690" height="380" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Udon 网络系统的三个主要概念分别为 **变量（Variables）**、**事件（Events）**和**所有者（Ownership）**

- 变量（Variables）是数值的容器 - 比如说一个数字，一组颜色或者一个 3D 位置。
- 事件（Events）是发生在某一时刻的某事。
- 所有权（Ownership）是系统用来决定由哪个用户负责更新一个变量，该用户会将变量的更新发送给其他用户。

比如说一个游戏的计分板，你可能会使用一个变量（Variable）来存储和更新用户的分数，还会有一个事件（Event）来触发为胜利者庆祝的烟花。

### 所有权（Ownership）

一个世界里的物体在默认情况下都是*本地*的。这说明你拿起来的一个物体**只会为你移动**，其他人是看不到物体在移动的。

要让一个物体可以被**网络同步（Networked）**，你需要给物体添加一个 UdonBehaviour 和/或者 一个 VRC Object Sync 组件。

第一个开启世界实例的玩家将会成为所有网络物体的所有者。其可以对这些物体做出更改并把更改同步给所有人。当你更改一个物体的所有者时，新的所有者将会负责更新网络数据并且所有人会从其监听物体的更改。

#### 例子：最简单的网络同步物体

如果你有一个有渲染器（Renderer）和碰撞体（Collider）的 3D 物体，你可以非常简单的让这个物体可以被玩家拿起并使其与其他玩家同步。

你需要做的就是在其 GameObject添加一个 VRCPickup 组件和一个 VRCObjectSync 组件。
![](/creators.vrchat.com/images/worlds/udon-networking-025d543-pickup-object-sync.png)

VRC Pickup 和 VRC Object Sync 在 Unity Editor 里的样子
如果物体没有刚体（RightBody）那么 VRCPickup 组件会自动添加一个并向 VRChat 表示这个组件可以被捡起，还会将该物体的所有权（Ownership）转移给捡起该物体的玩家。

VRCObjectSync 会自动同步这个物体 - 发送该物体的位置（Position），旋转（Rotation），缩放（Scale）和一些物理属性给其他玩家，这样子这个物体在所有人眼里看起来都是一致的。如果需要同步其他数据，你就需要使用变量（Variables）了。

### 变量（Variables）

一个变量是一个数值的容器。而 UdonBehaviours 会运行 Udon 程序，你可以给这些 Udon 程序添加变量。

![](/creators.vrchat.com/images/worlds/index-e057e35-slider-program-variables.png)

Udon Graph 里的变量（Variables）设置
在该图片中，我定义了三个不同的变量（Variables），你可以看到我给 "sliderValue" 这个变量选择了 "同步（synced）"。这个 GameObject 的所有者（译作注：就是有这个 GameObject 所有权的人）会负责计算这个变量的值并将该值的更改发送给所有人。

#### 例子：同步的滑动条

![](/creators.vrchat.com/images/worlds/udon-networking-8472b6b-synced-slider.png)

在这个例子中，这个滑动条的所有者会将其值同步给所有人。请注意，这只是为了说明概念 - 我们会发布一个单独的例子来说明具体 “如何做” 的细节。

为了同步这个滑动条，我们只需要获取它的数字值。这是个范围从 0-1 的小数，我们称其为浮点值（floating point value），或者简称浮点数（float）。所以我们定义一个，名叫 sliderValue 的 float 类型（Type）变量（Variable）。

我们会让滑动条在滑块被移动时更新该变量的值 - 当滑块被移动时，我们会获取它的新数值并以此来更新我们的变量。这个数值会被打包并发送给所有人，这个过程叫作序列化（Serialization）。其他玩家接收并解包的过程叫作反序列化（Deserialization）。

所以当所有者移动滑块并设置 sliderValue 变量的值时。VRChat 也会更新其他玩家的 sliderValue 的值并触发一个 OnDeserialization 事件。当这个事件被触发时，他们会使用 sliderValue 的值来更新滑块的位置和其中显示的读数。

- 所有者：移动滑块 > OnValueChanged 事件 > 用 UISlider.value 的值来更新 sliderValue 变量 > 更新读数。
- 其他人：VRChat 更新 sliderValue 变量 > 触发 OnDeserialization 事件 > 设置 UISlider.value 的值 > 触发 OnValueChanged 事件 > 更新读数

### 事件（Events）

事件只会被触发一次。不像变量（Variable）只能被所有者更新，所有人都可以触发一个对象上的事件。你可以选择将事件发送给所有人或者只发送给对象的所有者。这可以通过在触发事件时设置 "target: All" 或者 "target: Owner" 来实现。

![](/creators.vrchat.com/images/worlds/udon-networking-c764485-scne.png)
#### 例子：泡泡枪

![](/creators.vrchat.com/images/worlds/udon-networking-33702b1-bubble-gun-shooting.png)

这这个例子中，我们有一个有粒子系统和动画机并且可以旋转它的泡泡棒并产生气泡粒子效果的物体。我们想要其在玩家按住扳机键时可以被世界内所有人看到。

在我们的 Udon Graph 中，我们有一个可以播放 "Spin（旋转）" 动画并触发 22 个粒子生成的自定义事件，我们将其命名为 "Trigger"。

要让这个泡泡可以被所有人看到，我们需要将会在玩家拿在泡泡枪时按住扳机键会触发的 **OnPickupUseDown** 事件绑定到一个 target 被设置为*所有人*（*All*）的 **SendCustomNetworkEvent** 事件上来触发所有人的 "Trigger" 事件，其中也包括这个物体的所有者。

![](/creators.vrchat.com/images/worlds/udon-networking-e21b3b0-bubble-gun-graph.png)

##### 额外概念：后续加入游戏玩家

在已经有同步发生后加入世界的玩家会发生什么？简单来说：变量会被更新同步，事件则不会。当有人加入你的世界时，OnDeserialization 事件会使用最新的数据在所有可以被网络同步的对象都触发一次，并会基于更新的数据执行你编写的用于更新物体的逻辑。在玩家加入前的事件则不会再发送给玩家，但是也没有理由在有人按下扳机的一个小时后继续发射气泡粒子。

#### 摘要
同步是通过变量和事件来完成的。

对于变量来说：变量的所有者会更新一个可被网络同步对象上的变量并发送其数据给所有可以反序列化它的其他玩家。所有加入世界的玩家都会获取到最新的数据来进行反序列化。

对于事件来说：所有人都可以发送一个网络世界（NetworkEvent）。事件只会被发送给对象的所有者或者已经加入世界的其他人。

## 示例包

[UdonNetworkingConcepts.unitypackage](https://assets.vrchat.com/sdk/UdonNetworkingConcepts.unitypackage)

我们将以上三个示例都包括在了一个简单的包里，你可以将其导入到任何安装了 Udon SDK 的项目里来查看实际运行效果和源代码。

::: info 更多细节
第一节是 Udon 网络系统的大致介绍。当你认为你可以理解这些概念并且浏览了上方的示例包，你可以在下方了解网络系统的各个方面。
:::

## 实现同步的不同方法

有四种不同的方式来在世界中同步变量和事件：

### 1. 连续同步变量（Continuous Variable）

如果你有一个变量需要持续同步，请使用这个方法。如果有时不更新也是正常现象，这样子可以为其他东西节省带宽。但是依然会为后续加入的玩家同步。

例子：一棵有 size 连续（Continuous）同步变量的树会在有人浇水时生长。丢失几个更新也是可以接受的，因为其会在下一次更新时恢复到正确的位置。查看下面的[使用变量（Using Variables）](/creators.vrchat.com/worlds/udon/networking/#使用变量-variables)小节来了解更多信息。

### 2. 手动同步变量（Manual Variable）

如果你有一个变量不需要频繁更新但需要其保持最新时，请使用这个方法。该方法会为后续加入的玩家同步变量。这个选项和 Object Sync 不兼容。查看下面的[使用变量（Using Variables）](/creators.vrchat.com/worlds/udon/networking/#%E4%BD%BF%E7%94%A8%E5%8F%98%E9%87%8F-variables)小节来了解更多信息。

### 3. 自定义网络事件（Custom Network Events）

使用自定义网络事件来触发当前实例内所有玩家或对象所有者的事件，事件一定会被触发，但是会有一定的延迟和开销。在事件发送后加入的玩家不会收到事件。[使用自定义事件](/creators.vrchat.com/worlds/udon/networking/#使用自定义事件)小节来了解更多信息。

::: info 译者注：简单来说就是
- 可靠性：自定义网络事件（Custom Network Events）> 手动同步变量（Manual Variable）> 连续同步变量（Continuous Variable）
- 及时性：连续同步变量（Continuous Variable）> 手动同步变量（Manual Variable）> 自定义网络事件（Custom Network Events）
:::

### 4. 自动同步（Automatic）

一些 VRChat 特有的对象会被自动同步，其中就包括：

- Avatars（译者注：俗称模型）：包括其碰撞体，音效和 IK 动作（译者注：就是骨骼的位置）
- VRCObjectSync：包括物体的变换（Transform）（译者注：就是物体的坐标，旋转，缩大之类的值）和刚体（Rigidbody）

### 对象所有权

在 VRChat 中，每时每刻每个 GameObject 都会被一个玩家（`VRCPlayerApi`）"拥有"。只有对象的所有者才可以更改其可被网络同步的 Udon 程序变量。这些更改会被同步到该实例内的所有玩家。如果你想要一个玩家可以更改一个对象上的变量，请先检查是否有示范区或者请求所有权。

一个对象的所有权可以通过触发 `Networking.SetOwner(VRCPlayerApi player, GameObject obj)` 被 Udon 程序修改。这会触发实例中所有玩家的 `OnOwnershipTransferred(VRCPlayerApi player)` 事件，其中的 player 值是对该对象的新所有者的引用（Reference）（译者注：引用是个编程上的概念，如果你不理解可以直接无视那个词，一般来说影响不大），新的所有者可以立即修改同步变量。如果你的脚本使用手动同步，不要忘记调用 `RequestSerialization()`。

## 请求所有权（进阶）

如果希望对象的所有者能够接受或拒绝所有权转让，请在脚本中添加事件 `OnOwnershipRequest(VRCPlayerApi requester, VRCPlayerApi newOwner)`。

在添加 `OnOwnershipRequest()` 事件到你的脚本后，你需要以下额外步骤来完成一次所有权转移：

1. 如同之前那样，**请求变更所有权的玩家**必须调用 `Networking.SetOwner(VRCPlayerApi player, GameObject obj)` 来开始所有权转移流程。
    - 请求玩家可以为任何玩家，或者对象的所有者。如果是（先前的）所有者发起这个请求，可以直接跳过第 4 和第 5 步。
    - 所有者可以把所有权给任何人，但是非所有者只能从所有者那里请求所有权（没有 `OnOwnershipRequest()` 事件的脚本没有这个限制）
2. `OnOwnershipRequest(VRCPlayerApi requester, VRCPlayerApi newOwner)` 会在**请求变更所有权的玩家**上被调用
    - 请求变更所有权的玩家必须对请求返回 true。否则这个请求会被提前取消。（译者注：在 Udon Graph 里，`SetReturnValue` 被用于返回 true）
3. `OnOwnershipTransferred(VRCPlayerApi player)` 会在**请求变更所有权的玩家**上被调用。
    - 这会在所有权变更请求被所有者确认前被调用。所有权会被变更回去如果所有权变更请求被拒绝。
4. `OnOwnershipRequest(VRCPlayerApi requester, VRCPlayerApi newOwner)` 会在**被请求的玩家**上被调用.
    - 如果所有者返回 true，所有权变更请求就会被接受（在 Udon Graph 里，`SetReturnValue` 被用于返回 true）。
    - 如果所有者返回 false 或者没有返回任何值，这个所有权变更请求会被拒绝。`OnOwnershipTransferred()` 会在请求变更所有权的玩家上被调用，来通知其所有权依然在原始的对象所有者上。
    - 如果发起请求的玩家是所有者，这个步骤会被直接跳过。新的所有者不能拒绝接受所有权。（译者注：因为原始所有者有可能是掉线或者下线了）
5. 如果请求被接受了，`OnOwnershipTransferred(VRCPlayerApi player)` 会在**原始所有者**和**其他玩家**上被调用。

![](/creators.vrchat.com/images/worlds/udon-networking-813f99e-OnOwnershipRequest_Activity.svg)
## 使用变量（Variables）
::: info 使用变量来同步数据可以分为三步
1. 创建一个变量
2. 在所有者那里更新这个成量
3. 对从所有者那里接收到的值进行处理
:::

### 创建变量
1. 按下变量（Variables）窗口的 + 按钮
2. 选择你的变量的类型
3. 重命名你的变量（虽然说是可选项，但是强烈建议这么做）
4. 点击变量名旁边的箭头打开更多选项，打开 "synced（同步）"。（默认值为 "none" 是正常现象，只不过代表这个变量不会自动同步）（译者注：原文是 this just means the value is not automaticallysmoothed out，我也不确定具体怎么翻译）
### 在所有者侧更新变量
1. 将你刚刚创建的变量拖进去你的蓝图里（译者注：原文 Graph，此处借用 UE 的名词，因为我不知道怎么翻译比较好。这玩意就是你用 Udon Graph 里放和连接各种节点的地方）
2. 将任意事件流程（Flow）连接到此节点上的流程端口（Flow Port），并将一个新值（Value）连接到数值端口（Value Port）。
3. 如果此 UdonBehaviour 使用的是持续同步（Continuous Sync）（在检查器中的 UdonBehaviour 上选择），那么更新值的工作就完成了。如果使用的是手动同步，则需要添加一个 "UdonBehaviourRequestSerialization" 节点，并将设置变量流程端口（Variable Flow Port）的输出连接到该节点的流程输入端口（Flow Input port）。该节点上的 "实例（instance）" 值端口（Value Port）可以留空，它将默认为当前的 UdonBehaviour，这正是我们想要的。
### 对从所有者那里接收到的值进行处理
1. 在同一个蓝图添加一个 "OnDeserialization" 节点。
2. 在不按住 Ctrl 键的情况下将变量（Variable）拖放到蓝图上，创建一个 "Get Variable" 节点。
3. 使用来自 OnDeserialization 节点的流程（Flow）和来自 Get Variable 节点的值（Value），用这个新值更新另一个节点。

## 请求序列化

该节点在手动同步模式下用于标记目标 UdonBehaviour 上的变量，以便在下一个网络刻（并非每帧都会发生）期间进行序列化。该节点将与 OnPreSerialization 事件节点协同工作。在触发 "RequestSerialization" 事件后，OnPreSerialization 事件将在下一个网络刻期间触发。此时，您可以将任何变量更新为您希望同步的值。

::: info 变量同步
您可以同步以下类型的变量和变量数组：bool、char、byte、sbyte、short、ushort、int、uint、long、ulong、float、double、Vector2、Vector3、Vector4、Quaternion、string、VRCUrl、Color 和 Color32。
:::

::: warning 数组同步
您可以同步以下类型的变量和变量数组：bool、char、byte、sbyte、short、ushort、int、uint、long、ulong、float、double、Vector2、Vector3、Vector4、Quaternion、string、VRCUrl、Color 和 Color32。
:::

## 使用自定义事件

::: info 使用一个事件来触发更改大致可以分为两步
1. 添加一个自定义事件节点
2. 使用一个 SendCustomNetworkEvent 节点来在目标上（Target）触发这个事件
:::

1. 添加一个自定义事件节点
2. 使用一个 SendCustomNetworkEvent 节点来在目标上（Target）触发这个事件
    1. 创建一个 "Event Custom "节点。
    2. 使用输入框为该节点命名
    3. 添加 "Send Custom Network Event" 节点
    4. 在 "eventName "输入框中输入相同的事件名称。
    5. 保留默认的 "All（全部）"作为目标，以便在房间中的每个玩家身上触发该事件，或者将其更改为 "Owner（所有者）"，以便只在所有者身上触发该事件。
    6. 您可以将 "instance" 输入留空，以当前的 UdonBehaviour 为目标，或者将引用连接到另一个 UdonBehaviour，以在该 UdonBehaviour 上触发自定义事件。

::: info 编辑器注意事项
SendCustomNetworkEvent 将作为编辑器中的 "SendCustomEvent" 节点运行，以便进行一些基本测试。
:::

## 本地事件

如果您的事件名称以下划线开头，您将无法通过网络调用它们。我们这样做是为了保护 `_start`、`_update`、`_interact` 等内部方法免受恶意网络调用。我们计划为事件添加一个属性，将其标记为 "仅限本地"，而无需下划线。如果您想在此期间阻止远程执行事件，可以使用独特的下划线前缀（如 `_u_eventName`），以确保它不与任何现有或未来的 VRC 方法相匹配。

## 调试

通过使用 `--enable-debug-gui` 启动客户端并在一个可被网络同步的物体上按 [右键] + [`] + [8]，就可以在客户端中查看网络对象的一些信息。这些附加层会显示网络 ID（NetworkId）、游戏对象名称、Ping 时间、数据质量（100% 即不丢包）和游戏对象的所有者。
![](/creators.vrchat.com/images/worlds/udon-networking-9b0721f-network-debug.png)

就是个可网络同步的椅子
您可以在客户端使用 [右键] + [`] + [6] 以列表形式查看每个对象的一些信息：
![](/creators.vrchat.com/images/worlds/udon-networking-dde0d15-networking-debug-6.png)

::: danger 已知问题
现有 SDK 存在这些问题：
- 玩家加入实例时（译者注：就是触发 OnPlayerJoined 事件的时候） isInstanceOwner 返回 true（感谢 FSP 的反馈）：https://feedback.vrchat.com/udon-networking-update/p/unu-v5-isinstanceowner-returns-true-when-spawning
- 在网络更新（OnDeserialization）期间传送玩家不会传送玩家的模型（Avatar）。目前要解决这个问题，可使用 SendCustomEventDelayedFrames 将传送延迟 1 帧。
:::