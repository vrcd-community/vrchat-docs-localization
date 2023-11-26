# 自动化测试

ClientSim有许多不同的测试来验证程序的行为。大多数测试是集成测试，但也支持单元测试。请查看Unity的TestRunner以查看所有测试。当将ClientSim作为包导入时，可以通过在`“dependencies” :{}`部分后面的项目包清单中添加以下行来启用测试：
```json
"testables": [
  "com.unity.inputsystem",
  "com.vrchat.clientsim"
]
```

一旦添加，Unity将导入测试，您将在Test Runner窗口中看到它们。

![Test Runner](/clientsim.docs.vrchat.com/images/test-runner.png)

## 单元测试

ClientSim有一些单元测试，可以验证Unity Playmode之外的项目。可以重构更多项目，以便从MonoBehaviours中分离出来，使其更适合单元测试。

## 集成测试

ClientSim现在有一个完整的集成测试框架，可以测试包含的大多数功能。该框架允许发送输入事件并监听ClientSim事件，以验证是否发生了适当的操作。此框架也可用于验证特定行为的世界，允许用户创建自己的测试。

### 测试设置

由于ClientSim使用InitializeOnLoad启动的方式，测试需要修改Unity编辑器设置以正确验证行为。在测试环境中，InitializeOnLoad在播放模式开始之前发生。默认的Unity设置在进入播放模式时启用了Domain Reloading。这意味着在切换到播放模式时，所有变量数据都会被清除。为了解决这个问题，所有ClientSim测试必须在禁用Domain Reloading的情况下运行。这对于任何从两个测试夹具基类（ClientSimTestBase和ClientSimWorldTestBase）派生的测试都是自动处理的。

### 测试助手

两个集成测试夹具都带有帮助验证特定行为的方法。

* **ClientSimTestHelpers** - This class contains helper methods to perform useful actions as well as listens to different ClientSim Events to verify actions have occurred.

* **ClientSimTestInput** - This class allows the user to set the value of any Desktop based Input event.

### ClientSimTestBase

Tests fixtures that derive from this class are for testing individual prefabs and not for testing entire worlds. On test begin, ClientSim’s default behaviour is disabled. It is possible to load a world or spawn a prefab, but ClientSim must be started manually. Depending on the order, behaviour will be different compared to starting ClientSim normally through playmode. 

1. If a world or prefab is loaded before starting ClientSim, then any VRC SDK component will not link into ClientSim and start as if ClientSim is disabled. Player spawn points will work as expected in this case as the VRC_SceneDescriptor is needed to start ClientSim and spawn a player.
2. If a world or prefab is loaded after starting ClientSim, then all VRC SDK components will initialize with ClientSim behaviours as in normal playmode. In this case though, the player will have already spawned and will not be placed at the loaded world’s spawn point. 

The majority of ClientSim tests are written in this format. A scene with the minimum components needed to start ClientSim is loaded, ClientSim is started, and then from there the tests perform what is needed, such as calling the appropriate SDK API or spawning prefabs while simulating input events. 

Here is the list of integration tests:

#### Initialization Tests
* Test the behaviour of ClientSim startup given different settings and initial scene objects.

#### Helper Tests
* Test the behaviour of various ClientSim SDK helper classes. AudioSpatializer, AVProVideoPlayer, ObjectPool, ObjectSync, Udon component without program, UIShape.

#### Interact Tests
* Test the interact system for handling interactable objects. Note that since Udon cannot be properly included in packages due to needing external references and are compiled often, this test uses a mock interactable object script

#### Pickup Tests
* Test the interaction system, player hand, and input on different pickup situations.

#### Player Api Tests
* Test behaviour for all exposed methods relating to VRCPlayerApi

#### Player Controller Tests
* Test Player locomotion settings.

#### Station Tests
* Tests using stations and expected behaviour with them.

#### UI Tests
* Test interactions with Unity UI using the VRC_UIShape component.

### ClientSimWorldTestBase

Test fixtures that derive from this class are for testing full worlds and verifying the startup of ClientSim for the given world. The test is required to load a given world in the setup phase of the test, and then ClientSim will start normally as it would outside of the test environment by entering playmode. Due to ClientSim being started normally, only one test may be run at a time as playmode is only started once for all tests. If multiple tests are run together, they will all immediately fail with a warning mentioning that only one test can run at a time.

Three World tests are provided by default:
#### No world descriptor
* Test that ClientSim will fail to start if a scene is loaded without a world descriptor

#### Two Players
* Start ClientSim normally in a basic world, spawn a remote player and verify all data on both players.

#### WorldTestExample
* This is an example test showing what it would be like for a user to write tests for their world. Test is included as a Sample for the ClientSim package and must be imported. Test shows how one would verify a simple “Puzzle” world.
