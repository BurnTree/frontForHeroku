import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './modules/pageNotFound/pages/page-not-found/page-not-found.component';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {ItemComponent} from './modules/item/pages/item/item.component';
import {CatalogComponent} from './modules/catalog/pages/catalog/catalog.component';
import {CatalogPunktComponent} from './modules/catalog/pages/catalog-punkt/catalog-punkt.component';
import {CatalogPodPunktComponent} from './modules/catalog/pages/catalog-pod-punkt/catalog-pod-punkt.component';
import {SearchCatalogComponent} from './modules/catalog/pages/search-catalog/search-catalog.component';
import {ContactComponent} from './modules/contact/contact.component';
import {CatalogSertificatesComponent} from './modules/sertificates/pages/catalog-sertificates/catalog-sertificates.component';
import {ItemSertificateComponent} from './modules/sertificates/pages/item-sertificate/item-sertificate.component';

const appRoutes: Routes = [
  {path: ':lang/product/:p/:pp/:id', component: ItemComponent, pathMatch: 'full'},
  {path: ':lang/product/:p/:pp', component: CatalogComponent, pathMatch: 'full'},
  {path: ':lang/product/:p', component: CatalogPodPunktComponent, pathMatch: 'full'},
  {path: ':lang/product', component: CatalogPunktComponent, pathMatch: 'full'},
  {path: ':lang/search/:product', component: SearchCatalogComponent, pathMatch: 'full'},
  {path: ':lang/contact', component: ContactComponent, pathMatch: 'full'},
  {path: ':lang', component: HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/ru', pathMatch: 'full'},
  {path: ':lang/sertificates', component: CatalogSertificatesComponent, pathMatch: 'full'},
  {path: ':lang/sertificates/:id', component: ItemSertificateComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
