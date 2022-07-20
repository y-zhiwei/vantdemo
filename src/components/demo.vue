<template>
    <div class='container'>
  
        <div v-for="(item,index) in newarr"  :key="index"  class="box1"  @click="onclick(index)">
            <span>{{item}}</span>
            <span><van-icon v-if=" active === index "   name="success" /></span>
        </div>

        <div class="box2">
            <span>1</span>
            <span>2</span>
        </div>

        <div class="box3">
            <van-picker title="标题" :columns="columns" />
        </div>

        <hr>

        <van-button class="btn_01" round type="primary">主要按钮</van-button>
         <p>1111111111111111111111111</p>       
        <div class="van-hairline--top">345</div>
          <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
       <van-search
          v-model="searchvalue" class="search"
          placeholder="请输入搜索关键词"   background="pink"
          @search="onSearch"
          @cancel="onCancel"
          shape="round"
        />
        <p>11111111111111111</p>
        <van-search v-model="searchvalue"  
        shape="round"  show-action action-text="取消掉" 
         background="pink" left-icon="delete"  right-icon="search" 
        placeholder="请输入搜索关键词" >
          <tmeplate #right-icon>
            <van-icon name="delete" />
          </tmeplate>
        </van-search>
           <p>11111111111111111</p>
           <button @click="searchvalue = '按钮'">确定</button>
        
    </div>
</template>
    
<script>
export default {
  data() {
    const columns = [
      // 第一列
      {
        values: ["周一", "周二", "周三", "周四", "周五"],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ["上午", "下午", "晚上"],
        defaultIndex: 1
      }
    ];
    return {
      checked: "2",
      newarr: [1, 2, 3],
      active: "",
      columns: columns,
      value:'',
      show:true,
      values:'',
      searchvalue:'只读的时候',
    };
  },
  methods: {
    onclick(i) {
      this.active = i;
    },
    onchange(e){
      console.log(e)
      console.log(this.values)
      console.log('123')
    },
    onSearch(){console.log('onSearch')},
    onCancel(){console.log('onCancel')},
  }
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  .box1 {
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid pink;
    span {
      &:nth-child(2) {
        width: 20px;
        height: 20px;
        // background-color: #CCC;
        display: inline-block;
      }
      .van-icon {
        color: red;
      }
    }
  }
  .box2 {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
    // justify-content: flex-start;
    // align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .box3 {
    width: 70%;
    // height: 200px;
    margin-left: 20px;
    border: 1px solid #cccccc;
    box-shadow: 1px 3px 6px 2px rgba(0, 0, 0, 0.1);
  }
  /deep/.van-cell:focus{
    background-color: pink !important;
  }
   .btn_01{
      width: 200px;
      height: 60px;
      background-color: #ccc;
      color: red;
      // border-color: #ccc;
      border: none;
      font-size: 20px;
    //   border-radius:  50% ;
    }
}
.search{
  width: 300px;
  height: 30px;
  // background-color: pink;
}
</style>