import React, { Component } from 'react'
import Newsitem from './Newsitem'
// 8517fc60e7fc4063b7c84ca37cc9ef6a
export class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            loading: false
        }
    }

   async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8517fc60e7fc4063b7c84ca37cc9ef6a"
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    }


    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className='row'>

{this.state.articles?.map((element)=>{
    return(<div className='col-md-4' key='element.url' >
        <Newsitem title={element.title?element.title:""}description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url}/>
    </div>)

})}
</div>
 </div>
        )
    }
}

export default News