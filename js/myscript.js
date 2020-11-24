// Per oggi saremo sulla milestone2, chat differenziate:
//
//     cliccando sulla chat vedo quella corrispondente;
//     con header con dati relativi a chat attiva;
//     relativa chat in elenco rimane selezionata
//
// NOTE
//
//     prima di scrivere qualsiasi cosa di codice fate una bella bella pre-analisi sulla struttura dei dati;
//     usate carta o penna o quello che volete, ma fin quando non avete definito i dati che vi servono e  come strutturarli, non potete far molto;
//     cercate di descrivere nel mondo reale di cosa state parlando, che “materia” state trattando e definendo;
//     poi la riportate a ciò che JS ci mette a disposizione (array, oggetti, stringhe, numeri…. etc.).
//
// Datejene

// var app = new Vue({
//   el:'#app',
//   data: {
//     mieClassi: 'micheleno'
//   },
//   methods: {
//     miafunzione() {
//       this.mieClassi = 'michelesi'
//     }
//   }
// });

var app = new Vue({
  el:'#app',
  data: {
    chatindex: 0, // perché scriviamo questo?
    contatti: [
      {
        nome: 'Michele',
        lastonline: '10/01/2020 10:52:03',
        img: 'img/avatar_1.jpg',
        messaggi: [
          {
            testo: "il mio messaggio",
          },
          {
            testo: "messaggio del bot",
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Fabio',
        lastonline: '10/01/2020 11:11:14',
        img: 'img/avatar_2.jpg',
        messaggi: [
          {
            testo: "il mio messaggio",
          },
          {
            testo: "messaggio del bot",
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Samuele',
        lastonline: '10/01/2020 15:24:43',
        img: 'img/avatar_3.jpg',
        messaggi: [
          {
            testo: "il mio messaggio",
          },
          {
            testo: "messaggio del bot",
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Luisa',
        lastonline: '10/01/2020 18:45:52',
        img: 'img/avatar_4.jpg',
        messaggi: [
          {
            testo: "il mio messaggio",
          },
          {
            testo: "messaggio del bot",
          }
        ] // fine array messaggi
      } // fine oggetto contatti



    ] // fine array contatti
  }, // fine oggetto data
   methods: {
     cambiaChat: function(index) {
       alert('prova')
     }
   }
});
