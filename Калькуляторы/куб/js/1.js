let inputIn=document.querySelector('.in');
let calculate=document.querySelector('.calculate');
let clear=document.querySelector('.clear');
let s=document.querySelector('.s');
let sAll=document.querySelector('.sAll');
let v=document.querySelector('.v');
calculate.onclick=function(){
    if(inputIn.value==''){
        alert('Введите данные!')
    }
    else if(inputIn.value<0){
        alert('Введите положительное число!')
    }
    else{
        let b=+inputIn.value;
    s.innerHTML=(b*b).toFixed(2);
    sAll.innerHTML=(6*(b**2)).toFixed(2);
    v.innerHTML=(b**3).toFixed(2);
    }
    
}
clear.onclick=function(){
    
    inputIn.value='';
    s.innerHTML=null;
    sAll.innerHTML=null;
    v.innerHTML=null;
}
