import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTrue = true;
  title = 'Khrouf_Walid_Twin5';
  getDateTime(): string {
    return new Date().toLocaleTimeString();
    }
    items = ['Item 1', 'Item 2', 'Item 3'];
    onButtonClick() {
      console.log('Le bouton a été cliqué !');
    }
    inputValue: string = '';
 
    onInputChange(event: Event) {
      this.inputValue = (event.target as HTMLInputElement).value;
    }
    isAvailable = false;
    imgSource = 'https://robohash.org/xp?set=set4';
    imgAlt = 'eXtreme Programming Explained';
    color = 'red';
    categorie = 'clothes';
    fname = 'Adam';
}
