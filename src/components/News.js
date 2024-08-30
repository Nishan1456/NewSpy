import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
   
    constructor()
    {
        super();
        this.state={
             articles:[], 
             loading:false,
             page:1
        }
    }
  
   async componentDidMount()
    {
    
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5d01b62106c444ab80e5044044abaeb0&page=1&pageSize=20";
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
    }
 
 handleNextClick=async()=>
    {
      console.log('Next');
      if(this.state.page+1>Math.ceil(this.state.totalResults/20))
      {

      }
      else{

        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d01b62106c444ab80e5044044abaeb0&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData=await data.json();
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      })
    }
    }

    handlePrevClick=async()=>
      {
        console.log('Previous');
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=5d01b62106c444ab80e5044044abaeb0&page=${this.state.page-1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData=await data.json();
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      })
      }
  render() {
    return (

      <div className='container my-3'>
        <h2>NewSpy - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map(
            (element)=>
            {
              return  <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
                  
            }
        )}
         
        
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News
