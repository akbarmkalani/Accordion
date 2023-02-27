//let flag = true
  let accD = document.querySelectorAll('.accordionUl>li')

function   kalani(_li, num){


   for(i = 1; i<accD.length; i++){
   if(i != num){

    document.querySelector('li:nth-of-type('+i+') p').classList.add('d-none') 
   
    accD[i-1].setAttribute('data-d', 'off')

    document.querySelector('li:nth-of-type('+i+') span').innerHTML='<i class="bi bi-caret-down"></i>'  
   } 


   }




       let status =  _li.getAttribute('data-d')
       console.log(status);
    let allChild = _li.children
    


    let _index1 = allChild[0].children
    let _index2 = allChild[1].children

      if(status == 'off'){
       
       
        _index1[1].innerHTML='<i class="bi bi-x-lg"></i>'
        _li.setAttribute('data-d', 'on')
 
     
      }else{
        _index1[1].innerHTML='<i class="bi bi-caret-down"></i>'
        _li.setAttribute('data-d', 'off')
    
      }
    
    

      
     


      _index2 = _index2[0]
       _index2.classList.toggle('d-none')

}
  