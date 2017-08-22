import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];
  
  constructor(private dataService: DataService) {
      
  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  };

  addQuestion(question){
      this.dataService.addQuestion(question);
    }
}
