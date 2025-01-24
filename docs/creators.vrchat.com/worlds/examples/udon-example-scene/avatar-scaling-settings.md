---
title: "Avatar Scaling Settings"
description: "Configure avatar scaling in your world"
upstreamCommit: 198bd9e176af36c063016bd839781bd6445e942a
---

# Avatar Scaling Settings

This UdonBehaviour example script allows you easily to override your world's avatar scaling settings.

To learn how to write your own Udon script for avatar scaling, read our [avatar scaling documentation](/creators.vrchat.com/worlds/udon/players/player-avatar-scaling).

![avatar-scaling-example-component.png](/creators.vrchat.com/images/worlds/udon/avatar-scaling-example-component.png)

## Variables

| Name                     | Type  | Default | Description                                                                                                                             |
| ------------------------ | ----- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **disableAvatarScaling** | bool  | false   |                                                                                                                                         | If enabled, players in your world will not be able to choose their own avatar scale, even if you enabled it on VRChat.com. |
| **minimumHeight**        | float | 0.2     | The minimum avatar eye height in meters which players can choose.                                                                       |
| **maximumHeight**        | float | 5       | The maximum avatar eye height in meters which players can choose.                                                                       |
| **alwaysEnforceHeight**  | bool  | false   | If enabled, players who switch to use a very tall or very short avatar will automatically be set to "minimumHeight" or "maximumHeight". |

## Examples

- I want players to use avatar scaling freely.
	- You don't need to change any settings.
- I don't want players to use avatar scaling.
	- Turn on "disableAvatarScaling."
- I want players to use a specific avatar height.
	- Set "minimumHeight" and "maximumHeight" how you prefer.
	- If you want to prevent very tall or very short avatars, enable "alwaysEnforceHeight".

Here's what the Udon Graph for the example script looks like:

![avatar-scaling-example-component.png](/creators.vrchat.com/images/worlds/udon/avatar-scaling-example-graph.png)
