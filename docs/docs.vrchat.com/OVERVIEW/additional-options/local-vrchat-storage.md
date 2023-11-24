# VRChat 本地存储

VRChat 在本地存储了许多不同的数据。这个并不太详尽的列表展示了 VRChat 存储数据的位置，以及这些数据的作用。

## AppData LocalLow

`%UserProfile%\AppData\LocalLow\VRChat\VRChat\`

文件夹/文件 名称 | 目的 | 注释
-- | -- | --
`output_log_HH-MM-SS.txt` | 包含应用程序运行时记录的信息。<br>还包含Udon调试输出。 | 时间戳表示客户端启动时的时间。<br>如果这些文件存在了超过24小时，VRChat启动时会自动将其删除。
`config.json` | 配置文件，包含应用程序设置。 | 查看[配置文件](./configuration-file.md)文档以了解详细内容。
`Cache-WindowsPlayer\` | 资源下载缓存。<br>下载的角色、世界、图片和其他资源存储在这里。 | 可以通过[配置文件](./configuration-file.md)重新配置存储位置，以便将文件夹移到更大容量的磁盘上。
`Avatars\` | 本地测试角色。使用SDK“构建和测试（Build\&Test）”时,角色文件将会存储在这里
`OSC\` | OSC设置存储。存储使用OSC in VRChat所需的数据。 | 即使你不使用OSC,这里也可能存在数据。
`LocalAvatarData\` | 角色参数存储。存储已使用过的角色的参数。
`Tools\` | 额外应用程序。存储运行VRChat需要的其他应用程序。 | 目前,这里只包含视频URL解析器。
`LocalPlayerModerations` | **本地存储的玩家操作信息**。存储对其他用户实行的“玩家调整”操作。 | 目前,仅存储“显示”和“隐藏角色”操作。<br>参见下文以了解文件格式。

### LocalPlayerModerations 文件格式

```
/*
*  Storage line format:
*   <key><padding><value><newline>
*    |    |        |      |
*    |    |        |      +-> "\r\n"
*    |    |        +--------> 3 bytes, human-readable decimal, 0-prefixed (e.g. 127, 004, 012)
*    |    +-----------------> ' ' (padded by spaces up to 64)
*    +----------------------> UTF-8 encoded key
*/
```

根据当前情况，`value` 字段有两个可能的值。`004` 表示隐藏角色，`005` 表示显示角色。

## 临时文件

VRChat 及其依赖项可能会在设备上的各种“temp”文件夹中存储临时数据。以下的列表可能并不详尽。

文件夹/文件名称 | 目的 | 注释
-- | -- | --
`%TEMP%\VRChat\VRChat` | 分析文件临时存储在此。 | VRChat为开发目的收集的分析信息。<br>请查看我们的[隐私政策](https://hello.vrchat.com/privacy)以获取更多信息。

## Windows注册表

VRChat通过[ Unity PlayerPrefs API ](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/PlayerPrefs.html)在 `HKCU\Software\VRChat\vrchat` 中存储玩家各种首选项。
