//let flag = true
let accD = document.querySelectorAll('.accordionUl>li')

for(i = 0; i<accD.length; i++){
    tempt = document.querySelector('li:nth-of-type('+ (i+1) +') p').clientHeight 
     accD[i].setAttribute('data-heigth', tempt)

    tempt = document.querySelector('li:nth-of-type('+ (i+1) +') p').
    style.height='0px'

}

function   kalani(_li, num){
 

   for(i = 1; i<accD.length; i++){
   if(i != num){

    document.querySelector('li:nth-of-type('+i+') p').style.height='0px' 
   
    accD[i-1].setAttribute('data-d', 'off')

    document.querySelector('li:nth-of-type('+i+') span').innerHTML='<i class="bi bi-caret-down-fill"></i>'  
   } 


   }

       let status =  _li.getAttribute('data-d')
      
    let allChild = _li.children
    


    let _index1 = allChild[0].children

    let _index2 = allChild[1].children

    let _h = _li.getAttribute('data-heigth')


      if(status == 'off'){
        _index1[1].innerHTML='<i class="bi bi-x-lg"></i>'
        _li.setAttribute('data-d', 'on')
        _index2[0].style.height =_h + 'px'

     
      }else{
        _index1[1].innerHTML='<i class="bi bi-caret-down-fill"></i>'
        _li.setAttribute('data-d', 'off')
     _index2[0].style.height = '0px'

      
     

      }
  
}
  