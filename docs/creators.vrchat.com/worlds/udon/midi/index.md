---
title: "Udon 中的 Midi"
description: "在你的世界中使用来自文件或实时播放的 Midi 数据。"
---

# Udon 中的 Midi

从 1980 年代开始，MIDI 以一种充满想象力的方式把乐器连接在了一起。我们把 Midi 添加到了 VRChat 中，这样您就可以构建一个与实时乐器和预录表演相呼应的世界。

> 在 Wikipedia 上了解更多[关于 Midi 的信息](https://en.wikipedia.org/wiki/MIDI)。

![](/creators.vrchat.com/images/worlds/index-215557268-2d85f551-8fff-4990-a95a-c8a2d412d6a2.png)

目前有两种在 Udon 世界中使用 MIDI 的方式：

- [实时](realtime-midi) 数据来自连接到您的电脑上的乐器。
- [回放](midi-playback) MIDI 文件数据。

无论采用哪种方式，你都需要用的 Udon 的 MIDI 事件，详见下文。

## Midi 事件

### MidiNoteOn

接收到 "Note On" 时触发。无论是 MIDI 回放还是按下您乐器上的按键都会触发该事件。

输出：

- `int channel` 接收到事件的 MIDI 频道，范围 0-15。
- `int number` 音符编号，范围 0-127（您的 MIDI 设备可能无法输出全部音符编号）
- `int velocity` 如果 MIDI 设备支持，0-127 之间的数字代表音符的触发速度。

### MidiNoteOff

接收到 "Note On" 时触发。一般会在松开您乐器上的按键时触发的。

输出：

- `int channel` 接收到事件的 MIDI 频道，范围 0-15。
- `int number` 音符，范围 0-127（您的 MIDI 设备可能无法输出全部音符编号）
- `int velocity` 一般来说在 Note Off 事件中这个值会是 0，但是可能您的设备会有不一样的行为。

### MidiControlChange

接收到控制变化时触发。这些变化通常由 Midi 设备上的旋钮和滑块发出。

输出：

- `int channel` 接收到事件的 MIDI 频道，范围 0-15。
- `int number` 控制编号，范围 0-127。
- `int value` 0-127 之间的数字，代表控制器发送的数值。对于某些可以无休止旋转而不受物理起始/结束位置限制的旋钮来说，该值可能只是 0 和 1，或其他表示 "正" 和 "负" 增量的范围，您必须自行处理这些情况。
