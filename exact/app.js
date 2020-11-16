let parah = document.querySelector('.parah');
let rs =0.0;
let ope='';
let i=0;
main = document.querySelector(".main");
main.addEventListener('click', function(event) {
    const pressed = event.target.innerText;
    
    if(event.target.tagName.toLowerCase() == 'button'){
        if(['1','2','3','4','5','6','7','8','9','0'].indexOf(pressed) != -1){
            if (parah.innerText==0){
                 parah.innerText=pressed;
        
            }
            else{
                parah.innerText+=pressed;
                
            }

        }
        else if(['÷','×','-','+'].indexOf(pressed) !=-1){
            
            parah.innerText=0;
            if(pressed=='÷'){
                ope='/'
                rs=rs/i
            }
            if(pressed=='-'){
                ope='-'
                rs=rs-i
            }
            if(pressed=='+'){
                ope='+'
                rs=rs+i
            }
            if(pressed=='×'){
                ope='*'
                rs=rs*i
            }
            
        }
        else if (['='].indexOf(pressed) !=-1){
            parah.innerText=rs;
        }
    }
    

});

