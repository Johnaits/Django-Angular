import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'membersfront';

  members = [{id:'',name:'',surname:''}];

  
  constructor(private api:ApiService){
    this.getMembers();
  }
  getMembers = ()=>{
    this.api.getAllMembers().subscribe(
      data =>{
        this.members = data
      },
      error =>{
        console.log(error.message)
      }
    );
  };

  memberClicked = (member: { id: string; })=>{
    this.api.getMembers(member.id).subscribe(
      data =>{
        console.log(data)
      },
      error =>{
        console.log(error.message)})
  }
  
}


