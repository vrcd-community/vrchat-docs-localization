<template>
    <HomeBanner />

    <div class="links-group links-group-first">
        <HomeLinkButton text="VRChat 帮助文档" link="/docs.vrchat.com/"
            description="为您提供游玩入门的指导，让您能够快速上手并充分利用 VRChat 的各项功能。" icon="/assets/vrchat.svg" />
        <HomeLinkButton text="VRChat 创作者指南" link="/creators.vrchat.com/" description="理解并利用 VRChat 官方工具，学习、创作，实现您的大胆想法！"
            icon="/assets/creators-docs-icon.png" />
    </div>
    <div class="links-group links-group-extra">
        <HomeLinkButton text="UdonSharp" link="/udonsharp.docs.vrchat.com/" description="一个把 C# 代码编译为 UdonAssembly 的编译器。" />
        <HomeLinkButton text="创作者助手" link="/vcc.docs.vrchat.com/" description="创作 VRChat 内容的新起点。" />
        <HomeLinkButton text="ClientSim" link="/clientsim.docs.vrchat.com/" description="一个允许您在 Unity 内测试 VRChat 世界的工具。" />
    </div>
</template>

<script setup lang="ts">
import HomeBanner from './HomeBanner.vue'
import HomeLinkButton from './HomeLinkButton.vue';
</script>

<style scoped>
.links-group {
    display: flex;
    justify-items: center;
    flex-wrap: wrap;

    margin: 0 1rem;
}

@media screen and (min-width: 800px) {
    .links-group {
        margin: 0 5rem;
    }
}

@media screen and (min-width: 1200px) {
    .links-group {
        margin: 0 15rem;
    }
}

.links-group-first .button-container {
    flex: 0 0 50%;
}

.links-group-extra .button-container {
    flex: 0 0 33.333333%;
}
</style>