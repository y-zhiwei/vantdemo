<template>
  <div class="home">
    <Navbar title="首页" @lefticon="onLefticon"/>
    <!-- <Navbar  /> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>

        <van-tabs v-model:active="active" @click="onClickTab" @change="onChang">
        <template #nav-left>
          <span class="iconfont icon-31dingwei"></span>
        </template>
        <template #nav-right>
          <i class="iconfont icon-31dingwei"></i>
        </template>
        <template #nav-bottom>
          <i class="iconfont icon-31dingwei"></i>
        </template>

          
          <van-tab title="标签 1">内容 111</van-tab>
          <van-tab title="标签 2">内容 222</van-tab>
        </van-tabs>

        <div>-------------------遮罩层-----------------</div>

        <van-overlay :show="show" @click="onClick" :lock-scroll="false" duration="0.6"	>
          <div class="wrapper" >
                 <div class="block" @click.stop > 
                        
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                        <div>111</div>
                   </div>
            </div>
        </van-overlay>
        <div>-------------------popup-----------------</div>
        <van-popup
          v-model:show="isshow"
          round :lock-scroll="true" closeable
          position="bottom"
          :style="{ height: '40%' }"
        >
        <!-- <template #overlay-content>
          8888888
        </template> -->
           <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
        </van-popup>

       <div>-----------------背景图片-----------------</div>
        <div class="box">
        </div>
        <van-divider />
        <van-cell title="单元格"   border>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="search"  />
          </template>
          <template #label>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </template>
        </van-cell>
        <van-cell title="单元格" icon="location-o" is-link arrow-direction="up"  />
        <van-divider />
        <div class="box_bottom">
            <van-cell title="单元格"   is-link arrow-direction="down" border>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <!-- <template #right-icon>
              <van-icon name="search"  />
            </template> -->
            <template #label>
              <p>123</p>
              <p>123</p>
              <p>123</p>
            </template>
          </van-cell>
        </div>
        <van-divider />
        <van-tabs ref="tabrefs" v-model:active="active02" @change="onClickTab">
          <van-tab title="标签 1">
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </van-tab>
          <van-tab title="标签 2">
            <p>2</p>
            <van-icon name="chat-o" size="50px" color="#FFF" />
            <van-icon name="chat-o" size="50px" color="#FFF" />
            <van-icon name="delete" size="50px" color="#FFF" />
            <p>2</p>

          </van-tab>
        </van-tabs>
        <van-divider />
        <van-row>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
        </van-row>
        <van-row>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
        </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/navbar.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,Navbar
  },
  data(){
    return {
      active: 1,
      active02:1,
      show: false,
      isshow:false

    }
  },
  methods:{
    onClickTab(e){
      console.log(this.active)
      console.log(e)
      },
    onChang(e){
      console.log(e)
    },
    onClick(){
      // this.$nextTick(()=> )
      this.show = false
      console.log('click')
    },
    ondivclick(){
      console.log('divclick')

    },
    onLefticon(){
      console.log('left')
    },
    onClickTab(a){
      // console.log(this.$refs.tabrefs.$el)
      // console.log(this.$refs.tabrefs.$el.children[0].children[0])
      // console.log(a)
      if(a == 1){
       this.$nextTick(()=> this.$refs.tabrefs.$el.children[0].children[0].classList.add('aaa'))
      
      }
      this.$refs.tabrefs.$el.children[0].children[0].classList.remove('aaa')
     
    }
    
  }
}
</script>

<style lang="less"  >
.home{
  --van-background-color-light: 'blue' !important;
  --van-popup-background-color:'red' !important;
  --van-popup-close-icon-size: 50px !important;

 
  .wrapper{
    /* display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; */
  }
  .block{
    width: 195px;
    height: 100px;
    overflow: scroll;
    background-color: #fff
  }
  .box{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background: url('../assets/logo.png') no-repeat ;
    background-size:cover
  }
  .box_bottom{
    width: 100%;
    border: 1px solid pink;
  }
   /* /deep/.van-cell__title {
      display: flex;
      flex-direction: column;
      align-items: flex-start
      
    } */
    .van-tab--active{
      font-size: 20px;
      color: #FFF;
    }
    .van-tabs__content{
      padding:0 12px;
    }
    .van-tabs{
      background-color: pink;
      /* background: url('../assets/logo.png') no-repeat ; */
    }
    .van-tabs__nav{
      background-color: #CCC ;
    }
    .aaa{
      // background-color: blue !important;
      background: url('../assets/logo.png') no-repeat ;
      background-size: cover;
    }
    .van-tabs__line{
      display: none;
    }
  }
</style>
