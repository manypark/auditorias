import {  Component } from '@angular/core';
import {  Platform } from '@ionic/angular';
import {  SplashScreen } from '@ionic-native/splash-screen/ngx';
import {  Plugins } from '@capacitor/core';
import { ThemeService } from './services/theme.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  darkTheme = false;
  constructor(
    private platform      : Platform,
    private splashScreen  : SplashScreen,
    private _sTheme       : ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.darkTheme  = JSON.parse((await Storage.get({ key: 'dark' })).value);      
      this.darkTheme ? this._sTheme.themeDark() : this._sTheme.themeLigth();
      this.splashScreen.hide();
    });
  }
}