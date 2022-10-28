import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { CatsViewComponent } from './containers/cats-view/cats-view.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatEditorComponent } from './components/cat-editor/cat-editor.component';


@NgModule({
  declarations: [
    CatsComponent,
    CatsViewComponent,
    CatListComponent,
    CatDetailsComponent,
    CatEditorComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
