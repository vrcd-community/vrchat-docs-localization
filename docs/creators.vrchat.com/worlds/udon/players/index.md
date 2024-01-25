---
title: "玩家 API"
description: "使用 Udon 来获取关于您的世界内玩家的信息"
---

<!-- 这寄吧文档写的寄吧烂 -->

# 玩家 API

您可以在世界中通过 VRCPlayerApi 和玩家交互。每个玩家都有一个 VRCPlayerApi 对象，并且你的世界会在玩家加入/离开的时候在所有 UdonBehaviours 上分别触发 `OnPlayerJoined` / `OnPlayerLeft` 事件。

这个页面包括一些基本的节点。由于你可以用 VRCPlayerApi 对象做很多事情，我们把一些节点分类到了以下页面。

- [获取玩家](/creators.vrchat.com/worlds/udon/players/getting-players)
- [玩家位置](/creators.vrchat.com/worlds/udon/players/player-positions)
- [玩家物理（Player Forces）](/creators.vrchat.com/worlds/udon/players/player-forces)
- [玩家碰撞体（Player Collisions）](/creators.vrchat.com/worlds/udon/players/player-collisions)
- [玩家语音](/creators.vrchat.com/worlds/udon/players/player-audio)
- [玩家模型缩放](/creators.vrchat.com/worlds/udon/players/player-avatar-scaling)
- [玩家事件](/creators.vrchat.com/worlds/udon/graph/event-nodes#player-events)

## 通用的实用节点

### IsValid

> VRCPlayerApi, Boolean

在你尝试玩家的获取或者修改任何东西，请确保 IsValid 返回 true。如果一个玩家已经离开了事件但是你依然在引用这个玩家对应的 VRCPlayerApi 对象，则会返回 false。为了更方便地在节点图中使用，请搜索通用的“IsValid”方法，该方法适用于任何对象，因为它为“true”和“false”提供了单独的流程。

![](/creators.vrchat.com/images/worlds/index-59fc2c8-player-isvalid.png)

### EnablePickups

> VRCPlayerApi, Boolean

关闭玩家捡起物品和使用世界中的 VRCPickup 对象的能力。这个属性默认为 _on_，所以当你想关掉玩家捡起物品的能力时，你只需要使用这个方法。

### get displayName

> VRCPlayerApi

获取玩家显示的名字（可能和用户名不一样，用户名是用于登录 VRChat 的且不会被公开）

### Get isLocal

> 输入：VRCPlayerApi  
> 输出：Boolean

告诉您获取的玩家是不是本地玩家。

### Get isMaster

> 输入：VRCPlayerApi  
> 输出：Boolean

告诉您获取的玩家是不是 Master。即这个玩家是不是创建房间的人，或者当上一个 Master 离开之后谁是 Master。

### GetPickupInHand

> 输入：VRCPlayerApi，Hand (none, left, right)  
> 输出：VRCPickup

获取玩家正在拿着的 Pickup 对象。只能在本地玩家上工作。如果没有找到 VRCPickup 组件则会返回 null。

### IsOwner

> 输入：VRCPlayerApi, GameObject
> 输出：Boolean

告诉你一个玩家是不是所输入 GameObject 的 Owner，对于同步来说非常重要。

### IsUserInVR

> 输入：*VRCPlayerApi*
> 输出：*Boolean*

告诉你一个玩家是否在使用 VR 头显。

### PlayHapticEventInHand

> VRCPlayerApi, Hand, float, float, float

振动玩家的手柄（如果有的话）。浮点数输入的范围应为 0-1。_duration_ 是手柄振动的时间，_amplitude_ 是手柄振动的强度，_frequency_是手柄振动的速度。不同手柄的感觉可能会有很大不同。

### UseAttachedStation

> VRCPlayerApi

使玩家进入与此 UdonBehaviour 位于同一 GameObject 上的 Station。

### SimulationTime

> float

玩家的 [Simulation Time](/creators.vrchat.com/worlds/udon/networking/network-components)。

### UseLegacyLocomotion

> VRCPlayerApi

**不推荐** - 为该玩家开启 Legacy Locomotion。

## 战斗系统

以下节点正在审查中--不会正常工作，不建议使用。我们正在评估它们的实用性，目前应忽略它们：

- CombatGetCurrentHitpoints
- CombatGetDestructible
- CombatSetCurrentHitpoints
- CombatSetDamageGraphic
- CombatSetMaxHitpoints
- CombatSetRespawn
- CombatSetup

## 语言

### GetCurrentLanguage

> string

获取本地用户选择的语言。

### 获取可用语言

> string

获取玩家可选择的所有可用语言。
