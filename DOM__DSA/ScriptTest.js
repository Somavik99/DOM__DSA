function func1(val){};

function q1(values){
function func3(u,v){
    if (Math.random()>0.5){
        var [x1,y1,z1] = func1(v);
        return console.log(  u=u+2);
    }else{
        var [x1,y1,z1] = func2(v);
       u=u-2;
    }
    return Math.abs(x1 * u)+Math.abs(y1+u)+Math.abs(z1-u);
}
function func2(vx){
let [[p,q],[r,s]] = vx;
console.log(vx)
return [p*s,q*r,p-r];

}
return console.log( values.slice1(1).map((v,i)=>[v,values[i]]).reduce(func3,0));

}