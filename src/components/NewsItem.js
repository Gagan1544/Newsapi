// import React, { Component } from "react";
import React from "react";

// export class NewsItem extends Component {
const NewsItem = (props) => {
  // render() {
  // let { title, description, imageUrl, newsUrl, author, date, source } =
  //   this.props;
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card">
          <div>
            <span
              className=" badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/tech/img/2022/08/25/1600x900/asteroid-4145080_1920_1646293428986_1661421338220_1661421338220.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default NewsItem;
