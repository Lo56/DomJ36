// functionnality 1
/*
let footer = document.getElementsByTagName('footer');
footer[0].addEventListener('click', function() {
  console.log("clique");
});
*/

// functionnality 1bis
let footer = document.getElementsByTagName('footer');
let i = 1
footer[0].addEventListener('click', function(){
  console.log("Clique numéro " + ++i);
   i++;
  });

// functionnality 2

let hambmenu = document.getElementsByClassName('navbar-toggler')[0]
let navbarHeader = document.getElementById('navbarHeader');
hambmenu.addEventListener('click', function name(){
  navbarHeader.classList.toggle("collapse");
 
  });

  //functionnality 3

let firstcard = document.getElementsByClassName('card-text')[0];
let editButton = document.querySelectorAll('.btn-outline-secondary')[0];
editButton.addEventListener('click', function(){
  firstcard.style.color = "red";

  });

  
   
    