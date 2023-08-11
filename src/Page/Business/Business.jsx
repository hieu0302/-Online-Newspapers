import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import Background from "../../Component/image/6256458.jpg";

const Business = () => {
  //   const user = useSelector((state) => state.user);
  // const { data } = src;

  const { data: news1 } = useFetchNews(
    `categoryUri=news/Business&sourceUri=bbc.com&keyword=business&articlesCount=1`
  );

  const { data: news2 } = useFetchNews(
    `categoryUri=news/Business&sourceUri=bbc.com&keyword=currency&articlesCount=1`
  );
  const { data: news3 } = useFetchNews(
    `categoryUri=news/Business&sourceUri=bloomberg.com&keyword=business&articlesCount=1`
  );
  const { data: news4 } = useFetchNews(
    `categoryUri=news/Business&sourceUri=bloomberg.com&articlesCount=1`
  );
  const { data: news5 } = useFetchNews(
    `categoryUri=news/Business&sourceUri=bloomberg.com&keyword=stocks&articlesCount=1`
  );

  const { data: news6 } = useFetchNews(
    `categoryUri=news/Business&keyword=economic&sourceUri=bloomberg.com&articlesCount=20`
  );

  return (
    <div
      className="sourceContent"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="news">
        <h1>Business</h1>
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

export default Business;
