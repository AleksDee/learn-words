import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";

import store from "@/store";
// import { Profile } from '../models';
import * as api from "@/store/api";
import { Article, FetchedArticles } from "../models";

@Module({
  dynamic: true,
  namespaced: true,
  name: "articles",
  store
})
class ArticlesModule extends VuexModule {
  fetchedArticles: FetchedArticles | null = null;
  //   profile: Profile | null = null
  //   @Mutation
  //   setArticles(article) {
  //     debugger;
  //     this.article = article;
  //   }
  //   get articles() {
  //     return this.user && this.username.username;
  //   }
  //   @Action({ commit: "setArticles" })
  //   async setArticlessss(payload) {
  //     debugger;
  //     const articles = payload;
  //       const user = await api.loginUser(userSubmit)
  //     return articles;
  //   }

  @Mutation
  setArticles(payload: FetchedArticles) {
    debugger;
    this.fetchedArticles = payload;
  }

  @Action({ commit: "setArticles" })
  async fetchArticles() {
    debugger;
    const articles: FetchedArticles = await api.fetchArticles();
    return articles;
  }

  get articlesObj() {
    return this.fetchedArticles;
  }
}

export default getModule(ArticlesModule);
