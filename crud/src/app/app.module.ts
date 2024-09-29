import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { ManualsComponent } from './manuals/manuals.component';
import { FormsModule } from '@angular/forms';
import { QueryService } from './services/query.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalsComponent } from './modals/modals.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    ErrorComponent,
    InicioComponent,
    ManualsComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QueryService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
