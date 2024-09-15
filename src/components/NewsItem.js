import React, { Component } from "react";

const NewsItem=(props)=> {

    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source}</span>
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_sport/542e/live/2c558b50-651f-11ef-be1a-47dbeb9bfccf.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_new" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
