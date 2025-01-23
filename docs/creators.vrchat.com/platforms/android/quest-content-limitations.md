---
upstreamCommit: 053312380ab2e21888643212200e14eedbedcff9
---

# Quest 内容限制
本页将介绍 Oculus Quest 版本的 VRChat 的各种限制。这些限制是以性能、用户安全和阻止恶意行为考虑而设置的。

在我们的 [Quest 内容优化](/creators.vrchat.com/platforms/android/quest-content-optimization.md)页面上可以找到有关有限组件的更多信息。

## 虚拟形象专属限制

虽然当前版本的 VRChat 没有实行硬性限制，**但在未来我们可能会根据三角形数量、材质数量、网格数量和其他质量对虚拟形象实施硬性限制**。请将我们提供的建议牢记于心，如 [Quest 内容优化](/creators.vrchat.com/platforms/android/quest-content-optimization.md)中所述。

目前，如果您上传的虚拟形象或虚拟形象世界含有超出我们推荐数据的虚拟形象，则该世界或虚拟形象可能会被设为私有。

## 着色器

VRChat Quest 版仅允许虚拟形象使用最新 SDK 提供的着色器。下面列出了可用着色器列表，并附有简短的说明及其输入类型。此列表可能会发生变更，当新的着色器可用时，我们将会在补丁中说明。

下面列出的所有着色器都包含在 `VRChat/Mobile` 着色器选择的选项框中。

**出于性能原因，请确保您始终在材质上开启“启用 GPU 实例化”。**

| 着色器名称                             | 着色器说明                                                                                                                                                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standard Lite                          | A "Lite" version of Unity Standard, designed to require less VRAM. Channel mappings and supported maps are identical to Unity Standard Metallic setup, excluding Alpha and Parallax. Not currently reccomended on PC as it does not support realtime lighting. The diffuse texture is tinted by the vertex colours. |
| Bumped Diffuse（凹凸漫反射）           | 是个漫反射，但同时带有法线贴图。漫反射纹理由顶点颜色决定并着色。                                                                                                                                                                                                                                                    |
| Bumped Mapped Specular（凹凸贴图高光） | 漫反射，但在 alpha 通道上有 Specular 贴图（高光）。漫反射纹理由顶点颜色决定并着色。而且还支持法线贴图。                                                                                                                                                                                                             |
| Diffuse（漫反射）                      | 只有漫反射！漫反射纹理由顶点颜色决定并着色。                                                                                                                                                                                                                                                                        |
| Matcap Lit（简易材质捕捉）             | 漫反射，但带有 matcap 输入。可用于模拟闪亮的金属表面。漫反射纹理由顶点颜色决定并着色。                                                                                                                                                                                                                              |
| Toon Lit（简易卡通）                   | 提供近似于卡通的着色和阴影效果。应该用在颜色平整的卡通人物身上。漫反射纹理由顶点颜色决定并着色。                                                                                                                                                                                                                    |
| Particles/Additive（粒子/加法）        | 应用于粒子。使用“Additive（加法）”模式进行混合。                                                                                                                                                                                                                                                                    |
| Particles/Multiply（粒子/乘法）        | 应用于粒子。使用“Multiply（乘法）”模式进行混合。                                                                                                                                                                                                                                                                    |
| Lightmapped 光照贴图（仅适用于世界）   | 支持光照贴图的基础漫反射着色器。此着色器仅适用于世界。不能用于虚拟形象。并且它不支持实时光照。                                                                                                                                                                                                                      |
| Skybox 天空盒（仅适用于世界）          | 这个着色器是一个经过优化的天空盒着色器，仅适用于世界。                                                                                                                                                                                                                                                              |
| Supersampled UI (Only for worlds)      | An unlit shader which is is supersampled at the texture sample phase. Use with mipmapping to make in-world UI text crisp without being grainy or distracting.                                                                                                                                                       |

## 组件

Quest 不支持以下列表列出的组件，因此这些组件将无法正常工作。此列表可能会发生改动。当发生改动时，我们将在补丁和更新的文档中注明。

| 着色器名称                   | 着色器说明                                                                                                                                                                                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dynamic Bones（动态骨骼）    | 在 VRChat Quest 中完全禁用。请改用 [PhysBones](/creators.vrchat.com/avatars/avatar-dynamics/physbones.md)！！                                                                                                                                                                     |
| Cloth（布料）                | 在 VRChat Quest 中完全禁用。                                                                                                                                                                                                                                                      |
| Cameras（相机）              | 在 VRChat Quest 中的虚拟形象上完全禁用。但是允许在世界中使用。请勿将其过度使用。                                                                                                                                                                                                  |
| Lights（灯光）               | 在 VRChat Quest 中的虚拟形象上完全禁用。                                                                                                                                                                                                                                          |
| Video Players（视频播放器）  | 运行时将会附带有一些限制。在[视频播放器](/creators.vrchat.com/worlds/udon/video-players/index.md)文档中了解更多内容。                                                                                                                                                             |
| Post-Processing（后处理）    | 后处理系统在 VRChat Quest 中完全禁用。GPU 的设计并不能很好地应对此类型的处理问题。                                                                                                                                                                                                |
| Audio Sources（音频源）      | 在 VRChat Quest 中的虚拟形象上完全禁用音频源。音频源将消耗大量 CPU 资源，而语音质量显然需要被优先考虑。                                                                                                                                                                           |
| Physics Objects（物理对象）  | 在 VRChat Quest 中，刚体、碰撞体和关节在虚拟形象上完全禁用。<br>它们在世界中是被允许的，但您也需要注意不去过度使用它们。                                                                                                                                                          |
| Particle Systems（粒子系统） | 在VRChat Quest中，虚拟形象对粒子系统有着很大的限制，其设置照搬了 PC 上[虚拟形象粒子系统限制](/docs.vrchat.com/docs/avatar-particle-system-limits.md)。                                                                                                                            |
| Constraints（约束）          | 在 VRChat Quest 中，对虚拟形象的约束是完全禁用的。我们完全没有打算为 Quest 启用它们，因为它们具有十分庞杂的性能问题，这些问题无法通过软限制或硬限制解决。<br>我们允许其在世界中使用。然而要小心避免过度使用，因为它们对性能的影响比以往想象的要大，尤其是在任务资源有限的情况下。 |
| FinalIK                      | 自定义 FinalIK 组件在 VRChat Quest 中的虚拟形象上完全禁用。<br>FinalIK 组件会消耗大量的资源。我们目前不打算在 Quest 上启用它们。                                                                                                                                                  |
