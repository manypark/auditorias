import { Auditorias } from '../interfaces/interface';
import { environment } from '../../environments/environment';
import { map, catchError, retry, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Plugins } from '@capacitor/core';
import { AuditoriasService } from '../services/auditorias.service';
const { Storage } = Plugins;

export class Auditoria {

    // private static fechaIni     : string;
    // private static fechaFin     : string;
    // private static imei         : string;
    // private static url          = environment.URLQuick;
    // private static instance     : Auditoria;
    // public ban1                 : boolean;
    // public ban2                 : boolean;
    // public auditorias           : Auditorias[];
    // private _audiS              : AuditoriasService;

    // constructor() {
    //     Auditoria.fechaIni   = new Date().toISOString();
    //     Auditoria.fechaFin   = new Date().toISOString();
    //     Auditoria.imei       = '127e27181e8d817e';
    //     this.ban1 = false;
    //     this.ban2 = false;
    //     this.auditorias = [];
    // }

    //  public static getInstance(): Auditoria {
    //     if (!Auditoria.instance) {
    //         Auditoria.instance = new Auditoria();
    //     }
    //     return Auditoria.instance;
    // }

    // setFechaIni(fecha:string) {
    //     Auditoria.fechaIni = fecha;
    // }

    // setFechaFinal(fecha:string) {
    //     Auditoria.fechaFin = fecha;
    // }

    // getAuditorias(ban1?:boolean, ban2?:boolean) {
    //     this.ban1 = ban1;
    //     this.ban2 = ban2;
        
    //     ajax.getJSON(`${Auditoria.url}?fechaIni=${Auditoria.fechaIni}&fechaFin=${Auditoria.fechaFin}&imei=${Auditoria.imei}`).pipe(
    //         retry(4),
    //         timeout(60000),
    //         map( (response:Auditorias[]) => response),
    //         catchError(error => {
    //             return of(error);
    //         })
    //     ).subscribe(async res => {
    //         await Storage.set({ key: 'auditorias', value: JSON.stringify(res) });
    //         this.auditorias = res;
    //         this.ban1 = false;
    //         this.ban2 = false;
    //         this._audiS.pushNotification('Todo al 100');
    //     }, err => {
    //         this._audiS.pushNotification(err);
    //         this.ban1 = false;
    //         this.ban2 = false
    //     });
    // }
}