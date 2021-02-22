import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';
import App from './App';


/*function ncard(value){
  return(
  <div className="container">
  <div  className="row">

  <div id="top"  >
      <Card imgsrc={value.imgsrc} title={value.title}  sname={value.sname} link={value.link} />
 </div>
    </div>
    </div>
 );
}*/


ReactDOM.render(<App />,
 /*<>
 <h1>List of top 5 web series in 2020</h1>
 
 
   {Sdata.map((value)=>
    {
  return(
  <div className="container">
  <div  className="row">

  <div id="top"  >
      <Card imgsrc={value.imgsrc} title={value.title}  sname={value.sname} link={value.link} />
 </div>
    </div>
    </div>
 );
    })
   }
  </>,*/
  document.getElementById("root")
  );



  