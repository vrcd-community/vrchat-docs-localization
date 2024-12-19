# OSC 概览

## OSC 简介

[OSC](https://opensoundcontrol.stanford.edu/index.html)是一种让不同的设备和应用程序直接相互对话的方法。对于富有创造力的程序员和制作奇特的互动设备的人来说，它是最受喜爱的一种方法，因为它快速、联网，而且非常开放。

## 那这个和 VRChat 有什么关系？

我们正在 VRChat 中扩展对 OSC 的支持，这样您就可以用各种新方法控制 "形象 "和 "世界"，还可以将数据流从 VRChat 中导出来控制其他东西！我们将推出两个 API：[输入](/docs.vrchat.com/docs/osc-as-input-controller)和[模型参数](/docs.vrchat.com/docs/osc-avatar-parameters)。

## 我怎么使用它？

您可以[启用它](/docs.vrchat.com/docs/osc-overview#enabling-it)，然后使用兼容 OSC 的应用程序或设备将数据流输入 VRChat，或读取来自 VRChat 的数据。本文档系列为想要制作这些应用程序的人提供了大量信息。我们将在这些信息发布足够长的时间后，为这些应用程序添加链接。

## VRChat 端口

对于 VRChat，我们设置的默认接收端口为 9000，发送端口为 9001。因此，用于向 VRChat 发送信息的外部程序应发送数据到 9000 端口，而如果要监听来自 VRChat 的信息，则应用程序或设备应监听 9001 端口。您可以使用命令行参数更改这些值：<br>
`--osc=inPort:senderIP:outPort`

如果您想在命令行上使用默认设置，则应为：<br>
`--osc=9000:127.0.0.1:9001`

请注意，如果您想的话，您也再上面可以使用 "localhost "而不是 "127.0.0.1"。如果您想要让 VRChat 向网络上的另一台设备发送数据，可以像这样把 IP 放在中间：<br>
`--osc=9000:192.168.1.42:9001`

## OSC 工具

您会需要一些 OSC 工具来测试这些功能！

## 独立计划

我们推荐[TouchOSC](https://hexler.net/touchosc)用于发送（有免费 的Windows 客户端），以及[Protokol](https://hexler.net/protokol)用于接收。这些工具的网站上都有相关文档，请仔细阅读以了解其工作原理。

## 程序库

如果您想自己从头开始制作，您有几种选择。

如果您正在使用 C# 编写程序，可以抓使用[OscCore 的一体化分支](https://github.com/vrchat/osccore/tree/all-in-one)，它是 VRChat 内部使用的 OSC 库。

如果您使用的是 Python，可以参考[python-osc](https://github.com/attwad/python-osc)，我们在一些内部测试中使用了它，没有出现任何问题。

## 启用 OSC

您可以在 "圆盘菜单 "的 "OSC">"启用 "下打开 OSC。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/osc-overview-1.png)

</center>

## 测试 OSC

查看 "[调试](./osc-debugging)"页面，查看一些输入值是否与原来的输入信息相匹配。

## 重要的题外话

由于与 VRChat 的 OSC API 交互需要从互联网上下载程序，因此请**谨慎操作！**确保您下载的是知名的、值得信赖的应用程序。询问其他正在使用 OSC 的用户，了解他们正在使用的程序。

如果您有专业知识，可以考虑为您的设置编写自己的实施方案！
