import { NgModule } from '@angular/core';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { PanierDetailsComponent } from './panier-container/panier-details/panier-details.component';
import { CbPipe } from 'src/app/pipe/cb.pipe';
import { RouterModule } from '@angular/router';
import { APP_PANIER_ROUTES } from './panier.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [
    PanierContainerComponent,
    PanierDetailsComponent,
    CbPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(APP_PANIER_ROUTES)
  ]
})
export class PanierModule { }
