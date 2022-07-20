<template>
<div>
        <div v-for="(item,index) in arr" :key="index" >
                 <van-checkbox v-model="item.check" @change="onEachButton01($event,index)">{{item.title}}</van-checkbox>
                  <p>一段好</p>  
        </div>
</div>

<!-- <div>
   <van-checkbox v-model="item.check" @change="onEachButton01($event,indexs)">{{item.title}}</van-checkbox>

</div> -->

</template>
<script>
export default {
    props:["arr"],
    // props:['item',"indexs"],
    data () {
        return {
        };
    },
    created(){
    },
    methods:{
        onEachButton01(b,i){
        this.$emit('shijian',{b,i})
        }
    }
}
</script>
<style scoped lang="less">
    
</style>