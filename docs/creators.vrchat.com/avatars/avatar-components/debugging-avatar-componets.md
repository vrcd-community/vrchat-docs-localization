---
title: "调试模型组件"
---

# 通过不同的方式进行效果调整

由于 Avatar Dynamics 的功能提供了非常多的参数，在进行这部分的编辑时，您可能很容易遇到奇怪的问题。为了方便您的模型测试，我们提供了一些工具，以便您更快发现问题。

## 在游戏内进行调试

@[youtube](8hqDquZWvhY)

在游戏内，您可以使用 "模型调试"（Avatar Overlay）选项，将[物理骨骼](/creators.vrchat.com/avatars/avatar-components/physbones)和[触发器](/creators.vrchat.com/avatars/avatar-components/contacts)在游戏中以可视化方式呈现。这可以让您通过游戏中的视角和交互方式，了解您所设置的东西是否如同所期望那样正常工作。

## 在 Unity 内进行调试

在 Unity 编辑器的播放模式下，[物理骨骼](/creators.vrchat.com/avatars/avatar-components/physbones)和[触发器](/creators.vrchat.com/avatars/avatar-components/contacts)会呈现出与游戏中一致的表现。此时您可以任意调整参数、拖动游戏对象，并观察效果，而无需将其上传到 VRChat。

在播放模式下，您亦可以在进入播放模式之前添加`动画器`，以实现对 Avatar Dynamics 组件参数的控制。只要在根游戏对象的动画组件中添加了动画器，您就可以为参数添加和录制动画，并像游戏中一样更新！

此外，即使没有设置动画控制器，您仍然可以查看每个组件，并查看它们为每个参数赋予的值。