# UdonSharp

# 属性
UdonSharp 所支持的所有属性

|                                                                                 | 属性名称                                                                            |                                                                                      |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Header](https://docs.unity3d.com/ScriptReference/HeaderAttribute.html)         | [HideInInspector](https://docs.unity3d.com/ScriptReference/HideInInspector.html)    | [NonSerialized](https://docs.microsoft.com/dotnet/api/system.nonserializedattribute) |
| [SerializeField](https://docs.unity3d.com/ScriptReference/SerializeField.html)  | [Space](https://docs.unity3d.com/ScriptReference/SpaceAttribute.html)               | [Tooltip](https://docs.unity3d.com/ScriptReference/TooltipAttribute.html)            |
| [ColorUsage](https://docs.unity3d.com/ScriptReference/ColorUsageAttribute.html) | [GradientUsage](https://docs.unity3d.com/ScriptReference/GradientUsageAttribute.html)| [TextArea](https://docs.unity3d.com/ScriptReference/TextAreaAttribute.html)          |
| [UdonSynced](#udonsynced)                                                       | [DefaultExecutionOrder](#defaultexecutionorder)                                     | [UdonBehaviourSyncMode](#udonbehavioursyncmode)                                      |
| [RecursiveMethod](#recursivemethod)                                             | [FieldChangeCallback](#fieldchangecallback)                                         |

## UdonSynced
`[UdonSynced]` / `[UdonSynced(UdonSyncMode)]`

*有关可同步的变量，请参阅[同步变量](/udonsharp.docs.vrchat.com/vrchat-api#synced-variables)。*

### 示例
```cs
public class Example : UdonSharpBehaviour 
{
    [UdonSynced]
    public bool synchronizedBoolean;

    [UdonSynced(UdonSyncMode.Linear)]
    // 这个浮点数将被线性插值
    public float synchronizedFloat;
}
```

### UdonSyncMode
`UdonSharp.UdonSyncMode`

| 名称       | 概述                             |
| ---------- | -------------------------------- |
| NotSynced  |                                  |
| None       | 无插值（默认）                   |
| Linear     | 线性插值                         |
| Smooth     | *某种平滑的同步方式*             |

## UdonBehaviourSyncMode
`[UdonBehaviourSyncMode]` / `[UdonBehaviourSyncMode(BehaviourSyncMode)]`

强制选择同步模式，并在适当的情况下对同步变量进行额外的验证。

### 示例
```cs
[UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
public class Example : UdonSharpBehaviour 
{ 
}
```

### BehaviourSyncMode
`UdonSharp.BehaviourSyncMode`

| 名称            | 概述                                                                                                                                                                                               |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Any             | 不强制执行任何操作，用户可以将行为设置为任意同步类型。这是未指定属性时的默认设置。                                                                                                                 |
| None            | 强制行为上没有同步变量，并在UI中隐藏同步模式的选择下拉菜单。没有任何内容被同步，SendCustomNetworkEvent 在行为上不起作用。                                                                           |
| Continuous      | 同步变量将自动以非常频繁的速率更新，但可能并不总是可靠地更新以节省带宽。                                                                                                                          |
| Manual          | 同步变量由用户手动较不频繁地更新，但确保请求时更新可靠。                                                                                                                                          |
| NoVariableSync  | 强制行为上没有同步变量，隐藏同步模式的选择下拉菜单，并允许您在使用 Manual 或 Continuous 同步的 GameObjects 上使用这些行为。                                                                          |

## DefaultExecutionOrder

指定 Update、LateUpdate 和 FixedUpdate 相对于其他 UdonSharpBehaviours 的执行顺序，以整数表示。默认情况下所有行为的顺序为0，数值越小，更新越早发生。整数可以是负数。

### 示例
```cs
[DefaultExecutionOrder(0)]
public class Example : UdonSharpBehaviour 
{ 
}
```

## RecursiveMethod
`[RecursiveMethod]`

标记一个方法为可递归调用。这表示被标记的方法可以安全地在同一行为上调用自身而不会出现问题。需要注意的是，这会带来性能开销，因此应仅在您确定可能会递归调用的方法上使用。

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

这是一个可以放在字段上的属性，用于接收 Udon 变量变化的事件。该属性接受一个字符串参数，指向行为上的属性名称。当此属性应用于字段时，通过网络同步或 SetProgramVariable 对字段的任何修改将调用目标属性的 setter，而不是直接设置字段。在这种情况下，通常期望该属性来更新该字段。

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
            Debug.Log("正在切换对象...");
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

请注意，在上述示例中，Interact 方法执行的是 ```SyncedToggle = !SyncedToggle;``` 而不是 ```_syncedToggle = !_syncedToggle```。

后者将不会起作用（实际上不会触发 FieldChangeCallback）。FieldChangeCallback 仅在 SetProgramVariable 或网络同步更新 syncedToggle 的值时触发 SyncedToggle 的 setter。

当变量直接从相同的 UdonBehaviour 内部设置时，它不会触发。建议始终直接使用该属性。

如果您尝试从 UdonBehaviour 外部设置 ```_syncedToggle```，UdonSharp 将故意无法编译。在这种情况下，您应使用该属性或显式使用 SetProgramVariable。
