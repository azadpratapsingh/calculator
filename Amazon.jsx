import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon = () => {
   
        return(<div className="container">
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

export default Amazon;