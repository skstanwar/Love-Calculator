function check(){
var boy=document.getElementById("boyname").value;
var girl=document.getElementById("girlname").value;
var result=document.getElementById("result");
 
let x= boy.length , a=0,b=0;
let y=girl.length;

for(let i=0;i<x||i<y ;++i){

if(i<x) a+=(boy.charCodeAt(i)-97);
if(i<y) b+=(girl.charCodeAt(i)-97);

}


result.innerHTML=((a/(13*x))+(b/(13*y)))*100 +"<br><p>Being deeply loved by someone gives you strength</p>";



}

