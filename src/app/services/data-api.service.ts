import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs/internal/Observable";
import { TopicInterface } from '../models/topic-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) {}

  topics: Observable<any>;
  districs: Observable<any>;
  municipalitys: Observable<any>;

  public currentTopic: TopicInterface = {
    date: null,
    tags: '',
    state: 'active',
    municipality: null,
  };

  headers : HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  getAllTopics(){
    const url_api = 'http://localhost:8000/topic/';
    return (this.topics = this.http.get(url_api));
  }

  getPageTopics(url_page: string){
    const url_api = url_page;
    return (this.topics = this.http.get(url_api));
  }

  getAllDistricts(){
    const url_api = 'http://localhost:8000/district/';
    return (this.districs = this.http.get(url_api));
  }

  getAllMunicipalitys(){
    const url_api = 'http://localhost:8000/municipality/';
    return (this.municipalitys = this.http.get(url_api));
  }

  getFilterMunicipalitys(id: string){
    const url_api = 'http://localhost:8000/municipality/?id_district='+id;
    return (this.http.get(url_api));
  }

  saveTopic(topic: TopicInterface){
    const url_api = 'http://localhost:8000/topic/';
    return this.http
    .post<TopicInterface>(url_api, topic, { headers: this.headers })
    .pipe(map(data => data));
  }

  updateTopic(id: string){
    const url_api = 'http://localhost:8000/topic/'+id+'/';
    const data = {'id':id, "state": "rejected"}
    return this.http
    .put<TopicInterface>(url_api, data, { headers: this.headers })
    .pipe(map(data => data));
  }

}
