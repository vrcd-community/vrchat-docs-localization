<template>
    <Banner title="VRChat 汉化文档中心" subtitle="本公益文档由 星宿悦游社 X VRCD 提供翻译" />

    <div class="links-group">
        <HomeLinkButton text="VRChat 文档枢纽" link="/docs.vrchat.com/"
            description="您可以找到全面的指南和文档，帮助您尽快开始玩 VRChat，如果遇到困难，还可以获得支持。" icon="/vrchat.png" />
        <HomeLinkButton text="VRChat 创作者文档" link="/creators.vrchat.com/" description="利用我们的工具和文档来学习，创作，分享。"
            icon="/creators-docs-icon.png" />
    </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue'
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

.links-group .button-container {
    flex: 0 0 50%;
}
</style>