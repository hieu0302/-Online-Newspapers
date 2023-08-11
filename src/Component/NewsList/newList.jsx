import NewsCard from "../NewsCard/newsCard";

const NewsList = (props) => {
  const { getnews } = props;
  console.log(props);
  const newsListElement = getnews.map((news, index) => {
    return <NewsCard data={news} key={news.uri} />;
  });

  return (
    <div>
      {/* <h1>{newCategory}</h1> */}
      <div className="listItem">{newsListElement}</div>
    </div>
  );
};

export default NewsList;
