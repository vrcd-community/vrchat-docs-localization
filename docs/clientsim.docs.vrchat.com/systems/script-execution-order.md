---
upstreamCommit: 4d76fd612a37de18fd85c39062bade59afffb7cf
---

# 脚本执行顺序

| 执行顺序  | 系统名称             | 描述                                                                                                                    |
| --------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| -Infinity | UnityInputSystem     | Unity InputSystem在所有MonoBehaviours之前更新。用户按钮的输入被发送到ClientSimInput并分派事件。                         |
| -3000     | TrackingProvider     | 检查输入以更新TrackingProvider。例如：桌面头部X旋转。                                                                   |
| -3000     | PlayerController     | 在光线投射之前更新玩家位置。                                                                                            |
| -2000     | PlayerRaycaster      | 将PlayerHands的位置更新为TrackingProvider手部数据。光线投射以找到世界中的可交互物体。这必须在EventSystems更新之前发生。 |
| -1000     | Unity Event System   | 发送鼠标事件以与UI交互。顺序不能更改。                                                                                  |
| 0         | ClientSimBehaviours  |                                                                                                                         |
| 0         | UdonBehaviour        | 将更新事件发送到Udon程序。                                                                                              |
| 1         | UdonInput            | 这必须在UdonBehaviour.Update之后发生以确保正确的事件顺序。                                                              |
| 10000     | ClientSimBaseInput   | 更新当前帧的输入事件的tick。只需要确保测试和播放模式在处理输入时表现相同。                                              |
| 30000     | PlayerStationManager | 尽可能晚的更新站点上玩家的位置，以便所有其他脚本有时间先评估。                                                          |
| 30001     | TooltipManager       | 在确定玩家位置后更新Tooltip视觉的位置。                                                                                 |
| 31000     | PostLateUpdater      | 将VRChat的PostLateUpdate事件发送到UdonBehaviours。                                                                      |