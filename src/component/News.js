import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsKoala -Top Headlines</h2>
        <div className="row">
            <div className="col-md-3">
                 <NewsItem title="myTitle " description="myDesc" imageUrl="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1011%2Fr1236910_1296x729_16%2D9.jpg"/>
           </div>
           <div className="col-md-3">
                 <NewsItem title="myTitle " description="myDesc"/>
           </div>
           <div className="col-md-3">
                 <NewsItem title="myTitle " description="myDesc"/>
           </div>
        </div>
    
      </div>
    )
  }
}

export default News
