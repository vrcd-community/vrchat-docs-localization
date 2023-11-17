---
title: "调试动态化形象"
slug: "debugging-avatar-dynamics"
hidden: false
createdAt: "2022-03-03T00:20:06.462Z"
updatedAt: "2022-03-04T00:41:09.121Z"
---

由于动态化形象是一个复杂的系统，因此在制作形象时，在制作这个部分很容易出错。为了帮助测试和调试问题，我们为用户提供了一些工具，使整个过程更加容易。

### 游戏内调试

<iframe src='https://gfycat.com/ifr/LiveWhimsicalGuineafowl' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

现在，您可以使用 "形象叠加显示层"（Avatar Overlay）选项在游戏中以可视化方式实时显示[物理骨骼](/creators.vrchat.com/avatars/avatar-dynamics/physbone)和[触发器](/creators.vrchat.com/avatars/avatar-dynamics/contacts)。这对于查看什么事情正在发生，或什么对象是否已正确设置非常有用。

### 编辑器内
[物理骨骼](/creators.vrchat.com/avatars/avatar-dynamics/physbone)和[触发器](/creators.vrchat.com/avatars/avatar-dynamics/contacts)在编辑器中的运行方式与在客户端中相同。进入游戏模式后，您就可以模拟这些系统，看看您的形象会有什么反应，而无需上传您的形象。

只要往形象的动画组件中添加了动画控制器，参数就会像游戏中一样更新。请记得在进入游戏模式前添加动画控制器！

此外，即使没有设置动画控制器，也可以查看每个组件，了解它们为每个参数提供的值。
