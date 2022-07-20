<template>
  <div class="hello">

    <van-tabs :active="active" @click-tab="onClickTab">
      <van-tab title="接货收款" class="index_style" >

          <van-pull-refresh v-model="loading" @refresh="onRefresh">
              <div class="box1">
                <div>1</div>
                <div>1</div>     
            </div>
          </van-pull-refresh>

      </van-tab>
      <van-tab title="收款记录">
        <div class="box2">
          <div>444</div>
          <div>444</div>
          <div>444</div>
          <div>444</div>
          <div>444</div>
          <div>444</div>
          <div>444</div>
        </div>
      </van-tab>
    </van-tabs>


    <p>12346789</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      active : 3 ,
      loading : true
    }
  },
  created(){
    // console.log(this)
  },
  methods: {
    onClickTab(i){
      // console.log(i)
      console.log('9')
    },
    onRefresh(){
      console.log('refresh')
      setTimeout(() => {
        this.$toast('好 了')
         this.loading = false
      }, 1000);
     
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.hello{
  .van-tab{
    width: 30px;
    padding: 0;
  }
  .van-tabs__wrap{
    margin-left: 100px;
    width: 200px;
  }
  .box1{
    background-color: gray;
  }
  .box2{
    background-color: pink;
  }
  .van-tabs__line{
  width: 95px;
  }
  .van-tabs__content{
    margin-top: 20px !important; 
  }
  .van-tabs__line{
    width: 79px !important;
  }
  .van-tab__text--ellipsis{
    font-size: 18px;
    font-weight: 800;
    // width: 10rem;
  }
}


</style>
