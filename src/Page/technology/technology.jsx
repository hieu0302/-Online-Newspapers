import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import Background from "../../Component/image/technology1.jpg";

const Technology = () => {
  const { data: news1 } = useFetchNews(
    `sourceUri=foxnews.com&keyword=GPT&articlesCount=1`
  );

  const { data: news2 } = useFetchNews(
    `categoryUri=news/Technology&sourceUri=techcrunch.com&articlesCount=1`
  );
  const { data: news3 } = useFetchNews(
    `sourceUri=techcrunch.com&keyword=facebook&articlesCount=1`
  );
  const { data: news4 } = useFetchNews(
    `sourceUri=techcrunch.com&keyword=robot&articlesCount=1`
  );
  const { data: news5 } = useFetchNews(
    `sourceUri=techcrunch.com&keyword=smartphone&articlesCount=1`
  );

  const { data: news6 } = useFetchNews(
    `sourceUri=techtimes.com&articlesCount=20`
  );

  return (
    <div
      className="sourceContent"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="news">
        <h1> Technology</h1>
      </div>
      <div>
        <div class="wrapper">
          <div class="box item1">
            <NewsList getnews={news1} />
          </div>
          <div class="box item2">
            <NewsList getnews={news2} />
          </div>
          <div class="box item2">
            <NewsList getnews={news3} />
          </div>
          <div class="box item2">
            <NewsList getnews={news4} />
          </div>
          <div class="box item2">
            <NewsList getnews={news5} />
          </div>
        </div>
      </div>
      <div className="contentUnder">
        <NewsList getnews={news6} />
      </div>
    </div>
  );
};

export default Technology;
