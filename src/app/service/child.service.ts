import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Child from 'src/class/Child';


import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  
  constructor(public http:HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/Child`
  GetAllChildren() {
    return this.http.get<Child[]>(`${this.baseRouteUrl}`);
  }
  GetChildById(id:number) {
    return this.http.get<Child>(`${this.baseRouteUrl}${id}`);
  }
  AddChild(child:Child){
    return this.http.post<Child>(`${this.baseRouteUrl}`,child);
    
  } 
}
