$("i.fas").click( /* seleziono l'icona dell'hamburger e le dico di attivarsi al click*/
  function() {
  $(".hamburger-menu").fadeIn(); /* esegui il comando apri il menu con effetto opacità per gradi*/
} )

$("i.fas.fa-times").click( /* quando il menu è aperto e lo voglio chiudere seleziono l'icona X di chiusura*/
  function() {
  $(".hamburger-menu").fadeOut(); /* e assegno l'istruzione di chiusura del menu con 'effetto opposto all'apertura*/
} )
