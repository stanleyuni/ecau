import { Component } from '@angular/core';

@Component({
  selector: 'join',
  templateUrl: './join.html',
  styleUrls: ['./join.scss']
})
export class JoinComponent {

  donate() {
    window.open('https://ko-fi.com/stanleyuniversity');
  }
}
