const ApiUrl = (endpoint, page) => {
  return `https://eventregistry.org/api/v1/article/getArticles?${endpoint}&resultType=articles&includeArticleConcepts=true&includeArticleCategories=true&lang=eng&articlesSortBy=relevance&articleBodyLen=300&apiKey=13d0a4bb-beb5-474a-80f4-b73d3d3d05af`;
};
// articlesCount=10
const ApiService = {
  getNewsByCategory: (category) => {
    const url = ApiUrl(`${category}`);
    return fetch(url).then((res) => res.json());
  },
};

export default ApiService;
// https://newsapi.org/v2/top-headlines?country=us&category=${endpoint}&apiKey=4c644b43c35b4d689b1000160de5793e
// category=sports&keyword=Fifa
