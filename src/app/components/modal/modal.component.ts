import { TopicInterface } from './../../models/topic-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  saveTopic(topicForm: NgForm): void {
    console.log(topicForm);
    this.dataApiService.saveTopic(topicForm.value).subscribe(topic => location.reload());
  }

}
