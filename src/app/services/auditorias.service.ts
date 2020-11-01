import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Auditorias } from '../interfaces/interface';
import { environment } from '../../environments/environment';
import { map, catchError, retry, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class AuditoriasService {
  private fechaIni     = new Date().toISOString();
  private fechaFin     = new Date().toISOString();
  private imei         : string = '127e27181e8d817e';
  private url          = environment.URLQuick;
  public ban1          : boolean;
  public ban2          : boolean;
  public auditorias    : Auditorias[];

  constructor(private toastCtrl: ToastController) { }

  setFechaIni(fecha:string) {
      this.fechaIni = fecha;
  }

  setFechaFinal(fecha:string) {
      this.fechaFin = fecha;
  }

  getAuditorias(ban1?:boolean, ban2?:boolean) {
      this.ban1 = ban1;
      this.ban2 = ban2;
      
      ajax.getJSON(`${this.url}?fechaIni=${this.fechaIni}&fechaFin=${this.fechaFin}&imei=${this.imei}`).pipe(
          retry(4),
          timeout(60000),
          map( (response:Auditorias[]) => response),
          catchError(error => {
              return of(error);
          })
      ).subscribe(async res => {
          await Storage.set({ key: 'auditorias', value: JSON.stringify(res) });
          this.auditorias = res;
          this.ban1 = false;
          this.ban2 = false;
          this.pushNotification('Todo al 100');
      }, err => {
          this.pushNotification(err);
          this.ban1 = false;
          this.ban2 = false
      });
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