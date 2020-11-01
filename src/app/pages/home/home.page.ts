import { Component, OnInit } from '@angular/core';
import { Auditoria } from 'src/app/classes/auditoria';
import { Plugins } from '@capacitor/core';
import { Auditorias } from 'src/app/interfaces/interface';
import { ThemeService } from 'src/app/services/theme.service';
import { AuditoriasService } from '../../services/auditorias.service';
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

  fechaIni = new Date().toISOString();
  fechaFin = new Date().toISOString();
  darkTheme = false;
  icon = 'moon-outline';

  constructor(private _sTheme   : ThemeService,
              private _sAudi    : AuditoriasService) { }

  async ngOnInit() {    
    this._sAudi.auditorias = JSON.parse((await Storage.get({ key: 'auditorias' })).value);
    this.darkTheme  =  JSON.parse((await Storage.get({ key: 'dark' })).value);
    this.darkTheme ? this.changeTheme() : null;
  }

  fechaInicio(event:CustomEvent)  {
    this._sAudi.setFechaIni(event.detail.value);
    this._sAudi.getAuditorias(true, false);
  }

  fechaFinal(event:CustomEvent)  {    
    this._sAudi.setFechaIni(event.detail.value);
    this._sAudi.getAuditorias(false, true);
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
}