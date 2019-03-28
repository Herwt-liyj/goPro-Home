<template>
    <div class="question">
        <ul class="question-wrap">
            <li v-for="item in questionTypeArr" :key="item.index" @click="routerToDetail(item.id)">
                <div class="question-div">
                    <span class="question-span">{{$t(item.name)}}</span>
                    <span class='icon-arrow'></span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import questionCommon  from './questionCommon'
export default {
    components: {
        questionCommon
    },
    data() {
        return{
            questionTypeArr:[{id:'newbie',name:'question.newUserGuider'},{id:'wallet',name:'question.walletRelation'},{id:"trade",name:'question.dealRelation'},{id:"profile",name:'question.personalCenter'}],
        }
    },
    methods: {
        routerToDetail(id) {
            // this.$router.push({path:'',query:{id:id}})
            window.location.href = '/question_detail/'+id;
        }
    }
    
}
</script>
<style  type="text/css" scoped>
@import "../../assets/css/giftCard";
ul.question-wrap {
    margin-top: .5rem;
}
.question-div {
    padding: .4rem .5rem;
    border-bottom: .001rem solid #EEF0F6;
}
span.icon-arrow {
    float: right;
    width: .25rem;
    height: .25rem;
    background-image: url("../../assets/images/arrowR@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: .051rem;
}
</style>

