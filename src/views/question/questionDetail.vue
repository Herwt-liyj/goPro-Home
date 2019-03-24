<template>
  <ul class="question-wrap">
    <li v-for="item in questionesArray" :key="item.index" @click="showDetailContent(item.id)">
      <div class="question-div">
        <span class="question-span">{{item.title}}</span>
        <span class='icon-arrow'></span>
        <div class="question-content" v-show='item.showedContent' v-html="item.content"></div>
      </div>
    </li>
  </ul>
</template>
<script>
import questionCommon from "./questionCommon";

const QUESTION_LIST_URL = "/api/cms/questions/";

export default {
  components: {
    questionCommon
  },
  data() {
    return {
      questionesArray: [],
      questionType: ""
    };
  },
  mounted() {
    this.questionType = this.$route.params.id;
    if (this.questionType) {
      this.getQuestionDetail();
    }
  },
  methods: {
    showDetailContent(id) {
      this.questionesArray.forEach((val, index, item) => {
        if (val.id == id) {
          val.showedContent = !val.showedContent;
        }
      });
      this.questionesArray = Object.assign([], this.questionesArray);
    },
    getQuestionDetail() {
      let options = {};
      this.$axios.get(QUESTION_LIST_URL + this.questionType, options, res => {
        if (res.code == 10000) {
          let data = res.data;
          this.questionesArray = data.results;
          this.questionesArray.forEach(val => {
            val.showedContent = false;
          });
        } else {
          this.$toast(res.message);
        }
      });
    }
  }
};
</script>

<style scoped>
.question-wrap {
  font-size: 0.28rem;
}
.question-div {
  padding: 0.4rem 0.5rem;
  border-bottom: 0.001rem solid #eef0f6;
}
span.icon-arrow {
  float: right;
  width: 0.25rem;
  height: 0.25rem;
  background-image: url("../../assets/images/arrow@2x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 0.051rem;
}
.question-content {
  color: #5b687a;
  font-size: 0.24rem;
  line-height: 0.5rem;
  padding-top: 0.36rem;
}
ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>




