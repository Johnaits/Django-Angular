import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:ApiService) { }
  selected_member = {id:'',name:'',surname:''};
  selected_id!: number;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id =parseInt(param.get('id') as string);
      this.selected_id = id;
      this.loadMember(id);
    });
  }
  loadMember(id: string | number ){
    this.api.getMembers(id as string).subscribe(
      data =>{
        this.selected_member = data;
      },
      error =>{
        console.log(error.message);
      })
  }

  update(){
    this.api.updateMembers(this.selected_member).subscribe(
      data =>{
        this.selected_member = data;
      },
      error =>{
        console.log(error.message);
      })
  }

}
