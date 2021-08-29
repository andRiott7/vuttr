import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolService } from './services/tool.service';
import { BaseService } from './services/base.service';
import { CreateToolComponent } from './components/create-tool/create-tool.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateToolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
      BaseService,
      ToolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
