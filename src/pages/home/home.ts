import { Component, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/*import { SomeProvider } from '../providers/deck/deck';*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards:any = [];
  i: number;
  introEnd: boolean;
  started: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController, /*public deckService: DeckProvider*/) {
    this.started = false;
    this.introEnd = false;
    this.i = 0;
  }

  ngOnInit() {
     
  }

  deleteStorage() {
    this.loadCards();
    console.log("game restart");
    this.i = 0;
    console.log(this.i);
    this.storage.set("i", this.i);
  }

  loadCards() {
    this.cards = [
        {id: '1', question: '1', answer: 'kdckdlqkn.', hint: 'foeofu'},
        {id: '2', question: '2', answer: 'xnqspin', hint: 'xnsin'},
        {id: '3', question: '3', answer: 'xnqcksjd cjspin', hint: 'xnsij dljn'}, 
        {id: '4', question: '4', answer: 'xnqscljqs cpin', hint: 'xnscqns ljin'}, 
        {id: '5', question: '5', answer: 'xnlqjsnxqspin', hint: 'xnsqlksnxin'}, 
        {id: '6', question: '6', answer: 'knk', hint: 'xklnknsin'}, 
        {id: '7', question: '7', answer: 'xnqspin', hint: 'xnsin'},
        {id: '8', question: '8', answer: 'xnqcksjd cjspin', hint: 'xnsij dljn'}, 
        {id: '9', question: '9', answer: 'xnqscljqs cpin', hint: 'xnscqns ljin'}, 
        {id: '10', question: '10', answer: 'xnlqjsnxqspin', hint: 'xnsqlksnxin'}, 
        {id: '11', question: '11', answer: 'knk', hint: 'xklnknsin'}, 
        {id: '12', question: '12', answer: 'knk', hint: 'xklnknsin'}, 
    ];
    this.shuffleCards(this.cards)
    this.storage.set("shuffled", this.cards);
    }

  setI() {
    this.i++;
    console.log("i = " + this.i)
    this.storage.set("i", this.i);
    console.log("stack des cards " + this.cards);
  }

  saveCards() {
    this.storage.set("i", this.i);
    this.storage.set("shuffled", this.cards);
  }
  loadSavedCards() {
    this.storage.get("shuffled").then(cards => {
      this.cards = cards;
      console.log("here are the saved cards " + this.cards);
    });
    this.storage.get("i").then(i => {
      this.i = i;
      console.log("i = " + this.i);
  });
  }

  saveIntroEndTrue() {
    this.introEnd = true;
    this.storage.set("introEnd", this.introEnd);
    console.log("la valeur de introEnd est " + this.introEnd);
  }
  saveIntroEndFalse() {
    this.introEnd = false;
    this.storage.set("introEnd", this.introEnd);
    console.log("la valeur de introEnd est " + this.introEnd);
  }

  start() {
    this.storage.get("i").then(i => {
      this.i = i;
      console.log("i = " + this.i);
     });
    console.log("la valeur de i est " + this.i);
    if (this.i == 0) {
      this.deleteStorage();
     }
    else {
      this.loadSavedCards();
    }
  }

 shuffleCards(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    };
    console.log(this.cards);
  }
}