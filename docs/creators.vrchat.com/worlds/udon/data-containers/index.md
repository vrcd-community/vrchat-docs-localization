---
title: "Data Containers"

---

# Data Containers

Data Containers store [Data Tokens](/creators.vrchat.com/worlds/udon/data-containers/data-tokens) in various different formats, either as a sequential [Data List](/creators.vrchat.com/worlds/udon/data-containers/data-lists) or as a key-value pair [Data Dictionary](/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries). They are functionally similar to C# Lists and Dictionaries.

DataTokens, in turn, store any other values that you could need. Each token stores one and only one variable, but that could include a whole other DataDictionary or DataList, in order to support nesting.

Additionally, Data Containers are compatible with [VRCJSON](/creators.vrchat.com/worlds/udon/data-containers/vrcjson), which allows you to convert data to/from the standard JSON format, which may come from external sources such as [remote string loading](/creators.vrchat.com/worlds/udon/string-loading).