import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }
  
  executeHelloWorldBean(){
  return this.http.get<helloBean>('http://localhost:8080/helloBean');
    //console.log("serwis");
  }
}
export class helloBean{
  constructor(public essa:string){}
}
