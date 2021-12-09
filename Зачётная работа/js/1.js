var age=document.querySelector('.age'),
height=document.querySelector('.height'),
tonk=document.querySelector('.tonk'),
norm=document.querySelector('.norm'),
big=document.querySelector('.big'),
calc=document.querySelector('.calc'),
clear=document.querySelector('.clear');

clear.onclick=function(){
    age.value='';
    height.value='';
    tonk.checked=false;
    norm.checked=false;
    big.checked=false;
}
calc.onclick=function(){
    if(age.value==''||height.value==''){
        alert('Введи данные')
    }
    else{
        if(age.value<18||height.value<153){
            alert('Введи правильные данные')
        }
        else{
            if((tonk.checked & big.checked & norm.checked)||(tonk.checked & norm.checked)||(tonk.checked & big.checked)||(norm.checked & big.checked)){
                alert('Выберите один тип телосложения')
            }
            else{
                var text='',
                sum=0;
                if(tonk.checked){
                    text='tonk';
                }
                else if(big.checked){
                    text='big';
                }
    
                if(age.value<40){
                    sum=height.value-110;
                }
                else{
                    sum=height.value-100;
                }
                if(text=='tonk'){
                    sum*=0.9;
                }
                else if(text=='big'){
                    sum*=1.1;
                }
                
                alert('Ваш вес = '+Math.round(sum) +' кг');
            }
            
        }
       
    }
    
}