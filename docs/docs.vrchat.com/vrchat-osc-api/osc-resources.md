# OSC 资源

::: warning 🧑‍💻译者警告
当前版本文档内容有一部分无法使用，我们会将当前版本替代内容以引用形式编写进本文档中，同时保留当前版本文档内容。
:::

## 可用于开发与使用的 OSC 工具和项目

### 警告：风险自负！

运行别人编写的代码是非常危险的。下面的大多数项目都是开源的，因此您可以验证它们是否可以安全使用。如果可能，请通读代码并自行编译，而不要使用编译后的二进制文件 (exe 文件等)。

### 提交材料

如果您想提交自己的项目供考虑，请将其发布到 “[Show and Tell](https://github.com/vrchat-community/osc/discussions/categories/show-and-tell)”。要获得考虑，您的项目必须有文档记录、开源、包含许可证，并且项目页面不得违反或暗示违反 [VRChat 的服务条款](https://hello.vrchat.com/legal)，也不得链接到任何违反服务条款的页面。我们将每周更新此列表，添加和删除项目。

## 名单

### 控制器

- [BrainFlowsIntoVRChat](https://github.com/ChilloutCharles/BrainFlowsIntoVRChat)：BrainFlow 代码可通过 OSC 将大脑的放松和专注度指标发送至 vrchat 模型参数。(Python)
- [bci-workshop](https://github.com/ChilloutCharles/bci-workshop)：用大脑控制您的模型 (Python)
- [OSC_To_keypress_Console](https://github.com/Salvesti/OSC_To_keypress_Console/)：将 OSC 转换为按按键，反之亦然。(C#)
- [VRChat 热键 OSC](https://gitlab.com/ameliend/vrchat-hotkeys-osc)：通过键盘热键控制模型参数。(Python)

### 脸部追踪

- [OpenSeeFace](https://github.com/emilianavt/OpenSeeFace)：在 CPU 上进行稳健的实时人脸和面部标志跟踪，并与 Unity 集成 (Python)
- [VSeeFace](https://www.vseeface.icu/)：具有面部和手部追踪功能的独立程序，增加了一些直接的 VRChat OSC 控制功能。(应用程序)
- [VRChat-MotionOSC](https://github.com/rogeraabbccdd/VRChat-MotionOSC)：网络摄像头到模型参数 (NodeJS)
- [VRCFaceTracking](https://github.com/benaclejames/VRCFaceTracking)：HTC Vive Pro 眼部与唇部追踪 (C#)

### 手部追踪

- [Leapmotion-osc](https://github.com/philfiru/leapmotion-osc)：Leap Motion > Finger Tracking (C# / Unity 应用程序)

### 触觉

- [bHaptics VRChat-OSC](https://github.com/bhaptics/VRChatOSC)：在 VRChat 中启用 bHaptics 设备。(应用程序)

### 心率

- [HRPresence](https://github.com/Naraenda/HRPresence)：Windows GATT 心率监控工具，可将心率数据推送至 OpenSoundControl (OSC)，用于 VRChat 和 DiscordRPC。(C#)
- [miband-heartrate-os](https://github.com/mkc1370/miband-heartrate-osc)c：在 Windows 10 上使用小米手环设备启用和监测心率。(C#)
- [Pulsoid-to-vrchat-osc](https://github.com/Sonic853/pulsoid-to-vrchat-osc)：使用 Pulsoid (NodeJS) 通过 OSC 将每分钟心跳次数发送至 VRChat
- [hr-osc](https://github.com/kamyu1537/hr-osc)：从 Stromno 向模型发送心率 (Go 语言)
- [vrc-osc-miband-hrm](https://github.com/vard88508/vrc-osc-miband-hrm)：从小米手环/Amazfit 心率监测器向模型发送数据 (NodeJS)
- [BluetoothHeartRateOSC](https://github.com/AkaiMage/BluetoothHeartRateOSC)：可写入 VRChat OSC 的用蓝牙传输的心率读取程序 (C#)

### IRL 控制

::: warning 🧑‍💻译者核对-1
该项目地址无法访问
:::

- [mqtt2osc](https://github.com/asleeponduty/mqtt2osc)：订阅 MQTT 主题并发布到 OSC 话题。(Python)

- [vrc-osc-audio-controls](https://github.com/uzair-ashraf/vrc-osc-audio-controls)：通过 OSC 控制系统音频播放 (Go 语言)
- [vrcwatch](https://github.com/mezum/vrcwatch)：通过 OSC 发送时间 (Python)
- [HardwareStat2VRCha](https://github.com/Nifty255/HardwareStat2VRChat)：使用 OSC 在您的 VRChat 模型上显示 CPU 和内存使用情况！(Go 语言)

### 库

- [OscCore](https://github.com/stella3d/OscCore)：用于 Unity 的面向性能的 OSC 库，也是我们在 VRChat (C#) 中使用的库。
- [VRCOSCGUI](https://github.com/YABam/VRCOSCGUI)：这是一个基于插件的 VRChat OSC 发送端 r。通过使用该接口，可以添加更多插件，并由持有者应用程序发送 OSC。每个插件无需自行管理 OSC。(C#,C++)
- [OSCLib-for-ESP8266](https://github.com/stahlnow/OSCLib-for-ESP8266)：从微控制器 (Arduino) 发送信息给 OSC
- [phorcys](https://github.com/kb10uy/phorcys)：用 Rust 编写，实现的 OSC 和 VRChat OSC API 工具！(Rust)
- [VRC_OSCLib](https://github.com/Irisl0/VRC_OSCLib)：Rust 中的 OSC 和 VRChat 专用助手。*Midi > OSC* (Rust)

### 杂项

- [vrc-worldobject](https://github.com/seanedwards/vrc-worldobject)：为后进入世界的玩家创建在网络上同步的世界空间道具。(TouchOSC,C#)
- [OSCKeyboard](https://github.com/ShadowForests/OSCKeyboard)：将 Windows 键盘的输入发送到模型的键盘上 (Python)

### 文本

- [TTS-Voice-Wizard](https://github.com/VRCWizard/TTS-Voice-Wizard)：使用 Microsoft Azure 的文本转语音应用程序。将文本作为 OSC 消息发送到 VRChat，以便在模型上显示。(STTTS)(语音转 TTS)(VRC STT 系统)(C#)

### Twitch (一个直播软件)

- [Spooder](https://github.com/GreySole/Spooder)：可以利用 OSC 驱动的事件和浏览器插件来为您的直播制作一个开放的直播背景板 (NodeJS)
- [EZTwitchOSCBot](https://github.com/AcChosen/EZTwitchOSCBot)：简单且可定制的 Twitch 机器人，带有 GUI 界面，可接收聊天命令并通过 OSC (NodeJS) 将其发送至 VRChat。
- [TwitchVrcAvatarOSC](https://github.com/Killers0992/TwitchVrcAvatarOSC)：可操作模型的 Twitch 机器人 (C#)

### 实用工具

- [vrc-osc-scripts](https://github.com/cyberkitsune/vrc-osc-scripts)：我 (该项目作者) 给 VRChat 制作的各种 OSC 辅助脚本 (Python)
- [VRCOSC](https://github.com/VolcanicArts/VRCOSC)：为 VRChat 制作的模块化 OSC 应用程序制作工具 (C#)
- [Protokol](https://hexler.net/protokol)：监控和记录 OSC 的应用程序 (应用程序)
- [TouchOSC](https://hexler.net/touchosc)：可编写脚本的 OSC 接口应用程序 (应用程序)
- [AV3Emulator](https://github.com/lyuma/Av3Emulator)：支持 OSC 的模型模拟器 (C#)
