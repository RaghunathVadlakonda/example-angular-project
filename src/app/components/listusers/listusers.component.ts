import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';



@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  data = []

  constructor(private UserService:UserService) { }
  ngOnInit() {
       this.getUsersList();                                                                                                                                                 
  }
  
  getUsersList(){
   this.UserService.getUsers().subscribe(result => { 
    console.log(result);
    this.data = result.data;
   })
  }
}
