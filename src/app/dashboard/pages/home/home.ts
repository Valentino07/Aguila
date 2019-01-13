import { Component, OnInit } from '@angular/core';
import { UserDataProvider } from '../../../providers/user-data/user-data';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public points = 124;
  public calcDone = false;
  public circleLengthList = [];
  public circPercentList = [85, 22, 60];
  public strokeColors = [];
  public iconColors = [];
  public icon = [];
  public coins;


  constructor(
    public navCtrl: Router, 
    public navParams: ActivatedRoute,
    public _userData: UserDataProvider
    ) {
  }

  ngOnInit() {
    this.grabCoins();
    this.calcCircleLength();
  }

  // generate the styles needed for circle length
  calcCircleLength() {
    for(let item of this.circPercentList){
      this.circleLengthList.push(item + ',100');
      if(item > 75){
        // green color stroke
        this.strokeColors.push('#2CD55A');
        this.iconColors.push('#22B9E3');
        this.icon.push('fa-smile-beam');
      }else if (item < 75 && item > 50){
        // yellow color stroke
        this.strokeColors.push('#FFB90D');
        this.iconColors.push('#22B9E3');
        this.icon.push('fa-grin-beam-sweat');
        
      }else {
        // red color stroke
        this.strokeColors.push('#F43435');
        this.iconColors.push('#22B9E3');
        this.icon.push('fa-angry');
        
      }
    }

    this.calcDone = true;
  }

  grabCoins(){
    // this.coins = this._userData.getCoin();
  }

  accountSettings() {
    // this.navCtrl.push('AccountSettingsPage');
  }

  viewClasses() {
    // this.navCtrl.push('ClassesPage');
  }
  viewAssignments() {
    // this.navCtrl.push('AssignmentsPage');
  }

  viewStudyTool() {
    // this.navCtrl.push('StudyPage');
  }

  viewAttendanceTool() {
    // this.navCtrl.push('AttendancePage');
  }

  viewOfficeHoursTool() {
    // this.navCtrl.push('OfficeHoursPage');
  }
}
