<template>
  <div v-editable="blok" class="articles-row">
    <div class="top">
      <h3 class="title">{{ blok.title }}</h3>

      <div class="more upper" @click="cta(blok.gamecta.url)">
        <span>{{ blok.button }}</span>
        <img
          class="arrow-icon"
          src="../assets/img/icons/arrow_forward_red.svg"
          alt=""
        />
      </div>
    </div>

    <div class="articles">
      <div class="article" v-for="blok in blok.items" 
      @click="cta(blok.cta.url)"
      :style="`background: url(${blok.thumbnail}) no-repeat center center / cover;`">
        <img class="media" src="" alt="" />

        <div class="box">
          <div class="top-text">
            <Label class="label" text="Artikel" :class="theme"  />
            <Dates :text="blok.date" />
          </div>

          <span class="title hideonmobile">{{blok.title.substring(0,56)}}</span>
          <span class="title hideondesktop">{{blok.title.substring(0,46)}}</span>
        </div>
      </div>
    </div>

    <div class="more lower" @click="cta(blok.cta.url)">
      <span>{{ blok.button }}</span>
      <img
        class="arrow-icon"
        src="../assets/img/icons/arrow_forward_red.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
  import Label from "@/components/base/LabelSmall.vue";
  import Dates from "@/components/base/Dates.vue";
  export default {
  components: { Label, Dates },
  props: {
    // blok: {
    //   type: Object,
    //   required: true,
    // },
  },
  data() {
    return {
      articles: 3,
      blok: { "cta": { "id": "", "url": "https://news.google.com/", "linktype": "url", "fieldtype": "multilink", "cached_url": "https://news.google.com/" }, "_uid": "2ba999e0-de3e-44e8-8a5b-32746a1d8360", "items": [ { "cta": { "id": "", "url": "https://www.ad.nl", "linktype": "url", "fieldtype": "multilink", "cached_url": "https://www.ad.nl" }, "_uid": "1fb2aaa4-e35f-4977-ad9d-dea327189af8", "date": "12 Jan 2022", "label": "Artikel", "title": "Title 1", "component": "Article", "thumbnail": "//a.storyblok.com/f/173682/900x522/dea8d0a60e/news003.jpg", "_editable": "<!--#storyblok#{\"name\": \"Article\", \"space\": \"173682\", \"uid\": \"1fb2aaa4-e35f-4977-ad9d-dea327189af8\", \"id\": \"193327803\"}-->" }, { "cta": { "id": "", "url": "https://www.ad.nl", "linktype": "url", "fieldtype": "multilink", "cached_url": "https://www.ad.nl" }, "_uid": "66aedf57-46a5-42f4-9eb3-35c25405f596", "date": "1 Okt 2022", "label": "Artikel", "title": "Title 2", "component": "Article", "thumbnail": "//a.storyblok.com/f/173682/2000x1333/02ff4c5923/news01.jpg", "_editable": "<!--#storyblok#{\"name\": \"Article\", \"space\": \"173682\", \"uid\": \"66aedf57-46a5-42f4-9eb3-35c25405f596\", \"id\": \"193327803\"}-->" }, { "cta": { "id": "", "url": "https://www.ad.nl", "linktype": "url", "fieldtype": "multilink", "cached_url": "https://www.ad.nl" }, "_uid": "759354ec-0681-437b-af58-43326ef57c43", "date": "1 Nov 2022", "label": "Artikel", "title": "Title 3", "component": "Article", "thumbnail": "//a.storyblok.com/f/173682/1080x675/4ef1014496/new02.jpg", "_editable": "<!--#storyblok#{\"name\": \"Article\", \"space\": \"173682\", \"uid\": \"759354ec-0681-437b-af58-43326ef57c43\", \"id\": \"193327803\"}-->" } ], "theme": "ad", "title": "Diam nascetur eu ut libero", "button": "Meer tonen", "component": "ArticlesRow", "ArticlesRow": "", "_editable": "<!--#storyblok#{\"name\": \"ArticlesRow\", \"space\": \"173682\", \"uid\": \"2ba999e0-de3e-44e8-8a5b-32746a1d8360\", \"id\": \"193327803\"}-->" }
    };
  },
  created(){
  },
  methods:{
    cta(url){
      window.open(url);
    }
  },
  computed: {
    theme() {
      switch(this.blok.theme){
        case 'nu':
          return 'nu'
        default:
          return 'default'
      }
    }
  }
};
</script>

<style lang="scss">
.articles-row {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    .title {
      margin-right: auto;
      @include desktopxl-down{
        margin-bottom: 24px;
        margin-left: 16px;
      }
    }
    .more {
      cursor: pointer;
      margin-left: auto;
      @include desktopxl-down{
        display: none;
      }
      &:hover{
        transition: ease-in-out opacity 0.3s;
        opacity: 0.7;
      }
      span {
        font-family: "Flama";
        font-style: normal;
        font-weight: 750;
        font-size: 14px;
        line-height: 22px;
        text-transform: uppercase;
      }
    }
  }
  .articles {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    @include desktopxl-down{
      width: 1040px;
      gap: 24px;
    }
    .title {
      font-family: "Flama";
      font-style: normal;
      font-weight: 750;
      font-size: 20px;
      line-height: 28px;
      color: #292929;
    }
    .article {
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      height: 320px;
      width: 32%;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      &:hover{
        transition: ease-in-out opacity 0.3s;
        opacity: 0.7;
      }
      @include desktopxl-down{
        width: 360px;
      }
      .media {
        height: 66%;
        @include desktopxl-down{
          height: 60%;
        }
      }
      .box {
        background-color: rgb(255, 255, 255);
        height: 34%;
        padding: 16px;
        @include desktopxl-down{
          height: 40%;
        }
        .top-text {
          display: flex;
          flex-direction: row;
          gap: 24px;
          margin-bottom: 8px;
        }
      }
    }
  }
    .more {
      cursor: pointer;
      margin-left: auto;
      @include desktopxl-down{
        margin-top: 20px;
        &.upper{
          display: none;
        }
      }
      @include desktopxl-up{
        &.lower{
          display: none;
        }
      }
      &:hover{
        transition: ease-in-out opacity 0.3s;
        opacity: 0.7;
      }
      span {
        font-family: "Flama";
        font-style: normal;
        font-weight: 750;
        font-size: 14px;
        line-height: 22px;
        text-transform: uppercase;
        color: #d10a10;
      }
    }
}
</style>
