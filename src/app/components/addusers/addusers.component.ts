import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService} from '../../services/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  addusersform: FormGroup

  constructor(private UserService:UserService,private router: Router) { }

  ngOnInit() {
    this.addusersform = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      userName : new FormControl(''),
      emailAddress : new FormControl(''),
      mobileNumber : new FormControl(''),
      password : new FormControl('')
    })
  }

  getUsersFormData() {
    let obj = this.addusersform.value;
    console.log(this.addusersform.value);
    this.UserService.saveUsers(obj).subscribe((result) => {
      if(result.status == "Success"){
        this.router.navigate(['/listusers'])
      }
    })
  }
}