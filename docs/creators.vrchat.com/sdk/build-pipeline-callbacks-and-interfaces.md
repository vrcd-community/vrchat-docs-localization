---
title: "构建管线回调和接口"
upstreamCommit: 2d28c6620b23edebd4c291dc4ab7af049ba0758c
---

# 构建管线回调 (Pipeline Callbacks) 和接口 (Interfaces)

VRChat SDK 中包含了多个可以通过编辑器脚本使用的接口，这些接口可以增强世界和模型的构建过程。

## 针对场景的组件

以下接口可以与 `MonoBehaviours` 结合使用，因此可以直接放置在场景的对象上，这在您需要一些特定的场景引用来执行修改时非常有用。

### IEditorOnly

`VRC.SDKBase.IEditorOnly`

该接口没有需要实现的成员。

您可以使用 `IEditorOnly` 将一个脚本在 SDK 验证中标记为仅用于编辑器。这将使得 SDK 在您的世界或模型中扫描不兼容脚本时忽略它。

### IPreprocessCallbackBehaviour

`VRC.SDKBase.IPreprocessCallbackBehaviour`

需要实现的成员

```csharp
public void OnPreprocess()
{
}

public int PreprocessOrder { get; }
```

此接口允许您在即将开始构建时执行自定义代码。如果您需要在构建内容并上传到 VRChat 之前修改内容，这可能对您来说非常有用。

> 🚧 注意，这并不会自动绕过 SDK 验证。如果您的脚本直接存在于您正在上传的虚拟形象上，您也应该实现 `IEditorOnly` 接口。

## 针对项目范围内的脚本

这些接口适用于不依赖特定场景对象并在内容上传到 VRChat 之前对场景/模型进行批量修改的任何事项。

### IVRCSDKBuildRequestedCallback

`VRC.SDKBase.Editor.BuildPipeline.IVRCSDKBuildRequestedCallback`

需要实现的成员

```csharp
    public int callbackOrder => 0;

    public bool OnBuildRequested(VRCSDKRequestedBuildType requestedBuildType)
    {
        return true;
    }
```

其中 `VRCSDKRequestedBuildType` 是以下枚举

```csharp
public enum VRCSDKRequestedBuildType
{
    Avatar,
    Scene,
}
```

这个接口允许您在 VRChat SDK 开始构建内容之前执行一些逻辑。

`OnBuildRequested` 还可以通过返回 `false` 来中止构建。
