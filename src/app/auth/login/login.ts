import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  public form: FormGroup;

  constructor(
    public navCtrl: Router, 
    public _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  // initialize login form
  initForm() {
    this.form = this._fb.group({
      email: ['roberto@urbantxt.com', Validators.required],
      password: ['roberto101', Validators.required]
    })
  }

  // go to sign up page
  goSignUp() {
    this.navCtrl.navigate(['/signup']);
  }

  // on form submit
  onSubmit(){
    if(this.form.valid){
     // this.navCtrl.setRoot('TabsPage');
    }else{
      console.log('form not valid');
    }
  }
}
