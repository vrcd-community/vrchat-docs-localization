---
title: "数据容器（Data Containers）"
---

# 数据容器（Data Containers）

数据容器（Data Containers）可以存储不同格式的[数据键值（Data Token）](/creators.vrchat.com/worlds/udon/data-containers/data-tokens)、一个有序的[数据列表（Data List）](/creators.vrchat.com/worlds/udon/data-containers/data-lists)或一个存储键值对的[数据词典（Data Dictionary）](/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries)。它们的工作方式类似于 C# 中的列表（List）和词典（Dictionaries）。


数据键值（Data Token）可以按需存储任何其他的数据。每个键值都**只存储一个**变量，但是为了支持嵌套，一个键值也可以存储一整个 DataDictionary 或 DataList。

顺便一提，数据容器（Data Containers）也可以和 [VRCJSON](/creators.vrchat.com/worlds/udon/data-containers/vrcjson) 配合使用，其允许您把数据和来自外部来源（比如说来自[远程字符串加载（Remote String Loading）的 JSON 数据]((/creators.vrchat.com/worlds/udon/string-loading))）的标准 JSON 格式相互转换。

Data Containers store [Data Tokens](/creators.vrchat.com/worlds/udon/data-containers/data-tokens) in various different formats, either as a sequential [Data List](/creators.vrchat.com/worlds/udon/data-containers/data-lists) or as a key-value pair [Data Dictionary](/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries). They are functionally similar to C# Lists and Dictionaries.

DataTokens, in turn, store any other values that you could need. Each token stores one and only one variable, but that could include a whole other DataDictionary or DataList, in order to support nesting.

Additionally, Data Containers are compatible with [VRCJSON](/creators.vrchat.com/worlds/udon/data-containers/vrcjson), which allows you to convert data to/from the standard JSON format, which may come from external sources such as [remote string loading](/creators.vrchat.com/worlds/udon/string-loading).