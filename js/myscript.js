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

// Per oggi saremo sulla milestone3, inserimento msg in chat e relativa risposta:
//
//     l’utente può scrivere nel campo di input in basso;
//     al click sull’invio succedono 2 cose: 1. il mio msg viene inviato alla chat relativa; 2. ottengo un msg di risposta automatico;
//     il msg di risposta non è istantaneo, ma viene dopo 1 secondo;
//     chiaramente tutto ciò viene agganciato/creato solo nella chat dove stò chattando;
//     quindi ogni chat avrà i proprio messaggi.
//
// idee per possibili BONUS:
//
//     la funzionalità di questo milestone funziona sia al click sull’elemento di invio in pagina, sia dal tasto “invio” della tastiera;
//     metto data e ora reali;
//     scrollo la chat per far vedere i nuovi msg;
//     etc..;
//
// NOTE
//
//     ricordatevi che ciò che rimane sempre il fulcro di tutto è la struttura dati;
//     quindi prima di andare avanti, se qualcosa non vi torna, aggiustatela e sistematela per renderla lineare e più possibile utilizzabile con semplicità;
//     vi carico adesso anche quello che abbiam visto insieme sul solito repo mio.
//
// Buon coding


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
            testo: "Hey, stasera cinema?", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Ok, per che ora?", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Facciamo per le 21:00?", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Ok allora", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Fabio',
        lastonline: '10/01/2020 11:11:14',
        img: 'img/avatar_2.jpg',
        messaggi: [
          {
            testo: "Hey come va?", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Sto portando fuori il cane", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Salutamelo", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "No", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Rude", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Samuele',
        lastonline: '10/01/2020 15:24:43',
        img: 'img/avatar_3.jpg',
        messaggi: [
          {
            testo: "Mi sto leggendo un libro molto interessante", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Ah sì? Che libro?", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Un libro", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Eh", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Molto interessante", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          }
        ] // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: 'Luisa',
        lastonline: '10/01/2020 18:45:52',
        img: 'img/avatar_4.jpg',
        messaggi: [
          {
            testo: "Hey", stato:"inviato", datainfo:'10/01/2020 15:52:03',
          },
          {
            testo: "Sì", stato:"ricevuto", datainfo:'10/01/2020 15:52:03',
          }
        ] // fine array messaggi
      } // fine oggetto contatti
    ], // fine array contatti
    typetext: '', //spazio per l'input
    chatnuova: [  //creo l'array degli elementi che compariranno sotto
      {
        testo2: "", stato2:"ricevuto", datainfo2:'10/01/2020 15:52:03',
      }
    ],
  }, // fine oggetto data
   methods: {
    storeText() {
      if (this.typetext === '') { //faccio in modo che non venga inserita una nuvoletta vuota se clicco senza scrivere nulla nell'input
        this.typetext = ''
      } else {
      this.chatnuova.push(this.typetext)  //faccio in modo che quando qualcuno scrive qualcosa nell'input venga poi pushato nell'array chatnuova
      this.typetext = ''  //faccio in modo che una volta scritta la parola nell'input e poi cliccata, venga poi rimossa dalla barra di input
      }
    }
  }
});
