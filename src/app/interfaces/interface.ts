export interface Auditorias {
    fecha_formated                          : string;
    tipo_de_auditoria                       : string;
    related_huertas_todas                   : string;
    nombre                                  : string;
    related_datos_empleado                  : string;
    datos_empleado___nombre                 : string;
    record_id_                              : string;
    huertas_todasnombre                     : string;
    related_usuarios_app                    : string;
    usuarios_app___datos_empleado___nombre  : string;
    subido                                  : string;
    nombre_productor                        : string;
    huertas_todas___nombre                  : string;
    no_evaluaciones                         : string;
    evaluaciones_cumplidas                  : string;
    update_id                               : string;
    detalle                                 : Detalles[];
}

export interface Detalles {
  descripcion   : string;
  tipo          : string;
  cumple        : string;
  n_a           : string;
  record_id_    : string;
  notas         : string;
  no            : string;
  otra_desc     : string;
  orden         : string;
}