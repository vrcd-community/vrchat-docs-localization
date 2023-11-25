import { type DefaultTheme } from 'vitepress'

export function vrcahtDocsSidebars(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '总览',
      items: [
        { text: '欢迎来到VRChat', link: '/docs.vrchat.com/OVERVIEW/welcome-to-vrchat' },
        { text: '准备开始', link: '/docs.vrchat.com/OVERVIEW/getting-started' },
        { text: '常见问题', link: '/docs.vrchat.com/OVERVIEW/frequently-asked-questions' },
        {
          text: '控制', link: '/docs.vrchat.com/OVERVIEW/controls/controls',
          collapsed: true,
          items: [
            { text: 'HTC Vive 手柄', link: '/docs.vrchat.com/OVERVIEW/controls/vive' },
            { text: 'Oculus Touch', link: '/docs.vrchat.com/OVERVIEW/controls/touch' },
            { text: 'Valve Index 控制器', link: '/docs.vrchat.com/OVERVIEW/controls/valve-index' },
            { text: '键盘与鼠标', link: '/docs.vrchat.com/OVERVIEW/controls/keyboard-and-mouse' },
            { text: '手柄控制器', link: '/docs.vrchat.com/OVERVIEW/controls/gamepad' },
            { text: '行动菜单', link: '/docs.vrchat.com/OVERVIEW/controls/action-menu' },
          ],
        },
        {
          text: '额外选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/additional-options',
          collapsed: true,
          items: [
            { text: '手势切换', link: '/docs.vrchat.com/OVERVIEW/additional-options/gesture-toggle' },
            { text: '启动选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/launch-options' },
            { text: '配置文件', link: '/docs.vrchat.com/OVERVIEW/additional-options/configuration-file' },
            { text: 'VRChat图像性能选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/vrchat-configuration-window' },
            { text: 'VRChat 本地存储', link: '/docs.vrchat.com/OVERVIEW/additional-options/local-vrchat-storage' },
          ],
        },
      ],
    },
    {
      text: '指南',
      items: [
        { text: '两步身份验证', link: '/docs.vrchat.com/GUIDES/setup-2fa' },
        { text: '提出本地化修改建议', link: '/docs.vrchat.com/GUIDES/suggesting-localization-changes' },
        { text: '调整您的用户模型身高', link: '/docs.vrchat.com/GUIDES/adjusting-your-avatars-height' },
      ],
    },
    {
      text: '高阶指南',
      items: [
        { text: '在虚拟机中使用 VRChat', link: '/docs.vrchat.com/ADVANCED-GUIDES/using-vrchat-in-a-virtual-machine' },
      ],
    },
    {
      text: 'VRCHAT QUEST',
      items: [
        { text: '为 Oculus Quest 创建 VRChat 内容', link: '/creators.vrchat.com/platforms/android/' },
      ],
    },
    {
      text: '系统',
      items: [
        { text: 'VRChat 社区实验室', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs' },
        { text: 'VRChat 安全和信誉系统', link: '/docs.vrchat.com/SYSTEM/vrchat-safety-and-trust-system' },
        { text: '虚拟形象动态骨骼限制', link: '/docs.vrchat.com/SYSTEM/avatar-dynamic-bone-limits' },
        { text: '虚拟形象互动权限和设置', link: '/docs.vrchat.com/SYSTEM/permissions-and-settings' },
        { text: '公开虚拟形象克隆', link: '/docs.vrchat.com/SYSTEM/public-avatar-cloning' },
        {
          text: '全身追踪', link: '/docs.vrchat.com/SYSTEM/full-body-tracking/full-body-tracking',
          collapsed: true,
          items: [
            { text: 'IK 2.0 功能和选项', link: '/docs.vrchat.com/SYSTEM/full-body-tracking/ik-20-features-and-options' },
          ],
        },
        { text: '备用模型系统', link: '/docs.vrchat.com/SYSTEM/avatar-fallback-system' },

      ],
    },
    {
      text: 'VRCHAT OSC API',
      items: [
        {
          text: 'OSC 概览', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-overview',
          collapsed: true,
          items: [
            { text: 'OSC 模型参数', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-avatar-parameters' },
            { text: 'OSC 调试', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-debugging' },
            { text: 'OSC DIY', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-diy' },
            { text: '将 OSC 作为输入控制器', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-as-input-controller' },
            { text: 'OSC 追踪器', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-trackers' },
            { text: 'OSC 眼动追踪', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-eye-tracking' },
            { text: 'OSC 资源', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-resources' },
            { text: 'OSCQuery', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-query' },
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
        { text: '制作您的第一个世界', link: '/creators.vrchat.com/worlds/creating-your-first-world' },
        {
          text: '升级 Unity 项目', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/upgrading-unity-projects',
          collapsed: true,
          items: [
            { text: '从 2018 LTS 迁移到 2019 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-2018-lts-to-2019-lts' },
            { text: '从 2017 LTS 迁移到 2018 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-2017-lts-to-2018-lts' },
            { text: '从 5.6 迁移到 2017 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-56-to-20174x' },
            { text: '迁移到更新的 Unity 大版本', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-to-a-newer-minor-unity-version' },
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
        { text: 'VRChat 2023.4.1', link: '/docs.vrchat.com/LATEST-RELEASE/latest-release' },
        { text: 'VRChat 2023.4.1p1', link: '/docs.vrchat.com/LATEST-RELEASE/vrchat-202341p1' },
      ],
    },
    {
      text: '更新公告',
      items: [
        { text: '最近更新', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs' },
        { text: '存档', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs' },
      ],
    },
  ]
}

export function vrchatCreatorsDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '欢迎!', link: '/creators.vrchat.com/getting-started' },
    {
      text: '安装 SDK', link: '/creators.vrchat.com/sdk/',
      collapsed: true,
      items: [
        { text: '构建管线回调 (Pipeline Callbacks) 和接口 (Interfaces)', link: '/creators.vrchat.com/sdk/build-pipeline-callbacks-and-interfaces' },
        { text: '当前支持的 Unity 版本', link: '/creators.vrchat.com/sdk/current-unity-version' },
        { text: '迁移到更新的 Unity 大版本', link: '/creators.vrchat.com/sdk/migrating-to-a-newer-minor-unity-version' },
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
        { text: 'Creating Your First Avatar', link: '/creators.vrchat.com/avatars/creating-your-first-avatar' },
        {
          text: 'Avatar Dynamics', link: '/creators.vrchat.com/avatars/avatar-dynamics/',
          items: [
            { text: 'Contacts', link: '/creators.vrchat.com/avatars/avatar-dynamics/contacts' },
            { text: 'Debugging Avatar Dynamics', link: '/creators.vrchat.com/avatars/avatar-dynamics/debugging-avatar-dynamics' },
            { text: 'PhysBones', link: '/creators.vrchat.com/avatars/avatar-dynamics/physbones' },
          ],
        },
        { text: 'Animator Parameters', link: '/creators.vrchat.com/avatars/animator-parameters' },
        { text: 'Avatar Optimization Tips', link: '/creators.vrchat.com/avatars/avatar-optimizing-tips' },
        { text: 'Performance Ranks', link: '/creators.vrchat.com/avatars/avatar-performance-ranking-system' },
        { text: 'Avatar Scaling', link: '/creators.vrchat.com/avatars/avatar-scaling' },
        { text: 'Technical Considerations around Avatar Scaling', link: '/creators.vrchat.com/avatars/expression-menu-and-controls' },
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
        { text: 'World Creation, Optimization, and Community Labs Tips', link: '/creators.vrchat.com/worlds/submitting-a-world-to-be-made-public' },
        {
          text: 'Examples', link: '/creators.vrchat.com/worlds/examples/',
          collapsed: true,
          items: [
            { text: 'Image Loading', link: '/creators.vrchat.com/worlds/examples/image-loading' },
            {
              text: 'Obstacle Course', link: '/creators.vrchat.com/worlds/examples/obstacle-course/',
              collapsed: true,
              items: [
                { text: 'Obstacle Course: Build From Custom Parts', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-custom-parts' },
                { text: 'Obstacle Course: Build From Demo Parts', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-demo-parts' },
                { text: 'Obstacle Course: Flythrough', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-flythrough' },
                { text: 'Obstacle Course: How Stuff Works', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-how-stuff-works' },
                { text: 'Obstacle Course Toolkit', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-window' },
              ]
            },
            {
              text: 'Udon Example Scene', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/',
              collapsed: true,
              items: [
                { text: 'Avatar Scaling Settings', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/avatar-scaling-settings' },
                { text: 'Simple Pen System', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/simple-pen-system' },
                { text: 'Udon Video Sync Player', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/udon-video-sync-player' },
              ]
            },
          ]
        },
        {
          text: 'Udon', link: '/creators.vrchat.com/worlds/udon/',
          collapsed: true,
          items: [
            { text: 'Getting Started with Udon', link: '/creators.vrchat.com/worlds/udon/getting-started-with-udon' },
            {
              text: 'Udon Node Graph', link: '/creators.vrchat.com/worlds/udon/graph/',
              collapsed: true,
              items: [
                { text: 'Event Nodes', link: '/creators.vrchat.com/worlds/udon/graph/event-nodes' },
                { text: 'Graph Elements', link: '/creators.vrchat.com/worlds/udon/graph/graph-elements' },
                { text: 'Searching For Nodes', link: '/creators.vrchat.com/worlds/udon/graph/searching-for-nodes' },
                { text: 'Special Nodes', link: '/creators.vrchat.com/worlds/udon/graph/special-nodes' },
                { text: 'Type Nodes', link: '/creators.vrchat.com/worlds/udon/graph/type-nodes' },
              ]
            },
            {
              text: 'Data Containers', link: '/creators.vrchat.com/worlds/udon/data-containers/',
              collapsed: true,
              items: [
                { text: 'Data Dictionaries', link: '/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries' },
                { text: 'Data Lists', link: '/creators.vrchat.com/worlds/udon/data-containers/data-lists' },
                { text: 'Data Tokens', link: '/creators.vrchat.com/worlds/udon/data-containers/data-tokens' },
                { text: 'VRC JSON', link: '/creators.vrchat.com/worlds/udon/data-containers/vrcjson' },
              ]
            },
            {
              text: 'Midi in Udon', link: '/creators.vrchat.com/worlds/udon/midi/',
              collapsed: true,
              items: [
                { text: 'Midi Playback', link: '/creators.vrchat.com/worlds/udon/midi/midi-playback' },
                { text: 'Realtime Midi', link: '/creators.vrchat.com/worlds/udon/midi/realtime-midi' },
              ]
            },
            {
              text: 'Networking', link: '/creators.vrchat.com/worlds/udon/networking/',
              collapsed: true,
              items: [
                { text: 'Network Components', link: '/creators.vrchat.com/worlds/udon/networking/network-components' },
                { text: 'Network Specs and Tips', link: '/creators.vrchat.com/worlds/udon/networking/network-details' },
                { text: 'Network ID Utility', link: '/creators.vrchat.com/worlds/udon/networking/network-id-utility' },
              ]
            },
            {
              text: 'Player API', link: '/creators.vrchat.com/worlds/udon/players/',
              collapsed: true,
              items: [
                { text: 'Getting Players', link: '/creators.vrchat.com/worlds/udon/players/getting-players' },
                { text: 'Player Audio', link: '/creators.vrchat.com/worlds/udon/players/player-audio' },
                { text: 'Player Avatar Scaling', link: '/creators.vrchat.com/worlds/udon/players/player-avatar-scaling' },
                { text: 'Player Collisions', link: '/creators.vrchat.com/worlds/udon/players/player-collisions' },
                { text: 'Player Forces', link: '/creators.vrchat.com/worlds/udon/players/player-forces' },
                { text: 'Player Positions', link: '/creators.vrchat.com/worlds/udon/players/player-positions' },
              ]
            },
            { text: 'Using Build & Test', link: '/creators.vrchat.com/worlds/udon/using-build-test' },
            {
              text: 'Video Players', link: '/creators.vrchat.com/worlds/udon/video-players/',
              collapsed: true,
              items: [
                { text: 'Video Player Allowlist', link: '/creators.vrchat.com/worlds/udon/video-players/www-whitelist' },
              ]
            },
            { text: 'Animation Events', link: '/creators.vrchat.com/worlds/udon/animation-events' },
            { text: 'Avatar Events', link: '/creators.vrchat.com/worlds/udon/avatar-events' },
            { text: 'Debugging Udon Projects', link: '/creators.vrchat.com/worlds/udon/debugging-udon-projects' },
            { text: 'Event Execution Order', link: '/creators.vrchat.com/worlds/udon/event-execution-order' },
            { text: 'Image Loading', link: '/creators.vrchat.com/worlds/udon/image-loading' },
            { text: 'Input Events', link: '/creators.vrchat.com/worlds/udon/input-events' },
            { text: 'String Loading', link: '/creators.vrchat.com/worlds/udon/string-loading' },
            { text: 'Udon Moderation Tool Guidelines', link: '/creators.vrchat.com/worlds/udon/udon-moderation-tool-guidelines' },
            { text: 'UI Events', link: '/creators.vrchat.com/worlds/udon/ui-events' },
            { text: 'World Debug Views', link: '/creators.vrchat.com/worlds/udon/world-debug-views' },
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
          text: 'Scene Components', link: '/creators.vrchat.com/worlds/components/',
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
        { text: 'Unity Layers in VRChat', link: '/creators.vrchat.com/worlds/layers' },
        { text: 'SDK Prefabs', link: '/creators.vrchat.com/worlds/sdk-prefabs' },
        { text: 'Supported Scripted Assets', link: '/creators.vrchat.com/worlds/supported-assets' },
        { text: 'Allowlisted World Components', link: '/creators.vrchat.com/worlds/whitelisted-world-components' },
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
      text: 'Getting Started',
      collapsed: true,
      items: [
        { text: 'Setup', link: '/udonsharp.docs.vrchat.com/setup' },
        { text: 'Examples', link: '/udonsharp.docs.vrchat.com/examples' },
        { text: 'Community Resources', link: '/udonsharp.docs.vrchat.com/community-resources' },
        { text: 'Configuration', link: '/udonsharp.docs.vrchat.com/configuration' },
        { text: 'Migration', link: '/udonsharp.docs.vrchat.com/migration' },
        { text: 'Frequently Asked Questions', link: '/udonsharp.docs.vrchat.com/frequently-asked-questions' },
      ]
    },
    {
      text: 'Documentation',
      collapsed: true,
      items: [
        { text: 'UdonSharp', link: '/udonsharp.docs.vrchat.com/udonsharp' },
        { text: 'VRChat API', link: '/udonsharp.docs.vrchat.com/vrchat-api' },
        { text: 'Events', link: '/udonsharp.docs.vrchat.com/events' },
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
    { text: 'Creator Companion', link: '/vcc.docs.vrchat.com/' },
    {
      text: 'Guides',
      collapsed: true,
      items: [
        { text: 'Getting Started', link: '/vcc.docs.vrchat.com/guides/getting-started' },
        { text: 'Frequently Asked Questions', link: '/vcc.docs.vrchat.com/guides/faq' },
        { text: 'Finding the Samples', link: '/vcc.docs.vrchat.com/guides/finding-the-samples' },
        { text: 'Glossary', link: '/vcc.docs.vrchat.com/guides/glossary' },
        { text: 'Using Project Template Repos', link: '/vcc.docs.vrchat.com/guides/using-project-template-repos' },
        { text: 'Bugs and Feature Requests', link: '/vcc.docs.vrchat.com/guides/bugs-features' },
        { text: 'Converting Assets to a VPM Package', link: '/vcc.docs.vrchat.com/guides/convert-unitypackage' },
        { text: 'Version Matching', link: '/vcc.docs.vrchat.com/guides/version-matching' },
        { text: 'Community Repositories', link: '/vcc.docs.vrchat.com/guides/community-repositories' },
        { text: 'Creating a Package Listing', link: '/vcc.docs.vrchat.com/guides/create-listing' },
      ]
    },
    {
      text: 'Package Manager',
      collapsed: true,
      items: [
        { text: 'Package Manager', link: '/vcc.docs.vrchat.com/vpm/' },
        { text: 'Templates', link: '/vcc.docs.vrchat.com/vpm/templates' },
        { text: 'Packages', link: '/vcc.docs.vrchat.com/vpm/packages' },
        { text: 'Migrating Projects', link: '/vcc.docs.vrchat.com/vpm/migrating' },
        { text: 'Repos', link: '/vcc.docs.vrchat.com/vpm/repos' },
        { text: 'CLI', link: '/vcc.docs.vrchat.com/vpm/cli' },
        { text: 'Resolver', link: '/vcc.docs.vrchat.com/vpm/resolver' },
        { text: 'Using Source Control with the VPM', link: '/vcc.docs.vrchat.com/vpm/source-control' },
        { text: 'Curated Community Packages', link: '/vcc.docs.vrchat.com/vpm/curated-community-packages' },
      ]
    },
    {
      text: 'Tools',
      collapsed: true,
      items: [
        { text: 'VRC Quick Launcher', link: '/vcc.docs.vrchat.com/tools/vrc-quick-launcher' },
      ]
    },
    { text: 'Legacy SDK', link: '/vcc.docs.vrchat.com/legacy-sdk' },
    { text: 'Roadmap', link: '/vcc.docs.vrchat.com/roadmap' },
  ]
}

export function clientSimDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Guides",
      collapsed: true,
      link: '/clientsim.docs.vrchat.com/guides/index.md',
      items: [
        { text: "Getting Started", link: "/clientsim.docs.vrchat.com/guides/getting-started.md" },
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
            { text: "Settings Window", link: "/clientsim.docs.vrchat.com/systems/editor/settings-window.md" }
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