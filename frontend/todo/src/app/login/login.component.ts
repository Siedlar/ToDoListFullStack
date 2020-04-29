import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="essa"
password=""
welcome:string;
constructor(private service:WelcomeDataService) { 
  
  }

  ngOnInit(): void {
  }
login(){
  console.log(this.username);
}
getWelcomeMessege(){
  this.service.executeHelloWorldBean().subscribe(
    response=>this.handleSuccessfulResponse(response)
  );

}
handleSuccessfulResponse(response){
  this.welcome=response.essa;
  console.log(response)
console.log(response.essa)
}
}
