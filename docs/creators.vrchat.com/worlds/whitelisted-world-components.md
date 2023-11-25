---
title: "Allowlisted World Components"
---

# Allowlisted World Components

The following is the complete list of scripts usable within worlds. Components that are not in this list will not work.
::: warning Oculus Quest

The Quest version of VRChat has some exceptions to this list. Check [here](/creators.vrchat.com/platforms/android/quest-content-limitations#components) for more info.
:::
## Unity Components
- WindZone
- VideoPlayer
- Tilemap
- TilemapRenderer
- Terrain
- Tree
- SpriteMask
- ParticleEmitter
- EllipsoidParticleEmitter
- MeshParticleEmitter
- ParticleAnimator
- ParticleRenderer
- WorldParticleCollider
- Grid
- GridLayout
- AudioSource
- AudioReverbZone
- AudioLowPassFilter
- AudioHighPassFilter
- AudioDistortionFilter
- AudioEchoFilter
- AudioChorusFilter
- AudioReverbFilter
- PlayableDirector
- TerrainCollider
- Canvas
- CanvasGroup
- CanvasRenderer
- TextMesh
- Animator
- NavMeshAgent
- NavMeshObstacle
- OffMeshLink
- Cloth
- WheelCollider
- Rigidbody
- Joint
- HingeJoint
- SpringJoint
- FixedJoint
- CharacterJoint
- ConfigurableJoint
- ConstantForce
- Collider
- BoxCollider
- SphereCollider
- MeshCollider
- CapsuleCollider
- ParticleSystem
- ParticleSystemRenderer
- BillboardRenderer
- Camera
- FlareLayer
- SkinnedMeshRenderer
- TrailRenderer
- LineRenderer
- GUIElement
- GUILayer
- Light
- LightProbeGroup
- LightProbeProxyVolume
- LODGroup
- ReflectionProbe
- SpriteRenderer
- Transform
- RectTransform
- Rendering.SortingGroup
- Projector
- OcclusionPortal
- OcclusionArea
- LensFlare
- Skybox
- MeshFilter
- Halo
- MeshRenderer

### Unity Components
- [ParticleSystemForceField](https://docs.unity3d.com/2019.4/Documentation/Manual/class-ParticleSystemForceField.html)
- [AimConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AimConstraint.html)
- [LookAtConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-LookAtConstraint.html)
- [ParentConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-ParentConstraint.html)
- [PositionConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-PositionConstraint.html)
- [RotationConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-RotationConstraint.html)
- [ScaleConstraint](https://docs.unity3d.com/2019.4/Documentation/Manual/class-ScaleConstraint.html)

## VRChat Components
- [*VRC_IKFollower*](https://docs.vrchat.com/docs/vrc_ikfollower) - Deprecated. Use [Constraints](https://docs.unity3d.com/2019.4/Documentation/Manual/Constraints.html) instead! 
- [VRC_AvatarPedestal](/creators.vrchat.com/worlds/components/vrc_avatarpedestal) 
- [VRC_PortalMarker](/creators.vrchat.com/worlds/components/vrc_portalmarker) 
- [VRC_MirrorReflection](/creators.vrchat.com/worlds/components/vrc_mirrorreflection) 
- [VRC_SceneDescriptor](/creators.vrchat.com/worlds/components/vrc_scenedescriptor)  
- [VRC_SpatialAudioSource](/creators.vrchat.com/worlds/components/vrc_spatialaudiosource) 
- [VRC_Station](/creators.vrchat.com/worlds/components/vrc_station) 
- [VRC_UiShape](/creators.vrchat.com/worlds/components/vrc_uishape) 
- [VRCPipelineManager](/creators.vrchat.com/sdk/vrcpipelinemanager) 

## Dynamic Bone
- DynamicBone
- DynamicBoneCollider

## Text Mesh Pro
- TMP_Dropdown
- TMP_InputField
- TMP_ScrollbarEventHandler
- TMP_SelectionCaret
- TMP_SpriteAnimator
- TMP_SubMesh
- TMP_SubMeshUI
- TMP_Text
- TextMeshPro
- TextMeshProUGUI
- TextContainer
- TMP_Dropdown

## Unity Event System
- EventSystem
- EventTrigger
- UIBehaviour
- BaseInput
- BaseInputModule
- PointerInputModule
- StandaloneInputModule
- TouchInputModule
- BaseRaycaster
- PhysicsRaycaster

## Unity UI
- Button
- Dropdown
- Dropdown
- Graphic
- GraphicRaycaster
- Image
- InputField
- Mask
- MaskableGraphic
- RawImage
- RectMask2D
- Scrollbar
- ScrollRect
- Selectable
- Slider
- Text
- Toggle
- ToggleGroup
- AspectRatioFitter
- CanvasScaler
- ContentSizeFitter
- GridLayoutGroup
- HorizontalLayoutGroup
- HorizontalOrVerticalLayoutGroup
- LayoutElement
- LayoutGroup
- VerticalLayoutGroup
- BaseMeshEffect
- Outline
- PositionAsUV1
- Shadow

## Post Processing Stack V2
::: warning Post Processing Stack v1

PPSv1 is not supported in either VRCSDK2 or VRCSDK3. It has been deprecated by Unity.
:::
- PostProcessDebug
- PostProcessLayer
- PostProcessVolume

## AVPro
- ApplyToMaterial
- ApplyToMesh
- AudioOutput
- DisplayIMGUI
- DisplayUGUI
- MediaPlayer
- SubtitlesUGUI

## Oculus Spatializer Unity
- ONSPReflectionZone
- OculusSpatializerUnity
- ONSPAmbisonicsNative
- ONSPAudioSource

## Final IK
- BipedIK
- FingerRig
- Grounder
- GrounderBipedIK
- GrounderFBBIK
- GrounderIK
- GrounderQuadruped
- GrounderVRIK
- AimIK
- CCDIK
- FABRIK
- FABRIKRoot
- FullBodyBipedIK
- IK
- IKExecutionOrder
- LegIK
- LimbIK
- LookAtIK
- TrigonometricIK
- VRIK
- FBBIKArmBending
- FBBIKHeadEffector
- TwistRelaxer
- InteractionObject
- InteractionSystem
- InteractionTarget
- InteractionTrigger
- GenericPoser
- HandPoser
- Poser
- RagdollUtility
- RotationLimit
- RotationLimitAngle
- RotationLimitHinge
- RotationLimitPolygonal
- RotationLimitSpline
- AimPoser
- Amplifier
- BodyTilt
- HitReaction
- HitReactionVRIK
- Inertia
- OffsetModifier
- OffsetModifierVRIK
- OffsetPose
- Recoil
- ShoulderRotator
- AnimationBlocker
- BehaviourBase
- BehaviourFall
- BehaviourPuppet
- JointBreakBroadcaster
- MuscleCollisionBroadcaster
- PressureSensor
- Prop
- PropRoot
- PuppetMaster
- PuppetMasterSettings
- BipedRagdollCreator
- RagdollCreator
- RagdollEditor
- SolverManager
- TriggerEventBroadcaster