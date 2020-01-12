<template>
  <v-layout row>
    <v-flex xs12 sm12 md12 lg12>
      <v-card class="card mx-4 mb-2 mt-0">
        <v-card-title primary-title>
          <v-layout row>
            <v-flex xs3 md3 lg3>
              <img class="image" :src="article.urlToImage" alt />
            </v-flex>
            <v-flex xs9 md9 lg9>
              <v-layout column>
                <v-flex>{{article.title}}</v-flex>
                <v-flex>{{article.content}}</v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import articles from "@/store/modules/articles";
import * as api from "@/store/api";

@Component
export default class Article extends Vue {
  @Prop() article: any;

  async created() {}

  get articleToShow() {
    return this.article;
  }
}
</script>

<style scoped lang="scss">
.image {
  max-height: 200px;
  max-width: 200px;
}
</style>
