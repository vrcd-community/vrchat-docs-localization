# VRChat图像性能选项

::: warning 🚧已过时
下方的图片已全部过时。

这些设置在 VRChat 中仍然可用。您可以在主菜单的“设置”选项卡中找到它们。
:::

在游玩 VRChat 时，您可以在安全菜单右上角的“性能选项”中调整图像设置。

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-1.png)

</center>

## 模型性能

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-2.png)

*您可以在这里调整模型的性能选项*

</center>

### 显示的最低优化等级模型

您希望屏蔽的最高模型性能等级。

点击箭头可以切换不同的模型性能等级。将其设置为Don't Block将不会对任何优化等级的模型进行屏蔽。

### 最大模型下载大小

超过此大小的模型文件不会被下载，直到您点击“显示模型”。该值默认为200MB，点击左右箭头可每次调整5MB。

将此值设置为No Limit(0 MB)将忽略文件大小。

## 动态骨骼

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-3.png)

</center>

此窗口允许您打开[模型动态骨骼限制](/docs.vrchat.com/SYSTEM/avatar-dynamic-bone-limits.md)系统。默认情况下，它处于打开状态。

此选项在 Quest 中不可用，因为 Quest 无法显示动态骨骼。

## 高级图像

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-4.png)

</center>

“高级图像”窗口允许您调整“图像品质”设置以及“多重采样抗锯齿”设置。

### 多采样抗锯齿

您可以在 VRChat 中调整抗锯齿强度 （“MSAA”）。它默认为 4x 。将其调高可以显着增加VRAM使用率，在某些情况下将其降低到2倍或将其关闭可以大大提高性能。

### Quest MSAA

Quest MSAA 是一个单独的功能。根据 Oculus 的建议：

Oculus Quest 1 被设置为 2x MSAA。
Oculus Quest 2 被设置为 4x MSAA。

此设置无法更改。

## 图像品质

这个设置将会调整 VRChat 中图形的品质配置文件。图像品质配置文件是一组图形设置，可同时定义多个。

在PC上,“VRC Ultra”是默认设置。在 Quest 上您无法改变图像品质。

这些设置的效果可能因您所在的世界和硬件配置不同而有所不同。通常，使用了LOD组和动态光照的大型开放世界在改变品质设置时的性能变化会比较大，而使用了烘焙光照的小型封闭世界则几乎看不出区别。

作为参考,以下是 VRChat 项目中每个图形品质配置文件的设置。

### 低品质（VRC Low）

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-5.png)

*PC VR 中的低品质设置*

</center>

### 中等品质（VRC Medium）

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-6.png)

*PC VR 中的中等品质设置*

</center>

### 高品质（VRC High）

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-7.png)

*PC VR 中的高品质设置*

</center>

### 极致品质（VRC Ultra）

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-8.png)

*PC VR 中的极致品质设置*

</center>

### 移动端专用（VRC Mobile）

Oculus Quest 只有一个图形配置文件。如下所示。

<center>

![img](/docs.vrchat.com/images/vrchat-configuration-window-9.png)

*Quest 设置*

</center>
