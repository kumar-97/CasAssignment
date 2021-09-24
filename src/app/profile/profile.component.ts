import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastlerService } from '../castler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(
    private appService:CastlerService,
    private router:Router
  ) { }

  ngOnInit(){
    console.log('in profile');
      this.appService.stringSubject.subscribe(
        (data) => 
        {
          console.log('next subscribed value: ' + data);
          this.profile = data.data;
          if(this.profile==undefined){
               this.router.navigate(['/'])
          }
          console.log('in profile',data);
        },err =>{console.log('err')}
      );
    

  }

}
