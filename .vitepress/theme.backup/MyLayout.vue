<script setup>
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style.css'
const { Layout } = DefaultTheme
</script>

<!-- 因为没有确切研究过如何规范制作插件，所以先放在了MyLayout上应付一下 -->

<template>
  <Layout>

    <!-- 这东西是导航栏旁边和搜索功能并排的社区入口按钮，当然可以替换成其他功能，虽然也和上面一样是变着法子玩超链接，属于是咱技术不到位了，一坨屎山多多见谅 -->

    <template #nav-bar-content-before>

      <a href="https://qm.qq.com/cgi-bin/qm/qr?k=NrlgYTUDjYvoyUIQizks8lU3LENEq9y2&jump_from=webapi&authKey=DIx25XK3dq6oEFT+1rGe9W5ctUswV3srZ0AA8mNZruM64IWtBeuQW9rG2rMMbf/4"
      alt="VRCD-玩家社区" 
      title="VRCD-玩家社区">
        <div class="vrcd-button-1">
          <center>
            <div class="vrcd-font-1">{{msg}}</div>
          </center>
        </div> 
      </a>
      
    </template>
    <!-- 这东西是在文章最下面的那个按钮，其实还在思考到底该不该放上这个链接，咱到时候估计会准备一个图用来把这个css给 background-image 一下,目前链接先用创作者社区链接顶着 -->

    <template #doc-footer-before>

      <a href="https://qm.qq.com/cgi-bin/qm/qr?k=mHCWYZAk0UkO_IIMrT8Bze--GEsg87jf&jump_from=webapi&authKey=yc4cay7zy01G+XPmUwXICGXoXxDOz/PBOJFnbhNfWQhlrIvt9qOWocIgCxn5o2YZ"
      alt="VRCD-创作者社区" 
      title="VRCD-创作者社区">
        <center>
          <div class="vrcd-button-2">
            <div class="vrcd-font-2">加入开发者汉化计划</div>
          </div> 
        </center>
      </a>
      <br>
      <br>
    
    </template>

  </Layout>
</template>

<script>

//这个msg是拿来玩的不用在意，对应的是社区入口按钮的显示文字，打算到时候用这个整点酷炫动画效果

export default {
  data(){
    return{
      msg:"社区入口",
      
    }
  }
}

</script>
