import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Netflix = () => {
   
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
}

export default Netflix;