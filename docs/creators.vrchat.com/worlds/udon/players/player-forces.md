---
title: "Player Forces"
---

# Player Forces

Here are the nodes relating to forces that act on Players. For nodes that deal with Player positions, see [Player Positions](/creators.vrchat.com/worlds/udon/players/player-positions) 

::: info Local player only

Only use these nodes for the [local player](/creators.vrchat.com/worlds/udon/players/getting-players#networkingget-localplayer). They can't be used for remote players.

:::



### GetWalkSpeed / SetWalkSpeed
*float, working range around 0-5*

The speed at which a Player can walk around your world. Set this below your Run Speed.

### GetRunSpeed / SetRunSpeed
*float, working range around 0-10*

The speed at which a Player can run around your world. Set this above your Walk Speed.

### GetStrafeSpeed / SetStrafeSpeed
*float, working range around 0-5*

The speed at which a Player can move sideways through your world. Recommended to be set to the same as Walk Speed. Not affected by running.

### GetJumpImpulse / SetJumpImpulse
*float, working range around 0-10*

How much force applied when a player jumps. Default is 0, so set this if you want to enable jump in your world. The default VRCWorld prefab sets this to 3.

### GetGravityStrength / SetGravityStrength
*float, working range around 0-10*

Multiplier for the Gravity force of the world (set to Earth's default). Don't change Unity's Physics.Gravity in your project, get and set it here instead. Default is 1.

### Immobilize
*Boolean*

Set to true to keep a Player stuck in place, turning off their Locomotion. Note that VR Players may be able to move their viewpoint around a bit anyways, but their Avatar will stay in place.