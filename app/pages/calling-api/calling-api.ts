import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {Generic} from '../../providers/generic/generic';
import {SpinnerDialog} from 'ionic-native';

/*
  Generated class for the CallingApiPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/calling-api/calling-api.html',
  providers: [PeopleService, Generic]
})
export class CallingApiPage {
  people: any;
  peopleService: any;
  generic: any;

  constructor(peopleService: PeopleService, generic: Generic) {
    SpinnerDialog.show();
    this.peopleService = peopleService;
    this.generic = generic;
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load().then(data => {
      SpinnerDialog.hide();
      console.log(":loadPeople:", data);
      for(var i=0; i < data.length; i++){
        data[i].name.first = this.generic.captalizeName(data[i].name.first);
        data[i].name.last = this.generic.captalizeName(data[i].name.last);
      }
      this.people = data;
    });
  }
}
