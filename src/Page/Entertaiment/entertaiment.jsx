import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import Background from "../../Component/image/tuxpi.com.1691729652.jpg";

const Entertainment = () => {
  const { data: news1 } = useFetchNews(
    `categoryUri=	news/Arts_and_Entertainment&keyword=music&articlesCount=1`
  );

  const { data: news2 } = useFetchNews(
    `sourceUri=eonline.com&keyword=E!SHOWS&articlesCount=1`
  );
  const { data: news3 } = useFetchNews(`sourceUri=eonline.com&articlesCount=1`);
  const { data: news4 } = useFetchNews(
    `sourceUri=eonline.com&keyword=movies&articlesCount=1`
  );
  const { data: news5 } = useFetchNews(
    `sourceUri=eonline.com&keyword=k-pop&articlesCount=1`
  );

  const { data: news6 } = useFetchNews(
    `categoryUri=	news/Arts_and_Entertainment&articlesCount=20`
  );

  return (
    <div
      className="sourceContent"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="news">
        <h1> Entertainment</h1>
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

export default Entertainment;
