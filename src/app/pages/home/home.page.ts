import { Component, OnInit } from '@angular/core';
import { Auditoria } from 'src/app/classes/auditoria';
import { Plugins } from '@capacitor/core';
import { Auditorias } from 'src/app/interfaces/interface';
import { ToastController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

// const { Device } = Plugins;
// this.auditoria = new Auditoria("2020-10-11T00:00:00-05:00", "11-10-20", "127e27181e8d817e");
// prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
// const info      = await Device.getInfo();
export class HomePage implements OnInit {

  auditoria = Auditoria.getInstance();
  auditorias: Auditorias[] = [];
  fechaIni = new Date().toISOString();
  fechaFin = new Date().toISOString();
  darkTheme = false;
  icon = 'moon-outline';
  bandera1 = false;
  bandera2 = false;

  constructor(private toastCtrl : ToastController,
              private _sTheme   : ThemeService) { }

  async ngOnInit() {    
    this.auditorias = JSON.parse((await Storage.get({ key: 'auditorias' })).value);
    this.darkTheme  =  JSON.parse((await Storage.get({ key: 'dark' })).value);
    this.darkTheme ? this.changeTheme() : null;
  }

  fechaInicio(event:CustomEvent)  {
    this.auditoria.setFechaIni(event.detail.value);
    this.bandera1 = true;
    this.getAuditorias();
  }

  fechaFinal(event:CustomEvent)  {    
    this.auditoria.setFechaFinal(event.detail.value);
    this.bandera2 = true;
    this.getAuditorias();
  }

  async getAuditorias() {
    this.auditoria.getAuditorias().subscribe(async res => {
      this.bandera1 = false;
      this.bandera2 = false;
      await Storage.set({ key: 'auditorias', value: JSON.stringify(res) });
      this.auditorias = res;
    }, err => {
      this.bandera1 = false;
      this.bandera2 = false;
      this.pushNotification(err);
    });
  }

  async changeTheme() {
    document.body.classList.toggle('dark');
    
    this.darkTheme ? this._sTheme.themeDark() : this._sTheme.themeLigth();
    !this.darkTheme ? this.icon = 'moon-outline' : this.icon = 'moon';
    await Storage.set({ key: 'dark', value: JSON.stringify(this.darkTheme) });
  }

  chageThemedark() {
    this.darkTheme = !this.darkTheme;
    this.changeTheme();
  }

  async pushNotification(err:string) {
    const toast = await this.toastCtrl.create({
      message: err,
      duration: 3000,
      animated: true,
      position: 'top',
      cssClass: 'notificacion',
    });

    toast.present();
  }

}