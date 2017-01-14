import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { AboutRoutingModule } from './about.routing';
import { AboutComponent } from './about.component';
import { newComponent2  } from './new2.component';
import { NewModule }      from '../../shared_components/+new/new.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    ModalModule,
    NewModule
  ],
  exports: [],
  declarations: [AboutComponent, newComponent2],
  providers: [],
})

export class AboutModule { }
