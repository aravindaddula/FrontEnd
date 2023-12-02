import './App.css';

export default function Footer(){
    let currYear = new Date().getFullYear()

    return(
        <footer>
            <p>Copyright@  {currYear}</p>
        </footer>
)}