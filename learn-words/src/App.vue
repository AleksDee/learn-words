<template>
  <v-app>
    <div>
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-title color="white">LearnWords</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <!-- <v-btn text>Link 1</v-btn>
            <v-btn text>Link 2</v-btn>
          <v-btn text>Link 3</v-btn>-->
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-layout column v-if="articles.length">
      <Article v-for="article in articles" :article="article" :key="article.url"></Article>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Article from "./components/Article.vue";
import * as api from "@/store/api";
import { FetchedArticles } from "./store/models";
import articles from "./store/modules/articles";

export default Vue.extend({
  name: "App",
  components: {
    Article
  },
  data: () => ({
    // items: [
    //   { title: "Тесты", icon: "mdi-checkbox-multiple-marked-outline" },
    //   { title: "Статьи", icon: "mdi-newspaper" },
    //   { title: "Слова", icon: "mdi-file-word-box" },
    //   { title: "Настройки", icon: "mdi-settings" }
    // ],
    articles: null,
    mini: true
  }),

  async created() {
    debugger;
    await articles.fetchArticles();
    const articlesObj: any = await articles.articlesObj;
    this.articles = articlesObj.data.articles;
    debugger;
  }
});
</script>
