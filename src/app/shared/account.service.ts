import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  register() {
    this.http.get<any>(environment.colorfolioUrl + '/api/palette/ByW3LzYXQ6')
    .subscribe(response => {
      console.log(response);
    }); 

    console.log("ok")

  }
  

}
