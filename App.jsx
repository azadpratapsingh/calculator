import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';
import Images from './Images';
import Netflix from './Netflix'
import Amazon from  './Amazon'

const favSeries="netflix";

/*const FavS = () => {
if(favSeries==="netflix"){
    return <Netflix/>
   return(<div className="container">
    <div  className="row">

        <div id="top"  >
            <Card 
            imgsrc={Sdata[1].imgsrc} 
            title={Sdata[1].title}  
            sname={Sdata[1].sname} 
            link={Sdata[1].link} />
        </div>
     </div>
</div>);
     
}else{
    return <Amazon/>
}
}
    /* return(<div className="container">
    <div  className="row">

        <div id="top"  >
            <Card 
            imgsrc={Sdata[3].imgsrc} 
            title={Sdata[3].title}  
            sname={Sdata[3].sname} 
            link={Sdata[3].link} />
        </div>
     </div>
     </div>);
}
};*/




const App = () =>(
  <>
  <h1>List of top 5 web series in 2020</h1>
  {favSeries==="Netflix"? <Netflix/> : <Amazon/>}

     {/*<FavS/>

  {Sdata.map((value) => {

    return(
            <div className="container">
            <div  className="row">

                <div id="top"  >
                    <Card 
                    imgsrc={value.imgsrc} 
                    title={value.title}  
                    sname={value.sname} 
                    link={value.link} />
                </div>
             </div>
             </div>
          );

   })
   
   };*/}
</>

);

export default App;