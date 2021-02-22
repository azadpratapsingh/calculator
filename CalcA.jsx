import React from 'react';
import add,{sub,mul,div} from './Calc';
function CalcA() {
    return(
        <>
        <ul>{add(40,30)}</ul>
        <ul>{sub(40,30)}</ul>
        <ul>{mul(40,30)}</ul>
        <ul>{div(40,30)}</ul>
        
        
        </>
    );
}
export default CalcA;

