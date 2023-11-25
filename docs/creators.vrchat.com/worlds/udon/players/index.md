---
title: "Player API"
description: "Use Udon to retrieve information about players in your world"
---

# Player API

You can interact with Players in your world through the VRCPlayerApi. Each Player has a VRCPlayerApi Object, and your world fires the OnPlayerJoined / OnPlayerLeft events on any UdonBehaviours that listen for them when a player joins or leaves.

This page includes info on using some general nodes. Since there are so many things you can do with the VRCPlayerApi object, we've grouped some node info together on the following pages:

* [Getting Players](/creators.vrchat.com/worlds/udon/players/getting-players)
* [Player Positions](/creators.vrchat.com/worlds/udon/players/player-positions)
* [Player Forces](/creators.vrchat.com/worlds/udon/players/player-forces)
* [Player Collisions](/creators.vrchat.com/worlds/udon/players/player-collisions)
* [Player Audio](/creators.vrchat.com/worlds/udon/players/player-audio)
* [Player Avatar Scaling](/creators.vrchat.com/worlds/udon/players/player-avatar-scaling)
* [Player Events](/creators.vrchat.com/worlds/udon/graph/event-nodes#player-events)

## Generally Useful Nodes

### IsValid
*VRCPlayerApi, Boolean*
Before you try to get or set anything on a Player, check whether IsValid returns true. If a player has left since you saved a reference to them, this will return False. For easier use on the graph, search for the generic "IsValid" method which works for any Object, since it gives you separate flows for True and False.
![index-59fc2c8-player-isvalid.png](/creators.vrchat.com/images/worlds/index-59fc2c8-player-isvalid.png)

### EnablePickups
*VRCPlayerApi, Boolean*
Turn off the Player's ability to pickup and use VRCPickup objects in the world. This property is *on* by default, so you only need to use the method if you want to turn it off.

### get displayName
*VRCPlayerApi*
Get the name displayed for the Player (can be different than Username, which is used to log into VRChat and not exposed publicly)

### Get isLocal
in: *VRCPlayerApi*
out: *Boolean*
Tells you whether the given Player is the local one.

### Get isMaster
in: *VRCPlayerApi*
out: *Boolean*
Tells you whether the given Player is the *Master* player. This is the player who either created the instance, or the one who inherited Master status when the last Master left.

### GetPickupInHand
in: *VRCPlayerApi, Hand (none, left, right)*
out: *VRCPickup*
Gets the pickup a Player is holding in the specified hand. Only works for the Local Player. Returns null if no VRCPickup is found.

### IsOwner
in: *VRCPlayerApi, GameObject*
out: *Boolean*
Tells you whether a Player is the Owner of a given GameObject, important for Sync.

### IsUserInVR
in: *VRCPlayerApi*
out: *Boolean*
Tells you whether a Player is using a VR headset.

### PlayHapticEventInHand
*VRCPlayerApi, Hand, float, float, float*
Vibrate the Player's Haptic controllers if they have them. The float inputs should be in the range 0-1. *duration* is the amount of time that they vibrate, *amplitude* is the strength with which they vibrate, and *frequency* is the speed at which they vibrate. The feeling can vary quite a bit between controllers.

### UseAttachedStation
*VRCPlayerApi*
Makes the player get into the Station which is on the same GameObject as this UdonBehaviour.

### SimulationTime
*float*
The [simulation time](/creators.vrchat.com/worlds/udon/networking/network-components) of a player.

### UseLegacyLocomotion
*VRCPlayerApi*
**NOT RECOMMENDED** - turns on legacy locomotion for this player.

## Combat System
The following nodes are Under Review - not working, not recommended for use. We're evaluating their usefulness and they should be ignored for now:
* CombatGetCurrentHitpoints
* CombatGetDestructible
* CombatSetCurrentHitpoints
* CombatSetDamageGraphic
* CombatSetMaxHitpoints
* CombatSetRespawn
* CombatSetup

## Language
::: info

Switching Languages is not yet ready in the VRChat client, these methods will return example data until the full feature is launched. They will currently throw an exception when testing in ClientSim, as well.

:::

### GetCurrentLanguage
*string*
Gets the selected language of the local user.

### GetAvailableLanguages
*string[]*
Gets all available languages a player can select.
