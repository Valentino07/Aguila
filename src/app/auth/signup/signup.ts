import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: Router, public navParams: ActivatedRoute) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
