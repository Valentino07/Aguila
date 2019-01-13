import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  public coin = 1573;

  constructor(public http: HttpClient) {
    console.log('Hello UserDataProvider Provider');
  }

  getCoin(){
    return this.coin;
  }

  updateCoin(coins){
    console.log(coins);
    this.coin += coins;
    console.log(this.coin);
  }

}
