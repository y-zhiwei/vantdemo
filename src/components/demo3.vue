<template>
    <div class='container'>
        <van-button round type="primary" @click="ispopshow = true">{{btntitle}}按钮</van-button>
        <van-button round type="primary" @click="ispopshow02 = true">2组件按钮</van-button>
        <van-button round type="primary" @click="ispopshow03 = true">3组件按钮</van-button>
        
        <p>这次搜索的关键词是{{inputvalue}}</p>
        <!-- 弹框1 -->
        <vanpop :isshow="ispopshow" title="标题1" @clickpopsure="onchange" @onclickrighticon="onchangerigthicon">
            <template #content>
                <van-picker
                title="标题1"
                :columns="columns"
                @change="onpickchange"
                />
               
            </template>
        </vanpop>
        <!-- 弹框2 -->
        <vanpop :isshow="ispopshow02" title="标题2" @clickpopsure="onchange02" @onclickrighticon="onchangerigthicon">
            <template #content>
               <van-search v-model="value" placeholder="请输入搜索关键词" @input="oninputevent" />
            </template>
        </vanpop>
        <!-- 弹框2 -->
        <vanpop :isbutton="false" :isshow="ispopshow03" title="标题3" 
        @clickpopsure="onchange03" @clickpopcancle="onchangecancle03" @onclickrighticon="onchangerigthicon">
            <template #content>
                <p>123</p>
            </template>
        </vanpop>
    </div>
</template>
    
<script>
import Vanpop from "./vanpop.vue";
export default {
  components: { Vanpop },
  data() {
    return {
      ispopshow: false,
      btntitle: "地区",
      newvalue: "杭州",
      inputvalue: "",
      ispopshow02: false,
      ispopshow03: false,
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华"],
      value: ""
    };
  },
  methods: {
    onpickchange(e, v) {
      this.newvalue = v;
    },
    onchange() {
      this.ispopshow = false;
      this.btntitle = this.newvalue;
    },
    onchangerigthicon(v) {
      this.ispopshow = v;
      this.ispopshow02 = v;
      this.ispopshow03 = v;
    },
    oninputevent(v) {
      this.newinput = v;
    },
    onchange02() {
      this.inputvalue = this.newinput;
      this.ispopshow02 = false;
    },
    onchange03() {
      this.ispopshow03 = false;
    },
    onchangecancle03() {
      this.ispopshow03 = false;
    }
  }
};
</script>
<style scoped lang="less">
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
}
</style>