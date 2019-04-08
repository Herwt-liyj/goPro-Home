<template>
    <div class="modal-tips" v-if="modalShow">
        <div class="modal_content">
            <div class="hufu">
                <div>
                    <img src="./../assets/images/logo_1.png" alt="">
                </div>
            </div>
            <div class="down_load">
                <a href="https://m.hoo.com/download">{{$t('downloadTips.download')}}APP</a>
            </div>
            <p class="close" @click="close">
                <img src="./../assets/images/delete.png" alt="">
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modalShow:true
        }
    },
    mounted() {
        
    },
    methods: {
        close() {
            this.modalShow = !this.modalShow
        }
    },
    
}
</script>
<style scoped>
.modal-tips{width: 100%;background:#383D4C;opacity:0.9;position: fixed;height: 1.5rem;left: 0;bottom: 0;z-index: 1000;top: unset;}
.modal_content{position: relative; color: #ffffff;padding: 0 .4rem;display:flex;}
.hufu{font-size: .28rem;width: 66.66%;align-items: center;height: 1.5rem;display:flex;}
.hufu img{width: 3.07rem;height: 1.05rem;}
.down_load{width: 33.33%;height: 1.5rem;}
.down_load a{display:block;color:#ffffff;text-align:center;text-decoration:none;margin: .4rem 0 0 .5rem;font-size: .28rem;width: 2rem;height: .68rem;line-height: .68rem;background-color: #52C3AE;}
.close{position: absolute; right: .4rem; top: -1.2rem;}
.close img{ vertical-align:top; width: .4rem;height: .4rem;}
</style>


