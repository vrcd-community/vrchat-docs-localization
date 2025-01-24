---
title: "Scene Components"
upstreamCommit: 618fb7dfa4fcd3d2b5e729360c67adcb3170c255
---

# Scene Components

Every Unity scene you'd like to bring into VRChat requires a [VRC_SceneDescriptor](/creators.vrchat.com/worlds/components/vrc_scenedescriptor) component. The VRChat Worlds SDK contains various other components to allow your users to interact with your world, pick up objects, see themselves in a mirror, and more.

Please consult [Allowlisted World Components](/creators.vrchat.com/worlds/whitelisted-world-components) for a full list of components available in the VRChat SDK.

| Parameter                                                                               | Description                                                                                                       |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [VRC_AvatarPedestal](/creators.vrchat.com/worlds/components/vrc_avatarpedestal)         | Used to display and / or switch to an avatar.                                                                     |
| [VRC_MirrorReflection](/creators.vrchat.com/worlds/components/vrc_mirrorreflection)     | Used to create a mirror in VRChat.                                                                                |
| [VRC_ObjectSync](/creators.vrchat.com/worlds/components/vrc_objectsync)                 | Syncs the transform of a GameObject with all players in the instance.                                             |
| [VRC_Pickup](/creators.vrchat.com/worlds/components/vrc_pickup)                         | Allows objects to be picked up, held and used by players.                                                         |
| [VRC_PortalMarker](/creators.vrchat.com/worlds/components/vrc_portalmarker)             | Creates portals to other VRChat worlds.                                                                           |
| [VRC_SceneDescriptor](/creators.vrchat.com/worlds/components/vrc_scenedescriptor)       | Describes your VRChat world. Required for every Unity scene you'd like to use as a VRChat world.                  |
| [VRC_SpatialAudioSource](/creators.vrchat.com/worlds/components/vrc_spatialaudiosource) | Adds 3D spatialization to a Unity AudioSource. Usually automatically added with AudioSource components in editor. |
| [VRC_Station](/creators.vrchat.com/worlds/components/vrc_station)                       | Allow users to sit down.                                                                                          |
| [VRC_UIShape](/creators.vrchat.com/worlds/components/vrc_uishape)                       | Allow users to interact with Unity's UI system.                                                                   |
