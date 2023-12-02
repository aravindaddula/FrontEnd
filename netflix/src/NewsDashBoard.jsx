import './styles.css'
import { useState,useEffect } from "react"; //both default import and named import included
import {newsByCategory} from './NewsService' //named import

function News(props){
    const{title,author,content,description,publishedAt,url,urlToImage} = props
    // console.log(props);
    return (
            <div className="author-card" >
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{content}</p>
                <p>{description}</p>
                <p>{publishedAt}</p>
                <img src={url} alt="url" />
                <a href={urlToImage}>urlToImage</a>
            </div>
)
}

export default function NewsDashBoard(){ 
    const [newsList,setNewsList] = useState([])
         useEffect(() => {
                newsByCategory()
                    .then(res =>{
                        // console.log(res.articles)
                        setNewsList(res.articles)
                    }
                    )
                    .catch(error => {
                        console.log('News By Category failed ', error.message);
                    });
            }, []);

// const{title,author,content,description,publishedAt,url,urlToImage} = newsList[0]
// const source = newsList[0].source.name


// console.log(Array.isArray(newsList))
// console.log(newsList)


return newsList.map((news,idx)=>{
    // console.log(Array.isArray(article))    
    const{title,author,content,description,publishedAt,url,urlToImage} = news
    // console.log(author)
    return <News idx={idx}
                title={title}
                author={author}
                content={content}
                description={description}
                publishedAt={publishedAt}
                url={url}
                urlToImage={urlToImage}
            />
})

}