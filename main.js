// manipolazione del DOM con jquery per esercizio hamburger menu

// creazione variabile di stato su bottone apertura (icona con 3 stanghette) che appare quando si attiva la mediaquery (sotto il 1000px di view)
var menuHamburger = $('.hamburger-menu');
var bottone = $('#bottone');
// creazione variabili di stato su bottone chiusura (icona della x) che appare quando hai cliccato sul menu e vuoi chiuderlo
var bottoneChiudi = $('#bottonechiudi');

bottone.on({
  click:function(){
    menuHamburger.show();
  }
});

bottoneChiudi.on({
  click:function(){
    menuHamburger.hide();
  }
});
