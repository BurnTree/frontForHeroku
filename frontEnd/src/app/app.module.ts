import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './modules/pageNotFound/pages/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CarouselComponent} from './modules/home/component/carousel/carousel.component';
import {NewsComponent} from './modules/home/component/news/news.component';
import {ProductionComponent} from './modules/home/component/production/production.component';
import {CatalogComponent} from './modules/catalog/pages/catalog/catalog.component';
import {ProductComponent} from './modules/catalog/component/product/product.component';
import {ItemComponent} from './modules/item/pages/item/item.component';
import {SearchCatalogComponent} from './modules/catalog/pages/search-catalog/search-catalog.component';
import {ContanctComponent} from './modules/catalog/component/contanct/contanct.component';
import {CatalogPunktComponent} from './modules/catalog/pages/catalog-punkt/catalog-punkt.component';
import {CatalogPodPunktComponent} from './modules/catalog/pages/catalog-pod-punkt/catalog-pod-punkt.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ScrollTopBtnComponent} from './core/scroll-top-btn/scroll-top-btn.component';
import {ContactComponent} from './modules/contact/contact.component';
import {RouteMenuComponent} from './core/route-menu/route-menu.component';
import {Globals} from './core/models/global';
import {CatalogSertificatesComponent} from './modules/sertificates/pages/catalog-sertificates/catalog-sertificates.component';
import {ItemSertificateComponent} from './modules/sertificates/pages/item-sertificate/item-sertificate.component';
import {SertificateIconComponent} from './modules/sertificates/component/sertificate-icon/sertificate-icon.component';
import {CommunicationComponent} from './modules/item/component/communication/communication.component';
import {FilterPipe} from './core/service/filter.pipe';
import {SignupComponent} from './modules/administrator/page/signup/signup.component';
import {CabinetComponent} from './modules/administrator/page/cabinet/cabinet.component';
import {AddCategoryComponent} from './modules/administrator/component/add-category/add-category.component';
import {AddTitleComponent} from './modules/administrator/component/add-title/add-title.component';
import {AddGoodsComponent} from './modules/administrator/component/add-goods/add-goods.component';
import {ChangeCatalogComponent} from './modules/administrator/component/change-catalog/change-catalog.component';
import {ChangeTitleComponent} from './modules/administrator/component/change-title/change-title.component';
import {ChangeGoodsComponent} from './modules/administrator/component/change-goods/change-goods.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {CatalogTitleComponent} from './modules/administrator/component/catalog-title/catalog-title.component';
import {AutoriseInterceptor} from './core/interceptor/autorise.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CarouselComponent,
    NewsComponent,
    ProductionComponent,
    CatalogComponent,
    ProductComponent,
    ItemComponent,
    SearchCatalogComponent,
    ContanctComponent,
    CatalogPunktComponent,
    CatalogPodPunktComponent,
    ScrollTopBtnComponent,
    ContactComponent,
    RouteMenuComponent,
    CatalogSertificatesComponent,
    ItemSertificateComponent,
    SertificateIconComponent,
    CommunicationComponent,
    FilterPipe,
    SignupComponent,
    CabinetComponent,
    AddCategoryComponent,
    AddTitleComponent,
    AddGoodsComponent,
    ChangeCatalogComponent,
    ChangeTitleComponent,
    ChangeGoodsComponent,
    CatalogTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [Globals, {
    provide: HTTP_INTERCEPTORS,
    useClass: AutoriseInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
