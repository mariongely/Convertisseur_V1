CONVERTISSEUR = {
  btnConversion: document.getElementById('btn_conversion'),
  euros: document.getElementById('euros'),
  dollars: document.getElementById('dollars'),
  valeurDollar: 1.48993,
  valeurEuro: 0.671172,
  choix: "",


  INIT: function() {

    CONVERTISSEUR.btnConversion.addEventListener('click', CONVERTISSEUR.conversion);

    CONVERTISSEUR.euros.addEventListener('click', CONVERTISSEUR.switchdevice);
    CONVERTISSEUR.dollars.addEventListener('click', CONVERTISSEUR.switchdevice);
  },

  conversion: function() {
    if (CONVERTISSEUR.choix == "euros") {
      CONVERTISSEUR.dollars.value = CONVERTISSEUR.euros.value * CONVERTISSEUR.valeurDollar;
    } else {
      CONVERTISSEUR.euros.value = CONVERTISSEUR.dollars.value * CONVERTISSEUR.valeurEuro;
    }

  },


  switchdevice: function(evt) {
    console.log(evt);
    CONVERTISSEUR.choix = evt.target.id;
  }
}


CONVERTISSEUR.INIT();
