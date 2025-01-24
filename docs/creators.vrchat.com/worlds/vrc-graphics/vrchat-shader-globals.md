---
title: "VRChat Shader Globals"
upstreamCommit: 2d28c6620b23edebd4c291dc4ab7af049ba0758c
---

# VRChat Shader Globals

VRChat provides multiple global shader parameters Shader creators can use to implement VRChat-specific features.

The following shader globals are currently available:

- `float _VRChatCameraMode`:
  - `0` - Rendering normally
  - `1` - Rendering in VR handheld camera
  - `2` - Rendering in Desktop handheld camera
  - `3` - Rendering for a screenshot
- `float _VRChatMirrorMode`:
  - `0` - Rendering normally, not in a mirror
  - `1` - Rendering in a mirror viewed in VR
  - `2` - Rendering in a mirror viewed in desktop mode
- `float3 _VRChatMirrorCameraPos` - World space position of mirror camera (eye independent, "centered" in VR)