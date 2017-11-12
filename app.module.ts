import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
