import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppData } from './AppData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gip';
  data = new AppData('');
  }

