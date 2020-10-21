import { Auditorias } from '../interfaces/interface';
import { environment } from '../../environments/environment';
import { map, catchError, retry, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class Auditoria {

    private static fechaIni     : string;
    private static fechaFin     : string;
    private static imei         : string;
    private static url          = environment.URLQuick;
    private static instance     : Auditoria;
    public ban                  : boolean = false;

    private constructor() {
        Auditoria.fechaIni   = new Date().toISOString();
        Auditoria.fechaFin   = new Date().toISOString();
        Auditoria.imei       = '127e27181e8d817e';
        this.ban = false;
    }

     public static getInstance(): Auditoria {
        if (!Auditoria.instance) {
            Auditoria.instance = new Auditoria();
        }
        return Auditoria.instance;
    }

    setFechaIni(fecha:string) {
        Auditoria.fechaIni = fecha;
    }

    setFechaFinal(fecha:string) {
        Auditoria.fechaFin = fecha;
    }

    getAuditorias() {
        return ajax.getJSON(`${Auditoria.url}?fechaIni=${Auditoria.fechaIni}&fechaFin=${Auditoria.fechaFin}&imei=${Auditoria.imei}`).pipe(
            retry(4),
            timeout(60000),
            map( (response:Auditorias[]) => response),
            catchError(error => {
                return of(error);
            })
        );
    }
}