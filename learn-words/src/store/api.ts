import axios from "axios";
import { FetchedArticles } from "./models";
// import { UserSubmit, UserResponse } from './models'

// const instance = axios.create({
//     baseURL: 'https://newsapi.org/v2/sources?apiKey=80aaf40b6f064030aa8118f2741b1edd'
// });

export async function fetchArticles() {
  debugger;
  const articles: FetchedArticles = await (<Promise<any>>(
    axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=80aaf40b6f064030aa8118f2741b1edd"
    )
  ));
  return articles;
}
