import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSomeData() {
    return of({ data: 'some data' });
  }
}
