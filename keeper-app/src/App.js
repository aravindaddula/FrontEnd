import './App.css';
import FCCQuotes from './FCCQuotes';
import Timer from './Timer.jsx';
import motivationalQuotes from './quotes.js'

export default function App() {
  // console.log(motivationalQuotes.);
  
  return (
    <div>
      <Timer/>
    </div>
    
  );
}

/* <Header className='header'/>
        <Notes className='notes'/>
        <Footer/> */

// for fcc quotes
{/* <div className="App">
      {
       motivationalQuotes.map((item,idx)=>{
          return <FCCQuotes 
                          id={idx} 
                          quote={item.quote}
                          author={item.author}
                 />

        }
          )
      }
        
    </div> */}