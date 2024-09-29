import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { ManualsComponent } from './manuals/manuals.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'create',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'manuals',component:ManualsComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
