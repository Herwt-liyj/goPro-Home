<template>
    <div>
        <div class="box_sh hufu_detail border_r2">
            <h3 class="font_w">{{$t('download.whatIsHooWallet')}}</h3>
            <div>
                <p>{{$t('download.hooWalletContent')}}</p>
                <p>{{$t('download.sharedWalletContent')}}</p>
                <p>{{$t('download.hooWalletMadeContent')}}</p>
            </div>
        </div>
        <div class="share_footer">- {{$t('download.useHoo')}} -</div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.box_sh {
  -webkit-box-shadow: 2px 0 20px RGBA(111, 111, 111, 0.2);
  box-shadow: 2px 0 20px RGBA(111, 111, 111, 0.2);
}
.border_r2 {
  border-radius: 0.2rem;
}
.hufu_detail {
    margin-top: .3rem;
    padding: 0 .3rem;
}
.font_w {
    font-weight: bold;
}
.hufu_detail h3 {
    font-size: .34rem;
    padding-top: .3rem;
    margin-bottom: .3rem;
}
.hufu_detail div {
    font-size: .24rem;
    padding-bottom: .6rem;
}
p{
    margin: 0;
    padding: 0;
    font-size: 0.28rem;
}
.hufu_detail p {
    line-height: .42rem;
}
.share_footer {
    height: 1.45rem;
    line-height: 1.45rem;
    font-size: .24rem;
    color: #9CA0A9;
    text-align: center;
}
</style>


