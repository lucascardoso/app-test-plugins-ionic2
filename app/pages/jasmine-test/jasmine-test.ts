import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TestJasmine} from '../../providers/test-jasmine/test-jasmine';

/*
  Generated class for the JasmineTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/jasmine-test/jasmine-test.html',
  providers: [TestJasmine]
})
export class JasmineTestPage {
  answer: any = '...';
  testJasmine: any;

  constructor(test: TestJasmine) {
    this.testJasmine = test;
  }

  showAnswer(){
    this.answer = this.testJasmine.getRandomAnswer();
  }
}
