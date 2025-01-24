---
title: "VRC Mirror Reflection"
upstreamCommit: 2d28c6620b23edebd4c291dc4ab7af049ba0758c
---

# VRC Mirror Reflection

Used for mirrors. An example can be found in the [SDK Prefabs](/creators.vrchat.com/worlds/sdk-prefabs#vrcmirror).

| Parameter                 | Description                                                                                                                                                                                                                                   |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disable Pixel Lights      | Disables real-time pixel shaded point and spot lighting. Pixel shaded lights will fall-back to vertex lighting when this is enabled.                                                                                                          |
| Turn Off Mirror Occlusion | Disables occlusion culling on the mirror. Enable this if you see objects flickering in the mirror.                                                                                                                                            |
| Reflect Layers            | Only objects on the selected layers will be rendered in the mirror. Objects on the Water layer are never rendered in mirrors.                                                                                                                 |
| Mirror Resolution         | Rendering resolution of the mirror (per eye in VR). Auto renders at the same resolution as the user's HMD or monitor up to the maximum of 2048x2048.                                                                                          |
| Maximum Antialiasing      | The maximum level of MSAA applied to the image rendered in the mirror. Can be overruled by client graphics settings.                                                                                                                          |
| Custom Shader             | The mirror will use this shader instead of the default shader if one is provided.                                                                                                                                                             |
| Camera Clear Flags        | Specifies the CameraClearFlags that the mirror will use to clear the background before rendering. The default "From Reference Camera" will use the same flags as the camera rendering the mirror plane.                                       |
| Custom Skybox             | If "Camera Clear Flags" is set to "Custom Skybox," this skybox will be shown in the mirror. If "Custom Skybox" mode is selected but nothing is provided, the background will be black.                                                        |
| Custom Clear Color        | If "Camera Clear Flags" is set to "Solid Color," this color will be used as the background. Note that the alpha channel will be respected, so you can use this to clear alpha and use it in a custom shader (e.g., for cutout-style mirrors). |