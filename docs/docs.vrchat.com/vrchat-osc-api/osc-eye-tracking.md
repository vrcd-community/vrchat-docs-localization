# OSC 眼动追踪

VRChat 现在支持通过 OSC 接收眼动追踪数据 (眼动和眼睑)。

请注意：这是一项高级功能！它不是即插即用的。您必须创建自己的程序，使用 OSC 将这些数据传输到 VRChat。

硬件制造商可能会提供一个应用程序，为您发送这些数据。您也可以使用社区创建的程序。

## OSC 地址列表

```
/tracking/eye/EyesClosedAmount

/tracking/eye/CenterPitchYaw
/tracking/eye/CenterPitchYawDist
/tracking/eye/CenterVec
/tracking/eye/CenterVecFull
/tracking/eye/LeftRightPitchYaw
/tracking/eye/LeftRightVec
```

::: danger ❗️地址要区分大小写
:::

### 超时

10 秒后未收到数据，眼动追踪行为将恢复为默认状态 (自动注视/自动眨眼)。眼睑和眼球的超时时间是不同的。

## 眼睑

### /tracking/eye/EyesClosedAmount

0~1 表示眼睛闭合的程度。目前，我们只支持用一个值同时控制两只眼睛的眨眼。未来我们将增加对每只眼睛单独眨眼的支持。

## 眼动地址、详细信息和示例数据

::: warning 🚧 一次只能有一个眼动地址
除了 EyesClosedAmount 外，您还可以根据您想要发送的格式，将数据发送到以下地址**之一**。您可能只需要在发送端应用程序中实现一种 (或几种) 可能的眼动数据类型。
:::

为了演示和帮助您调试坐标/轴问题，我们将为以下配置的每个地址提供一些示例数据：眼球视角大致向上 15 度，向用户右侧 20 度，距离用户的 “眼部根部” 或头显 50 厘米。用户的 IPD 设置为 64 毫米。具体表现请看下图：

<center>

![img](/docs.vrchat.com/images/osc-eye-tracking-1.png)

</center>

一般来说，正数表示俯仰角和偏航角，将分别向下和向右旋转。对于矢量，则是标准的 Unity 格式：+x 向右、+y 向上、+z 向前

### /tracking/eye/CenterPitchYaw

单个居中的虚拟眼睛观察方向的俯仰值和偏航值 (单位：度)。由于此处未定义距离，因此该模式将始终使用世界中的光线投射来查找视线聚焦距离。数据示例：-15.252，20.128

### /tracking/eye/CenterPitchYawDist

同上，但增加了一个以米为单位的距离值，用于定义视线聚焦距离。格式为俯仰角、偏航角、距离。数据示例：-15.252，20.128，0.503

### /tracking/eye/CenterVec

居中的虚拟眼睛的 x、y、z 方向归一化向量，定位于头显。该矢量已归一化，因此该模式将始终使用光线投射来查找视线聚焦距离。示例数据：0.332，0.263，0.905

### /tracking/eye/CenterVecFull

居中的虚拟眼睛 x、y、z 方向向量，定位于头显。该矢量的长度很重要，(以米为单位) 将决定视线聚焦距离。数据示例：0.167，0.132，0.456

### /tracking/eye/LeftRightPitchYaw

(单位：度) 左俯仰、左偏航、右俯仰、右偏航。示例数据：-14.903，23.592， -15.560，16.503

### /tracking/eye/LeftRightVec

头显上每只眼睛的归一化方向向量 (左 x、y、z 右 x、y、z)。示例数据：0.387，0.257，0.886，0.274，0.268，0.923

## 代码示例

您可以在此查看一个[示例脚本](https://gist.github.com/vrchat-developer/bc07d3dba46206f6ee42d36323c034eb)，该脚本可用于从 Unity 项目中发送眼动追踪数据。本示例脚本假定您的项目中有 “眼球根部” 和 “眼球目标” 变换，并将其插入其中。您还必须设置用户的瞳间距。不过，本脚本不能直接使用，其目的只是帮助启动和运行原型项目。请仔细阅读代码，并将其用于教学目的。这只是向 VRChat 发送 OSC 眼动追踪数据的一个示例。
