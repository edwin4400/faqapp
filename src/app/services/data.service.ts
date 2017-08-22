import { Injectable } from '@angular/core';
import { Question} from '../models/question';


@Injectable()
export class DataService {
questions: Question[];

  constructor() {
    //   this.questions = [{
    //     text: "What is your name",
    //     answer: "My name is Edwin",
    //     hide: true
    //   },
    //   {
    //     text: "What is your fav color",
    //     answer: "My fav color is blue",
    //     hide: true
    //   },
    //   {
    //     text: "What is your fav language",
    //     answer: "My fav language is JavaScript",
    //     hide: true
    //   }
    // ]
    };
    
    getQuestions(){
      if(localStorage.getItem('questions') === null){
        this.questions = [];
      } else {
        this.questions = (JSON.parse(localStorage.getItem('questions'))); //parse is to convert localStorage(string) to JSON for JS
      }
        return this.questions;
    };
    
    addQuestion(question){
      this.questions.unshift(question);
      
      //local variable
      var questions;
      
      if(localStorage.getItem('questions') === null){
        questions = []; //start a new array
        questions.unshift(question); //add new question in new array
        localStorage.setItem('questions', JSON.stringify(questions)); //store questions array into LocalStorage
      } else {
        questions = (JSON.parse(localStorage.getItem('questions'))); //parse out to temp variable
        questions.unshift(question); //add new question to array converted from LocalStorage
        localStorage.setItem('questions', JSON.stringify(questions)); //store questions array into LocalStorage again
      }
      
    };
    
    removeQuestion(question){
      for(let i = 0; i < this.questions.length; i++){
        if(this.questions[i] == question){
          this.questions.splice(i,1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
      }
    }
}
