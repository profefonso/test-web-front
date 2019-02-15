import { TopicInterface } from './../../models/topic-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private topics: TopicInterface;

  ngOnInit() {
    this.getListTopics();
  }

  getListTopics(): void {
    this.dataApi.getAllTopics()
    .subscribe((topics: TopicInterface) => (this.topics = topics));
  }

  goToPageTopics(url: string): void {
    this.dataApi.getPageTopics(url)
    .subscribe((topics: TopicInterface) => (this.topics = topics));
  }

  onUpdateTopic(id: string): void {
    this.dataApi.updateTopic(id).subscribe();
  }

}
