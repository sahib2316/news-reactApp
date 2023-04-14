import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NewsItem extends Component {
  // static propTypes = {};

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/tech/img/2023/04/08/1600x900/asteroid-4373480_960_720_1671716436506_1680958451498_1680958451498.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-dark">
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toUTCString}
                </small>
              </p>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
