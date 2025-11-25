---
upstreamCommit: 66e5a0c1bb2b12b3de3d1341bb8de76083f7d070
---

# UdonSharp

# 属性
UdonSharp 支持的所有属性

| 属性                                                                                     | 属性                                                                                   | 属性                                                                                  |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Header](https://docs.unity3d.com/ScriptReference/HeaderAttribute.html)                 | [HideInInspector](https://docs.unity3d.com/ScriptReference/HideInInspector.html)       | [NonSerialized](https://docs.microsoft.com/dotnet/api/system.nonserializedattribute) |
| [SerializeField](https://docs.unity3d.com/ScriptReference/SerializeField.html)           | [Space](https://docs.unity3d.com/ScriptReference/SpaceAttribute.html)                 | [Tooltip](https://docs.unity3d.com/ScriptReference/TooltipAttribute.html)            |
| [ColorUsage](https://docs.unity3d.com/ScriptReference/ColorUsageAttribute.html)         | [GradientUsage](https://docs.unity3d.com/ScriptReference/GradientUsageAttribute.html) | [TextArea](https://docs.unity3d.com/ScriptReference/TextAreaAttribute.html)          |
| [UdonSynced](#udonsynced)                                                               | [DefaultExecutionOrder](#defaultexecutionorder)                                        | [UdonBehaviourSyncMode](#udonbehavioursyncmode)                                      |
| [RecursiveMethod](#recursivemethod)                                                     | [FieldChangeCallback](#fieldchangecallback)                                             |

## UdonSynced
`[UdonSynced]` / `[UdonSynced(UdonSyncMode)]`

*有关可以同步的变量，请参见 [同步变量](/udonsharp.docs.vrchat.com/vrchat-api#synced-variables)。*

### 示例
```cs
public class Example : UdonSharpBehaviour 
{
    [UdonSynced]
    public bool synchronizedBoolean;

    [UdonSynced(UdonSyncMode.Linear)]
    // 该浮点数将进行线性插值
    public float synchronizedFloat;
}
```

### UdonSyncMode
`UdonSharp.UdonSyncMode`

| 名称      | 概述                         |
| --------- | ----------------------------- |
| NotSynced | 不同步                       |
| None      | 不进行插值（默认）           |
| Linear    | 线性插值                     |
| Smooth    | 平滑插值                     |

## UdonBehaviourSyncMode
`[UdonBehaviourSyncMode]` / `[UdonBehaviourSyncMode(BehaviourSyncMode)]`

强制执行选定的同步模式，并在适当情况下对同步变量进行额外验证。

### 示例
```cs
[UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
public class Example : UdonSharpBehaviour 
{ 
}
```

### BehaviourSyncMode
`UdonSharp.BehaviourSyncMode`

| 名称           | 概述                                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Any            | 不强制任何设置，用户可以将行为设置为任意同步类型。这是未指定属性时的默认值。                                                                                                           |
| None           | 强制行为不使用任何同步变量，并在用户界面中隐藏同步模式选择下拉菜单。没有任何变量同步，并且 SendCustomNetworkEvent 在该行为上不起作用。                                                           |
| Continuous     | 同步变量将以非常高的频率自动更新，但为了节省带宽，可能不会始终可靠地更新。                                                                                                                              |
| Manual         | 同步变量由用户手动更新，频率较低，但确保在请求时更新可靠。                                                                                                                                         |
| NoVariableSync | 强制行为不使用任何同步变量，隐藏同步模式选择下拉菜单，并允许在使用手动或连续同步的 GameObject 上使用该行为。                                                                                              |

## DefaultExecutionOrder

指定相对于其他 UdonSharpBehaviours 的 Update、LateUpdate 和 FixedUpdate 的执行顺序。所有行为默认为 0，整数值越小，其更新越早发生。整数值可以是负数。

### 示例
```cs
[DefaultExecutionOrder(0)]
public class Example : UdonSharpBehaviour 
{ 
}
```

## RecursiveMethod
`[RecursiveMethod]`

标记一个方法可以递归调用。这意味着标记的方法可以在同一行为中安全地调用自身而不会出现问题。但这会带来性能开销，因此仅在已知可能递归调用的方法上使用。

### 示例
```cs
[RecursiveMethod]
int Factorial(int input)
{
    if (input == 1)
        return 1;

    return input * Factorial(input - 1);
}
```

## FieldChangeCallback
`[FieldChangeCallback(string)]`

这是一个可以放在字段上的属性，用于接收 Udon 变量更改事件。该属性接受一个字符串参数，指向行为上的属性名称。当此属性设置在字段上时，通过网络同步或 SetProgramVariable 对字段进行的任何修改都会调用目标属性的 setter 而不是直接设置字段。在这种情况下，通常期望属性设置字段。

### 示例
```cs
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;

[UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
public class ExampleOfFieldChangeCallback: UdonSharpBehaviour
{
    public GameObject toggleObject;

    [UdonSynced, FieldChangeCallback(nameof(SyncedToggle))]
    private bool _syncedToggle;

    public bool SyncedToggle
    {
        set
        {
            Debug.Log("切换对象...");
            _syncedToggle = value;
            toggleObject.SetActive(value);
        }
        get => _syncedToggle;
    }

    public override void Interact()
    {
        Networking.SetOwner(Networking.LocalPlayer, gameObject);
        SyncedToggle = !SyncedToggle;
        RequestSerialization();
    }
}
```

注意，在上述示例中，`Interact` 执行的是 `SyncedToggle = !SyncedToggle;` 而不是 `_syncedToggle = !_syncedToggle`。后者不起作用（这实际上不会触发 FieldChangeCallback）。只有在网络同步或通过 SetProgramVariable 更新字段的值时，FieldChangeCallback 才会触发 SyncedToggle 的 setter。当在同一 UdonBehaviour 内部直接设置变量时，setter 不会触发。始终应直接使用属性。如果尝试从 UdonBehaviour 外部设置 `_syncedToggle`，UdonSharp 将故意编译失败。在这种情况下，应使用属性或显式调用 SetProgramVariable。
