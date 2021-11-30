var rast=document.querySelector('.in'),
benz=document.querySelector('.in1'),
price=document.querySelector('.in2'),
out=document.querySelector('.out'),
calc=document.querySelector('.calc'),
clear=document.querySelector('.clear');

clear.onclick=function(){
    rast.value='';
    benz.value='';
    price.value='';
    out.innerHTML='';
}

calc.onclick=function(){
    var a=+rast.value,
b=+benz.value,
c=+price.value;
if(a==''||b==''||c==''){
alert('Введите данные!')
}
else{
   a*=0.01;
b*=a;
c*=b;
out.innerHTML="Поездка обойдется в "+c+" рублей"; 
}

}