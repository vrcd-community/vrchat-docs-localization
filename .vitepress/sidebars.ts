import { type DefaultTheme } from 'vitepress'

export function vrcahtDocsSidebars(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '总览',
      items: [
        { text: '欢迎来到VRChat', link: '/docs.vrchat.com/OVERVIEW/welcome-to-vrchat.md' },
        { text: '准备开始', link: '/docs.vrchat.com/OVERVIEW/getting-started.md' },
        { text: '常见问题', link: '/docs.vrchat.com/OVERVIEW/frequently-asked-questions.md' },
        {
          text: '控制', link: '/docs.vrchat.com/OVERVIEW/controls/controls.md',
          collapsed: true,
          items: [
            { text: 'HTC Vive 手柄', link: '/docs.vrchat.com/OVERVIEW/controls/vive.md' },
            { text: 'Oculus Touch', link: '/docs.vrchat.com/OVERVIEW/controls/touch.md' },
            { text: 'Valve Index 控制器', link: '/docs.vrchat.com/OVERVIEW/controls/valve-index.md' },
            { text: '键盘与鼠标', link: '/docs.vrchat.com/OVERVIEW/controls/keyboard-and-mouse.md' },
            { text: '手柄控制器', link: '/docs.vrchat.com/OVERVIEW/controls/gamepad.md' },
            { text: '行动菜单', link: '/docs.vrchat.com/OVERVIEW/controls/action-menu.md' },
          ],
        },
        {
          text: '额外选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/additional-options.md',
          collapsed: true,
          items: [
            { text: '手势切换', link: '/docs.vrchat.com/OVERVIEW/additional-options/gesture-toggle.md' },
            { text: '启动选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/launch-options.md' },
            { text: '配置文件', link: '/docs.vrchat.com/OVERVIEW/additional-options/configuration-file.md' },
            { text: 'VRChat图像性能选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/vrchat-configuration-window.md' },
            { text: 'VRChat 本地存储', link: '/docs.vrchat.com/OVERVIEW/additional-options/local-vrchat-storage.md' },
          ],
        },
      ],
    },
    {
      text: '指南',
      items: [
        { text: '两步身份验证', link: '/docs.vrchat.com/GUIDES/setup-2fa.md' },
        { text: '提出本地化修改建议', link: '/docs.vrchat.com/GUIDES/suggesting-localization-changes.md' },
        { text: '调整您的用户模型身高', link: '/docs.vrchat.com/GUIDES/adjusting-your-avatars-height.md' },
      ],
    },
    {
      text: '高阶指南',
      items: [
        { text: '在虚拟机中使用 VRChat', link: '/docs.vrchat.com/ADVANCED-GUIDES/using-vrchat-in-a-virtual-machine.md' },
      ],
    },
    {
      text: 'VRCHAT QUEST',
      items: [
        { text: '为 Oculus Quest 创建 VRChat 内容', link: '/creators.vrchat.com/platforms/android/android.md' },
      ],
    },
    {
      text: '系统',
      items: [
        { text: 'VRChat 社区实验室', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs.md' },
        { text: 'VRChat 安全和信誉系统', link: '/docs.vrchat.com/SYSTEM/vrchat-safety-and-trust-system' },
        { text: '虚拟形象动态骨骼限制', link: '/docs.vrchat.com/SYSTEM/avatar-dynamic-bone-limits.md' },
        { text: '虚拟形象互动权限和设置', link: '/docs.vrchat.com/SYSTEM/permissions-and-settings.md' },
        { text: '公开虚拟形象克隆', link: '/docs.vrchat.com/SYSTEM/public-avatar-cloning.md' },
        {
          text: '全身追踪', link: '/docs.vrchat.com/SYSTEM/full-body-tracking/full-body-tracking.md',
          collapsed: true,
          items: [
            { text: 'IK 2.0 功能和选项', link: '/docs.vrchat.com/SYSTEM/full-body-tracking/ik-20-features-and-options.md' },
          ],
        },
        { text: '备用模型系统', link: '/docs.vrchat.com/SYSTEM/avatar-fallback-system.md' },

      ],
    },
    {
      text: 'VRCHAT OSC API',
      items: [
        {
          text: 'OSC 概览', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-overview.md',
          collapsed: true,
          items: [
            { text: 'OSC 模型参数', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-avatar-parameters.md' },
            { text: 'OSC 调试', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-debugging.md' },
            { text: 'OSC DIY', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-diy.md' },
            { text: '将 OSC 作为输入控制器', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-as-input-controller.md' },
            { text: 'OSC 追踪器', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-trackers.md' },
            { text: 'OSC 眼动追踪', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-eye-tracking.md' },
            { text: 'OSC 资源', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-resources.md' },
            { text: 'OSCQuery', link: '/docs.vrchat.com/VRCHAT-OSC-API/osc-overview/osc-query.md' },
          ],
        },
      ],
    },
    {
      text: 'SDK 指南',
      items: [
        { text: '设置 SDK', link: '/creators.vrchat.com/sdk/sdk.md' },
      ],
    },
    {
      text: '虚拟形象',
      items: [
        { text: '制作您的第一个虚拟形象', link: '/creators.vrchat.com/avatars/creating-your-first-avatar.md' },
      ],
    },
    {
      text: '世界',
      items: [
        { text: '制作您的第一个世界', link: '/creators.vrchat.com/worlds/creating-your-first-world.md' },
        {
          text: '升级 Unity 项目', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/upgrading-unity-projects.md',
          collapsed: true,
          items: [
            { text: '从 2018 LTS 迁移到 2019 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-2018-lts-to-2019-lts.md' },
            { text: '从 2017 LTS 迁移到 2018 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-2017-lts-to-2018-lts.md' },
            { text: '从 5.6 迁移到 2017 LTS', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-from-56-to-20174x.md' },
            { text: '迁移到更新的 Unity 大版本', link: '/docs.vrchat.com/WORLDS/upgrading-unity-projects/migrating-to-a-newer-minor-unity-version.md' },
          ],
        },
      ],
    },
    {
      text: 'VRCHAT UDON',
      items: [
        { text: '什么是 Udon？', link: '/creators.vrchat.com/worlds/udon/udon.md' },
      ],
    },
    {
      text: '最新版本',
      items: [
        { text: 'VRChat 2023.4.1', link: '/docs.vrchat.com/LATEST-RELEASE/latest-release.md' },
        { text: 'VRChat 2023.4.1p1', link: '/docs.vrchat.com/LATEST-RELEASE/vrchat-202341p1.md' },
      ],
    },
    {
      text: '更新公告',
      items: [
        { text: '最近更新', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs.md' },
        { text: '存档', link: '/docs.vrchat.com/SYSTEM/vrchat-community-labs.md' },
      ],
    },
  ]
}

export function vrchatCreatorsDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '欢迎!', link: '/creators.vrchat.com/getting-started.md' },
    {
      text: '安装 SDK', link: '/creators.vrchat.com/sdk/',
      collapsed: true,
      items: [
        { text: '构建管线回调(Pipeline Callbacks)和接口(Interfaces)', link: '/creators.vrchat.com/sdk/build-pipeline-callbacks-and-interfaces.md' },
        { text: '当前支持的 Unity 版本', link: '/creators.vrchat.com/sdk/current-unity-version.md' },
        { text: '迁移到更新的 Unity 大版本', link: '/creators.vrchat.com/sdk/migrating-to-a-newer-minor-unity-version.md' },
        { text: 'Public VRC API', link: '/creators.vrchat.com/sdk/public-sdk-api.md' },
        { text: 'SDK 疑难解答', link: '/creators.vrchat.com/sdk/sdk-troubleshooting.md' },
        { text: '升级 SDK', link: '/creators.vrchat.com/sdk/updating-the-sdk.md' },
        { text: 'VRCPipelineManager', link: '/creators.vrchat.com/sdk/vrcpipelinemanager.md' },
      ]
    },
    {
      text: '虚拟形象', link: '/creators.vrchat.com/avatars/',
      collapsed: true,
      items: [
        { text: 'Creating Your First Avatar', link: '/creators.vrchat.com/avatars/creating-your-first-avatar.md' },
        {
          text: 'Avatar Dynamics', link: '/creators.vrchat.com/avatars/creating-your-first-avatar.md',
          items: [
            { text: 'Contacts', link: '/creators.vrchat.com/avatars/contacts.md' },
            { text: 'Debugging Avatar Dynamics', link: '/creators.vrchat.com/avatars/debugging-avatar-dynamics.md' },
            { text: 'PhysBones', link: '/creators.vrchat.com/avatars/physbones.md' },
          ],
        },
        { text: 'Animator Parameters', link: '/creators.vrchat.com/avatars/animator-parameters.md' },
        { text: 'Avatar Optimization Tips', link: '/creators.vrchat.com/avatars/avatar-optimizing-tips.md' },
        { text: 'Performance Ranks', link: '/creators.vrchat.com/avatars/avatar-performance-ranking-system.md' },
        { text: 'Avatar Scaling', link: '/creators.vrchat.com/avatars/avatar-scaling.md' },
        { text: 'Technical Considerations around Avatar Scaling', link: '/creators.vrchat.com/avatars/expression-menu-and-controls.md' },
        { text: 'Playable Layers', link: '/creators.vrchat.com/avatars/playable-layers.md' },
        { text: 'Rig Requirements', link: '/creators.vrchat.com/avatars/rig-requirements.md' },
        { text: 'Shader Blocking and Fallback System', link: '/creators.vrchat.com/avatars/shader-fallback-system.md' },
        { text: 'State Behaviors', link: '/creators.vrchat.com/avatars/state-behaviors.md' },
        { text: 'Allowed Avatar Components', link: '/creators.vrchat.com/avatars/whitelisted-avatar-components.md' },
      ]
    },
    {
      text: '世界', link: '/creators.vrchat.com/worlds/',
      collapsed: true,
      items: [
        { text: '制作您的第一个世界', link: '/creators.vrchat.com/worlds/creating-your-first-world.md' },
        { text: 'World Creation, Optimization, and Community Labs Tips', link: '/creators.vrchat.com/worlds/submitting-a-world-to-be-made-public.md' },
        {
          text: 'Examples', link: '/creators.vrchat.com/worlds/udon/examples/',
          collapsed: true,
          items: [
            { text: 'Image Loading', link: '/creators.vrchat.com/worlds/examples/image-loading.md' },
            {
              text: 'Obstacle Course', link: '/creators.vrchat.com/worlds/examples/obstacle-course/obstacle-course.md',
              collapsed: true,
              items: [
                { text: 'Obstacle Course: Build From Custom Parts', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-custom-parts.md' },
                { text: 'Obstacle Course: Build From Demo Parts', link: '/creators.vrchat.com/worlds/examples/obstacle-course/build-from-demo-parts.md' },
                { text: 'Obstacle Course: Flythrough', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-flythrough.md' },
                { text: 'Obstacle Course: How Stuff Works', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-how-stuff-works.md' },
                { text: 'Obstacle Course Toolkit', link: '/creators.vrchat.com/worlds/examples/obstacle-course/uoc-window.md' },
              ]
            },
            {
              text: 'Udon Example Scene', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/udon-example-scene.md',
              collapsed: true,
              items: [
                { text: 'Avatar Scaling Settings', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/avatar-scaling-settings.md' },
                { text: 'Simple Pen System', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/simple-pen-system.md' },
                { text: 'Udon Video Sync Player', link: '/creators.vrchat.com/worlds/examples/udon-example-scene/udon-video-sync-player.md' },
              ]
            },
          ]
        },
        {
          text: 'Udon', link: '/creators.vrchat.com/worlds/udon/',
          collapsed: true,
          items: [
            { text: 'Getting Started with Udon', link: '/creators.vrchat.com/worlds/udon/getting-started-with-udon.md' },
            {
              text: 'Udon Node Graph', link: '/creators.vrchat.com/worlds/udon/graph/',
              collapsed: true,
              items: [
                { text: 'Event Nodes', link: '/creators.vrchat.com/worlds/udon/graph/event-nodes.md' },
                { text: 'Graph Elements', link: '/creators.vrchat.com/worlds/udon/graph/graph-elements.md' },
                { text: 'Searching For Nodes', link: '/creators.vrchat.com/worlds/udon/graph/searching-for-nodes.md' },
                { text: 'Special Nodes', link: '/creators.vrchat.com/worlds/udon/graph/special-nodes.md' },
                { text: 'Type Nodes', link: '/creators.vrchat.com/worlds/udon/graph/type-nodes.md' },
              ]
            },
            {
              text: 'Data Containers', link: '/creators.vrchat.com/worlds/udon/data-containers/',
              collapsed: true,
              items: [
                { text: 'Data Dictionaries', link: '/creators.vrchat.com/worlds/udon/data-containers/data-dictionaries.md' },
                { text: 'Data Lists', link: '/creators.vrchat.com/worlds/udon/data-containers/data-lists.md' },
                { text: 'Data Tokens', link: '/creators.vrchat.com/worlds/udon/data-containers/data-tokens.md' },
                { text: 'VRC JSON', link: '/creators.vrchat.com/worlds/udon/data-containers/vrcjson.md' },
              ]
            },
            {
              text: 'Midi in Udon', link: '/creators.vrchat.com/worlds/udon/midi/',
              collapsed: true,
              items: [
                { text: 'Midi Playback', link: '/creators.vrchat.com/worlds/udon/midi/midi-playback.md' },
                { text: 'Realtime Midi', link: '/creators.vrchat.com/worlds/udon/midi/realtime-midi.md' },
              ]
            },
            {
              text: 'Networking', link: '/creators.vrchat.com/worlds/udon/networking/',
              collapsed: true,
              items: [
                { text: 'Network Components', link: '/creators.vrchat.com/worlds/udon/networking/network-components.md' },
                { text: 'Network Specs and Tips', link: '/creators.vrchat.com/worlds/udon/networking/network-details.md' },
                { text: 'Network ID Utility', link: '/creators.vrchat.com/worlds/udon/networking/network-id-utility.md' },
              ]
            },
            {
              text: 'Player API', link: '/creators.vrchat.com/worlds/udon/players/',
              collapsed: true,
              items: [
                { text: 'Getting Players', link: '/creators.vrchat.com/worlds/udon/players/getting-players.md' },
                { text: 'Player Audio', link: '/creators.vrchat.com/worlds/udon/players/player-audio.md' },
                { text: 'Player Avatar Scaling', link: '/creators.vrchat.com/worlds/udon/players/player-avatar-scaling.md' },
                { text: 'Player Collisions', link: '/creators.vrchat.com/worlds/udon/players/player-collisions.md' },
                { text: 'Player Forces', link: '/creators.vrchat.com/worlds/udon/players/player-forces.md' },
                { text: 'Player Positions', link: '/creators.vrchat.com/worlds/udon/players/player-positions.md' },
              ]
            },
            { text: 'Using Build & Test', link: '/creators.vrchat.com/worlds/udon/using-build-test.md' },
            {
              text: 'Video Players', link: '/creators.vrchat.com/worlds/udon/video-players/',
              collapsed: true,
              items: [
                { text: 'Video Player Allowlist', link: '/creators.vrchat.com/worlds/udon/video-players/www-whitelist.md' },
              ]
            },
            { text: 'Animation Events', link: '/creators.vrchat.com/worlds/udon/animation-events.md' },
            { text: 'Avatar Events', link: '/creators.vrchat.com/worlds/udon/avatar-events.md' },
            { text: 'Debugging Udon Projects', link: '/creators.vrchat.com/worlds/udon/debugging-udon-projects.md' },
            { text: 'Event Execution Order', link: '/creators.vrchat.com/worlds/udon/event-execution-order.md' },
            { text: 'Image Loading', link: '/creators.vrchat.com/worlds/udon/event-execution-order.md' },
            { text: 'Input Events', link: '/creators.vrchat.com/worlds/udon/input-events.md' },
            { text: 'String Loading', link: '/creators.vrchat.com/worlds/udon/string-loading.md' },
            { text: 'Udon Moderation Tool Guidelines', link: '/creators.vrchat.com/worlds/udon/udon-moderation-tool-guidelines.md' },
            { text: 'UI Events', link: '/creators.vrchat.com/worlds/udon/ui-events.md' },
            { text: 'World Debug Views', link: '/creators.vrchat.com/worlds/udon/world-debug-views.md' },
          ]
        },
        {
          text: 'VRCGraphics', link: '/creators.vrchat.com/worlds/vrc-graphics/',
          collapsed: true,
          items: [
            { text: 'ASyncGPUReadback', link: '/creators.vrchat.com/worlds/vrc-graphics/asyncgpureadback.md' },
            { text: 'VRChat Shader Globals', link: '/creators.vrchat.com/worlds/vrc-graphics/vrchat-shader-globals.md' },
          ]
        },
        {
          text: 'Scene Components', link: '/creators.vrchat.com/worlds/components/',
          collapsed: true,
          items: [
            { text: 'VRC Avatar Pedestal', link: '/creators.vrchat.com/worlds/components/vrc_avatarpedestal.md' },
            { text: 'VRC Mirror Reflection', link: '/creators.vrchat.com/worlds/components/vrc_mirrorreflection.md' },
            { text: 'VRC Object Sync', link: '/creators.vrchat.com/worlds/components/vrc_objectsync.md' },
            { text: 'VRC Pickup', link: '/creators.vrchat.com/worlds/components/vrc_pickup.md' },
            { text: 'VRC Portal Marker', link: '/creators.vrchat.com/worlds/components/vrc_portalmarker.md' },
            { text: 'VRC Scene Descriptor', link: '/creators.vrchat.com/worlds/components/vrc_scenedescriptor.md' },
            { text: 'VRC Spatial Audio Source', link: '/creators.vrchat.com/worlds/components/vrc_spatialaudiosource.md' },
            { text: 'VRC Station', link: '/creators.vrchat.com/worlds/components/vrc_station.md' },
            { text: 'VRC Ui Shape', link: '/creators.vrchat.com/worlds/components/vrc_uishape.md' },
          ]
        },
        { text: 'Unity Layers in VRChat', link: '/creators.vrchat.com/worlds/layers.md' },
        { text: 'SDK Prefabs', link: '/creators.vrchat.com/worlds/sdk-prefabs.md' },
        { text: 'Supported Scripted Assets', link: '/creators.vrchat.com/worlds/supported-assets.md' },
        { text: 'Allowlisted World Components', link: '/creators.vrchat.com/worlds/whitelisted-world-components.md' },
      ]
    },
    {
      text: '平台特异', link: '/creators.vrchat.com/platforms/',
      collapsed: true,
      items: [
        {
          text: '安卓', link: '/creators.vrchat.com/platforms/android/',
          collapsed: true,
          items: [
            { text: '为 Unity 设置 Quest 内容开发环境', link: '/creators.vrchat.com/platforms/android/setting-up-unity-for-creating-quest-content.md/creators.vrchat.com/platforms/android/' },
            { text: 'Cross-Platform Setup', link: '/creators.vrchat.com/platforms/android/cross-platform-setup.md' },
            { text: 'Mobile Best Practices', link: '/creators.vrchat.com/platforms/android/android-best-practices.md' },
            { text: 'Quest Content Limitations', link: '/creators.vrchat.com/platforms/android/quest-content-limitations.md' },
            { text: 'Quest Content Optimization', link: '/creators.vrchat.com/platforms/android/quest-content-optimization.md' },
          ]
        }
      ]
    },
  ]
}

export function udonSharpDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'UdonSharp', link: '/udonsharp.docs.vrchat.com/udonsharp.md' },
    {
      text: 'Getting Started',
      collapsed: true,
      items: [
        { text: 'Setup', link: '/udonsharp.docs.vrchat.com/getting-started/setup.md' },
        { text: 'Examples', link: '/udonsharp.docs.vrchat.com/getting-started/examples.md' },
        { text: 'Community Resources', link: '/udonsharp.docs.vrchat.c/getting-started/community-resources.md' },
        { text: 'Configuration', link: '/udonsharp.docs.vrchat.com/getting-started/configuration.md' },
        { text: 'Migration', link: '/udonsharp.docs.vrchat.com/getting-started/migration.md' },
        { text: 'Frequently Asked Questions', link: '/udonsharp.docs.vrchat.com/getting-started/frequently-asked-questions.md' },
      ]
    },
    {
      text: 'Documentation',
      collapsed: true,
      items: [
        { text: 'UdonSharp', link: '/udonsharp.docs.vrchat.com/documentation/udonsharp.md' },
        { text: 'VRChat API', link: '/udonsharp.docs.vrchat.com/documentation/vrchat-api.md' },
        { text: 'Events', link: '/udonsharp.docs.vrchat.com/documentation/events.md' },
        { text: 'Editor Scripting', link: '/udonsharp.docs.vrchat.com/documentation/editor-scripting.md' },
      ]
    },
    {
      text: 'Getting Started',
      collapsed: true,
      items: [
        { text: 'Random Tips & Performance Pointers', link: '/udonsharp.docs.vrchat.com/extra/random-tips-&-performance-pointers.md' },
        { text: 'Runtime Exception Debugging', link: '/udonsharp.docs.vrchat.com/extra/runtime-exception-debugging.md' },
        { text: 'Class Exposure Tree', link: '/udonsharp.docs.vrchat.com/extra/class-exposure-tree.md' },
        { text: 'Networking Tips & Tricks', link: '/udonsharp.docs.vrchat.com/extra/networking-tips-&-tricks.md' },
        { text: 'Using VRC Stations', link: '/udonsharp.docs.vrchat.com/extra/using-vrc-stations.md' },
        { text: 'Exporting to Assembly Files', link: '/udonsharp.docs.vrchat.com/extra/exporting-to-assembly-files.md' },
      ]
    },
  ]
}

export function vccDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Creator Companion', link: '/creators.vrchat.com/getting-started.md' },
    {
      text: 'Guides',
      collapsed: true,
      items: [
        { text: 'Getting Started', link: '/vcc.docs.vrchat.com/guides/getting-started.md' },
        { text: 'Frequently Asked Questions', link: '/vcc.docs.vrchat.com/guides/faq.md' },
        { text: 'Finding the Samples', link: '/vcc.docs.vrchat.com/guides/finding-the-samples.md' },
        { text: 'Glossary', link: '/vcc.docs.vrchat.com/guides/glossary.md' },
        { text: 'Using Project Template Repos', link: '/vcc.docs.vrchat.com/guides/using-project-template-repos.md' },
        { text: 'Bugs and Feature Requests', link: '/vcc.docs.vrchat.com/guides/bugs-features.md' },
        { text: 'Converting Assets to a VPM Package', link: '/vcc.docs.vrchat.com/guides/convert-unitypackage.md' },
        { text: 'Version Matching', link: '/vcc.docs.vrchat.com/guides/version-matching.md' },
        { text: 'Community Repositories', link: '/vcc.docs.vrchat.com/guides/community-repositories.md' },
        { text: 'Creating a Package Listing', link: '/vcc.docs.vrchat.com/guides/create-listing.md' },
      ]
    },
    {
      text: 'Package Manager',
      collapsed: true,
      items: [
        { text: 'Package Manager', link: '/vcc.docs.vrchat.com/vpm/vpm.md' },
        { text: 'Templates', link: '/vcc.docs.vrchat.com/vpm/templates.md' },
        { text: 'Packages', link: '/vcc.docs.vrchat.com/vpm/packages.md' },
        { text: 'Migrating Projects', link: '/vcc.docs.vrchat.com/vpm/migrating.md' },
        { text: 'Repos', link: '/vcc.docs.vrchat.com/vpm/repos.md' },
        { text: 'CLI', link: '/vcc.docs.vrchat.com/vpm/cli.md' },
        { text: 'Resolver', link: '/vcc.docs.vrchat.com/vpm/resolver.md' },
        { text: 'Using Source Control with the VPM', link: '/vcc.docs.vrchat.com/vpm/source-control.md' },
        { text: 'Curated Community Packages', link: '/vcc.docs.vrchat.com/vpm/curated-community-packages.md' },
      ]
    },
    {
      text: 'Tools',
      collapsed: true,
      items: [
        { text: 'VRC Quick Launcher', link: '/vcc.docs.vrchat.com/tools/vrc-quick-launcher.md' },
      ]
    },
    { text: 'Legacy SDK', link: '/vcc.docs.vrchat.com/legacy-sdk.md' },
    { text: 'Roadmap', link: '/vcc.docs.vrchat.com/roadmap.md' },
  ]
}