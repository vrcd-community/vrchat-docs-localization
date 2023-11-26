# 将 OSC 作为输入控制器

## 将 OSC 作为输入控制器

我们在 VRChat 中支持**许多种**不同的控制器 - 键鼠、游戏手柄、一堆 VR 全身追踪器等。我们将进一步扩大控制器的支持范围，让您也能通过 OSC 控制 *大部分* 的输入！这样，您就可以创建一个程序，用头、脚、脑电波、音乐音序器或其他任何东西来控制 VRChat！

## 地址

每个输入端都会在 `/input/Name` 处监视数据，如 `/input/Jump`。<br>
输入有两种类型：

1. **方向轴**，它需要一个范围从 -1 到 1 的浮点来操作（例如移动）。在不使用时，它们应当被重置为 0，否则例如当 "MoveForward"（向前移动）这条信息保持为 "1 "时，您将永远被向前移动！
2. **按钮**，它需要一个值为 1 的 Int 来表示 "按下"，一个值为 0 的 Int 来表示 "松开"。如果不先在发送输入前重置为 0，它们将无法正常工作，例如--发送 `/input/Jump 1`，然后再发送 `/input/Jump 1`，结果只能是单次跳跃。

开始实验的一个好方法是使用 TouchOSC 来测试它们，看看它们在客户端是如何工作的。有些控件只能在桌面或 VR 模式下使用，而有些控件可能根本不起作用。您可以在我们的[讨论区（即将推出）](./osc-as-input-controller#)报告不按您的预期工作的控件，或要求提供更多控件。

这个 TouchOSC 演示有一个垂直和水平移动控件，以及一个跳跃按钮：[vrc-input.tosc](https:/github.com/vrchat-community/osc/raw/main/files/touch-osc/vrc-input.tosc)

## 支持的输入

<details> 

<summary>方向轴</summary>

`/input/Vertical` ：向前移动 (1) 或向后移动 (-1)

`/input/Horizontal` ：向右移动 (1) 或向左移动 (-1) 

`/input/LookHorizontal` ：向左看和向右看。在桌面模式下，如果开启了 "舒适转向 "功能，当值为 1 时，VR 将进行快速转向。

`/input/UseAxisRight` ：使用手上的物品 - 不一定有效

`/input/GrabAxisRight` ：抓取物品 - 不一定有效

`/input/MoveHoldFB` ：向前移动（1）或向后移动（-1）所持对象

`/input/SpinHoldCwCcw` ：顺时针旋转或逆时针旋转所持对象

`/input/SpinHoldUD` ：向上或向下旋转所持对象

`/input/SpinHoldLR` ：向左或向右旋转所持对象

</details>

<details> 

<summary>按钮</summary>

`/input/MoveForward` ：当此值为 1 时，向前移动。

`/input/MoveBackward` ：当此值为 1 时，向后移动。

`/input/MoveLeft` ：当此值为 1 时，向左移动。

`/input/MoveRight` ：当此值为 1 时，向右移动。

`/input/LookLeft` ：当此值为 1 时，向左转动。 在桌面中视角会平滑转动，如果开启了 "舒适转向 "功能，VR 将进行快速转向。

`/input/LookRight` ：当此值为 1 时，向右转动。 在桌面中视角会平滑转动，如果开启了 "舒适转向 "功能，VR 将进行快速转向。

`/input/Jump` ：如果您所在的世界支持跳跃，则该输入使您跳跃。

`/input/Run` ：如果您所在的世界支持奔跑，则该输入使您跑起来。

`/input/ComfortLeft` ：向左快转 - 仅限 VR。

`/input/ComfortRight` ：向右快转 - 仅限 VR。

`/input/DropRight` ：丢掉右手所持物品 - 仅限 VR。

`/input/UseRight` ：使用被右手高亮显示的物品 - 仅限 VR。

`/input/GrabRight` ：抓取被右手高亮显示的物品 - 仅限 VR。

`/input/DropLeft` ：丢掉左手所持物品 - 仅限 VR。

`/input/UseLeft` ：使用被左手高亮显示的物品 - 仅限 VR。

`/input/GrabLeft` ：抓取被左手高亮显示的物品 - 仅限 VR。

`/input/PanicButton` 打开安全模式。

`/input/QuickMenuToggleLeft` ：开关快捷菜单。如果当前该输入为 "0"，则在收到 "1 "时切换。

`/input/QuickMenuToggleRight` 打开/关闭快捷菜单。如果当前该输入为 "0"，则在收到 "1 "时切换。

`/input/Voice` ：开关语音 - 操作取决于设置中是否打开了 "开关语音"。如果开启，那么从 0 到 1 的变化将切换静音状态。如果关闭了 "切换语音"，则其功能与按下静音类似 - 1 表示静音，0 表示取消静音。

</details>

<details> 

<summary>聊天框</summary>

`/chatbox/input s b n` 在聊天框中输入文字。如果布尔参数 `b` 为 True，则绕过键盘立即输入并发送 `s` 中的文本。如果布尔数 `b` 为 False，则打开键盘输入框并输入所提供的文本。`n` 是一个额外的布尔参数，设置为 False 时不会触发通知 SFX（如果未指定，默认为 True）。

`/chatbox/typing b` 打开或关闭打字指示器。

</details>
