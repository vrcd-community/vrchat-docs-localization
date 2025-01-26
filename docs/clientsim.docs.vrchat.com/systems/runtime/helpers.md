---
upstreamCommit: 4d76fd612a37de18fd85c39062bade59afffb7cf
---

# VRCSDK 助手

助手组件被添加到对象上，以帮助处理 VRC SDK 组件的行为。这些组件的角色与 CyanEmu 和 Phase 2 相比保持不变，尽管一些与对象功能本身无关的逻辑已被剥离出来。例如，在 CyanEmu 中，CyanEmuPickupHelper 脚本处理了持有拾取物的逻辑。现在，这种行为已经从拾取助手类中移出，并移入拾取管理系统。PickupHelper 代码现在只提供有关 PlayerHand 应如何处理拾取物的数据。

助手类也可能扩展在 ClientSim 中使用的接口。有两类接口：[可用接口](#可用接口)和[处理器接口](#处理器接口)。

## 可用接口

可用接口通常以 “able” 结尾，代表在 ClientSim 中可以某种方式使用的项目。它们提供了如何使用它们的信息，但不包括使用它们的方法。

| 名称                       | 描述                                   |
| -------------------------- | -------------------------------------- |
| IClientSimInteractable     | 代表可以与之交互的对象                 |
| IClientSimPickupable       | 代表可以被拾取的对象，扩展Interactable |
| IClientSimStation          | 代表玩家可以使用的坐下的对象           |
| IClientSimSyncable         | 代表可以有所有者的对象                 |
| IClientSimPositionSyncable | 代表同步其位置的对象，扩展Syncable     |

## 处理器接口

使用这两种接口类型，助手类是包装 VRChat SDK 组件信息以提供给 ClientSim 的方式。

| 名称                     | 描述                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PositionSyncedHelperBase | VRCObjectSync的助手，扩展PositionSyncedHelperBase。Syncable，PositionSyncable，RespawnHandler                                                               |
| ObjectSyncHelper         | VRCObjectSync的助手，扩展PositionSyncedHelperBase。Syncable，PositionSyncable，RespawnHandler                                                               |
| UdonHelper               | UdonBehaviour的助手，扩展PositionSyncedHelperBase。Syncable，PositionSyncable，RespawnHandler，Interactable，PickupHandler，StationHandler，SyncableHandler |
| PickupHelper             | VRCPickup的助手。Pickupable                                                                                                                                 |
| StationHelper            | VRCStation的助手。实现IClientSimStation                                                                                                                     |
| ObjectPoolHelper         | VRCObjectPool的助手。Syncable                                                                                                                               |
| CombatSystemHelper       | Udon CombatSetup的助手。实现IVRC_Destructible。初始化时直接添加到玩家对象的助手组件。                                                                       |
| SpatialAudioHelper       | VRCSpatialAudioSource的助手                                                                                                                                 |