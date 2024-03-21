import React from "react";

const NewsItem = (props) => {
  
    let { title, description, imageUrl, newsUrl, author, time, source } = props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1011%2Fr1236910_1296x729_16%2D9.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"> By {author} on {new Date(time).toDateString()}, {new Date(time).toLocaleTimeString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn  btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
