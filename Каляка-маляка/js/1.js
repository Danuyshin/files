var month=document.querySelector('.select'),
days=document.querySelector('.days'),
option=document.querySelector('.option'),
calculate=document.querySelector('.calc'),
clear=document.querySelector('.clear'),
out=document.querySelector('.out'),
priceout=document.querySelector('.priceout'),
price=0,
names=document.querySelector('.names'),
sum=document.querySelector('.sum'),
dop=0;
month.onchange=function(){
    if(month.value=='January'||month.value=='December'||month.value=='February'){
        price=600;
        priceout.value=price;
    }
    if(month.value=='June'||month.value=='July'||month.value=='August'){
        price=300;
        priceout.value=price;
    }
    if(month.value=='March'||month.value=='April'||month.value=='May'||month.value=='September'||month.value=='October'||month.value=='November'){
        price=400;
        priceout.value=price;
    }
    if(month.value=='non'){
        price=0;
        priceout.value=''; 
    }
}
clear.onclick=function(){
    month.value='non';
    priceout.value='';
    names.value='';
    days.value='';
    option.value='none';
    out.value=''
    sum.classList.remove("flex");

}
calculate.onclick=function(){
if(month.value=='non'){
    alert('Выберите месяц')
}
   else if(names.value==''){
alert('Введите имя ребёнка')
   }
   else if(days.value==''||days.value<1||days.value%1!=0){
    alert('Введите количество дней')

   }

   else{

   
if(option.value=='ball'){
    dop=2000;
}
else if(option.value=='cal-mal'){
    dop=3000;
}
else if(option.value=='vocals'){
    dop=2500;
}
else{
    dop=0;
}
var sum1=price*days.value+dop
out.value=sum1;
sum.classList.add("flex");}
}
