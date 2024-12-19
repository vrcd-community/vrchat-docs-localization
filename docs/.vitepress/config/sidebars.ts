import { type DefaultTheme } from 'vitepress'

export function vrcahtDocsSidebars(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '总览',
      items: [
        { text: '欢迎来到VRChat', link: '/docs.vrchat.com/docs/welcome-to-vrchat' },
        { text: '准备开始', link: '/docs.vrchat.com/docs/getting-started' },
        { text: '常见问题', link: '/docs.vrchat.com/docs/frequently-asked-questions' },
        {
          text: '控制器', link: '/docs.vrchat.com/docs/controls',
          collapsed: true,
          items: [
            {
              text: 'SteamVR Input 2.0', link: '/docs.vrchat.com/docs/steamvr-input-2.0',
              collapsed: true,
              items: [
                {text: 'Input 2.0 常见问题解答', link: '/docs.vrchat.com/docs/input-2.0-faq'},
              ],
            },
            { text: 'HTC Vive 手柄', link: '/docs.vrchat.com/docs/vive' },
            { text: 'Oculus Touch', link: '/docs.vrchat.com/docs/touch' },
            { text: 'Valve Index 控制器', link: '/docs.vrchat.com/docs/valve-index' },
            { text: '键盘与鼠标', link: '/docs.vrchat.com/docs/keyboard-and-mouse' },
            { text: '手柄控制器', link: '/docs.vrchat.com/docs/gamepad' },
            { text: '圆盘菜单', link: '/docs.vrchat.com/docs/action-menu' },
          ],
        },
        {
          text: '额外选项', link: '/docs.vrchat.com/docs/additional-options',
          collapsed: true,
          items: [
            { text: '手势切换', link: '/docs.vrchat.com/docs/gesture-toggle' },
            { text: '启动选项', link: '/docs.vrchat.com/docs/launch-options' },
            { text: '配置文件', link: '/docs.vrchat.com/docs/configuration-file' },
            { text: 'VRChat 图像性能选项', link: '/docs.vrchat.com/docs/vrchat-configuration-window' },
            { text: 'VRChat 本地存储', link: '/docs.vrchat.com/docs/local-vrchat-storage' },
          ],
        },
      ],
    },
    {
      text: '指南',
      items: [
        { text: '两步验证', link: '/docs.vrchat.com/docs/setup-2fa' },
        { text: '提出本地化修改建议', link: '/docs.vrchat.com/docs/suggesting-localization-changes' },
        { text: '调整您的模型身高', link: '/docs.vrchat.com/docs/adjusting-your-avatars-height' },
      ],
    },
    {
      text: '高阶指南',
      items: [
        { text: '在虚拟机中使用 VRChat', link: '/docs.vrchat.com/docs/using-vrchat-in-a-virtual-machine' },
      ],
    },
    {
      text: 'VRCHAT QUEST',
      items: [
        { text: '为 Oculus Quest 创建内容', link: '/creators.vrchat.com/platforms/android/' },
      ],
    },
    {
      text: '系统',
      items: [
        { text: 'VRChat 社区实验室', link: '/docs.vrchat.com/docs/vrchat-community-labs' },
        { text: 'VRChat 安全和信誉系统', link: '/docs.vrchat.com/docs/vrchat-safety-and-trust-system' },
        { text: '模型的动态骨骼 (Dynamic Bones) 限制', link: '/docs.vrchat.com/docs/avatar-dynamic-bone-limits' },
        { text: '模型互动权限和设置', link: '/docs.vrchat.com/docs/permissions-and-settings' },
        { text: '公开模型克隆', link: '/docs.vrchat.com/docs/public-avatar-cloning' },
        {
          text: '全身追踪', link: '/docs.vrchat.com/docs/full-body-tracking',
          collapsed: true,
          items: [
            { text: 'IK 2.0 功能和选项', link: '/docs.vrchat.com/docs/ik-20-features-and-options' },
          ],
        },
        { text: '备用模型系统', link: '/docs.vrchat.com/docs/avatar-fallback-system' },

      ],
    },
    {
      text: 'VRCHAT OSC API',
      items: [
        {
          text: 'OSC 概览', link: '/docs.vrchat.com/docs/osc-overview',
          collapsed: true,
          items: [
            { text: 'OSC 模型参数', link: '/docs.vrchat.com/docs/osc-avatar-parameters' },
            { text: 'OSC 调试', link: '/docs.vrchat.com/docs/osc-debugging' },
            { text: 'OSC DIY', link: '/docs.vrchat.com/docs/osc-diy' },
            { text: '将 OSC 作为输入控制器', link: '/docs.vrchat.com/docs/osc-as-input-controller' },
            { text: 'OSC 追踪器', link: '/docs.vrchat.com/docs/osc-trackers' },
            { text: 'OSC 眼动追踪', link: '/docs.vrchat.com/docs/osc-eye-tracking' },
            { text: 'OSC 资源', link: '/docs.vrchat.com/docs/osc-resources' },
            { text: 'OSCQuery', link: '/docs.vrchat.com/docs/oscquery' },
          ],
        },
      ],
    },
    {
      text: 'SDK 指南',
      items: [
        { text: '设置 SDK', link: '/creators.vrchat.com/sdk/' },
      ],
    },
    {
      text: '虚拟形象',
      items: [
        { text: '制作您的第一个虚拟形象', link: '/creators.vrchat.com/avatars/creating-your-first-avatar' },
      ],
    },
    {
      text: '世界',
      items: [
        { text: '制作您的第一个世界', link: '/creators.vrchat.com/docs/creating-your-first-world' },
        {
          text: '升级 Unity 项目', link: '/docs.vrchat.com/docs/upgrading-unity-projects',
          collapsed: true,
          items: [
            { text: '从 2018 LTS 迁移到 2019 LTS', link: '/docs.vrchat.com/docs/migrating-from-2018-lts-to-2019-lts' },
            { text: '从 2017 LTS 迁移到 2018 LTS', link: '/docs.vrchat.com/docs/migrating-from-2017-lts-to-2018-lts' },
            { text: '从 5.6 迁移到 2017 LTS', link: '/docs.vrchat.com/docs/migrating-from-56-to-20174x' },
            { text: '迁移到更新的 Unity 大版本', link: '/docs.vrchat.com/docs/migrating-to-a-newer-minor-unity-version' },
          ],
        },
      ],
    },
    {
      text: 'VRCHAT UDON',
      items: [
        { text: '什么是 Udon？', link: '/creators.vrchat.com/worlds/udon/' },
      ],
    },
    {
      text: '最新版本',
      items: [
        // { text: 'VRChat 2023.4.1', link: '/docs.vrchat.com/LATEST-RELEASE/latest-release' },
        // { text: 'VRChat 2023.4.1p1', link: '/docs.vrchat.com/LATEST-RELEASE/vrchat-202341p1' },
      ],
    },
    {
      text: '更新公告',
      items: [
        // { text: '最近更新', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs' },
        // { text: '存档', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs' },
      ],
    },
  ]
}

export function vrchatCreatorsDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '欢迎!', link: '/creators.vrchat.com/getting-started' },
    {
      text: 'Getting Started', link: '/creators.vrchat.com/sdk/',
      collapsed: true,
      items: [
        {
          text: 'Managing Unity',
          link: '/creators.vrchat.com/sdk/upgrade/',
          collapsed: true,
          items: [
            { text: '当前支持的 Unity 版本', link: '/creators.vrchat.com/sdk/upgrade/current-unity-version' },
            { text: 'Upgrading Projects to 2022', link: '/creators.vrchat.com/sdk/upgrade/unity-2022' },
            { text: 'New Worlds and Avatars in 2022', link: '/creators.vrchat.com/sdk/upgrade/worlds-and-avatars-in-2022' },
            { text: 'Minor Unity Upgrades', link: '/creators.vrchat.com/sdk/upgrade/migrating-to-a-newer-minor-unity-version' },
          ],
        },
        { text: '构建管线回调 (Pipeline Callbacks) 和接口 (Interfaces)', link: '/creators.vrchat.com/sdk/build-pipeline-callbacks-and-interfaces' },
        { text: '公开 SDK API', link: '/creators.vrchat.com/sdk/public-sdk-api' },
        { text: 'SDK 疑难解答', link: '/creators.vrchat.com/sdk/sdk-troubleshooting' },
        { text: '升级 SDK', link: '/creators.vrchat.com/sdk/updating-the-sdk' },
        { text: 'VRCPipelineManager', link: '/creators.vrchat.com/sdk/vrcpipelinemanager' },
      ]
    },
    {
      text: '虚拟形象', link: '/creators.vrchat.com/avatars/',
      collapsed: true,
      items: [
        { text: '创建您的第一个虚拟形象', link: '/creators.vrchat.com/avatars/creating-your-first-avatar' },
        {
          text: 'Avatar Dynamics', link: '/creators.vrchat.com/avatars/avatar-dynamics/',
          collapsed: true,
          items: [
            { text: 'Contacts', link: '/creators.vrchat.com/avatars/avatar-dynamics/contacts' },
            { text: 'Debugging Avatar Dynamics', link: '/creators.vrchat.com/avatars/avatar-dynamics/debugging-avatar-dynamics' },
            { text: 'PhysBones', link: '/creators.vrchat.com/avatars/avatar-dynamics/physbones' },
          ],
        },
        { text: 'Impostors', link: '/creators.vrchat.com/avatars/avatar-impostors' },
        { text: '动画器参数', link: '/creators.vrchat.com/avatars/animator-parameters' },
        { text: 'Avatar Optimization Tips', link: '/creators.vrchat.com/avatars/avatar-optimizing-tips' },
        { text: 'Performance Ranks', link: '/creators.vrchat.com/avatars/avatar-performance-ranking-system' },
        { text: 'Avatar Scaling', link: '/creators.vrchat.com/avatars/avatar-scaling' },
        { text: 'Technical Considerations around Avatar Scaling', link: '/creators.vrchat.com/avatars/avatar-scaling.md' },
        { text: '模型菜单与控件', link:'/creators.vrchat.com/avatars/expression-menu-and-controls'},
        { text: 'Playable Layers', link: '/creators.vrchat.com/avatars/playable-layers' },
        { text: 'Rig Requirements', link: '/creators.vrchat.com/avatars/rig-requirements' },
        { text: 'Shader Blocking and Fallback System', link: '/creators.vrchat.com/avatars/shader-fallback-system' },
        { text: 'State Behaviors', link: '/creators.vrchat.com/avatars/state-behaviors' },
        { text: 'Allowed Avatar Components', link: '/creators.vrchat.com/avatars/whitelisted-avatar-components' },
      ]
    },
    {
      text: '世界', link: '/creators.vrchat.com/worlds/',
      collapsed: true,
      items: [
        { text: '制作您的第一个世界', link: '/creators.vrchat.com/worlds/creating-your-first-world' },
        { text: '世界制作，优化，和社区实验室贴士', link: '/creators.vrchat.com/worlds/submitting-a-world-to-be-made-public' },
        {
          text: '示例', link: '/creators.vrchat.com/worlds/examples/',
          collapsed: true,
          items: [
            { text: '图片加载', link: '/creators.vrchat.com/worlds/examples/image-loading' },
            {
              text: '越障挑战', link: '/creators.vrchat.com/worlds/examples/obstacle-course/',
              collapsed: true,
              items: [
                { text: '越障挑战: 从自定义部分开始构建', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-custom-parts' },
                { text: '越障挑战: 从示例部分开始构建', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-demo-parts' },
                { text: '越障挑战: 漫游视角', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-flythrough' },
                { text: '越障挑战: 工作原理', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-how-stuff-works' },
                { text: '越障挑战工具包', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-window' },
              ]
            },
            {
              text: 'Udon 示例场景', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/',
              collapsed: true,
              items: [
                { text: '模型缩放设置 ', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/avatar-scaling-settings' },
                { text: '简易画笔系统', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/simple-pen-system' },
                { text: 'Udon 同步视频播放器', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/udon-video-sync-player' },
              ]
            },
          ]
        },
        {
          text: 'Udon', link: '/creators.vrchat.com/worlds/udon/',
          collapsed: true,
          items: [
            { text: '入门 Udon', link: '/creators.vrchat.com/worlds/udon/getting-started-with-udon' },
            {
              text: 'Udon Node Graph', link: '/creators.vrchat.com/worlds/udon/graph/',
              collapsed: true,
              items: [
                { text: '事件节点', link: '/creators.vrchat.com/worlds/udon/graph/event-nodes' },
                { text: '节点图元素 (Graph Elements)', link: '/creators.vrchat.com/worlds/udon/graph/graph-elements' },
                { text: '查找节点', link: '/creators.vrchat.com/worlds/udon/graph/searching-for-nodes' },
                { text: '特殊节点', link: '/creators.vrchat.com/worlds/udon/graph/special-nodes' },
                { text: '类型 (Type) 节点', link: '/creators.vrchat.com/worlds/udon/graph/type-nodes' },
              ]
            },
            {
              text: '数据容器 (Data Containers)', link: '/creators.vrchat.com/worlds/udon/data-containers/',
              collapsed: true,
              items: [
                { text: '数据词典 (Data Dictionaries)', link: '/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries' },
                { text: '数据列表 (Data Lists)', link: '/creators.vrchat.com/worlds/udon/data-containers/data-lists' },
                { text: '数据键值 (Data Tokens)', link: '/creators.vrchat.com/worlds/udon/data-containers/data-tokens' },
                { text: 'VRC JSON', link: '/creators.vrchat.com/worlds/udon/data-containers/vrcjson' },
              ]
            },
            {
              text: 'Udon 中的 Midi', link: '/creators.vrchat.com/worlds/udon/midi/',
              collapsed: true,
              items: [
                { text: 'Midi 播放 (Midi Playback)', link: '/creators.vrchat.com/worlds/udon/midi/midi-playback' },
                { text: '实时 Midi (Realtime Midi)', link: '/creators.vrchat.com/worlds/udon/midi/realtime-midi' },
              ]
            },
            {
              text: '网络', link: '/creators.vrchat.com/worlds/udon/networking/',
              collapsed: true,
              items: [
                { text: '网络组件', link: '/creators.vrchat.com/worlds/udon/networking/network-components' },
                { text: '网络规范和贴士 (Network Specs and Tips)', link: '/creators.vrchat.com/worlds/udon/networking/network-details' },
                { text: '网络 ID 工具 (Network ID Utility)', link: '/creators.vrchat.com/worlds/udon/networking/network-id-utility' },
              ]
            },
            {
              text: '玩家 API', link: '/creators.vrchat.com/worlds/udon/players/',
              collapsed: true,
              items: [
                { text: '获取玩家', link: '/creators.vrchat.com/worlds/udon/players/getting-players' },
                { text: '玩家语音', link: '/creators.vrchat.com/worlds/udon/players/player-audio' },
                { text: '玩家模型缩放', link: '/creators.vrchat.com/worlds/udon/players/player-avatar-scaling' },
                { text: '玩家碰撞体 (Player Collisions)', link: '/creators.vrchat.com/worlds/udon/players/player-collisions' },
                { text: '玩家物理 (Player Forces)', link: '/creators.vrchat.com/worlds/udon/players/player-forces' },
                { text: '玩家位置', link: '/creators.vrchat.com/worlds/udon/players/player-positions' },
              ]
            },
            { text: '使用构建 & 测试', link: '/creators.vrchat.com/worlds/udon/using-build-test' },
            {
              text: '视频播放器', link: '/creators.vrchat.com/worlds/udon/video-players/',
              collapsed: true,
              items: [
                { text: '视频播放器链接白名单', link: '/creators.vrchat.com/worlds/udon/video-players/www-whitelist' },
              ]
            },
            { text: '动画事件', link: '/creators.vrchat.com/worlds/udon/animation-events' },
            { text: '模型 (Avatar) 事件', link: '/creators.vrchat.com/worlds/udon/avatar-events' },
            { text: '调试 Udon 项目', link: '/creators.vrchat.com/worlds/udon/debugging-udon-projects' },
            { text: '事件执行顺序', link: '/creators.vrchat.com/worlds/udon/event-execution-order' },
            { text: '网络图片加载', link: '/creators.vrchat.com/worlds/udon/image-loading' },
            { text: '玩家输入事件', link: '/creators.vrchat.com/worlds/udon/input-events' },
            { text: '网络文本加载', link: '/creators.vrchat.com/worlds/udon/string-loading' },
            { text: 'Udon Moderation Tool Guidelines', link: '/creators.vrchat.com/worlds/udon/udon-moderation-tool-guidelines' },
            { text: 'UI 事件', link: '/creators.vrchat.com/worlds/udon/ui-events' },
            { text: '世界调试视图', link: '/creators.vrchat.com/worlds/udon/world-debug-views' },
          ]
        },
        {
          text: 'VRCGraphics', link: '/creators.vrchat.com/worlds/vrc-graphics/',
          collapsed: true,
          items: [
            { text: 'ASyncGPUReadback', link: '/creators.vrchat.com/worlds/vrc-graphics/asyncgpureadback' },
            { text: 'VRChat Shader Globals', link: '/creators.vrchat.com/worlds/vrc-graphics/vrchat-shader-globals' },
          ]
        },
        {
          text: '场景组件', link: '/creators.vrchat.com/worlds/components/',
          collapsed: true,
          items: [
            { text: 'VRC Avatar Pedestal', link: '/creators.vrchat.com/worlds/components/vrc_avatarpedestal' },
            { text: 'VRC Mirror Reflection', link: '/creators.vrchat.com/worlds/components/vrc_mirrorreflection' },
            { text: 'VRC Object Sync', link: '/creators.vrchat.com/worlds/components/vrc_objectsync' },
            { text: 'VRC Pickup', link: '/creators.vrchat.com/worlds/components/vrc_pickup' },
            { text: 'VRC Portal Marker', link: '/creators.vrchat.com/worlds/components/vrc_portalmarker' },
            { text: 'VRC Scene Descriptor', link: '/creators.vrchat.com/worlds/components/vrc_scenedescriptor' },
            { text: 'VRC Spatial Audio Source', link: '/creators.vrchat.com/worlds/components/vrc_spatialaudiosource' },
            { text: 'VRC Station', link: '/creators.vrchat.com/worlds/components/vrc_station' },
            { text: 'VRC Ui Shape', link: '/creators.vrchat.com/worlds/components/vrc_uishape' },
          ]
        },
        { text: 'VRChat 的 Unity 图层', link: '/creators.vrchat.com/worlds/layers' },
        { text: 'SDK 预制件', link: '/creators.vrchat.com/worlds/sdk-prefabs' },
        { text: '支持的脚本资源', link: '/creators.vrchat.com/worlds/supported-assets' },
        { text: '世界组件白名单', link: '/creators.vrchat.com/worlds/whitelisted-world-components' },
      ]
    },
    {
      text: '跨平台', link: '/creators.vrchat.com/platforms/',
      collapsed: true,
      items: [
        {
          text: '安卓', link: '/creators.vrchat.com/platforms/android/',
          collapsed: true,
          items: [
            { text: '为 Unity 设置 Quest 内容开发环境', link: '/creators.vrchat.com/platforms/android/setting-up-unity-for-creating-quest-content' },
            { text: '跨平台设置', link: '/creators.vrchat.com/platforms/android/cross-platform-setup' },
            { text: '移动端最佳实践', link: '/creators.vrchat.com/platforms/android/android-best-practices' },
            { text: 'Quest 内容限制', link: '/creators.vrchat.com/platforms/android/quest-content-limitations' },
            { text: 'Quest 内容优化', link: '/creators.vrchat.com/platforms/android/quest-content-optimization' },
          ]
        }
      ]
    },
  ]
}

export function udonSharpDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'UdonSharp', link: '/udonsharp.docs.vrchat.com/' },
    {
      text: '开始使用',
      collapsed: true,
      items: [
        { text: 'Setup', link: '/udonsharp.docs.vrchat.com/setup' },
        { text: 'Examples', link: '/udonsharp.docs.vrchat.com/examples' },
        { text: 'Community Resources', link: '/udonsharp.docs.vrchat.com/community-resources' },
        { text: 'Configuration', link: '/udonsharp.docs.vrchat.com/configuration' },
        { text: 'Migration', link: '/udonsharp.docs.vrchat.com/migration' },
        { text: '常见问题', link: '/udonsharp.docs.vrchat.com/frequently-asked-questions' },
      ]
    },
    {
      text: '文档',
      collapsed: true,
      items: [
        { text: 'UdonSharp', link: '/udonsharp.docs.vrchat.com/udonsharp' },
        { text: 'VRChat API', link: '/udonsharp.docs.vrchat.com/vrchat-api' },
        { text: '事件', link: '/udonsharp.docs.vrchat.com/events' },
        { text: 'Editor Scripting', link: '/udonsharp.docs.vrchat.com/editor-scripting' },
      ]
    },
    {
      text: 'Extra',
      collapsed: true,
      items: [
        { text: 'Random Tips & Performance Pointers', link: '/udonsharp.docs.vrchat.com/random-tips-&-performance-pointers' },
        { text: 'Runtime Exception Debugging', link: '/udonsharp.docs.vrchat.com/runtime-exception-debugging' },
        { text: 'Class Exposure Tree', link: '/udonsharp.docs.vrchat.com/class-exposure-tree' },
        { text: 'Networking Tips & Tricks', link: '/udonsharp.docs.vrchat.com/networking-tips-&-tricks' },
        { text: 'Using VRC Stations', link: '/udonsharp.docs.vrchat.com/using-vrc-stations' },
        { text: 'Exporting to Assembly Files', link: '/udonsharp.docs.vrchat.com/exporting-to-assembly-files' },
      ]
    },
  ]
}

export function vccDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '创作者助手', link: '/vcc.docs.vrchat.com/' },
    {
      text: '指南',
      collapsed: true,
      items: [
        { text: '准备开始', link: '/vcc.docs.vrchat.com/guides/getting-started' },
        { text: '常见问题', link: '/vcc.docs.vrchat.com/guides/faq' },
        { text: '查找示例资源', link: '/vcc.docs.vrchat.com/guides/finding-the-samples' },
        { text: '术语表', link: '/vcc.docs.vrchat.com/guides/glossary' },
        { text: '使用项目模板', link: '/vcc.docs.vrchat.com/guides/using-project-template-repos' },
        { text: '错误报告和功能请求', link: '/vcc.docs.vrchat.com/guides/bugs-features' },
        { text: '将现有资源转换为 VPM 包', link: '/vcc.docs.vrchat.com/guides/convert-unitypackage' },
        { text: '版本匹配', link: '/vcc.docs.vrchat.com/guides/version-matching' },
        { text: '社区仓库', link: '/vcc.docs.vrchat.com/guides/community-repositories' },
        { text: '创建包列表', link: '/vcc.docs.vrchat.com/guides/create-listing' },
      ]
    },
    {
      text: '包管理器',
      collapsed: true,
      items: [
        { text: '概述', link: '/vcc.docs.vrchat.com/vpm/' },
        { text: '模板', link: '/vcc.docs.vrchat.com/vpm/templates' },
        { text: '包', link: '/vcc.docs.vrchat.com/vpm/packages' },
        { text: '迁移项目', link: '/vcc.docs.vrchat.com/vpm/migrating' },
        { text: '仓库', link: '/vcc.docs.vrchat.com/vpm/repos' },
        { text: 'CLI', link: '/vcc.docs.vrchat.com/vpm/cli' },
        { text: '包解析器', link: '/vcc.docs.vrchat.com/vpm/resolver' },
        { text: '在 VPM 中使用版本控制', link: '/vcc.docs.vrchat.com/vpm/source-control' },
        { text: '精选社区包', link: '/vcc.docs.vrchat.com/vpm/curated-community-packages' },
      ]
    },
    {
      text: '实用工具',
      collapsed: true,
      items: [
        { text: 'VRC 快捷启动工具', link: '/vcc.docs.vrchat.com/tools/vrc-quick-launcher' },
      ]
    },
    { text: '旧版 SDK', link: '/vcc.docs.vrchat.com/legacy-sdk' },
    { text: '路线图', link: '/vcc.docs.vrchat.com/roadmap' },
  ]
}

export function clientSimDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "指南",
      collapsed: true,
      link: '/clientsim.docs.vrchat.com/guides/index.md',
      items: [
        { text: "开始使用", link: "/clientsim.docs.vrchat.com/guides/getting-started.md" },
      ]
    },
    {
      text: "Systems",
      collapsed: true,
      link: '/clientsim.docs.vrchat.com/systems/index.md',
      items: [
        { text: "Architecture", link: "/clientsim.docs.vrchat.com/systems/architecture" },
        { text: "Automated Testing", link: "/clientsim.docs.vrchat.com/systems/automated-testing" },
        {
          text: "Editor",
          collapsed: true,
          link: '/clientsim.docs.vrchat.com/systems/editor/index.md',
          items: [
            { text: "Editor Runtime Linker", link: "/clientsim.docs.vrchat.com/systems/editor/editor-runtime-linker.md" },
            { text: "Helper Editors", link: "/clientsim.docs.vrchat.com/systems/editor/helper-editors.md" },
            { text: "设置界面", link: "/clientsim.docs.vrchat.com/systems/editor/settings-window.md" }
          ]
        },
        {
          text: "Runtime Systems",
          collapsed: true,
          link: '/clientsim.docs.vrchat.com/systems/runtime/index.md',
          items: [
            { text: "Blacklist Manager", link: "/clientsim.docs.vrchat.com/systems/runtime/blacklist-manager.md" },
            { text: "Event Dispatcher", link: "/clientsim.docs.vrchat.com/systems/runtime/event-dispatcher.md" },
            { text: "VRCSDK Helpers", link: "/clientsim.docs.vrchat.com/systems/runtime/helpers.md" },
            { text: "Highlight Manager", link: "/clientsim.docs.vrchat.com/systems/runtime/highlight-manager.md" },
            { text: "Input", link: "/clientsim.docs.vrchat.com/systems/runtime/input.md" },
            { text: "InteractiveLayerProvider", link: "/clientsim.docs.vrchat.com/systems/runtime/interactive-layer-provider.md" },
            { text: "Client Sim Main", link: "/clientsim.docs.vrchat.com/systems/runtime/main.md" },
            { text: "Client Sim Menu", link: "/clientsim.docs.vrchat.com/systems/runtime/menu.md" },
            { text: "Player Manager", link: "/clientsim.docs.vrchat.com/systems/runtime/player-manager.md" },
            { text: "Player Spawner", link: "/clientsim.docs.vrchat.com/systems/runtime/player-spawner.md" },
            { text: "Player", link: "/clientsim.docs.vrchat.com/systems/runtime/player.md" },
            { text: "RuntimeLoader", link: "/clientsim.docs.vrchat.com/systems/runtime/runtime-loader.md" },
            { text: "Scene Manager", link: "/clientsim.docs.vrchat.com/systems/runtime/scene-manager.md" },
            { text: "Settings", link: "/clientsim.docs.vrchat.com/systems/runtime/settings.md" },
            { text: "SyncedObjectManager", link: "/clientsim.docs.vrchat.com/systems/runtime/synced-object-manager.md" },
            { text: "TooltipManager", link: "/clientsim.docs.vrchat.com/systems/runtime/tooltip-manager.md" },
            { text: "UdonManager", link: "/clientsim.docs.vrchat.com/systems/runtime/udon-manager.md" },
            { text: "Unity Event System", link: "/clientsim.docs.vrchat.com/systems/runtime/unity-event-system.md" }
          ]
        },
        { text: "Script Execution Order", link: "/clientsim.docs.vrchat.com/systems/script-execution-order" },
      ]
    }
  ]
}