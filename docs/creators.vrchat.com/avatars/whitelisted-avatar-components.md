
# 白名单模型组件

以下是允许在模型上使用的组件列表。任何不在此列表中的组件都将在上传时被删除。

::: info 如果您使用过时的 VRChat SDK
当您使用版本低于 3.3.0 的 SDK 时，不在列表中的组件也会在编辑器的播放模式中被删除
:::
<!--原文是运行时被删除，老黄历了，我直接加一个说明好了-->

自定义脚本或组件同样会在上传和运行时被删除，这些组件不能在模型上使用。
::: warning Oculus Quest

VRChat 的 Quest 版本在此列表的基础上减少了一些组件，这些组件因故无法在这个版本中使用。您可在[这里](/creators.vrchat.com/platforms/android/quest-content-limitations#组件)查看更多信息。
:::
## VRChat

- VRCAvatarDescriptor 
- PipelineManager
- [VRCStation](/creators.vrchat.com/worlds/components/vrc_station)
- [VRCPhysBone](/creators.vrchat.com/avatars/avatar-dynamics/physbones#vrcphysbone)
- [VRCPhysBoneCollider](/creators.vrchat.com/avatars/avatar-dynamics/physbones#vrcphysbonecollider)
- [VRCContactSender](/creators.vrchat.com/avatars/avatar-dynamics/contacts#发送端：VRCContactSender)
- [VRCContactReceiver](/creators.vrchat.com/avatars/avatar-dynamics/contacts#接收端：VRCContactReceiver)
- [VRCSpatialAudioSource](/creators.vrchat.com/worlds/components/vrc_spatialaudiosource#spatial-audio-on-avatars)
- *VRC_IKFollower* - 此组件已废弃！您应改用约束来替代它。
<!--我们在库里找不到这个东西，官网也没有直接的链接，我就去除链接了-->
## Unity

- [Transform](https://docs.unity3d.com/cn/2019.4/Manual/class-Transform.html)
- [Animator](https://docs.unity3d.com/cn/2019.4/Manual/class-Animator.html)
- [SkinnedMeshRenderer](https://docs.unity3d.com/cn/2019.4/Manual/class-SkinnedMeshRenderer.html)
- [MeshFilter](https://docs.unity3d.com/cn/2019.4/Manual/class-MeshFilter.html)
- [MeshRenderer](https://docs.unity3d.com/cn/2019.4/Manual/class-MeshRenderer.html)
- [Animation](https://docs.unity3d.com/cn/2019.4/Manual/class-Animation.html)
- [ParticleSystem](https://docs.unity3d.com/cn/2019.4/Manual/class-ParticleSystem.html)
- [ParticleSystemRenderer](https://docs.unity3d.com/cn/2019.4/Manual/PartSysRendererModule.html)
- [TrailRenderer](https://docs.unity3d.com/cn/2019.4/Manual/class-TrailRenderer.html)
- [LineRenderer](https://docs.unity3d.com/cn/2019.4/Manual/class-LineRenderer.html)
- [Cloth](https://docs.unity3d.com/cn/2019.4/Manual/class-Cloth.html)
- [Light](https://docs.unity3d.com/cn/2019.4/Manual/class-Light.html)
- [Collider](https://docs.unity3d.com/cn/2019.4/Manual/CollidersOverview.html)
- [Rigidbody](https://docs.unity3d.com/cn/2019.4/Manual/class-Rigidbody.html)
- [Joints](https://docs.unity3d.com/cn/2019.4/Manual/Joints.html)
- [Camera](https://docs.unity3d.com/cn/2019.4/Manual/class-Camera.html)
  - 对于本地玩家使用的模型，相机组件不受任何限制。
  - 对于远端玩家使用的模型，适用以下限制：
    - 在所有情况下，当加载模型时，远端玩家的相机组件将被禁用。
      - 您可以使用动画来启用相机组件。
    - 如果不满足以下所有情况，则删除相机组件，且它们无法被重新启用。
    - 如果本地玩家和远端玩家是好友，则不会删除相机组件。
      - 请注意，与玩家成为好友不会自动重新加载他们的模型。
    - 如果本地玩家在 VRChat 的快捷菜单中为远端玩家选择了"显示模型"，则不会删除相机组件。

- [FlareLayer](https://docs.unity3d.com/cn/2019.4/Manual/class-FlareLayer.html)
- [AudioSource](https://docs.unity3d.com/cn/2019.4/Manual/class-AudioSource.html)
- [AimConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-AimConstraint.html)
- [LookAtConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-LookAtConstraint.html)
- [ParentConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-ParentConstraint.html)
- [PositionConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-PositionConstraint.html)
- [RotationConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-RotationConstraint.html)
- [ScaleConstraint](https://docs.unity3d.com/cn/2019.4/Manual/class-ScaleConstraint.html)

 <!--对于使用者及其好友，加载时相机组件被禁用。使用动画来启用该组件。对于使用者的非好友来说，加载时相机组件将被完全删除。--><!--这句话有点没必要，先注释掉-->


## [Root Motion（FinalIK）](http://www.root-motion.com/finalikdox/html/index.html)
::: warning FinalIK组件修改

VRChat 对 FinalIK 的实现进行了高度修改。因此，这些组件的功能可能和源文档中描述的不同。

我们不直接支持或测试自定义的 FinalIK 实现。即使如此，它们也*应该*能正常工作，如果我们不得不破坏其中一个或多个组件的运作，我们将尽力通知创作者。

如果您发现错误，请[告诉我们](https://feedback.vrchat.com)。
:::
- [Aim IK](http://www.root-motion.com/finalikdox/html/page1.html)
- [Biped IK](http://www.root-motion.com/finalikdox/html/page4.html)
- [CCDIK](http://www.root-motion.com/finalikdox/html/page5.html)
- [FABRIK](http://www.root-motion.com/finalikdox/html/page6.html)
- [Full Body Biped IK](http://www.root-motion.com/finalikdox/html/page8.html)
- [Grounder](http://www.root-motion.com/finalikdox/html/page9.html)
- [Limb IK](http://www.root-motion.com/finalikdox/html/page12.html)
- [Rotation Limits](http://www.root-motion.com/finalikdox/html/page14.html)
- [VRIK](http://www.root-motion.com/finalikdox/html/page16.html)
- Twist Relaxer
- Shoulder Rotator

 在人形模型上使用此脚本将导致模型无法正常使用。

## [DynamicBone](https://assetstore.unity.com/packages/tools/animation/dynamic-bone-16743)
::: danger Dynamic Bone 已弃用

我们已不再支持 Dynamic Bone。您应该转而使用[PhysBones](/creators.vrchat.com/avatars/avatar-dynamics/physbones)。
  
:::

- DynamicBone
- DynamicBoneCollider