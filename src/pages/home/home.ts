import { Component, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards:any = [];
  i: number;

  constructor(public navCtrl: NavController, private storage: Storage,) {
    this.i = 0;
  }

  ngOnInit() {
    if (this.cards.length = 0) {
    this.cards = [
        {id: '1', question: '1', answer: 'kdckdlqkn.', hint: 'Les chercheurs voulaient simplement vérifier sil restait du café dans la pièce dà côté.'},
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
      console.log(this.cards);
      this.storage.set("shuffled", this.cards);
      alert("new cards loaded");
    }
    else {
      this.storage.get("shuffled").then(cards => {
        this.cards = cards;
        console.log("only in here can we see " + this.cards);
      });
      this.storage.get("i").then(i => {
        this.i = i;
        console.log("only in here can we see " + this.i);
      });
    }
  }

 
/*  loadCard() {
    this.cards = [
        {id: '1', question: 'lkndlkc', answer: 'kdckdlqkn.',
        hint: 'Les chercheurs voulaient simplement vérifier sil restait du café dans la pièce dà côté.'},
        {id: '2', question: 'bla', answer: 'xnqspin', hint: 'xnsin'}, 
        {id: '3', question: 'csnd', answer: 'xnqcksjd cjspin', hint: 'xnsij dljn'}, 
        {id: '4', question: 'bqlksncla', answer: 'xnqscljqs cpin', hint: 'xnscqns ljin'}, 
        {id: '5', question: 'blalqjsx', answer: 'xnlqjsnxqspin', hint: 'xnsqlksnxin'}, 
        {id: '6', question: '11', answer: 'knk', hint: 'xklnknsin'}, 
    ];
    console.log(this.cards)
  };

  saveCard() {
    this.storage.set("shuffled", this.cards);
  };
  showCard() {
    this.storage.get("shuffled").then(cards => this.cards = cards);
    console.log(this.cards)
  };*/
  setI() {
    this.i++;
    console.log(this.i)
    this.storage.set("i", this.i);
  }

  saveCards() {
    this.storage.set("shuffled", this.cards);
    console.log(this.cards)
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
    console.log(this.cards[1]);
  }
}