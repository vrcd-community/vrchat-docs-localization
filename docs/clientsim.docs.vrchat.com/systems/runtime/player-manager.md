---
upstreamCommit: 4d76fd612a37de18fd85c39062bade59afffb7cf
---

# 玩家管理器
玩家管理器负责在 ClientSim 运行时处理 VRCPlayerApi 数据。这个系统处理创建和销毁玩家的相关事件，管理当前的主要玩家，并发送相关的[事件](event-dispatcher.md)，如 OnPlayerJoin、OnPlayerLeft 和 OnNewMaster。玩家管理器的实现与 CyanEmu 中的实现类似，但在这里它是一个实例类而不是静态类。大多数 VRCPlayerApi SDK 钩子都链接到这个类中的静态函数。