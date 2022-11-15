import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:ApiService) { }
  selected_member = [{id:'',name:'',surname:''}];
  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
    let id = this.route.snapshot.paramMap.get('id') as string;
    console.log(id);
    this.api.getMembers(id).subscribe(
      data =>{
        console.log(data);
        this.selected_member = data;
      },
      error =>{
        console.log(error.message);
      })
  }

}
