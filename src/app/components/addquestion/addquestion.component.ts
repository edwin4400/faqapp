import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  text: string;
  answer: string;
  @Output() questionAdded = new EventEmitter<Question>();
  
  constructor() { }

  ngOnInit() {
  }
  
  addQuestion(){
    this.questionAdded.emit({text: this.text, answer: this.answer, hide: true});
    this.text ='';
    this.answer='';
  }
}
