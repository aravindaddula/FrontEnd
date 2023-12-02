export default function About(){
    let currYear = new Date().getFullYear()

    return(
        <div>
            <h1 contentEditable='true'>Created by Aravind </h1>
            <h3>Copyright@<span>{currYear}</span></h3>
        </div>
       
    )
}