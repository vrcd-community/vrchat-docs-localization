# VRChat 图像性能选项


在玩 VRChat 时，您可以从“设置菜单”中选择一些图形设置，该设置可以通过在快捷菜单中打开设置选项卡后按弹出按钮找到。

## 模型性能

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/vrchat-configuration-window-1.png)

</center>


## 模型优化

### 屏蔽优化较差的模型

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/vrchat-configuration-window-2.png)

</center>

这决定了您想要显示的最低的模型性能等级。

点击箭头可以切换不同的模型性能等级。将其设置为“不隐藏”将不会对任何性能等级的模型进行屏蔽。

### 最大模型下载大小

超过此大小的模型文件不会被下载，直到您点击“显示模型”。该值最大为200MB，点击左右箭头可每次调整5MB。

将此值设置为 0 MB 将隐藏所有模型。

超出此值的头像将显示为其后备模型或模型替身（如果有的话）。

### 最大未压缩大小

当一个模型被加载时，它们会被压缩。必须解压缩才能显示出来。

模型的未压缩大小与其某些部分的优化程度有关，例如纹理大小。因此，限制这一点可能是有用的，特别是当你经常出现在有很多人的场合时。

推荐的数值是 **300MB**。

超出此值的头像将显示为其后备模型或模型替身（如果有的话）。

## 模型显示数量限制

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/vrchat-configuration-window-3.png)

</center>

### 隐藏超出范围的模型

此设置将隐藏超出指定距离的所有模型。例如，如果设置为 15 米，它将隐藏所有距离超过 15 米的模型。

隐藏的模型将关闭所有渲染器，并用“幽灵钻石”符号替代。然而，一些组件将继续运行，以避免一致性问题（动画）或其他问题。

在调整这个滑块时，您周围会出现一个环以指示距离。

### 多采样抗锯齿

您可以在 VRChat 中调整抗锯齿强度 （“MSAA”）。它默认为 4x 。将其调高可以显着增加VRAM使用率，在某些情况下将其降低到2倍或将其关闭可以大大提高性能。

### 模型数量上限

此设置允许您选择同时显示的最大模型数量，按距离排序。

例如，如果您将此选项设置为“10”，则将显示最近的 10 个模型。所有数量超过它们的模型将不显示。

### 始终显示好友模型

此切换确保好友的模型始终显示，无论距离或已显示的模型数量。

### 设为“始终显示”的玩家除外

此切换确保您选择“始终显示”的人无论距离或已显示的模型数量的多少都能被显示。

### Quest MSAA

Quest MSAA 是一个单独的功能。根据 Oculus 的建议：

Oculus Quest 1 设置为 2x MSAA。
Oculus Quest 2，3,和 Pro 设置为 4x MSAA。

此设置无法更改。

## 图像品质

这个设置将会调整 VRChat 中图形的品质配置文件。图像品质配置文件是一组图形设置，可同时定义多个。

在PC上,“VRC Ultra”是默认设置。在 Quest 上您无法改变图像品质。

这些设置的效果可能因您所在的世界和硬件配置不同而有所不同。通常，使用了LOD组和动态光照的大型开放世界在改变品质设置时的性能变化会比较大，而使用了烘焙光照的小型封闭世界则几乎看不出区别。

作为参考,以下是 VRChat 项目中每个图形品质配置文件的设置。

### 低品质（VRC Low）

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/VRC-Low.png)

*PC VR 中的低品质设置*

</center>

### 中等品质（VRC Medium）

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/VRC-Medium.png)

*PC VR 中的中等品质设置*

</center>

### 高品质（VRC High）

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/VRC-High.png)

*PC VR 中的高品质设置*

</center>

### 极致品质（VRC Ultra）

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/Ultra.png)

*PC VR 中的极致品质设置*

</center>

### 移动端专用（VRC Mobile）

Oculus Quest，安卓，IOS，PICO只有一个图形配置文件。如下所示。

<center>

![移动端设置](https://cn-nb1.rains3.com/docs-image/controls/VRC-Mobile.png)

</center>

## 镜子分辨率

镜子分辨率允许您设置在镜子中显示的反射分辨率，可以设置为：无限制、全分辨率、半分辨率或四分之一分辨率。无限制分辨率的镜子将显著影响您的性能。请自行承担风险。

## 阴影质量

阴影质量设置允许您调整实时光源产生的阴影质量，烘焙光阴影将不受影响，也不会影响性能。

您可以将其设置为高、中或低。这里是阴影质量设置为高和低的示例，低阴影质量的图像更加像素化且粗糙，这在光滑区域如肩部和一些尖锐区域如耳朵周围非常明显。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/vrchat-configuration-window-4.png)

</center>

## LOD 质量

当一个对象位于两个 LOD 值之间时，它将根据此设置偏向选择更高或更低质量的模型。

这可以在早期的图形质量配置文件中看到，称为 LOD Bias 。

在高设置下，LOD Bias 为 2，偏向于更高质量的模型，而在低设置下，LOD Bias为 1，偏向于较低质量的模型。

这些是仅基于您屏幕上物体的大小，因此您离物体越远，模型的质量就会越低。然而，并非所有世界都有 LOD 设置，因为世界的创建者必须亲自构建它们。

## 粒子物理质量

此设置会影响物理质量，影响重力或碰撞等粒子。降低此设置将提高在由模型或世界生成粒子时的性能。还有一个设置可以限制模型可以创建的粒子数量，详见模型粒子系统限制。

