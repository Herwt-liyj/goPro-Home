<template>
  <div class="language-box">
    <img class="current-img" :src="selectedLanguage" alt="Chinese" @click="languageListEvent">
    <ul class="language-list" v-show="languageListShow">
      <li v-for="item in languageList" :key="item.index" @click="changeLanguage(item.value)"><img :src="item.imgPath" :alt="item.value"></li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      localeLang: "localeLang"
    }),
    localeLangShow() {
      console.dir(this.$store.getters.localeLang)
      return this.$store.getters.localeLang;
    }
  },
  data() {
    return {
      selectedLanguage: "../../static/images/lang/zh-CN.png",
      languageValue: "",
      languageList: [
        {
          value: "zh-CN",
          imgPath: "../../static/images/lang/zh-CN.png"
        },
        {
          value: "en-US",
          imgPath: "../../static/images/lang/en-US.png"
        },
        {
          value:'k-KOR',
          imgPath:'../../static/images/lang/k-KOR.png',
        }
      ],
      languageListShow: false
    };
  },
  created() {},
  mounted() {
    this.languageListShow = false;
    let curLang = this.$store.getters.localeLang;

    this.changeLanguage(curLang);
  },
  methods: {
    ...mapActions({
      changeLocaleLang: "changeLocaleLang"
    }),
    changeLanguage(value) {
      this.languageListShow = false;
      this.selectedLanguage = "../../static/images/lang/" + value + ".png";
      this.changeLocaleLang(value);
      this.$i18n.locale = value;
    },
    languageListEvent() {
      this.languageListShow = !this.languageListShow;
    }
  },
  
};
</script>

<style type="text/css" scoped>
.language-box {
  width: 0.7rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.2rem 0.2rem 0 0;
  z-index: 999;
}
.language-box img {
  width: 100%;
  height: 100%;
}
.language-list {
  font-size: 0;
}
.language-list li {
  padding: 0.05rem 0;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>

