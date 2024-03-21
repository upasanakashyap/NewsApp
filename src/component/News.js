import React,{Component, useEffect, useState }from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
  
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)
  const [loading, setLoading] = useState(true)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // constructor(props) {
  //   super(props);
  //   console.log("Hello  I am constructor from news components");
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults:0
  //   };
  //   document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsKoala`;
  useEffect(() => {
    updateNews()
  }, [])
 
  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(50);
    let parseData = await data.json()
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResult(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  const fetchMoreData = async() => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResult(parseData.totalResults)
  }


  return (
    <>
      <h1 className="text-center" style={{ margin: '30px 0px' }}>NewsKoala -Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container my-3'>
          <div className="row">
            {
              articles.map((data) => {
                return <div className="col-md-4" key={data.url ? data.url : ''}> <NewsItem title={data.title ? data.title.slice(0, 40) : ""} description={data.description ? data.description.slice(0, 85) : ""} imageUrl={data.urlToImage ? data.urlToImage : ''} newsUrl={data.url ? data.url : ''} author={data.author ? data.author : 'Unknown'} time={data.publishedAt ? data.publishedAt : 'Unknown Time'} source={data.source.name ? data.source.name : 'Unknown Source'} /></div>
              })
            }
          </div>
        </div>
      </InfiniteScroll>
      
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News;

  // async componentDidMount() {
  //   this.updateNews()
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06d8c82248854f7cb931b76a78114e95&page=1&
  // pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //}

  // handlePervClick = async () => {
  //   this.setState({page: this.state.page - 1,})
  //   this.updateNews();
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=06d8c82248854f7cb931b76a78114e95&page=${this.state.page - 1}
    // &pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
  //};

  // handleNextClick = async () => {
  //   this.setState({  page: this.state.page +1})
  //   this.updateNews();
    // console.log("Next");

    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=06d8c82248854f7cb931b76a78114e95&page=${this.state.page + 1}
    //  &pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({ loading: false });
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
 // };

 
    // return (
    //   <div className="container my-3">
    //     <h1 className="text-center" style={{ margin: "35px 0px" }}>
    //       NewsKoala -Top {capitalizeFirstLetter(props.category)} Headlines
    //     </h1>
    //     {/* //{this.state.loading && <Spinner />} */}
    //     <InfiniteScroll
    //     dataLength={articles.length}
    //     next={fetchMoreData}
    //     hasMore={articles.length !== totalResults}
    //     loader={<Spinner />}
    //   >
    //     <div className="row">
    //       {state.articles.map((element) => {
    //           return (
    //             <div className="col-md-4" key={element.url}>
    //               <NewsItem
    //                 title={element.title ? element.title.slice(0, 45) : ""} 
    //                 description={
    //                   element.description
    //                     ? element.description.slice(0, 88)
    //                     : ""
    //                 }
    //                 imageUrl={element.urlToImage}
    //                 newsUrl={element.url}
    //                 author={element.author}
    //               />
    //             </div>
    //           );
    //         })}
    //     </div>
    //     </InfiniteScroll>
    //     );
    //     }
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePervClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div> */}
   
  

