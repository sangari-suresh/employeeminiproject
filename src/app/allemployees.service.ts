import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployeesService {

  baseUrl:string="https://6572df5d192318b7db412dfe.mockapi.io/employees";

  constructor(private _httpClient:HttpClient) { }

getallemployees():Observable<any>{
  return this._httpClient.get(this.baseUrl);
}

getFilteredallemployees(term:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?filter="+term);
}

getSortedallemployees(coloumn:string,order:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?sortBy="+coloumn+"&order="+order);
}

getPaginatedallemployees(limit:number,page:number):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
}

deleteallemployees(id:number):Observable<any>{
  return this._httpClient.delete(this.baseUrl+"/"+id);
}

createallemployees(data:any):Observable<any>{
  return this._httpClient.post(this.baseUrl,data);
}

getallemployee(id:number):Observable<any>{
  return this._httpClient.get(this.baseUrl+"/"+id);
}

updateallemployees(id:number,data:any):Observable<any>{
  return this._httpClient.put(this.baseUrl+"/"+id,data);
}
}
