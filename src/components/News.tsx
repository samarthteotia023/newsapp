
import NewsItem from './Newsitem'
import { useEffect, useState } from 'react'
type NewsProps={
    category:string,
    pagesize:number,
    country:string,


   

}
interface users{
    title:string
    description:string,
    author:string,
    url:string,
    urlToImage:string,
    publishedAt:string,
    source:{
        id:string,
        name:string
    }
}



const News = (props:NewsProps) => { 
  
   
    const[articles,setArticles]=useState<users[]>( []);
    const[page,setPage]=useState(1)
    const[totalresult,setTotalresult]=useState(0)
    const[loading,setLoading]=useState(true)

   const   Update=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b44fd5c883844615a793393db08d2a97&page=1&pageSize=${props.pagesize}`;
        

        let data= await fetch(url);
        let parsedata= await data.json();
        setArticles(parsedata.articles);
        console.log(parsedata.articles)

   }
    
    

   useEffect(()=>{
   Update()
   },[props.category,props.country,props.pagesize])
  
    

  return (
    <div className='container ' >
        
        <div className='row'>
        <h1 style={{ marginLeft:"350px"}}>TOP Headlines - {props.category}</h1>
        {articles.map((element)=>{
          return(
            <div  className="col-md-4" key={element.url}>
            <NewsItem tittle={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source} />
            </div>
          )
        })}
        </div>
        </div>
     
  )
    }

News.defaultProps={
    country:"in",
    pagesize: 8,
    category: 'general',

  }

export default News


