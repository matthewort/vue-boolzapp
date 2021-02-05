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
  el: "#app",
  data: {
    answer: "",
    searchInput: "",
    textarea: "",
    chatindex: 0, // perché scriviamo questo?
    contatti: [
      {
        nome: "Michele",
        lastonline: "10/01/2020 10:52:03",
        img: "img/avatar_1.jpg",
        display: true, //non ho capito il senso di lasciare il true
        messaggi: [
          {
            testo: "Hey, stasera cinema?",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Ok, per che ora?",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Facciamo per le 21:00?",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Ok allora",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
        ], // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: "Fabio",
        lastonline: "10/01/2020 11:11:14",
        img: "img/avatar_2.jpg",
        display: true,
        messaggi: [
          {
            testo: "Hey come va?",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Sto portando fuori il cane",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Salutamelo",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "No",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Rude",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
        ], // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: "Samuele",
        lastonline: "10/01/2020 15:24:43",
        img: "img/avatar_3.jpg",
        display: true,
        messaggi: [
          {
            testo: "Mi sto leggendo un libro molto interessante",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Ah sì? Che libro?",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Un libro",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Eh",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Molto interessante",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
        ], // fine array messaggi
      }, // fine oggetto contatti
      {
        nome: "Luisa",
        lastonline: "10/01/2020 18:45:52",
        img: "img/avatar_4.jpg",
        display: true,
        messaggi: [
          {
            testo: "Hey",
            stato: "inviato",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
          {
            testo: "Sì",
            stato: "ricevuto",
            datainfo: "10/01/2020 15:52:03",
            dropdown: false,
          },
        ], // fine array messaggi
      }, // fine oggetto contatti
    ], // fine array contatti
    typetext: "", //spazio per l'input
    chatnuova: [
      //creo l'array degli elementi che compariranno sotto
      {
        testo2: "",
        stato2: "ricevuto",
        datainfo2: "10/01/2020 15:52:03",
      },
    ],
  }, // fine oggetto data
  methods: {
    //FUNZIONE CHE RITORNA PREVIEW DELL'ULTIMO MESSAGGIO MANDATO
    textPreview(i) {
      let index = this.contatti[i].messaggi.length - 1;
      let text = this.contatti[i].messaggi[index].testo;
      let preview = text.substring(0, 10) + "...";
      return preview;
    },
    //CERCO IL CONTATTO NELLA BARRA IN ALTO A SINISTRA
    searchContact() {
      this.contatti.forEach((item) => {
        if (item.nome.toLowerCase().includes(this.searchInput.toLowerCase())) {
          item.display = true;
        } else {
          item.display = false;
        }
      });
    },
    //SEND MESSAGE
    addMessage() {
      if (this.typetext !== "") {
        this.messageSentSound();
        let newmessage = {
          testo: this.typetext,
          stato: "inviato",
          datainfo: this.getDate(),
          dropdown: false,
        };
        this.contatti[this.chatindex].lastonline = "online";
        this.contatti[this.chatindex].messaggi.push(newmessage);
        this.typetext = "";
        this.scrollDown();
      }
    },
    //FUNZIONE CHE RIPORTA DATA E ORA CORRENTI
    getDate() {
      let x = new Date();
      let hours = x.getHours().toString();
      if (hours.length === 1) hours = "0" + hours;
      let minutes = x.getMinutes().toString();
      if (minutes.length === 1) minutes = "0" + minutes;
      let seconds = x.getSeconds().toString();
      if (seconds.length === 1) seconds = "0" + seconds;
      let datatext =
        x.getMonth() +
        1 +
        "/" +
        x.getDate() +
        "/" +
        x.getFullYear() +
        "  " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      return datatext; //funzione di questo return?
    },
    //SCROLLDOWN
    scrollDown() {
      setTimeout(() => {
        var container = document.querySelector(".subright1");
        container.scrollTop = container.scrollHeight;
      }, 5);
    },
    //ANSWER MESSAGE
    getAnswer() {
      this.contatti[this.chatindex].messaggi.push({
        testo: "No dai.",
        stato: "ricevuto",
        datainfo: this.getDate(),
        dropdown: false,
      });
      this.scrollDown();
      this.messageReceivedSound();
    },
    //SET TIMEOUT PER RISPOSTA
    delayAnswer: function () {
      setTimeout(this.getAnswer, 1000);
    },
    // SOUNDS
    messageSentSound() {
      var audio = new Audio("img/message_sent.mp3");
      audio.volume = 0.1;
      audio.play();
    },
    messageReceivedSound() {
      var audio = new Audio("img/incoming.mp3");
      audio.volume = 0.1;
      audio.play();
    },
    storeText() {
      if (this.typetext !== "") {
        //faccio in modo che non venga inserita una nuvoletta vuota se clicco senza scrivere nulla nell'input
        this.typetext = "";
      } else {
        this.chatnuova.push(this.typetext); //faccio in modo che quando qualcuno scrive qualcosa nell'input venga poi pushato nell'array chatnuova
        this.typetext = ""; //faccio in modo che una volta scritta la parola nell'input e poi cliccata, venga poi rimossa dalla barra di input
      }
    },
  },
});
