// // import React, { Component, useEffect } from "react";
// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// // export default class News extends Component {
// // static defaultProps = {
// //   country: "in",
// //   pageSize: 8,
// //   category: "general",
// // };
// // static propTypes = {
// //   country: PropTypes.string,
// //   pageSize: PropTypes.number,
// //   category: PropTypes.string,
// // };
// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   //  document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
//   //    props.category
//   //   )}`;

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   // constructor(props) {
//   //   super(props);
//   //   // this.state = {
//   //   //   articles: [],
//   //   //   loading: true,
//   //   //   page: 1,
//   //   //   totalResults: 0,
//   //   // };
//   //   // document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
//   //   //  props.category
//   //   // )}`;
//   // }
//   // async updateNews() {   //props==props in class based component
//   const updateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(50);

//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   };
//   useEffect(() => {
//     updateNews();
//   });
//   // async componentDidMount() {
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=19200abcbbf042b98b84d8ea8da2541a&page=1&pageSize=${props.pageSize}`;
//   //   // this.setState({ loading: true });

//   //   // let data = await fetch(url);
//   //   // let parsedData = await data.json();
//   //   // this.setState({
//   //   //   articles: parsedData.articles,
//   //   //   totalResults: parsedData.totalResults,
//   //   //   loading: false,
//   //   // });
//   //   this.updateNews();
//   // }

//   // const handlePrevClick = async () => {
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${
//   //   //  props.country
//   //   // }&category=${
//   //   //  props.category
//   //   // }&apiKey=19200abcbbf042b98b84d8ea8da2541a&page=${
//   //   //   this.state.page - 1
//   //   // }&pageSize=${props.pageSize}`;
//   //   // this.setState({ loading: true });
//   //   // let data = await fetch(url);
//   //   // let parsedData = await data.json();
//   //   // this.setState({
//   //   //   page: this.state.page - 1,
//   //   //   articles: parsedData.articles,
//   //   //   loading: false,
//   //   // });
//   //   // this.setState({ page: this.state.page - 1 });
//   //   setPage(page - 1);
//   //   // this.updateNews();
//   //   updateNews();
//   // };
//   // const handleNextClick = async () => {
//   //   // if (
//   //   //   !(
//   //   //     this.state.page + 1 >
//   //   //     Math.ceil(this.state.totalResults /props.pageSize)
//   //   //   )
//   //   // ) {
//   //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
//   //   //    props.country
//   //   //   }&category=${
//   //   //    props.category
//   //   //   }&apiKey=19200abcbbf042b98b84d8ea8da2541a&page=${
//   //   //     this.state.page + 1
//   //   //   }&pageSize=${props.pageSize}`;
//   //   //   this.setState({ loading: true });
//   //   //   let data = await fetch(url);
//   //   //   let parsedData = await data.json();
//   //   //   this.setState({
//   //   //     page: this.state.page + 1,
//   //   //     articles: parsedData.articles,
//   //   //     loading: false,
//   //   //   });
//   //   // }
//   //   // this.setState({ page: this.state.page + 1 });
//   //   setPage(page + 1);
//   //   // this.updateNews();
//   //   updateNews();
//   // };
//   const fetchMoreData = async () => {
//     // this.setState({ page: this.state.page + 1 });
//     setPage(page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles));
//     setTotalResults(parsedData.totalResults);
//     // this.setState({
//     //   articles: this.state.articles.concat(parsedData.articles),
//     //   totalResults: parsedData.totalResults,
//     // });
//   };
//   // render() {
//   return (
//     <>
//       <h1 className="text-center" style={{ margin: "35px 0px" }}>
//         NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
//       </h1>
//       {loading && <Spinner />}

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         // hasMore={this.state.articles.length !== this.state.totalResults}
//         hasMore={articles.length !== totalResults}
//         loader={this.state.loading && <Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {/* {!this.state.loading && */}
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//       {/* <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults /props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//     </>
//   );
// };
// // }
// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
// export default News;
import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
