<template>
    <div class='container'>
        <van-popup v-model:show="isshows"  closeable class="popupclass" position="bottom" round >
            <div class="navba">{{title}}</div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            
            <div class="buttom">
                <!-- <van-button  color="#7232dd" round plain>单色按钮</van-button> -->
                <van-button class="btn" color="#7232dd" round  @click="$emit('clickpopsure')">单色按钮</van-button>
            </div>

        </van-popup>    
    </div>
</template>
   
<script>
// import 'vant/lib/index.css'
export default {
    props: {
        title: {
        type: String,
        default: "home",
        required: true
        },
        isshow:{
            type: Boolean,
            default: false ,
            required: true
        }
    },
    data () {
        return {
            
        };
    },
    methods:{
        
    },
    computed:{
        isshows:{
            get() {
          return this.isshow;
            },
            set(val) {
            this.$emit("onclickrighticon", val);
            }
        }
    }
}
</script>
<style scoped lang="less">
    *{
        box-sizing: border-box
    }
    .container{
        width: 100%;
    }
    .popupclass{
        padding-bottom: 110px ;
        /deep/.van-popup__close-icon--top-right{
                font-size: 14px;
                top: 20px;
            }
        .navba{
            width: 100%;
            height: 56px;
            padding: 0 12px;
            line-height: 56px;
            // border: 1px solid red;
            font-size: 16px;
            font-weight: 600;
            color: #252525;
        }
        .buttom{
            position: fixed;
            bottom: 0 ;
            width: 100%;
            height: 90px;
            padding: 8px 12px 0;
            .btn{
                width: 100% ;
                height: 46px ;
            }
            
        }
    }
</style>