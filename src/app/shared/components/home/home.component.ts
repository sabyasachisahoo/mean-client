import { map } from 'rxjs/operators';
import { User } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // userList:any[]= [];
  // userObj = {};
  // phone;any
  // userArray = ['sam','Sabya','joey']

  constructor(public userService: UserService) { }

  ngOnInit() {
  //  for(var x=0;x<this.userArray.length;x++){
  //   this.userService.userInfo(this.userArray[x]).subscribe((data:any)=>{
  //      if(data){
  //        this.userObj = this.userList.push(data[0]);
  //        console.log(this.userList)
  //      }
  //     })
  //  }

  }

  // update(phone){
  //   function addKeyValue(obj, key, data){
  //     obj[key] = data;
  //   }

  //   let newinfo = this.userList.map(function(userObj) {
  //     return addKeyValue(userObj, 'phone', phone);
  //   });
  //   console.log(this.userList)
  // }

}
