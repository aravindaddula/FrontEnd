import './App.css'

export default function FCCQuotes(props){
let {quote,id,author} = props

    return (
        <dl>
            <div key={id} className="quotes-block">
            <dt>{quote}</dt>
            <dd>-- {author}</dd>            
        </div>
        </dl>
        
    )
}