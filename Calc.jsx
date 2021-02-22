
function add(a,b){

    let sum=a+b;
    return sum;
}

function sub(a,b){

    let s=a-b;
    return s;
}


function div(a,b){

    let d=a/b;
    d=d.toFixed(2);
    return d;
}


function mul(a,b){

    let m=a*b;
    return m;
}

export default add;
export {sub,div,mul};