import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CastlerService {
  data: any;
  public stringSubject = new BehaviorSubject<any>({});

  constructor(private http :HttpClient,
              private router:Router
    ) { }

  // getEmployee(_id: any){
  //   return this.http.get("https://reqres.in/api/users/"+_id).toPromise()
  // }
  
  getEmployee(_id: any){
      this.http.get("https://reqres.in/api/users/"+_id).subscribe(data =>{
        this.data =data;
        this.stringSubject.next(data);
        console.log('inservice',this.stringSubject)
        this.router.navigate(['profile'])
      
      },err=>{this.router.navigate(['login'])})
    }
}
