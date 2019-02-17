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

  public minDate: Date = new Date ("01/01/2000");
  public maxDate: Date = new Date ();
  public value: Date = new Date ();

  districts: any;
  municipalities: any[];
  selectedDistrict = '0';

  constructor(
    private dataApiService: DataApiService,
    private location: Location
    ) { 
      this.getDistricts();
    }

  ngOnInit() {
  }

  getDistricts(): void{
    this.dataApiService.getAllDistricts()
    .subscribe(districts  => (this.districts = districts));
  }

  onSelectDistrict(district_id: string) {
    this.selectedDistrict = district_id;
    this.dataApiService.getFilterMunicipalitys(district_id)
    .subscribe(municipalities  => (this.municipalities = municipalities));
  }

  saveTopic(topicForm: NgForm): void {
    this.dataApiService.saveTopic(topicForm.value).subscribe(topic => location.reload());
  }

}
