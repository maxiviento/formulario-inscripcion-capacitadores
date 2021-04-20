import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  form: FormGroup;
  options: FormlyFormOptions;
  model: any;
  fields: FormlyFieldConfig[];

  constructor(public db: AngularFireDatabase) {
    this.title =
      'FORMULARIO de Inscripción en el Registro Provincial de Capacitadores';
    this.form = new FormGroup({});
    this.options = {
      formState: {
        selectOptionsData: {
          TRAYECTO: [
            {
              id: 'COMERCIALIZACION',
              name: 'COMERCIALIZACION',
              idSector: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'RECURSOS HUMANOS',
              name: 'RECURSOS HUMANOS',
              idSector: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'ADMINISTRACION',
              name: 'ADMINISTRACION',
              idSector: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'ESTACIONES DE SERVICIO',
              name: 'ESTACIONES DE SERVICIO',
              idSector: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'PRODUCCION DE ANIMALES DE GRANJA',
              name: 'PRODUCCION DE ANIMALES DE GRANJA',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'APICULTURA',
              name: 'APICULTURA',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'JARDINERIA Y VIVERISMO',
              name: 'JARDINERIA Y VIVERISMO',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION HORTICOLA',
              name: 'PRODUCCION HORTICOLA',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION DE PLANTAS AROMATICAS',
              name: 'PRODUCCION DE PLANTAS AROMATICAS',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'CULTIVOS HIDROPONICOS',
              name: 'CULTIVOS HIDROPONICOS',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION LECHERA',
              name: 'PRODUCCION LECHERA',
              idSector: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'GOMERIA BALANCEADO Y ALINEADO',
              name: 'GOMERIA BALANCEADO Y ALINEADO',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'ELECTRICIDAD DE AUTOMOTORES',
              name: 'ELECTRICIDAD DE AUTOMOTORES',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              name: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              name: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              idSector: 'AUTOMOTOR',
            },
            { id: 'CHAPISTA', name: 'CHAPISTA', idSector: 'AUTOMOTOR' },
            {
              id: 'PINTURA DE AUTOMOTORES',
              name: 'PINTURA DE AUTOMOTORES',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE MOTOS',
              name: 'MECANICA DE MOTOS',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              name: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE FRENO',
              name: 'MECANICA DE SISTEMAS DE FRENO',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              name: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              name:
                'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE TRANSMISIONES',
              name: 'MECANICA DE TRANSMISIONES',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              name: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              idSector: 'AUTOMOTOR',
            },
            {
              id: 'CORRECCION DE TEXTOS PERIODISTICOS',
              name: 'CORRECCION DE TEXTOS PERIODISTICOS',
              idSector: 'COMUNICACION',
            },
            {
              id: 'OPERACION Y REALIZACION COMUNICACIONAL',
              name: 'OPERACION Y REALIZACION COMUNICACIONAL',
              idSector: 'COMUNICACION',
            },
            {
              id: 'FOTOGRAFIA E IMAGEN EN REDES',
              name: 'FOTOGRAFIA E IMAGEN EN REDES',
              idSector: 'COMUNICACION',
            },
            {
              id: 'CONSTRUCCION EN BASE HUMEDA',
              name: 'CONSTRUCCION EN BASE HUMEDA',
              idSector: 'CONSTRUCCION',
            },
            {
              id: 'CARPINTERIAS DE OBRA',
              name: 'CARPINTERIAS DE OBRA',
              idSector: 'CONSTRUCCION',
            },
            {
              id: 'CONSTRUCCION EN BASE SECA',
              name: 'CONSTRUCCION EN BASE SECA',
              idSector: 'CONSTRUCCION',
            },
            {
              id: 'YESERIA Y PINTURA DE OBRA',
              name: 'YESERIA Y PINTURA DE OBRA',
              idSector: 'CONSTRUCCION',
            },
            {
              id:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
              name:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
              idSector: 'CONSTRUCCION',
            },
            {
              id: 'INSTALACION DE GAS DOMICILIARIA',
              name: 'INSTALACION DE GAS DOMICILIARIA',
              idSector: 'CONSTRUCCION',
            },
            {
              id: 'APARADO DE CALZADO Y MARROQUINERIA',
              name: 'APARADO DE CALZADO Y MARROQUINERIA',
              idSector: 'CUERO Y CALZADO',
            },
            {
              id: 'ARMADO DE CALZADO',
              name: 'ARMADO DE CALZADO',
              idSector: 'CUERO Y CALZADO',
            },
            {
              id: 'MODELAJE DE CALZADO',
              name: 'MODELAJE DE CALZADO',
              idSector: 'CUERO Y CALZADO',
            },
            {
              id: 'ELECTRICIDAD EN INMUEBLES',
              name: 'ELECTRICIDAD EN INMUEBLES',
              idSector: 'ENERGIA ELECTRICA',
            },
            {
              id: 'CLIMATIZACION',
              name: 'CLIMATIZACION',
              idSector: 'ENERGIA ELECTRICA',
            },
            {
              id: 'REPARACION DE ELECTRODOMESTICOS',
              name: 'REPARACION DE ELECTRODOMESTICOS',
              idSector: 'ENERGIA ELECTRICA',
            },
            {
              id: 'ELECTRICIDAD INDUSTRIAL',
              name: 'ELECTRICIDAD INDUSTRIAL',
              idSector: 'ENERGIA ELECTRICA',
            },
            {
              id:
                'ELECTRICIDAD DE REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
              name:
                'ELECTRICIDAD DE REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
              idSector: 'ENERGIA ELECTRICA',
            },
            {
              id: 'CAPACIDADES SOCIO LABORALES',
              name: 'CAPACIDADES SOCIO LABORALES',
              idSector: 'FORTALECIMIENTO DE CAPACIDADES',
            },
            {
              id: 'GESTION DE MICROEMPRENDIMIENTOS',
              name: 'GESTION DE MICROEMPRENDIMIENTOS',
              idSector: 'FORTALECIMIENTO DE CAPACIDADES',
            },
            {
              id: 'COCINA SALUDABLE',
              name: 'COCINA SALUDABLE',
              idSector: 'GASTRONOMIA',
            },
            {
              id: 'ELABORACION DE DULCES Y CONSERVAS',
              name: 'ELABORACION DE DULCES Y CONSERVAS',
              idSector: 'GASTRONOMIA',
            },
            { id: 'PANADERIA', name: 'PANADERIA', idSector: 'GASTRONOMIA' },
            { id: 'PASTELERIA', name: 'PASTELERIA', idSector: 'GASTRONOMIA' },
            {
              id: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
              name: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
              idSector: 'HOTELERIA Y TURISMO',
            },
            { id: 'IDIOMAS', name: 'IDIOMAS', idSector: 'HOTELERIA Y TURISMO' },
            {
              id: 'AMA DE LLAVES',
              name: 'AMA DE LLAVES',
              idSector: 'HOTELERIA Y TURISMO',
            },
            {
              id: 'ORGANIZACION DE OPERACIONES HOTELERAS',
              name: 'ORGANIZACION DE OPERACIONES HOTELERAS',
              idSector: 'HOTELERIA Y TURISMO',
            },
            {
              id: 'ORGANIZACION DE EVENTOS',
              name: 'ORGANIZACION DE EVENTOS',
              idSector: 'HOTELERIA Y TURISMO',
            },
            { id: 'TURISMO', name: 'TURISMO', idSector: 'HOTELERIA Y TURISMO' },
            {
              id: 'RECREACION',
              name: 'RECREACION',
              idSector: 'HOTELERIA Y TURISMO',
            },
            {
              id: 'FORMATIVO ILUMINACION',
              name: 'FORMATIVO ILUMINACION',
              idSector: 'INDUSTRIAS CULTURALES',
            },
            {
              id: 'FORMATIVO SONIDO',
              name: 'FORMATIVO SONIDO',
              idSector: 'INDUSTRIAS CULTURALES',
            },
            {
              id: 'EMPRENDIMIENTOS CULTURALES',
              name: 'EMPRENDIMIENTOS CULTURALES',
              idSector: 'INDUSTRIAS CULTURALES',
            },
            {
              id: 'PUESTA EN ESCENA',
              name: 'PUESTA EN ESCENA',
              idSector: 'INDUSTRIAS CULTURALES',
            },
            {
              id: 'CARACTERIZACION DE PERSONAJES',
              name: 'CARACTERIZACION DE PERSONAJES',
              idSector: 'INDUSTRIAS CULTURALES',
            },
            {
              id: 'OPERADOR DE INFORMATICA',
              name: 'OPERADOR DE INFORMATICA',
              idSector: 'INFORMATICA',
            },
            {
              id: 'DIBUJO CON AUTOCAD 2D',
              name: 'DIBUJO CON AUTOCAD 2D',
              idSector: 'INFORMATICA',
            },
            {
              id: 'DISEÑO GRAFICO PUBLICITARIO',
              name: 'DISEÑO GRAFICO PUBLICITARIO',
              idSector: 'INFORMATICA',
            },
            {
              id: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
              name: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
              idSector: 'INFORMATICA',
            },
            {
              id: 'PROGRAMACION',
              name: 'PROGRAMACION',
              idSector: 'INFORMATICA',
            },
            {
              id: 'ARMADO Y REPARACION DE PC',
              name: 'ARMADO Y REPARACION DE PC',
              idSector: 'INFORMATICA',
            },
            {
              id: 'PROCESOS PRODUCTIVOS DE LA MADERA',
              name: 'PROCESOS PRODUCTIVOS DE LA MADERA',
              idSector: 'MADERA Y MUEBLE',
            },
            {
              id: 'ACABADOS Y TECHOS DE MADERA',
              name: 'ACABADOS Y TECHOS DE MADERA',
              idSector: 'MADERA Y MUEBLE',
            },
            {
              id: 'DISEÑO DE MUEBLES',
              name: 'DISEÑO DE MUEBLES',
              idSector: 'MADERA Y MUEBLE',
            },
            {
              id: 'EBANISTERIA Y CARPINTERIA DE BANCO',
              name: 'EBANISTERIA Y CARPINTERIA DE BANCO',
              idSector: 'MADERA Y MUEBLE',
            },
            { id: 'PENDIENTE', name: 'PENDIENTE', idSector: 'MADERA Y MUEBLE' },
            {
              id: 'FRESADO CNC',
              name: 'FRESADO CNC',
              idSector: 'METALMECANICA',
            },
            {
              id: 'TORNERIA CNC',
              name: 'TORNERIA CNC',
              idSector: 'METALMECANICA',
            },
            {
              id: 'PROGRAMADOR CNC',
              name: 'PROGRAMADOR CNC',
              idSector: 'METALMECANICA',
            },
            { id: 'SOLDADURA', name: 'SOLDADURA', idSector: 'METALMECANICA' },
            { id: 'HERRERIA', name: 'HERRERIA', idSector: 'METALMECANICA' },
            {
              id: 'FORMATIVO ALFARERIA',
              name: 'FORMATIVO ALFARERIA',
              idSector: 'PRODUCCION ARTESANAL Y MANUFACTURA',
            },
            {
              id: 'ELABORACION DE PIEZAS DE CERAMICA',
              name: 'ELABORACION DE PIEZAS DE CERAMICA',
              idSector: 'PRODUCCION ARTESANAL Y MANUFACTURA',
            },
            {
              id: 'CESTERIA',
              name: 'CESTERIA',
              idSector: 'PRODUCCION ARTESANAL Y MANUFACTURA',
            },
            {
              id: 'PINTURA DECORATIVA',
              name: 'PINTURA DECORATIVA',
              idSector: 'PRODUCCION ARTESANAL Y MANUFACTURA',
            },
            {
              id: 'MAQUILLAJE INTEGRAL',
              name: 'MAQUILLAJE INTEGRAL',
              idSector: 'SERVICIOS PERSONALES Y COMUNITARIOS',
            },
            {
              id: 'PELUQUERIA',
              name: 'PELUQUERIA',
              idSector: 'SERVICIOS PERSONALES Y COMUNITARIOS',
            },
            {
              id: 'COSMETOLOGIA DEPILACION Y ESTETICA DE MANOS Y PIES',
              name: 'COSMETOLOGIA DEPILACION Y ESTETICA DE MANOS Y PIES',
              idSector: 'SERVICIOS PERSONALES Y COMUNITARIOS',
            },
            {
              id: 'CUIDADOR GERONTOLOGICO',
              name: 'CUIDADOR GERONTOLOGICO',
              idSector: 'SERVICIOS PERSONALES Y COMUNITARIOS',
            },
            {
              id: 'CONFECCION A MEDIDA',
              name: 'CONFECCION A MEDIDA',
              idSector: 'TEXTIL',
            },
            {
              id: 'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
              name: 'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
              idSector: 'TEXTIL',
            },
            {
              id: 'COSTURA INDUSTRIAL',
              name: 'COSTURA INDUSTRIAL',
              idSector: 'TEXTIL',
            },
            {
              id: 'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA Y PATRONAJE',
              name: 'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA Y PATRONAJE',
              idSector: 'TEXTIL',
            },
            {
              id: 'TEXTIL ARTESANAL',
              name: 'TEXTIL ARTESANAL',
              idSector: 'TEXTIL',
            },
          ],
          CURSOS: [
            {
              id: 'COMERCIALIZACION',
              name: 'COMERCIALIZACION',
              idTrayecto: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'RECURSOS HUMANOS',
              name: 'RECURSOS HUMANOS',
              idTrayecto: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'ADMINISTRACION',
              name: 'ADMINISTRACION',
              idTrayecto: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'ESTACIONES DE SERVICIO',
              name: 'ESTACIONES DE SERVICIO',
              idTrayecto: 'ADMINISTRACION Y COMERCIO',
            },
            {
              id: 'PRODUCCION DE ANIMALES DE GRANJA',
              name: 'PRODUCCION DE ANIMALES DE GRANJA',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'APICULTURA',
              name: 'APICULTURA',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'JARDINERIA Y VIVERISMO',
              name: 'JARDINERIA Y VIVERISMO',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION HORTICOLA',
              name: 'PRODUCCION HORTICOLA',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION DE PLANTAS AROMATICAS',
              name: 'PRODUCCION DE PLANTAS AROMATICAS',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'CULTIVOS HIDROPONICOS',
              name: 'CULTIVOS HIDROPONICOS',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'PRODUCCION LECHERA',
              name: 'PRODUCCION LECHERA',
              idTrayecto:
                'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
            },
            {
              id: 'GOMERIA BALANCEADO Y ALINEADO',
              name: 'GOMERIA BALANCEADO Y ALINEADO',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'ELECTRICIDAD DE AUTOMOTORES',
              name: 'ELECTRICIDAD DE AUTOMOTORES',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              name: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              name: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              idTrayecto: 'AUTOMOTOR',
            },
            { id: 'CHAPISTA', name: 'CHAPISTA', idTrayecto: 'AUTOMOTOR' },
            {
              id: 'PINTURA DE AUTOMOTORES',
              name: 'PINTURA DE AUTOMOTORES',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE MOTOS',
              name: 'MECANICA DE MOTOS',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              name: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE FRENO',
              name: 'MECANICA DE SISTEMAS DE FRENO',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              name: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              name:
                'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'MECANICA DE TRANSMISIONES',
              name: 'MECANICA DE TRANSMISIONES',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              name: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              idTrayecto: 'AUTOMOTOR',
            },
            {
              id: 'CORRECCION DE TEXTOS PERIODISTICOS',
              name: 'CORRECCION DE TEXTOS PERIODISTICOS',
              idTrayecto: 'COMUNICACION',
            },
            {
              id: 'OPERACION Y REALIZACION COMUNICACIONAL',
              name: 'OPERACION Y REALIZACION COMUNICACIONAL',
              idTrayecto: 'COMUNICACION',
            },
            {
              id: 'FOTOGRAFIA E IMAGEN EN REDES',
              name: 'FOTOGRAFIA E IMAGEN EN REDES',
              idTrayecto: 'COMUNICACION',
            },
            {
              id: 'CALIDAD DE ATENCION AL CLIENTE',
              name: 'CALIDAD DE ATENCION AL CLIENTE',
              idTrayecto: 'COMERCIALIZACION',
            },
            {
              id: 'GESTION DE VENTAS',
              name: 'GESTION DE VENTAS',
              idTrayecto: 'COMERCIALIZACION',
            },
            {
              id: 'AUXILIAR EN FARMACIA',
              name: 'AUXILIAR EN FARMACIA',
              idTrayecto: 'COMERCIALIZACION',
            },
            {
              id: 'REPOSICION DE PRODUCTOS EN GONDOLA',
              name: 'REPOSICION DE PRODUCTOS EN GONDOLA',
              idTrayecto: 'COMERCIALIZACION',
            },
            {
              id: 'GESTION Y MANEJO DE CAJA',
              name: 'GESTION Y MANEJO DE CAJA',
              idTrayecto: 'COMERCIALIZACION',
            },
            {
              id: 'AUXILIAR EN RECURSOS HUMANOS',
              name: 'AUXILIAR EN RECURSOS HUMANOS',
              idTrayecto: 'RECURSOS HUMANOS',
            },
            {
              id: 'ADMINISTRACION DE RECURSOS HUMANOS',
              name: 'ADMINISTRACION DE RECURSOS HUMANOS',
              idTrayecto: 'RECURSOS HUMANOS',
            },
            {
              id: 'LIQUIDACION DE SUELDOS Y JORNALES',
              name: 'LIQUIDACION DE SUELDOS Y JORNALES',
              idTrayecto: 'RECURSOS HUMANOS',
            },
            {
              id: 'FORMACION DE MANDOS MEDIOS',
              name: 'FORMACION DE MANDOS MEDIOS',
              idTrayecto: 'RECURSOS HUMANOS',
            },
            {
              id: 'AUXILIAR EN ADMINISTRACION',
              name: 'AUXILIAR EN ADMINISTRACION',
              idTrayecto: 'ADMINISTRACION',
            },
            {
              id: 'ADMINISTRACION CONTABLE',
              name: 'ADMINISTRACION CONTABLE',
              idTrayecto: 'ADMINISTRACION',
            },
            {
              id: 'GESTION BANCARIA E IMPOSITIVA',
              name: 'GESTION BANCARIA E IMPOSITIVA',
              idTrayecto: 'ADMINISTRACION',
            },
            {
              id: 'GESTION JURIDICA',
              name: 'GESTION JURIDICA',
              idTrayecto: 'ADMINISTRACION',
            },
            {
              id: 'GESTION ADMINISTRATIVA DE PYMES',
              name: 'GESTION ADMINISTRATIVA DE PYMES',
              idTrayecto: 'ADMINISTRACION',
            },
            {
              id: 'AUXILIAR DE ESTACIONES DE SERVICIO',
              name: 'AUXILIAR DE ESTACIONES DE SERVICIO',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'VENTA EN PLAYA DE ESTACIONES DE SERVICIO',
              name: 'VENTA EN PLAYA DE ESTACIONES DE SERVICIO',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'ATENCION AL CLIENTE Y VENTA EN MINIMERCADO',
              name: 'ATENCION AL CLIENTE Y VENTA EN MINIMERCADO',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'OPERACIONES EN CENTRO DE LUBRICACION',
              name: 'OPERACIONES EN CENTRO DE LUBRICACION',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'GERENCIA EN ESTACIONES DE SERVICIO',
              name: 'GERENCIA EN ESTACIONES DE SERVICIO',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'ADMINISTRACION EN ESTACION DE SERVICIO',
              name: 'ADMINISTRACION EN ESTACION DE SERVICIO',
              idTrayecto: 'ESTACIONES DE SERVICIO',
            },
            {
              id: 'AUXILIAR EN PRODUCCION DE ANIMALES DE GRANJA',
              name: 'AUXILIAR EN PRODUCCION DE ANIMALES DE GRANJA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION AVICOLA',
              name: 'ASISTENCIA EN PRODUCCION AVICOLA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'PRODUCCION AVICOLA',
              name: 'PRODUCCION AVICOLA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION CUNICULA',
              name: 'ASISTENCIA EN PRODUCCION CUNICULA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'PRODUCCION CUNICULA',
              name: 'PRODUCCION CUNICULA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION CAPRINA Y OVINA',
              name: 'ASISTENCIA EN PRODUCCION CAPRINA Y OVINA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'PRODUCCION CAPRINA Y OVINA',
              name: 'PRODUCCION CAPRINA Y OVINA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION PORCINA',
              name: 'ASISTENCIA EN PRODUCCION PORCINA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'PRODUCCION PORCINA',
              name: 'PRODUCCION PORCINA',
              idTrayecto: 'PRODUCCION DE ANIMALES DE GRANJA',
            },
            {
              id: 'AUXILIAR EN APICULTURA',
              name: 'AUXILIAR EN APICULTURA',
              idTrayecto: 'APICULTURA',
            },
            {
              id: 'ASISTENCIA EN APICULTURA',
              name: 'ASISTENCIA EN APICULTURA',
              idTrayecto: 'APICULTURA',
            },
            { id: 'APICULTURA', name: 'APICULTURA', idTrayecto: 'APICULTURA' },
            {
              id: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              name: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              idTrayecto: 'JARDINERIA Y VIVERISMO',
            },
            {
              id: 'ASISTENCIA EN JARDINERIA Y VIVERISMO',
              name: 'ASISTENCIA EN JARDINERIA Y VIVERISMO',
              idTrayecto: 'JARDINERIA Y VIVERISMO',
            },
            {
              id: 'JARDINERIA',
              name: 'JARDINERIA',
              idTrayecto: 'JARDINERIA Y VIVERISMO',
            },
            {
              id: 'VIVERISMO',
              name: 'VIVERISMO',
              idTrayecto: 'JARDINERIA Y VIVERISMO',
            },
            {
              id: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              name: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              idTrayecto: 'PRODUCCION HORTICOLA',
            },
            {
              id: 'ASISTENCIA EN CULTIVOS HORTICOLAS',
              name: 'ASISTENCIA EN CULTIVOS HORTICOLAS',
              idTrayecto: 'PRODUCCION HORTICOLA',
            },
            {
              id: 'PRODUCCION HORTICOLA',
              name: 'PRODUCCION HORTICOLA',
              idTrayecto: 'PRODUCCION HORTICOLA',
            },
            {
              id: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              name: 'AUXILIAR EN JARDINERIA VIVERISMO Y HORTICULTURA',
              idTrayecto: 'PRODUCCION DE PLANTAS AROMATICAS',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION DE PLANTAS AROMATICAS',
              name: 'ASISTENCIA EN PRODUCCION DE PLANTAS AROMATICAS',
              idTrayecto: 'PRODUCCION DE PLANTAS AROMATICAS',
            },
            {
              id: 'PRODUCCION DE CULTIVOS HIDROPONICOS',
              name: 'PRODUCCION DE CULTIVOS HIDROPONICOS',
              idTrayecto: 'CULTIVOS HIDROPONICOS',
            },
            {
              id: 'PRODUCCION DE FORRAJE VERDE HIDROPONICO',
              name: 'PRODUCCION DE FORRAJE VERDE HIDROPONICO',
              idTrayecto: 'CULTIVOS HIDROPONICOS',
            },
            {
              id: 'ASISTENCIA EN PRODUCCION LECHERA',
              name: 'ASISTENCIA EN PRODUCCION LECHERA',
              idTrayecto: 'PRODUCCION LECHERA',
            },
            {
              id: 'GOMERIA Y BALANCEADO',
              name: 'GOMERIA Y BALANCEADO',
              idTrayecto: 'GOMERIA BALANCEADO Y ALINEADO',
            },
            {
              id: 'GOMERIA BALANCEADO Y ALINEADO',
              name: 'GOMERIA BALANCEADO Y ALINEADO',
              idTrayecto: 'GOMERIA BALANCEADO Y ALINEADO',
            },
            {
              id: 'AUXILIAR EN ELECTRICIDAD DE AUTOMOTORES',
              name: 'AUXILIAR EN ELECTRICIDAD DE AUTOMOTORES',
              idTrayecto: 'ELECTRICIDAD DE AUTOMOTORES',
            },
            {
              id: 'ELECTRICIDAD DE AUTOMOTORES',
              name: 'ELECTRICIDAD DE AUTOMOTORES',
              idTrayecto: 'ELECTRICIDAD DE AUTOMOTORES',
            },
            {
              id: 'AUXILIAR BASICO EN MECANICA DE MOTORES',
              name: 'AUXILIAR BASICO EN MECANICA DE MOTORES',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'AUXILIAR EN MECANICA DE MOTORES NAFTEROS',
              name: 'AUXILIAR EN MECANICA DE MOTORES NAFTEROS',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'MECANICA DE MOTORES NAFTEROS',
              name: 'MECANICA DE MOTORES NAFTEROS',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              name: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'MECANICA DE MOTORES DIESEL',
              name: 'MECANICA DE MOTORES DIESEL',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'AUXILIAR EN MECANICA DE MOTORES DIESEL',
              name: 'AUXILIAR EN MECANICA DE MOTORES DIESEL',
              idTrayecto: 'MECANICA DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'AUXILIAR BASICO EN MECANICA DE MOTORES',
              name: 'AUXILIAR BASICO EN MECANICA DE MOTORES',
              idTrayecto: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
            },
            {
              id: 'INSTALACION DE EQUIPOS GNC',
              name: 'INSTALACION DE EQUIPOS GNC',
              idTrayecto: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
            },
            {
              id: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              name: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
              idTrayecto: 'MECANICA INSTALACION Y REPARACION DE EQUIPOS GNC',
            },
            {
              id: 'AUXILIAR DE CHAPISTA',
              name: 'AUXILIAR DE CHAPISTA',
              idTrayecto: 'CHAPISTA',
            },
            { id: 'CHAPISTA', name: 'CHAPISTA', idTrayecto: 'CHAPISTA' },
            {
              id: 'COLORIMETRIA DEL AUTOMOVIL',
              name: 'COLORIMETRIA DEL AUTOMOVIL',
              idTrayecto: 'PINTURA DE AUTOMOTORES',
            },
            {
              id: 'PINTURA DE AUTOMOTORES',
              name: 'PINTURA DE AUTOMOTORES',
              idTrayecto: 'PINTURA DE AUTOMOTORES',
            },
            {
              id: 'AUXILIAR EN MECANICA DE MOTOR DE MOTOS',
              name: 'AUXILIAR EN MECANICA DE MOTOR DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id: 'MECANICA DE MOTOR DE MOTOS',
              name: 'MECANICA DE MOTOR DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id:
                'AUXILIAR EN MECANICA DE SISTEMAS DE ELECTRICIDAD ENCENDIDO Y ALIMENTACION DE MOTOS',
              name:
                'AUXILIAR EN MECANICA DE SISTEMAS DE ELECTRICIDAD ENCENDIDO Y ALIMENTACION DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id:
                'MECANICA DE SISTEMAS DE ELECTRICIDAD ENCENDIDO Y ALIMENTACION DE MOTOS',
              name:
                'MECANICA DE SISTEMAS DE ELECTRICIDAD ENCENDIDO Y ALIMENTACION DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id:
                'AUXILIAR EN MECANICA DE SISTEMAS DE TRANSMISION SUSPENSION Y FRENOS DE MOTOS',
              name:
                'AUXILIAR EN MECANICA DE SISTEMAS DE TRANSMISION SUSPENSION Y FRENOS DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id:
                'MECANICA DE SISTEMAS DE TRANSMISION SUSPENSION Y FRENOS DE MOTOS',
              name:
                'MECANICA DE SISTEMAS DE TRANSMISION SUSPENSION Y FRENOS DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id: 'AUXILIAR EN MECANICA DE MOTOS',
              name: 'AUXILIAR EN MECANICA DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id: 'MECANICA DE MOTOS',
              name: 'MECANICA DE MOTOS',
              idTrayecto: 'MECANICA DE MOTOS',
            },
            {
              id:
                'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION CONVENCIONALES',
              name:
                'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION CONVENCIONALES',
              idTrayecto: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
            },
            {
              id: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              name: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
              idTrayecto: 'MECANICA DE SISTEMAS DE ENCENDIDO Y ALIMENTACION',
            },
            {
              id: 'MECANICA DE SISTEMAS DE FRENO CONVENCIONALES',
              name: 'MECANICA DE SISTEMAS DE FRENO CONVENCIONALES',
              idTrayecto: 'MECANICA DE SISTEMAS DE FRENO',
            },
            {
              id: 'MECANICA DE SISTEMAS DE FRENO',
              name: 'MECANICA DE SISTEMAS DE FRENO',
              idTrayecto: 'MECANICA DE SISTEMAS DE FRENO',
            },
            {
              id: 'MECANICA DE SISTEMAS CONVENCIONALES DE INYECCION DIESEL',
              name: 'MECANICA DE SISTEMAS CONVENCIONALES DE INYECCION DIESEL',
              idTrayecto: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
            },
            {
              id: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              name: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
              idTrayecto: 'MECANICA DE SISTEMAS DE INYECCION DIESEL',
            },
            {
              id: 'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION',
              name: 'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION',
              idTrayecto:
                'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
            },
            {
              id: 'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              name:
                'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
              idTrayecto:
                'MECANICA DE SISTEMAS ELECTRONICOS DE SUSPENSION Y DIRECCION',
            },
            {
              id: 'MECANICA DE EMBRAGUE Y CAJA DE CAMBIOS',
              name: 'MECANICA DE EMBRAGUE Y CAJA DE CAMBIOS',
              idTrayecto: 'MECANICA DE TRANSMISIONES',
            },
            {
              id: 'MECANICA DE TRANSMISIONES',
              name: 'MECANICA DE TRANSMISIONES',
              idTrayecto: 'MECANICA DE TRANSMISIONES',
            },
            {
              id: 'RECTIFICACION DE CIGÜEÑAL',
              name: 'RECTIFICACION DE CIGÜEÑAL',
              idTrayecto: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              name: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
              idTrayecto: 'RECTIFICACION DE MOTORES DE COMBUSTION INTERNA',
            },
            {
              id: 'AUXILIAR DE PRODUCCION PERIODISTICA',
              name: 'AUXILIAR DE PRODUCCION PERIODISTICA',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'PRODUCCION PERIODISTICA',
              name: 'PRODUCCION PERIODISTICA',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'PRENSA Y COMUNICACION INSTITUCIONAL',
              name: 'PRENSA Y COMUNICACION INSTITUCIONAL',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'PRODUCCION Y CONDUCCION RADIOFONICA',
              name: 'PRODUCCION Y CONDUCCION RADIOFONICA',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'PRODUCCION Y CONDUCCION AUDIOVISUAL',
              name: 'PRODUCCION Y CONDUCCION AUDIOVISUAL',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'CORRECCION DE TEXTOS PERIODISTICOS',
              name: 'CORRECCION DE TEXTOS PERIODISTICOS',
              idTrayecto: 'CORRECCION DE TEXTOS PERIODISTICOS',
            },
            {
              id: 'OPERACION Y EDICION EN RADIO',
              name: 'OPERACION Y EDICION EN RADIO',
              idTrayecto: 'OPERACION Y REALIZACION COMUNICACIONAL',
            },
            {
              id: 'AUXILIAR EN REALIZACION AUDIOVISUAL',
              name: 'AUXILIAR EN REALIZACION AUDIOVISUAL',
              idTrayecto: 'OPERACION Y REALIZACION COMUNICACIONAL',
            },
            {
              id: 'AUXILIAR EN EDICION Y POSPRODUCCION AUDIOVISUAL',
              name: 'AUXILIAR EN EDICION Y POSPRODUCCION AUDIOVISUAL',
              idTrayecto: 'OPERACION Y REALIZACION COMUNICACIONAL',
            },
            {
              id: 'REALIZACION FOTOGRAFICA',
              name: 'REALIZACION FOTOGRAFICA',
              idTrayecto: 'FOTOGRAFIA E IMAGEN EN REDES',
            },
            {
              id: 'FOTOGRAFIA SOCIAL Y DOCUMENTAL',
              name: 'FOTOGRAFIA SOCIAL Y DOCUMENTAL',
              idTrayecto: 'FOTOGRAFIA E IMAGEN EN REDES',
            },
            {
              id: 'AUXILIAR EN CONSTRUCCIONES',
              name: 'AUXILIAR EN CONSTRUCCIONES',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'ALBAÑILERIA',
              name: 'ALBAÑILERIA',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'COLOCACION DE REVESTIMIENTO DE BASE HUMEDA',
              name: 'COLOCACION DE REVESTIMIENTO DE BASE HUMEDA',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'COLOCACION DE REVESTIMIENTO DECORATIVOS Y FUNCIONALES',
              name: 'COLOCACION DE REVESTIMIENTO DECORATIVOS Y FUNCIONALES',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'ARMADO Y MONTAJE DE ANDAMIOS PARA OBRAS CIVILES',
              name: 'ARMADO Y MONTAJE DE ANDAMIOS PARA OBRAS CIVILES',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'TECHISTA DE FALDONES INCLINADOS',
              name: 'TECHISTA DE FALDONES INCLINADOS',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'ARMADO DE HIERROS PARA HORMIGON ARMADO',
              name: 'ARMADO DE HIERROS PARA HORMIGON ARMADO',
              idTrayecto: 'CONSTRUCCION EN BASE HUMEDA',
            },
            {
              id: 'AUXILIAR EN CONSTRUCCIONES',
              name: 'AUXILIAR EN CONSTRUCCIONES',
              idTrayecto: 'CARPINTERIAS DE OBRA',
            },
            {
              id: 'CARPINTERIA PARA HORMIGON ARMADO',
              name: 'CARPINTERIA PARA HORMIGON ARMADO',
              idTrayecto: 'CARPINTERIAS DE OBRA',
            },
            {
              id: 'CARPINTERIA DE OBRA FINA',
              name: 'CARPINTERIA DE OBRA FINA',
              idTrayecto: 'CARPINTERIAS DE OBRA',
            },
            {
              id: 'AUXILIAR EN CONSTRUCCIONES EN SECO CON COMPONENTES LIVIANOS',
              name:
                'AUXILIAR EN CONSTRUCCIONES EN SECO CON COMPONENTES LIVIANOS',
              idTrayecto: 'CONSTRUCCION EN BASE SECA',
            },
            {
              id: 'ARMADO Y MONTAJE DE COMPONENTES METALICOS LIVIANOS',
              name: 'ARMADO Y MONTAJE DE COMPONENTES METALICOS LIVIANOS',
              idTrayecto: 'CONSTRUCCION EN BASE SECA',
            },
            {
              id:
                'ARMADO Y MONTAJE DE PANELES Y CIELORRASOS DE PLACAS DE ROCA DE YESO',
              name:
                'ARMADO Y MONTAJE DE PANELES Y CIELORRASOS DE PLACAS DE ROCA DE YESO',
              idTrayecto: 'CONSTRUCCION EN BASE SECA',
            },
            {
              id: 'YESERIA',
              name: 'YESERIA',
              idTrayecto: 'YESERIA Y PINTURA DE OBRA',
            },
            {
              id: 'PINTURA DE OBRA',
              name: 'PINTURA DE OBRA',
              idTrayecto: 'YESERIA Y PINTURA DE OBRA',
            },
            {
              id: 'AUXILIAR EN INSTALACIONES SANITARIAS Y DE GAS',
              name: 'AUXILIAR EN INSTALACIONES SANITARIAS Y DE GAS',
              idTrayecto:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
            },
            {
              id: 'MONTAJE DE INSTALACIONES SANITARIAS DOMICILIARIAS',
              name: 'MONTAJE DE INSTALACIONES SANITARIAS DOMICILIARIAS',
              idTrayecto:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
            },
            {
              id:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
              name:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
              idTrayecto:
                'INSTALACION DE SISTEMAS SOLARES TERMICOS PARA AGUA CALIENTE SANITARIA',
            },
            {
              id: 'AUXILIAR EN INSTALACIONES SANITARIAS Y DE GAS',
              name: 'AUXILIAR EN INSTALACIONES SANITARIAS Y DE GAS',
              idTrayecto: 'INSTALACION DE GAS DOMICILIARIA',
            },
            {
              id: 'MONTAJE DE INSTALACIONES DOMICILIARIAS DE GAS',
              name: 'MONTAJE DE INSTALACIONES DOMICILIARIAS DE GAS',
              idTrayecto: 'INSTALACION DE GAS DOMICILIARIA',
            },
            {
              id: 'INSTALACION DE GAS DE UNIDADES UNIFUNCIONALES',
              name: 'INSTALACION DE GAS DE UNIDADES UNIFUNCIONALES',
              idTrayecto: 'INSTALACION DE GAS DOMICILIARIA',
            },
            {
              id: 'AUXILIAR EN INSTALACIONES DE GAS DOMICILIARIAS',
              name: 'AUXILIAR EN INSTALACIONES DE GAS DOMICILIARIAS',
              idTrayecto: 'INSTALACION DE GAS DOMICILIARIA',
            },
            {
              id: 'INSTALACION DE GAS DOMICILIARIA',
              name: 'INSTALACION DE GAS DOMICILIARIA',
              idTrayecto: 'INSTALACION DE GAS DOMICILIARIA',
            },
            {
              id: 'AUXILIAR EN APARADO DE CALZADO',
              name: 'AUXILIAR EN APARADO DE CALZADO',
              idTrayecto: 'APARADO DE CALZADO Y MARROQUINERIA',
            },
            {
              id: 'APARADO DE CALZADO',
              name: 'APARADO DE CALZADO',
              idTrayecto: 'APARADO DE CALZADO Y MARROQUINERIA',
            },
            {
              id: 'CORTE TEXTIL Y DE CUERO',
              name: 'CORTE TEXTIL Y DE CUERO',
              idTrayecto: 'APARADO DE CALZADO Y MARROQUINERIA',
            },
            {
              id: 'MARROQUINERIA',
              name: 'MARROQUINERIA',
              idTrayecto: 'APARADO DE CALZADO Y MARROQUINERIA',
            },
            {
              id: 'AUXILIAR EN ARMADO DE CALZADO',
              name: 'AUXILIAR EN ARMADO DE CALZADO',
              idTrayecto: 'ARMADO DE CALZADO',
            },
            {
              id: 'ARMADO DE CALZADO',
              name: 'ARMADO DE CALZADO',
              idTrayecto: 'ARMADO DE CALZADO',
            },
            {
              id: 'CENTRADO DE CALZADO',
              name: 'CENTRADO DE CALZADO',
              idTrayecto: 'MODELAJE DE CALZADO',
            },
            {
              id: 'AUXILIAR EN MODELAJE DE CALZADO',
              name: 'AUXILIAR EN MODELAJE DE CALZADO',
              idTrayecto: 'MODELAJE DE CALZADO',
            },
            {
              id: 'ASISTENTE EN PATRONAJE DE CALZADO',
              name: 'ASISTENTE EN PATRONAJE DE CALZADO',
              idTrayecto: 'MODELAJE DE CALZADO',
            },
            {
              id: 'MODELAJE DE CALZADO',
              name: 'MODELAJE DE CALZADO',
              idTrayecto: 'MODELAJE DE CALZADO',
            },
            {
              id: 'AUXILIAR EN ELECTRICIDAD DE INMUEBLES',
              name: 'AUXILIAR EN ELECTRICIDAD DE INMUEBLES',
              idTrayecto: 'ELECTRICIDAD EN INMUEBLES',
            },
            {
              id: 'INSTALACION ELECTRICA HABILITADA CAT. III',
              name: 'INSTALACION ELECTRICA HABILITADA CAT. III',
              idTrayecto: 'ELECTRICIDAD EN INMUEBLES',
            },
            {
              id: 'MONTAJE DE ELECTRICIDAD EN INMUEBLES',
              name: 'MONTAJE DE ELECTRICIDAD EN INMUEBLES',
              idTrayecto: 'ELECTRICIDAD EN INMUEBLES',
            },
            {
              id: 'INSTALACION DE SISTEMAS ELECTRICOS DE ENERGIAS RENOVABLES',
              name: 'INSTALACION DE SISTEMAS ELECTRICOS DE ENERGIAS RENOVABLES',
              idTrayecto: 'ELECTRICIDAD EN INMUEBLES',
            },
            {
              id: 'ELECTRICIDAD EN INMUEBLES',
              name: 'ELECTRICIDAD EN INMUEBLES',
              idTrayecto: 'ELECTRICIDAD EN INMUEBLES',
            },
            {
              id: 'INSTALACION ELECTRICA HABILITADA CAT. III',
              name: 'INSTALACION ELECTRICA HABILITADA CAT. III',
              idTrayecto: 'CLIMATIZACION',
            },
            {
              id: 'INSTALACION Y REPARACION DE EQUIPOS DE CLIMATIZACION',
              name: 'INSTALACION Y REPARACION DE EQUIPOS DE CLIMATIZACION',
              idTrayecto: 'CLIMATIZACION',
            },
            {
              id: 'MANTENIMIENTO DE EQUIPOS DE AIRE ACONDICIONADO',
              name: 'MANTENIMIENTO DE EQUIPOS DE AIRE ACONDICIONADO',
              idTrayecto: 'CLIMATIZACION',
            },
            {
              id: 'AUXILIAR EN ELECTRICIDAD EN INMUEBLES',
              name: 'AUXILIAR EN ELECTRICIDAD EN INMUEBLES',
              idTrayecto: 'REPARACION DE ELECTRODOMESTICOS',
            },
            {
              id: 'REPARACION DE ELECTRODOMESTICOS',
              name: 'REPARACION DE ELECTRODOMESTICOS',
              idTrayecto: 'REPARACION DE ELECTRODOMESTICOS',
            },
            {
              id: 'AUXILIAR EN ELECTRICIDAD INDUSTRIAL',
              name: 'AUXILIAR EN ELECTRICIDAD INDUSTRIAL',
              idTrayecto: 'ELECTRICIDAD INDUSTRIAL',
            },
            {
              id: 'ELECTRICIDAD INDUSTRIAL',
              name: 'ELECTRICIDAD INDUSTRIAL',
              idTrayecto: 'ELECTRICIDAD INDUSTRIAL',
            },
            {
              id: 'AUXILIAR EN ELECTRICIDAD DE MEDIA Y BAJA TENSION',
              name: 'AUXILIAR EN ELECTRICIDAD DE MEDIA Y BAJA TENSION',
              idTrayecto:
                'ELECTRICIDAD DE REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
            },
            {
              id: 'MONTAJE DE ELECTRICIDAD DE MEDIA Y BAJA TENSION',
              name: 'MONTAJE DE ELECTRICIDAD DE MEDIA Y BAJA TENSION',
              idTrayecto:
                'ELECTRICIDAD DE REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
            },
            {
              id:
                'ELECTRICIDAD EN REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
              name:
                'ELECTRICIDAD EN REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
              idTrayecto:
                'ELECTRICIDAD DE REDES DE DISTRIBUCION DE MEDIA Y BAJA TENSION',
            },
            {
              id: 'CAPACIDADES SOCIO LABORALES',
              name: 'CAPACIDADES SOCIO LABORALES',
              idTrayecto: 'CAPACIDADES SOCIO LABORALES',
            },
            {
              id: 'GESTION DE MICROEMPRENDIMIENTOS',
              name: 'GESTION DE MICROEMPRENDIMIENTOS',
              idTrayecto: 'GESTION DE MICROEMPRENDIMIENTOS',
            },
            {
              id: 'ASISTENCIA EN COCINA',
              name: 'ASISTENCIA EN COCINA',
              idTrayecto: 'COCINA SALUDABLE',
            },
            {
              id: 'COCINA BASICA',
              name: 'COCINA BASICA',
              idTrayecto: 'COCINA SALUDABLE',
            },
            { id: 'COCINA', name: 'COCINA', idTrayecto: 'COCINA SALUDABLE' },
            {
              id: 'COCINA SALUDABLE',
              name: 'COCINA SALUDABLE',
              idTrayecto: 'COCINA SALUDABLE',
            },
            {
              id: 'ASISTENCIA EN COCINA',
              name: 'ASISTENCIA EN COCINA',
              idTrayecto: 'ELABORACION DE DULCES Y CONSERVAS',
            },
            {
              id: 'ELABORACION ARTESANAL DE DULCES Y CONSERVAS',
              name: 'ELABORACION ARTESANAL DE DULCES Y CONSERVAS',
              idTrayecto: 'ELABORACION DE DULCES Y CONSERVAS',
            },
            {
              id: 'ASISTENCIA EN PANADERIA Y PASTELERIA',
              name: 'ASISTENCIA EN PANADERIA Y PASTELERIA',
              idTrayecto: 'PANADERIA',
            },
            {
              id: 'PANADERIA BASICA ESPECIALIZACION EN PIZZAS Y TARTAS',
              name: 'PANADERIA BASICA ESPECIALIZACION EN PIZZAS Y TARTAS',
              idTrayecto: 'PANADERIA',
            },
            { id: 'PANADERIA', name: 'PANADERIA', idTrayecto: 'PANADERIA' },
            {
              id: 'ASISTENCIA EN PANADERIA Y PASTELERIA',
              name: 'ASISTENCIA EN PANADERIA Y PASTELERIA',
              idTrayecto: 'PASTELERIA',
            },
            {
              id: 'PASTELERIA BASICA',
              name: 'PASTELERIA BASICA',
              idTrayecto: 'PASTELERIA',
            },
            { id: 'PASTELERIA', name: 'PASTELERIA', idTrayecto: 'PASTELERIA' },
            {
              id: 'COMIS',
              name: 'COMIS',
              idTrayecto: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
            },
            {
              id: 'SERVICIO DE SALON MOZO/A',
              name: 'SERVICIO DE SALON MOZO/A',
              idTrayecto: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
            },
            {
              id: 'SERVICIO INTEGRAL DE SALON',
              name: 'SERVICIO INTEGRAL DE SALON',
              idTrayecto: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
            },
            {
              id: 'SERVICIO DE BAR',
              name: 'SERVICIO DE BAR',
              idTrayecto: 'SERVICIO INTEGRAL DE SALON Y SERVICIO DE BAR',
            },
            {
              id: 'INGLES EN TURISMO Y RECREACION',
              name: 'INGLES EN TURISMO Y RECREACION',
              idTrayecto: 'IDIOMAS',
            },
            {
              id: 'FRANCES EN TURISMO Y RECREACION',
              name: 'FRANCES EN TURISMO Y RECREACION',
              idTrayecto: 'IDIOMAS',
            },
            {
              id: 'PORTUGUES EN TURISMO Y RECREACION',
              name: 'PORTUGUES EN TURISMO Y RECREACION',
              idTrayecto: 'IDIOMAS',
            },
            {
              id: 'ITALIANO EN TURISMO Y RECREACION',
              name: 'ITALIANO EN TURISMO Y RECREACION',
              idTrayecto: 'IDIOMAS',
            },
            {
              id: 'ASISTENCIA EN MUCAMERIA',
              name: 'ASISTENCIA EN MUCAMERIA',
              idTrayecto: 'AMA DE LLAVES',
            },
            { id: 'MUCAMERIA', name: 'MUCAMERIA', idTrayecto: 'AMA DE LLAVES' },
            {
              id: 'GESTION DEL DEPARTAMENTO AMA DE LLAVES',
              name: 'GESTION DEL DEPARTAMENTO AMA DE LLAVES',
              idTrayecto: 'AMA DE LLAVES',
            },
            {
              id: 'BOTONES',
              name: 'BOTONES',
              idTrayecto: 'ORGANIZACION DE OPERACIONES HOTELERAS',
            },
            {
              id: 'ASISTENCIA EN RECEPCION',
              name: 'ASISTENCIA EN RECEPCION',
              idTrayecto: 'ORGANIZACION DE OPERACIONES HOTELERAS',
            },
            {
              id: 'RECEPCION',
              name: 'RECEPCION',
              idTrayecto: 'ORGANIZACION DE OPERACIONES HOTELERAS',
            },
            {
              id: 'ORGANIZACION DE OPERACIONES HOTELERAS',
              name: 'ORGANIZACION DE OPERACIONES HOTELERAS',
              idTrayecto: 'ORGANIZACION DE OPERACIONES HOTELERAS',
            },
            {
              id: 'BOTONES',
              name: 'BOTONES',
              idTrayecto: 'ORGANIZACION DE EVENTOS',
            },
            {
              id: 'ORGANIZACION DE EVENTOS',
              name: 'ORGANIZACION DE EVENTOS',
              idTrayecto: 'ORGANIZACION DE EVENTOS',
            },
            {
              id: 'ORGANIZACION DE EVENTOS CON HERRAMIENTA DE INGLES',
              name: 'ORGANIZACION DE EVENTOS CON HERRAMIENTA DE INGLES',
              idTrayecto: 'ORGANIZACION DE EVENTOS',
            },
            {
              id: 'ORGANIZACION DE EVENTOS CON HERRAMIENTA DE PORTUGUES',
              name: 'ORGANIZACION DE EVENTOS CON HERRAMIENTA DE PORTUGUES',
              idTrayecto: 'ORGANIZACION DE EVENTOS',
            },
            {
              id:
                'ARMADO DEL PRODUCTO TURISTICO EN EL MARCO DE LA SUSTENTABILIDAD',
              name:
                'ARMADO DEL PRODUCTO TURISTICO EN EL MARCO DE LA SUSTENTABILIDAD',
              idTrayecto: 'TURISMO',
            },
            {
              id: 'SERVICIO DE ATENCION TURISTICA',
              name: 'SERVICIO DE ATENCION TURISTICA',
              idTrayecto: 'TURISMO',
            },
            {
              id: 'ANIMACION Y RECREACION DE SERVICIOS TURISTICOS',
              name: 'ANIMACION Y RECREACION DE SERVICIOS TURISTICOS',
              idTrayecto: 'RECREACION',
            },
            {
              id: 'AUXILIAR EN ACTIVIDADES DEPORTIVAS Y RECREATIVAS',
              name: 'AUXILIAR EN ACTIVIDADES DEPORTIVAS Y RECREATIVAS',
              idTrayecto: 'RECREACION',
            },
            {
              id: 'AUXILIAR EN ILUMINACION',
              name: 'AUXILIAR EN ILUMINACION',
              idTrayecto: 'FORMATIVO ILUMINACION',
            },
            {
              id: 'ASISTENCIA EN ILUMINACION PARA MEDIOS AUDIOVISUALES',
              name: 'ASISTENCIA EN ILUMINACION PARA MEDIOS AUDIOVISUALES',
              idTrayecto: 'FORMATIVO ILUMINACION',
            },
            {
              id: 'ILUMINACION PARA PUESTA EN ESCENA',
              name: 'ILUMINACION PARA PUESTA EN ESCENA',
              idTrayecto: 'FORMATIVO ILUMINACION',
            },
            {
              id: 'AUXILIAR DE SONIDO',
              name: 'AUXILIAR DE SONIDO',
              idTrayecto: 'FORMATIVO SONIDO',
            },
            {
              id: 'SONIDO PARA MEDIOS AUDIOVISUALES',
              name: 'SONIDO PARA MEDIOS AUDIOVISUALES',
              idTrayecto: 'FORMATIVO SONIDO',
            },
            {
              id: 'SONIDO PARA PUESTA EN ESCENA',
              name: 'SONIDO PARA PUESTA EN ESCENA',
              idTrayecto: 'FORMATIVO SONIDO',
            },
            {
              id: 'PRODUCCION DE EMPRENDIMIENTOS CULTURALES',
              name: 'PRODUCCION DE EMPRENDIMIENTOS CULTURALES',
              idTrayecto: 'EMPRENDIMIENTOS CULTURALES',
            },
            {
              id: 'AUXILIAR DE UTILERIA PARA ARTES ESCENICAS',
              name: 'AUXILIAR DE UTILERIA PARA ARTES ESCENICAS',
              idTrayecto: 'PUESTA EN ESCENA',
            },
            {
              id: 'ASISTENCIA DE ESCENOGRAFIA',
              name: 'ASISTENCIA DE ESCENOGRAFIA',
              idTrayecto: 'PUESTA EN ESCENA',
            },
            {
              id: 'ARMADO DE MASCARAS',
              name: 'ARMADO DE MASCARAS',
              idTrayecto: 'CARACTERIZACION DE PERSONAJES',
            },
            {
              id: 'AUXILIAR DE VESTUARIO PARA ARTES ESCENICAS',
              name: 'AUXILIAR DE VESTUARIO PARA ARTES ESCENICAS',
              idTrayecto: 'CARACTERIZACION DE PERSONAJES',
            },
            {
              id: 'AUXILIAR DE MAQUILLAJE PARA ARTES ESCENICAS',
              name: 'AUXILIAR DE MAQUILLAJE PARA ARTES ESCENICAS',
              idTrayecto: 'CARACTERIZACION DE PERSONAJES',
            },
            {
              id: 'ARMADO Y MANEJO DE TITERES',
              name: 'ARMADO Y MANEJO DE TITERES',
              idTrayecto: 'CARACTERIZACION DE PERSONAJES',
            },
            {
              id: 'ALFABETIZACION INFORMATICA',
              name: 'ALFABETIZACION INFORMATICA',
              idTrayecto: 'OPERADOR DE INFORMATICA',
            },
            {
              id: 'OPERADOR DE INFORMATICA PARA ADMINISTRACION Y GESTION',
              name: 'OPERADOR DE INFORMATICA PARA ADMINISTRACION Y GESTION',
              idTrayecto: 'OPERADOR DE INFORMATICA',
            },
            {
              id: 'ALFABETIZACION INFORMATICA',
              name: 'ALFABETIZACION INFORMATICA',
              idTrayecto: 'DIBUJO CON AUTOCAD 2D',
            },
            {
              id: 'DIBUJO CON AUTOCAD 2D',
              name: 'DIBUJO CON AUTOCAD 2D',
              idTrayecto: 'DIBUJO CON AUTOCAD 2D',
            },
            {
              id: 'ALFABETIZACION INFORMATICA',
              name: 'ALFABETIZACION INFORMATICA',
              idTrayecto: 'DISEÑO GRAFICO PUBLICITARIO',
            },
            {
              id: 'AUXILIAR DE DISEÑO GRAFICO',
              name: 'AUXILIAR DE DISEÑO GRAFICO',
              idTrayecto: 'DISEÑO GRAFICO PUBLICITARIO',
            },
            {
              id: 'DISEÑO GRAFICO PUBLICITARIO',
              name: 'DISEÑO GRAFICO PUBLICITARIO',
              idTrayecto: 'DISEÑO GRAFICO PUBLICITARIO',
            },
            {
              id: 'ALFABETIZACION INFORMATICA',
              name: 'ALFABETIZACION INFORMATICA',
              idTrayecto: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
            },
            {
              id: 'AUXILIAR DE DISEÑO GRAFICO',
              name: 'AUXILIAR DE DISEÑO GRAFICO',
              idTrayecto: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
            },
            {
              id: 'DISEÑO MULTIMEDIA INTERACTIVO',
              name: 'DISEÑO MULTIMEDIA INTERACTIVO',
              idTrayecto: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
            },
            {
              id: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
              name: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
              idTrayecto: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
            },
            {
              id: 'PROGRAMACION DE PAGINAS WEB CON HTML5',
              name: 'PROGRAMACION DE PAGINAS WEB CON HTML5',
              idTrayecto: 'DISEÑO MULTIMEDIA DE PAGINAS WEB INTERACTIVAS',
            },
            {
              id: 'PROGRAMADOR BASICO',
              name: 'PROGRAMADOR BASICO',
              idTrayecto: 'PROGRAMACION',
            },
            {
              id: 'DESARROLLO DE APLICACIONES WEB ENTORNO JAVA',
              name: 'DESARROLLO DE APLICACIONES WEB ENTORNO JAVA',
              idTrayecto: 'PROGRAMACION',
            },
            {
              id: 'DESARROLLO DE APLICACIONES WEB ENTORNO .NET',
              name: 'DESARROLLO DE APLICACIONES WEB ENTORNO .NET',
              idTrayecto: 'PROGRAMACION',
            },
            {
              id: 'ANALISTA DE CONOCIMIENTO DIMENSION PROGRAMADOR',
              name: 'ANALISTA DE CONOCIMIENTO DIMENSION PROGRAMADOR',
              idTrayecto: 'PROGRAMACION',
            },
            {
              id: 'ARMADO Y REPARACION DE PC',
              name: 'ARMADO Y REPARACION DE PC',
              idTrayecto: 'ARMADO Y REPARACION DE PC',
            },
            {
              id: 'AUXILIAR DE ASERRADERO',
              name: 'AUXILIAR DE ASERRADERO',
              idTrayecto: 'PROCESOS PRODUCTIVOS DE LA MADERA',
            },
            {
              id: 'OPERACION DE MAQUINA PRINCIPAL DE ASERRADERO',
              name: 'OPERACION DE MAQUINA PRINCIPAL DE ASERRADERO',
              idTrayecto: 'PROCESOS PRODUCTIVOS DE LA MADERA',
            },
            {
              id: 'OPERACION DE MOLDURERA',
              name: 'OPERACION DE MOLDURERA',
              idTrayecto: 'PROCESOS PRODUCTIVOS DE LA MADERA',
            },
            {
              id: 'OPERACION DE SALA DE AFILADO',
              name: 'OPERACION DE SALA DE AFILADO',
              idTrayecto: 'PROCESOS PRODUCTIVOS DE LA MADERA',
            },
            {
              id: 'SECADO Y TRATAMIENTO TERMICO DE LA MADERA',
              name: 'SECADO Y TRATAMIENTO TERMICO DE LA MADERA',
              idTrayecto: 'PROCESOS PRODUCTIVOS DE LA MADERA',
            },
            {
              id: 'TRATAMIENTO Y ACABADO DE SUPERFICIES',
              name: 'TRATAMIENTO Y ACABADO DE SUPERFICIES',
              idTrayecto: 'ACABADOS Y TECHOS DE MADERA',
            },
            {
              id: 'ACABADO DE MADERA',
              name: 'ACABADO DE MADERA',
              idTrayecto: 'ACABADOS Y TECHOS DE MADERA',
            },
            {
              id: 'ASISTENCIA EN CONSTRUCCION DE TECHOS DE MADERA',
              name: 'ASISTENCIA EN CONSTRUCCION DE TECHOS DE MADERA',
              idTrayecto: 'ACABADOS Y TECHOS DE MADERA',
            },
            {
              id: 'CONSTRUCCION E INSTALACION DE TECHOS DE MADERA',
              name: 'CONSTRUCCION E INSTALACION DE TECHOS DE MADERA',
              idTrayecto: 'ACABADOS Y TECHOS DE MADERA',
            },
            {
              id: 'ASISTENCIA EN DISEÑO DE MUEBLES',
              name: 'ASISTENCIA EN DISEÑO DE MUEBLES',
              idTrayecto: 'DISEÑO DE MUEBLES',
            },
            {
              id: 'ASISTENCIA EN RESTAURACION DE MUEBLES DE ESTILO',
              name: 'ASISTENCIA EN RESTAURACION DE MUEBLES DE ESTILO',
              idTrayecto: 'DISEÑO DE MUEBLES',
            },
            {
              id: 'DISEÑO DE MUEBLES',
              name: 'DISEÑO DE MUEBLES',
              idTrayecto: 'DISEÑO DE MUEBLES',
            },
            {
              id: 'ASISTENCIA EN EBANISTERIA',
              name: 'ASISTENCIA EN EBANISTERIA',
              idTrayecto: 'EBANISTERIA Y CARPINTERIA DE BANCO',
            },
            {
              id: 'EBANISTERIA',
              name: 'EBANISTERIA',
              idTrayecto: 'EBANISTERIA Y CARPINTERIA DE BANCO',
            },
            {
              id: 'CARPINTERIA DE BANCO',
              name: 'CARPINTERIA DE BANCO',
              idTrayecto: 'EBANISTERIA Y CARPINTERIA DE BANCO',
            },
            {
              id: 'ASISTENCIA EN CARPINTERIA DE BANCO',
              name: 'ASISTENCIA EN CARPINTERIA DE BANCO',
              idTrayecto: 'EBANISTERIA Y CARPINTERIA DE BANCO',
            },
            {
              id: 'AUXILIAR EN TAPICERIA',
              name: 'AUXILIAR EN TAPICERIA',
              idTrayecto: 'PENDIENTE',
            },
            {
              id: 'INSTALACION DE MOBILIARIO DE MADERA',
              name: 'INSTALACION DE MOBILIARIO DE MADERA',
              idTrayecto: 'PENDIENTE',
            },
            {
              id:
                'CONSTRUCCION Y REPARACION DE INSTRUMENTOS MUSICALES LUTHERIA',
              name:
                'CONSTRUCCION Y REPARACION DE INSTRUMENTOS MUSICALES LUTHERIA',
              idTrayecto: 'PENDIENTE',
            },
            {
              id:
                'MANTENIMIENTO DE MAQUINAS Y EQUIPOS INDUSTRIALES DE MECANIZADO DE MADERA',
              name:
                'MANTENIMIENTO DE MAQUINAS Y EQUIPOS INDUSTRIALES DE MECANIZADO DE MADERA',
              idTrayecto: 'PENDIENTE',
            },
            {
              id: 'REPRESENTACION GRAFICA MANUAL E INTERPRETACION DE PLANOS',
              name: 'REPRESENTACION GRAFICA MANUAL E INTERPRETACION DE PLANOS',
              idTrayecto: 'FRESADO CNC',
            },
            { id: 'METROLOGIA', name: 'METROLOGIA', idTrayecto: 'FRESADO CNC' },
            {
              id: 'FRESADO CON MAQUINAS CONVENCIONALES',
              name: 'FRESADO CON MAQUINAS CONVENCIONALES',
              idTrayecto: 'FRESADO CNC',
            },
            {
              id: 'DISEÑO 3D ASISTIDO POR COMPUTADORA',
              name: 'DISEÑO 3D ASISTIDO POR COMPUTADORA',
              idTrayecto: 'FRESADO CNC',
            },
            {
              id: 'FRESADO CNC',
              name: 'FRESADO CNC',
              idTrayecto: 'FRESADO CNC',
            },
            {
              id: 'REPRESENTACION GRAFICA MANUAL E INTERPRETACION DE PLANOS',
              name: 'REPRESENTACION GRAFICA MANUAL E INTERPRETACION DE PLANOS',
              idTrayecto: 'TORNERIA CNC',
            },
            {
              id: 'METROLOGIA',
              name: 'METROLOGIA',
              idTrayecto: 'TORNERIA CNC',
            },
            {
              id: 'TORNERIA CON MAQUINAS CONVENCIONALES',
              name: 'TORNERIA CON MAQUINAS CONVENCIONALES',
              idTrayecto: 'TORNERIA CNC',
            },
            {
              id: 'DISEÑO 3D ASISTIDO POR COMPUTADORA',
              name: 'DISEÑO 3D ASISTIDO POR COMPUTADORA',
              idTrayecto: 'TORNERIA CNC',
            },
            {
              id: 'TORNERIA CNC',
              name: 'TORNERIA CNC',
              idTrayecto: 'TORNERIA CNC',
            },
            {
              id: 'TORNERIA CNC',
              name: 'TORNERIA CNC',
              idTrayecto: 'PROGRAMADOR CNC',
            },
            {
              id: 'FRESADO CNC',
              name: 'FRESADO CNC',
              idTrayecto: 'PROGRAMADOR CNC',
            },
            {
              id: 'OPERACIONES DE CNC',
              name: 'OPERACIONES DE CNC',
              idTrayecto: 'PROGRAMADOR CNC',
            },
            {
              id: 'PROGRAMACION CNC',
              name: 'PROGRAMACION CNC',
              idTrayecto: 'PROGRAMADOR CNC',
            },
            {
              id: 'SOLDADURA OXIACETILENICA',
              name: 'SOLDADURA OXIACETILENICA',
              idTrayecto: 'SOLDADURA',
            },
            {
              id: 'SOLDADURA BASICA',
              name: 'SOLDADURA BASICA',
              idTrayecto: 'SOLDADURA',
            },
            {
              id: 'SOLDADURA TIG',
              name: 'SOLDADURA TIG',
              idTrayecto: 'SOLDADURA',
            },
            { id: 'SOLDADURA', name: 'SOLDADURA', idTrayecto: 'SOLDADURA' },
            {
              id: 'SOLDADURA OXIACETILENICA',
              name: 'SOLDADURA OXIACETILENICA',
              idTrayecto: 'HERRERIA',
            },
            {
              id: 'SOLDADURA BASICA',
              name: 'SOLDADURA BASICA',
              idTrayecto: 'HERRERIA',
            },
            { id: 'HERRERIA', name: 'HERRERIA', idTrayecto: 'HERRERIA' },
            {
              id: 'ALFARERIA',
              name: 'ALFARERIA',
              idTrayecto: 'FORMATIVO ALFARERIA',
            },
            {
              id: 'ELABORACION DE PIEZAS DE CERAMICA',
              name: 'ELABORACION DE PIEZAS DE CERAMICA',
              idTrayecto: 'ELABORACION DE PIEZAS DE CERAMICA',
            },
            { id: 'CESTERIA', name: 'CESTERIA', idTrayecto: 'CESTERIA' },
            {
              id: 'PINTURA DECORATIVA',
              name: 'PINTURA DECORATIVA',
              idTrayecto: 'PINTURA DECORATIVA',
            },
            {
              id: 'ASISTENCIA EN MAQUILLAJE',
              name: 'ASISTENCIA EN MAQUILLAJE',
              idTrayecto: 'MAQUILLAJE INTEGRAL',
            },
            {
              id: 'MAQUILLAJE SOCIAL',
              name: 'MAQUILLAJE SOCIAL',
              idTrayecto: 'MAQUILLAJE INTEGRAL',
            },
            {
              id: 'MAQUILLAJE CORRECTIVO',
              name: 'MAQUILLAJE CORRECTIVO',
              idTrayecto: 'MAQUILLAJE INTEGRAL',
            },
            {
              id: 'MAQUILLAJE FANTASIA',
              name: 'MAQUILLAJE FANTASIA',
              idTrayecto: 'MAQUILLAJE INTEGRAL',
            },
            {
              id: 'AUXILIAR EN PELUQUERIA',
              name: 'AUXILIAR EN PELUQUERIA',
              idTrayecto: 'PELUQUERIA',
            },
            {
              id: 'PELUQUERIA UNISEX',
              name: 'PELUQUERIA UNISEX',
              idTrayecto: 'PELUQUERIA',
            },
            {
              id: 'TECNICAS DE COLORIMETRIA',
              name: 'TECNICAS DE COLORIMETRIA',
              idTrayecto: 'PELUQUERIA',
            },
            {
              id: 'CORTES UNISEX',
              name: 'CORTES UNISEX',
              idTrayecto: 'PELUQUERIA',
            },
            {
              id: 'PEINADOS DE FIESTA',
              name: 'PEINADOS DE FIESTA',
              idTrayecto: 'PELUQUERIA',
            },
            {
              id: 'TRATAMIENTOS CAPILARES',
              name: 'TRATAMIENTOS CAPILARES',
              idTrayecto: 'PELUQUERIA',
            },
            { id: 'BARBERIA', name: 'BARBERIA', idTrayecto: 'PELUQUERIA' },
            {
              id: 'COSMETOLOGIA',
              name: 'COSMETOLOGIA',
              idTrayecto: 'COSMETOLOGIA DEPILACION Y ESTETICA DE MANOS Y PIES',
            },
            {
              id: 'DEPILACION',
              name: 'DEPILACION',
              idTrayecto: 'COSMETOLOGIA DEPILACION Y ESTETICA DE MANOS Y PIES',
            },
            {
              id: 'ESTETICA DE MANOS Y PIES',
              name: 'ESTETICA DE MANOS Y PIES',
              idTrayecto: 'COSMETOLOGIA DEPILACION Y ESTETICA DE MANOS Y PIES',
            },
            {
              id: 'CUIDADO Y ATENCION DE PERSONAS MAYORES',
              name: 'CUIDADO Y ATENCION DE PERSONAS MAYORES',
              idTrayecto: 'CUIDADOR GERONTOLOGICO',
            },
            {
              id: 'AUXILIAR EN CUIDADOS GERONTOLOGICOS INET',
              name: 'AUXILIAR EN CUIDADOS GERONTOLOGICOS INET',
              idTrayecto: 'CUIDADOR GERONTOLOGICO',
            },
            {
              id: 'AUXILIAR EN CUIDADOS GERONTOLOGICOS',
              name: 'AUXILIAR EN CUIDADOS GERONTOLOGICOS',
              idTrayecto: 'CUIDADOR GERONTOLOGICO',
            },
            {
              id: 'COORDINACION PEDAGOGICA',
              name: 'COORDINACION PEDAGOGICA',
              idTrayecto: 'CUIDADOR GERONTOLOGICO',
            },
            {
              id: 'COORDINACION TERRITORIAL',
              name: 'COORDINACION TERRITORIAL',
              idTrayecto: 'CUIDADOR GERONTOLOGICO',
            },
            {
              id: 'AUXILIAR DE CONFECCION',
              name: 'AUXILIAR DE CONFECCION',
              idTrayecto: 'CONFECCION A MEDIDA',
            },
            {
              id: 'CONFECCION DE INDUMENTARIA',
              name: 'CONFECCION DE INDUMENTARIA',
              idTrayecto: 'CONFECCION A MEDIDA',
            },
            {
              id: 'CONFECCION DE ABRIGOS',
              name: 'CONFECCION DE ABRIGOS',
              idTrayecto: 'CONFECCION A MEDIDA',
            },
            {
              id: 'CONFECCION DE PRENDAS Y ACCESORIOS DE FIESTA',
              name: 'CONFECCION DE PRENDAS Y ACCESORIOS DE FIESTA',
              idTrayecto: 'CONFECCION A MEDIDA',
            },
            {
              id: 'CONFECCION A MEDIDA',
              name: 'CONFECCION A MEDIDA',
              idTrayecto: 'CONFECCION A MEDIDA',
            },
            {
              id: 'AUXILIAR DE CONFECCION',
              name: 'AUXILIAR DE CONFECCION',
              idTrayecto:
                'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
            },
            {
              id: 'CONFECCION DE ROPA DE BEBES',
              name: 'CONFECCION DE ROPA DE BEBES',
              idTrayecto:
                'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
            },
            {
              id: 'CONFECCION DE ROPA DE NIÑOS AS',
              name: 'CONFECCION DE ROPA DE NIÑOS AS',
              idTrayecto:
                'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
            },
            {
              id: 'CONFECCION DE LENCERIA',
              name: 'CONFECCION DE LENCERIA',
              idTrayecto:
                'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
            },
            {
              id: 'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBE Y NIÑOS AS',
              name: 'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBE Y NIÑOS AS',
              idTrayecto:
                'CONFECCION DE PEQUEÑAS PIEZAS Y ROPA DE BEBES Y NIÑOS AS',
            },
            {
              id:
                'OPERACION DE MAQUINAS PARA LA CONFECCION DE PRENDAS Y ARTICULOS TEXTILES',
              name:
                'OPERACION DE MAQUINAS PARA LA CONFECCION DE PRENDAS Y ARTICULOS TEXTILES',
              idTrayecto: 'COSTURA INDUSTRIAL',
            },
            {
              id: 'COSTURA INDUSTRIAL',
              name: 'COSTURA INDUSTRIAL',
              idTrayecto: 'COSTURA INDUSTRIAL',
            },
            {
              id: 'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA',
              name: 'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA',
              idTrayecto:
                'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA Y PATRONAJE',
            },
            {
              id: 'PATRONAJE',
              name: 'PATRONAJE',
              idTrayecto:
                'OPERACION Y CORTE EN INDUSTRIA INDUMENTARIA Y PATRONAJE',
            },
            {
              id: 'DISEÑO Y CONFECCION DE PRENDAS EN TELAR',
              name: 'DISEÑO Y CONFECCION DE PRENDAS EN TELAR',
              idTrayecto: 'TEXTIL ARTESANAL',
            },
            {
              id: 'DISEÑO Y CONFECCION DE PRENDAS Y ACCESORIOS AL CROCHET',
              name: 'DISEÑO Y CONFECCION DE PRENDAS Y ACCESORIOS AL CROCHET',
              idTrayecto: 'TEXTIL ARTESANAL',
            },
            {
              id: 'DISEÑO Y CONFECCION DE PRENDAS Y ACCESORIOS EN TRICOT',
              name: 'DISEÑO Y CONFECCION DE PRENDAS Y ACCESORIOS EN TRICOT',
              idTrayecto: 'TEXTIL ARTESANAL',
            },
            {
              id: 'PRODUCCION ARTESANAL DE PRENDAS Y ACCESORIOS',
              name: 'PRODUCCION ARTESANAL DE PRENDAS Y ACCESORIOS',
              idTrayecto: 'TEXTIL ARTESANAL',
            },
          ],
        },
      },
    };
    this.model = {};
    this.fields = [
      {
        className: 'datos-personales',
        template:
          '<div class="coltit"><h2 style="color:#53aae0;">Datos personales:</h2></div>',
      },

      // datos personales

      {
        key: 'Datos personales',
        type: 'no repeat',
        templateOptions: {
          addText: 'Ingresar datos personales',
          required: true,
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Nombre del docente',
              type: 'input',
              templateOptions: {
                label: 'Nombre del/la Docente-Capacitador/a:',
                required: true,
                placeholder: 'Ingrese el nombre completo del docente',
              },
            },
            {
              key: 'Apellido',
              type: 'input',
              templateOptions: {
                label: 'Apellido',
                placeholder: 'Ingrese el o los apellidos',
                required: true,
              },
            },
            {
              key: 'Nombres',
              type: 'input',
              templateOptions: {
                label:
                  'Completar Nombre como se autopercibe según ley de identidad de Género 26.743 art. 12',
                placeholder: 'Ingrese uno o varios nombres',
              },
            },
            {
              key: 'DNI',
              type: 'input',
              templateOptions: {
                label: 'DNI',
                pattern: '\\d{7,8}',
                placeholder: 'Ingrese un DNI',
              },
            },
            {
              key: 'CUIL',
              type: 'input',
              templateOptions: {
                label: 'CUIL',
                pattern: '\\d{11}',
                required: true,
                placeholder: 'Ingrese un CUIL',
              },
            },
            {
              key: 'Lugar de nacimiento',
              type: 'input',
              templateOptions: {
                label: 'Lugar de nacimiento',
                placeholder: 'Ingrese un lugar de nacimiento',
              },
            },
            {
              key: 'Fecha de nacimiento',
              type: 'input',
              templateOptions: {
                required: true,
                type: 'date',
                placeholder: 'Ingrese una fecha de nacimiento',
                label: 'Fecha de nacimiento',
              },
            },
            {
              key: 'Nacionalidad',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Nacionalidad',
                placeholder: 'Ingrese una nacionalidad',
              },
            },
            {
              key: 'Domicilio',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Domicilio',
                placeholder: 'Ingrese un domicilio',
              },
            },
            {
              key: 'Correo electrónico personal',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Correo electrónico personal',
                placeholder: 'Ingrese un correo electrónico',
              },
            },
            {
              key: 'Correo electrónico alternativo',
              type: 'input',
              templateOptions: {
                label: 'Correo electrónico alternativo',
                placeholder: 'Ingrese un correo electrónico',
              },
            },
            {
              key: 'Correo electrónico alternativo 2',
              type: 'input',
              templateOptions: {
                label: 'Correo electrónico alternativo 2',
                placeholder: 'Ingrese un correo electrónico',
              },
            },
            {
              key: 'Teléfono móvil',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Teléfono móvil',
                placeholder: 'Ingrese un teléfono móvil',
                pattern: '\\d{1,25}',
              },
            },
            {
              key: 'Teléfono laboral',
              type: 'input',
              templateOptions: {
                label: 'Teléfono laboral',
                placeholder: 'Ingrese un teléfono laboral',
                pattern: '\\d{1,25}',
              },
            },
            {
              key: 'Teléfono alternativo',
              type: 'input',
              templateOptions: {
                label: 'Teléfono alternativo',
                placeholder: 'Ingrese un teléfono alternativo',
                pattern: '\\d{1,25}',
              },
            },
            {
              key: 'Máximo nivel de estudio alcanzado',
              type: 'select',
              templateOptions: {
                required: true,
                label: 'Máximo nivel de estudio alcanzado',
                options: [
                  {
                    value: 'Primario incompleto',
                    label: 'Primario incompleto',
                  },
                  { value: 'Primario completo', label: 'Primario completo' },
                  {
                    value: 'Secundario incompleto',
                    label: 'Secundario incompleto',
                  },
                  {
                    value: 'Secundario completo',
                    label: 'Secundario completo',
                  },
                  {
                    value: 'Tercario incompleto',
                    label: 'Terciario incompleto',
                  },
                  { value: 'Terciario completo', label: 'Terciario completo' },
                  {
                    value: 'Universitario incompleto',
                    label: 'Universitario incompleto',
                  },
                  {
                    value: 'Universitario completo',
                    label: 'Universitario completo',
                  },
                ],
              },
            },
          ],
        },
      },

      //--------------------------------------------------------------------------------------------------------

      {
        className: 'datos-estudios-cursados',
        template: '<div><h2>Estudios Cursados</h2></div>',
      },

      {
        key: 'Estudios Cursados',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar Estudios Cursados',
          required: true,
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Nivel',
              type: 'select',
              templateOptions: {
                label: 'Nivel',
                options: [
                  { value: 'Nivel Medio', label: 'Nivel Medio' },
                  { value: 'Nivel Terciario', label: 'Nivel Terciario' },
                  {
                    value: 'Nivel Universitario',
                    label: 'Nivel Universitario',
                  },
                  { value: 'Nivel Posgrado', label: 'Nivel Posgrado' },
                ],
              },
            },
            {
              key: 'Institución',
              type: 'input',
              templateOptions: {
                label: 'Institución',
                placeholder: 'Ingrese una institución',
              },
            },
            {
              key: 'Localidad',
              type: 'input',
              templateOptions: {
                label: 'Localidad',
                placeholder: 'Ingrese una localidad',
              },
            },
            {
              key: 'Provincia',
              type: 'input',
              templateOptions: {
                label: 'Provincia',
                placeholder: 'Ingrese una provincia',
              },
            },
            {
              key: 'País',
              type: 'input',
              templateOptions: {
                label: 'País',
                placeholder: 'Ingrese un país',
              },
            },
            {
              key: 'Completo, año de egreso',
              type: 'input',
              templateOptions: {
                pattern: '\\d{4}',
                label: 'Completo. Año de egreso',
                placeholder: 'Ingrese un año',
              },
            },
            {
              key: 'Incompleto desde',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Incompleto desde:',
                placeholder: 'Ingrese una fecha',
              },
            },
            {
              key: 'Incompleto hasta',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'hasta:',
                placeholder: 'Ingrese una fecha',
              },
            },
            {
              key: 'Titulo orientado a',
              type: 'input',
              templateOptions: {
                label: 'Titulo orientado a',
                placeholder: 'Ingrese un titulo',
              },
            },
            {
              className: 'informacion-agregar',
              template:
                '<div>El botón agregar es para habilitar un espacio más<p></div>',
            },
          ],
        },
      },

      //--------------------------------------------------------------------------------------------------------

      {
        className: 'datos-formacion-complementaria',
        template:
          '<div><h2>Formación complementaria en la/s especialidad/es</h2></div>',
      },
      {
        key: 'Formación complementaria en la/s especialidad/es',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar formación complementaria',
        },
        fieldArray: {
          fieldGroup: [
            {
              className: 'info-formacion-complementaria',
              template:
                '<h3>Cursos, talleres de formación relacionados a los cursos/especialidades que se postula con una carga <b>minima de 20 hs.</b></h3>',
            },
            {
              className: 'info-adjuntar',
              template:
                '<h3>Si en el certificado no acredita la carga horaria, adjuntar analitico, módulos, ejes con carga horaria que de cuenta.</h3>',
            },
            {
              key: 'Nombre del curso',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Nombre del curso',
                placeholder: 'Ingrese un nombre',
              },
            },
            {
              key: 'Carga horaria (reloj)',
              type: 'input',
              templateOptions: {
                label: 'Cargar horaria (reloj)',
                placeholder: 'Ingrese una carga horaria',
              },
            },
            {
              key: 'Certificación',
              type: 'select',
              templateOptions: {
                label: 'Certificación',
                options: [
                  { value: 'Oficial', label: 'Oficial' },
                  { value: 'No oficial', label: 'No oficial' },
                ],
              },
            },
            {
              key: 'Intitución',
              type: 'input',
              templateOptions: {
                label: 'Institución',
                placeholder: 'Ingrese una institución',
              },
            },
            {
              key: 'Año',
              type: 'input',
              templateOptions: {
                label: 'Año',
                placeholder: 'Ingrese un año',
                pattern: '\\d{4}',
              },
            },
          ],
        },
      },

      //-------------------------------------------------------------------------------------------------------

      {
        className: 'datos-formacion-pedagogica-y-didactica',
        template: '<div><h2>Formación pedagógica y didáctica</h2></div>',
      },
      {
        key: 'Formación pedagógica y didáctica',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar formación pedagógica y didáctica',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Nombre del curso',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Nombre del curso',
                placeholder: 'Ingrese un nombre',
              },
            },
            {
              key: 'Carga horaria (reloj)',
              type: 'input',
              templateOptions: {
                label: 'Cargar horaria (reloj)',
                placeholder: 'Ingrese una carga horaria',
              },
            },
            {
              key: 'Certificación',
              type: 'select',
              templateOptions: {
                label: 'Certificación',
                options: [
                  { value: 'Oficial', label: 'Oficial' },
                  { value: 'No oficial', label: 'No oficial' },
                ],
              },
            },
            {
              key: 'Intitución',
              type: 'input',
              templateOptions: {
                label: 'Institución',
                placeholder: 'Ingrese una institución',
              },
            },
            {
              key: 'Año',
              type: 'input',
              templateOptions: {
                label: 'Año',
                placeholder: 'Ingrese un año',
                pattern: '\\d{4}',
              },
            },
          ],
        },
      },
      //--------------------------------------------------------------------------------------------------------
      {
        className: 'datos-experiencia-docencia',
        template: '<div><h2>Experiencia en el rol docente</h2></div>',
      },
      {
        key: 'Experiencia en el rol docente',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar experiencia en el rol docente',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Institución, organización o empresa',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Institución, organización o empresa',
                placeholder: 'Ingrese una institución, organización o empresa',
              },
            },
            {
              key: 'Especialidad o curso desarrollado',
              type: 'input',
              templateOptions: {
                label: 'Especialidad o curso desarrollado',
                placeholder: 'Ingrese una especialidad o un curso desarrollado',
              },
            },
            {
              key: 'Rol docente',
              type: 'select',
              templateOptions: {
                label: 'Rol docente',
                options: [
                  {
                    value: 'A cargo de la capacitación',
                    label: 'A cargo de la capacitación',
                  },
                  { value: 'Auxiliar', label: 'Auxiliar' },
                ],
              },
            },
            {
              key: 'Fecha desde',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Fecha desde',
                placeholder: 'Ingrese una fecha',
              },
            },
            {
              key: 'Fecha hasta',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Fecha hasta',
                placeholder: 'Ingrese una fecha',
              },
            },
          ],
        },
      },
      //--------------------------------------------------------------------------------------------------------
      {
        className: 'datos-experiencia-sector-socio-productivo',
        template:
          '<div><h2>Experiencia laboral en el sector socio productivo</h2></div>',
      },
      {
        key: 'Experiencia laboral en el sector socio productivo',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar experiencia laboral en el sector socio productivo',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Experiencia como docente',
              type: 'select',
              templateOptions: {
                required: false,
                multiple: true,
                label:
                  'Experiencia en el sector/es que se postula como docente',
                options: [
                  {
                    value: 'ADMINISTRACION Y COMERCIO',
                    label: 'ADMINISTRACION Y COMERCIO',
                  },
                  {
                    value:
                      'AGROPECUARIO, AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
                    label:
                      'AGROPECUARIO, AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
                  },
                  { value: 'AUTOMOTOR', label: 'AUTOMOTOR' },
                  { value: 'COMUNICACION', label: 'COMUNICACION' },
                  { value: 'CONSTRUCCION', label: 'CONSTRUCCION' },
                  { value: 'CUERO Y CALZADO', label: 'CUERO Y CALZADO' },
                  { value: 'ENERGIA ELECTRICA', label: 'ENERGIA ELECTRICA' },
                  {
                    value: 'GASTRONOMIA, HOTELERIA Y TURISMO',
                    label: 'GASTRONOMIA, HOTELERIA Y TURISMO',
                  },
                  { value: 'INFORMATICA', label: 'INFORMATICA' },
                  { value: 'MADERA Y MUEBLE', label: 'MADERA Y MUEBLE' },
                  { value: 'METALMECANICA', label: 'METALMECANICA' },
                  {
                    value: 'SERVICIOS PERSONALES Y COMUNITARIOS',
                    label: 'SERVICIOS PERSONALES Y COMUNITARIOS',
                  },
                  { value: 'TEXTIL', label: 'TEXTIL' },
                ],
              },
            },
            {
              key: 'Institución, organización o empresa',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Institución, organización o empresa',
                placeholder: 'Ingrese una institución, organización o empresa',
              },
            },
            {
              key: 'Cargo',
              type: 'input',
              templateOptions: {
                label: 'Cargo',
                placeholder: 'Ingrese un cargo',
              },
            },
            {
              key: 'Funciónes principales',
              type: 'input',
              templateOptions: {
                label: 'Funciónes principales',
                placeholder: 'Ingrese una función principal',
              },
            },
            {
              key: 'Período desde',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Fecha desde',
                placeholder: 'Ingrese una fecha',
              },
            },
            {
              key: 'Período hasta',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Período hasta',
                placeholder: 'Ingrese una fecha',
              },
            },
            {
              key: 'Convocado por Institución, organización o empresa',
              type: 'input',
              templateOptions: {
                required: false,
                label:
                  'En caso de estar convocado actualmente por alguna institución para el dictado de cursos, menciónela',
                placeholder: 'Ingrese una institución, organización o empresa',
              },
            },
          ],
        },
      },
      //--------------------------------------------------------------------------------------------------------
      {
        className: 'datos-nivel-digital',
        template:
          '<div><h2>Nivel de conocimiento en herramientas digitales</h2></div>',
      },
      {
        key: 'Tabla nivel de conocimiento en herramientas digitales',
        type: 'no repeat',
        templateOptions: {
          addText:
            'Insertar tabla nivel de conocimiento en herramientas digitales',
          required: true,
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'Uso de correo electrónico',
              type: 'select',
              templateOptions: {
                label: 'Uso de correo electrónico',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Manejo de Drive',
              type: 'select',
              templateOptions: {
                label: 'Manejo de Drive',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Utilización de aulas virtuales',
              type: 'select',
              templateOptions: {
                label: 'Utilización de aulas virtuales',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Word',
              type: 'select',
              templateOptions: {
                label: 'Word',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Excel',
              type: 'select',
              templateOptions: {
                label: 'Excel',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Power Point',
              type: 'select',
              templateOptions: {
                label: 'Power Point',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Programas de diseño',
              type: 'select',
              templateOptions: {
                label: 'Programas de diseño',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
            {
              key: 'Plataformas de Videoconferencia',
              type: 'select',
              templateOptions: {
                label: 'Plataformas de Videoconferencia',
                options: [
                  { value: 'Básico', label: 'Básico' },
                  { value: 'Medio', label: 'Medio' },
                  { value: 'Alto', label: 'Alto' },
                  { value: 'Avanzado', label: 'Avanzado' },
                ],
              },
            },
          ],
        },
      },
      //--------------------------------------------------------------------------------------------------------

      {
        template: '<div><h2>Certificación a la que se postula</h2></div>',
      },
      {
        key: 'Certificación a la que se postula',
        type: 'repeat',
        templateOptions: {
          addText: 'Agregar certificación a la que se postula',
          required: true,
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'SECTOR',
              type: 'select',
              templateOptions: {
                label: 'SECTOR',
                options: [
                  {
                    id: 'ADMINISTRACION Y COMERCIO',
                    name: 'ADMINISTRACION Y COMERCIO',
                  },
                  {
                    id: 'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
                    name:
                      'AGROPECUARIO AGROINDUSTRIA Y ACTIVIDADES EXTRACTIVAS',
                  },
                  { id: 'AUTOMOTOR', name: 'AUTOMOTOR' },
                  { id: 'COMUNICACION', name: 'COMUNICACION' },
                  { id: 'CONSTRUCCION', name: 'CONSTRUCCION' },
                  { id: 'CUERO Y CALZADO', name: 'CUERO Y CALZADO' },
                  { id: 'ENERGIA ELECTRICA', name: 'ENERGIA ELECTRICA' },
                  {
                    id: 'FORTALECIMIENTO DE CAPACIDADES',
                    name: 'FORTALECIMIENTO DE CAPACIDADES',
                  },
                  { id: 'GASTRONOMIA', name: 'GASTRONOMIA' },
                  { id: 'HOTELERIA Y TURISMO', name: 'HOTELERIA Y TURISMO' },
                  {
                    id: 'INDUSTRIAS CULTURALES',
                    name: 'INDUSTRIAS CULTURALES',
                  },
                  { id: 'INFORMATICA', name: 'INFORMATICA' },
                  { id: 'MADERA Y MUEBLE', name: 'MADERA Y MUEBLE' },
                  { id: 'METALMECANICA', name: 'METALMECANICA' },
                  {
                    id: 'PRODUCCION ARTESANAL Y MANUFACTURA',
                    name: 'PRODUCCION ARTESANAL Y MANUFACTURA',
                  },
                  {
                    id: 'SERVICIOS PERSONALES Y COMUNITARIOS',
                    name: 'SERVICIOS PERSONALES Y COMUNITARIOS',
                  },
                  { id: 'TEXTIL', name: 'TEXTIL' },
                ],
                valueProp: 'id',
                labelProp: 'name',
              },
            },
            {
              key: 'TRAYECTO',
              type: 'select',
              templateOptions: {
                label: 'TRAYECTO FORMATIVO',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              expressionProperties: {
                'templateOptions.options':
                  'formState.selectOptionsData.TRAYECTO.filter(TRAYECTO => TRAYECTO.idSector === model.SECTOR)',
                // reset model when updating select options
                'model.TRAYECTO': `field.templateOptions.options.find(o => o.id === model.TRAYECTO) ? model.TRAYECTO:null`,
              },
            },
            {
              key: 'CURSO',
              type: 'select',
              templateOptions: {
                multiple: true,
                label: 'CURSO',
                options: [],
                valueProp: 'id',
                labelProp: 'name',
              },
              expressionProperties: {
                'templateOptions.options':
                  'formState.selectOptionsData.CURSOS.filter(CURSOS => CURSOS.idTrayecto === model.TRAYECTO)',
                // reset model when updating select options
                //'model.CURSO': `field.templateOptions.options.find(o => o.id === model.CURSO) ? model.CURSO:null`,
              },
            },
          ],
        },
      },
    ];
  }

  createPdfAndSaveInFirebase() {
    if (this.form.invalid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');
      var img = new Image();
      img.src = 'assets/cabecera.jpg';
      doc.addImage(img, 'jpg', 0, 0);

      doc.setFont('helvetica');

      let m = 30;
      let y = 5;
      let x = 15;
      let i = 0; //
      let ll = 90;
      //var arr:JSON[];

      for (let seccion of modelo) {
        let arr: any = seccion[1];
        if (y > 240) {
          doc.addPage();
          doc.addImage(img, 'jpg', 0, 0);
          m = 30;
          y = 5;
          x = 15;
        }

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);

        for (var j = 0; j < arr.length; j++) {
          //console.log(reg);
          var res = [];
          var z = 0;
          for (var clave in arr[j]) {
            i++;
            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
            }
            z++;
            var texto = '';
            //RESUELVO SI EL TEXTO ES LARGO O CORTO O SI ES DE UNA COLUMNA U OTRA
            texto = registro[1].toString();

            var text_arr_aux = new Array();
            text_arr_aux = [];
            text_arr_aux = texto.split('', texto.length);
            var text_arr = new Array();
            text_arr = [];
            var texto_aux = '';
            for (var jj = 0; jj < text_arr_aux.length; jj++) {
              texto_aux = texto_aux + text_arr_aux[jj];
              if (jj % 88 == 0 && jj != 0) {
                text_arr.push(texto_aux);
                texto_aux = '';
              }
            }
            text_arr.push(texto_aux);

            if (texto.length > 40) {
              x = 15;
              y = y + 12;
              i++;
              ll = 180;
            } else {
              if (i % 2 != 0 || ll == 180) {
                x = 15;
                y = y + 12;
                ll = 90;
              } else {
                x = 110;
                ll = 90;
              }
            }
            //ACA PREGUNTO SI ESTOY SALIENDOME DE LA HOJA
            if (y > 240) {
              doc.addPage();
              doc.addImage(img, 'jpg', 0, 0);
              m = 30;
              y = 5;
              x = 15;
            }

            doc.setFontSize(10);
            doc.setDrawColor(100);
            for (var ia = 0; ia < text_arr.length; ia++) {
              doc.text(text_arr[ia], x, m + y); //valor
              y = y + 5;
            }
            y = y - 5;

            doc.line(x, m + y + 1, x + ll, m + y + 1); // linea horizontal
            doc.setFontSize(8);
            doc.setDrawColor(60);
            doc.text(clave, x, m + y + 5); //key
          }
        }
        i = 0;
        x = 15;
        y = y + 12;
      }
      let nombreArchivo = '00000000000';
      nombreArchivo = this.model['Datos personales'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('InscripcionCapacitador' + nombreArchivo + '.pdf');
    } else
      (error) => {
        console.error('error:', error);
      };
    if (this.form.invalid) {
     alert("Algunos datos obligatorios son necesarios")
    }

    // -     Desde aca se graba en Firebase     -
 
    const newForm = JSON.parse(JSON.stringify(this.model).replace(/\//g, "-"));
    this.db.list('formulariosEmpleo').push(newForm);
    
  }
}
