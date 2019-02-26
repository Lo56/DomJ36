function functionnality1() {

  let footer = document.getElementsByTagName('footer');
  footer[0].addEventListener('click', function() {
    console.log("clique");
  });
  }
  
  
  function functionnality1bis() {
  let footer = document.getElementsByTagName('footer');
  let i = 1
  footer[0].addEventListener('click', function(){
    console.log("Clique numéro " + ++i);
     i++;
    });
  }
  
  function functionnality2() {
  
  let hambmenu = document.getElementsByClassName('navbar-toggler')[0]
  let navbarHeader = document.getElementById('navbarHeader');
  hambmenu.addEventListener('click', function name(){
    navbarHeader.classList.toggle("collapse");
   
    });
  }
  
  function functionnality3() {
  
  let firstcard = document.getElementsByClassName('card-text')[0];
  let editButton = document.querySelectorAll('.btn-outline-secondary')[0];
  editButton.addEventListener('click', function(){
    firstcard.style.color = "red";
  
    });
  }
  
  function functionnality4() {
  
  let secondcard = document.getElementsByClassName('card-text')[1];
  let editButton2 = document.querySelectorAll('.btn-outline-secondary')[1];
  editButton2.addEventListener('click', function(){
     
    if (secondcard.style.color !== 'green'){
     secondcard.style.color = 'green'; 
    } 
    else { 
      secondcard.style.color = '';
    }
   });
  }
  
  
  function functionnality5() {
  let navbar = document.getElementsByClassName('navbar')[0];
    navbar.addEventListener('dblclick', function(){
      document.styleSheets.toggle("collapse");
        
    });
  }
    
  functionnality1()
  functionnality1bis()
  functionnality2()
  functionnality3()
  functionnality4()
  functionnality5()