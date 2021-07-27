import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { PanierDetailsComponent } from './panier-container/panier-details/panier-details.component';
import { CbPipe } from 'src/app/pipe/cb.pipe';
import { AppRouteModule } from 'src/app/app-route.module';



@NgModule({
  declarations: [
    PanierContainerComponent,
    PanierDetailsComponent,
    CbPipe
  ],
  imports: [
    CommonModule,
    AppRouteModule
  ]
})
export class PanierModule { }
