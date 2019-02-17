import { TopicInterface } from './../../models/topic-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  keyword = 'name';
  
  public minDate: Date = new Date ("01/01/2000");
  public maxDate: Date = new Date ();
  public value: Date = new Date ();

  districts: any;
  municipalities: Object;
  selectedDistrict = '0';
  public tags: Object;
  public error = false;
  public text_error = "";

  constructor(
    private dataApiService: DataApiService,
    private location: Location
    ) { 
      this.getDistricts();
      this.loadTags();
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

  loadTags(): void {
    this.dataApiService.getAlltags()
    .subscribe(tags  => (this.tags = tags));
  }

  saveTopic(topicForm: NgForm): void {
    this.text_error = "Error en el Formulario";
    console.log(topicForm.value.tags)
    if(topicForm.value.date == null){
      this.timeError("Ingrese una fecha valida");
    }else if(topicForm.value.municipality == null || topicForm.value.municipality == 'None'){
      this.timeError("Seleccione un Municipio");
    }else if(topicForm.value.tags == null || topicForm.value.tags == ''){
      this.timeError("Seleccione un Tag");
    }
    else if (topicForm.valid){
      this.dataApiService.saveTopic(topicForm.value).subscribe(topic => {location.reload(), this.error = false}, error => {this.error = true});
    }else{
    }
    
  }
  
  timeError(text_error: string): void{
    this.error = true;
    this.text_error = text_error;
    setTimeout(() => {
    this.error = false;
    }, 2000);
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

}
