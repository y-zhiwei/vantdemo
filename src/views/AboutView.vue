<template>
  <div class="about">
    <div class="box01">2</div>
    <div class="box01">2</div>
    <div class="box01">2</div>
    <van-nav-bar title="标题" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
        <span class="iconfont icon-31dingwei"></span>
      </template>
    </van-nav-bar>

    <van-tabs v-model:active="active" @click="ontableclick" >
      <van-tab title="标签 1">内容 111</van-tab>
      <van-tab title="标签 2">内容 222</van-tab>
    </van-tabs>

    <p >我是一个p
      <span>1</span>
      <span>2</span>
    </p>
    <van-button class="btn_01" @click="onClickBtn"  round type="primary">朴素按钮1</van-button>

  
   <aa  :arr="arr" @shijian="onEachButton"  />
   <!-- <aa v-for="(item,index) in arr" :key="index" :item="item" :indexs="index" @shijian="onEachButton"  /> -->
   <div>
        <van-checkbox v-model="ischecked" @click="onallchange">全选</van-checkbox>
   </div>

  </div>
</template>

<script>
import aa from './conpoment'
  export default {
    components:{ aa },
    data(){
      return {
        active: 0,
        arr: [{check: true,title: "第一"},{check:false, title: "第二"},{check:false, title: "第三"}],
        ischecked: false
      }
    },
    methods: {
      ontableclick(a){
        console.log(a)
      },
      onClickBtn(){
        let p = document.querySelector('p')
        console.log(p.parentNode)
        console.log(p.firstElementChild)
        if(p.getAttribute('class')){
          return p.removeAttribute('class')
          }
        p.setAttribute('class','a')
      },
      onallchange(){
        this.arr.forEach(i=>i.check = this.ischecked)
        console.log(this.ischecked)
      },
      onEachButton({i,b}){
        this.arr.forEach((item,index)=>{
          if(index == i){
            item.check = b
          }
        })
        this.ischecked = this.arr.every(item=>item.check == true)
      }
    }
  }
</script>

<style scoped lang="less">
 /deep/ .van-tab--active{
    color: red
  }
  .about{
    .btn_01{
      width: 200px;
      height: 60px;
      background-color: #ccc;
      color: red;
      // border-color: #ccc;
      border: none;
      font-size: 30px;
    }
    .box01{
      background-color: pink;
      &:nth-child(3){
        background-color: red;
      }
      &:first-child{
        position: relative;
        background-color: blue;
        &::after{
          position: absolute;
          right: 0;
          top:-25px;
          content: '';
          display: block;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-bottom: 10px solid red;
        }
      }
    }
    .a{
      color: red;
    }
  }
</style>
