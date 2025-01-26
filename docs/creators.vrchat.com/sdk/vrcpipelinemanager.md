---
upstreamCommit: 67afe1890d3b8b1f2cd922ee2fe44b33500d73cc
---

# VRCPipelineManager

用于存储世界和模型的 ID。

::: info 自动添加
这个组件通常会随着它依赖的组件自动添加。您通常不需要手动添加这个组件。
:::

| 参数         | 描述                |
| ------------ | ------------------- |
| Blueprint ID | 模型或世界的唯一 id |

如果您想将一个不同的 ID 赋予某个世界或模型，您可以按下 `Detach (Optional)` 按钮。

::: danger 蓝图格式
Blueprint ID 只能使用以下格式，其中 0 被替换为 [0-9] [a-f]：

`avtr_00000000-0000-0000-0000-000000000000`

`wrld_00000000-0000-0000-0000-000000000000`

任何其他 ID 格式将不被接受。Blueprint ID 通常是自动生成的，所以您不需要主动创建自己的 Blueprint ID ——只需点击 “Attach”，就会自动为您生成一个独一无二的 Blueprint ID。
:::

![img](/creators.vrchat.com/images/sdk/vrcpipelinemanager-7d57e76-Unity_2017-12-10_01-35-44.png)

如果您有一个想要上传的蓝图 id，您可以使用 `Attach (Optional)` 按钮附加一个新的

![img](/creators.vrchat.com/images/sdk/vrcpipelinemanager-db63e77-Unity_2017-12-10_01-37-47.png)

::: warning 提示
在构建世界时，场景中不能存在多于一个的 PipelineManager 组件！您可能将世界会上传到一个错误的蓝图 ID 中。
:::