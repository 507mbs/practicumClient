import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import Detail from 'src/class/Detail';
import { environment } from 'src/enviroments/environment';



@Injectable({
  providedIn: 'root'
})
export class DetailService {
  currentUser=new BehaviorSubject<{name:string,id:string}>(null);
  saveInStorage(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));    
  }
  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    // if (!u)
    //   return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }

  [x: string]: any;

  constructor(public http:HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/Detail`
  GetAllDetails() {
    return this.http.get<Detail[]>(`${this.baseRouteUrl}`);
  }
  GetDetailById(id) {
    return this.http.get<Detail>(`${this.baseRouteUrl}`,id);
  }
  AddDetail(detail:Detail) {
    return this.http.post<Detail>(`${this.baseRouteUrl}`,detail);
   }

}
