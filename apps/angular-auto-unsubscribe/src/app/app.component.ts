import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { AutoUnsubscribe } from './auto-unsubscrube.decorator';

@Component({
  selector: 'angular-auto-unsubscribe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@AutoUnsubscribe()
export class AppComponent implements OnDestroy {
  title = 'angular-auto-unsubscribe';
  myData$ = this.dataService.getSomeData();

  constructor(private dataService: DataService) {}

  ngOnDestroy() {
    console.log('AppComponent destroyed');
  }
}
