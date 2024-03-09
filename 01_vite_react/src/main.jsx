import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Me from "./new_Apne_Se.jsx";

function Chai (){
  return(
    <h1>
      hyyy i M inside main ,jsx directoly write on it 
    </h1>
  )
}


// const reactElement=createElement(
//   'a',
//   {
//     href: "https://www.facebook.com/" , target:"_blank"}
//     ,"Facebook is Cool!"
  
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Me />
    
    <Chai/>
    <h2>is trah v likh skte hai </h2>

  </>
// reactElement   isko fregment m nahi likha jata hai 



);
