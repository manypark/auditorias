import { Injectable } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  themeLigth() {
    StatusBar.setStyle({ style: StatusBarStyle.Light });
    StatusBar.setBackgroundColor({ color: '#ffffff' });
  }

  themeDark() {
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    StatusBar.setBackgroundColor({ color: '#1e2023' });
  }

}
