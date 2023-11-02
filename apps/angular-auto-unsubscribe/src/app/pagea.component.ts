import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'angular-auto-unsubscribe-pagea',
  templateUrl: './pagea.component.html',
})
export class PageAComponent implements OnDestroy {
  myData$ = this.dataService.getSomeData();

  constructor(private dataService: DataService) {
    console.log('PageAComponent created');
  }

  ngOnDestroy(): void {
    console.log('PageAComponent destroyed');
  }
}
