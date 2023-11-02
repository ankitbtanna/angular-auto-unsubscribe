import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AutoUnsubscribe } from './auto-unsubscrube.decorator';

@Component({
  selector: 'angular-auto-unsubscribe-pageb',
  templateUrl: './pageb.component.html',
})
@AutoUnsubscribe()
export class PageBComponent implements OnDestroy, OnInit {
  myData$ = this.dataService.getSomeData();

  constructor(private dataService: DataService) {
    console.log('PageBComponent created');
  }

  ngOnInit(): void {
    this.myData$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  ngOnDestroy(): void {
    console.log('PageBComponent destroyed');
  }
}
