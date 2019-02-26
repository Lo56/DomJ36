function footer() {
  let footer = document.getElementsByTagName('footer');
  footer[0].addEventListener('click', function() {
    console.log("clique");
  });
}


function footerbis() {
  let footer = document.getElementsByTagName('footer');
  let i = 1
  footer[0].addEventListener('click', function(){
    console.log("Clique numéro " + ++i);
    i++;
  });
}

function hamburger() {

  let hambmenu = document.getElementsByClassName('navbar-toggler')[0]
  let navbarHeader = document.getElementById('navbarHeader');
  hambmenu.addEventListener('click', function name(){
    navbarHeader.classList.toggle("collapse");
  
  });
}

function redcard() {

  let firstcard = document.getElementsByClassName('card-text')[0];
  let editButton = document.querySelectorAll('.btn-outline-secondary')[0];
  editButton.addEventListener('click', function(){
    firstcard.style.color = "red";

  });
}

function greencard() {

  let secondcard = document.getElementsByClassName('card-text')[1];
  let editButton2 = document.querySelectorAll('.btn-outline-secondary')[1];
  editButton2.addEventListener('click', function(){
    secondcard.style.color = "green";

    if (secondcard.style.color === 'green'){
    secondcard.style.color = 'black'; 
    } 
    else (secondcard.style.color = 'green')
  });
}
/*
function disappear() {

let cache = document.getElementsByClassName('navbar')[0];
cache.addEventListener('click', function() {
  body.remove.toggle("collapse");



});

}
*/


function footer()
function footerbis();
function hamburger()
function redcard()
function greencard()
function disappear()

