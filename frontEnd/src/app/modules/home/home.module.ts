import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { ProductionComponent } from './component/production/production.component';
import { CarouselComponent } from './component/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class HomeModule {}
