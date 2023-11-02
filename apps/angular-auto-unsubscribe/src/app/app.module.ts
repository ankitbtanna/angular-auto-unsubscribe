import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DataService } from './data.service';
import { PageBComponent } from './pageb.component';
import { PageAComponent } from './pagea.component';

@NgModule({
  declarations: [AppComponent, PageAComponent, PageBComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
