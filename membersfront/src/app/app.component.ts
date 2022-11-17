import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'membersfront';

  members = [{id:'',name:'',surname:''}];

  
  constructor(private api:ApiService, private router: Router){
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
    this.router.navigate(["member-detail",member.id])
    
  }
  
}


