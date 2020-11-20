import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'FORMULARIO de Inscripción en el Registro Provincial de Capacitadores'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-personales',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos personales:</h2></div>',
    },


    // datos personales

    {
      key: 'Datos personales',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos personales',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Nombre del docente',
            type: 'input',
            templateOptions: {
              label: 'Nombre del/la Docente-Capacitador/a:',
              required: true,
              placeholder: 'Ingrese el nombre completo del docente'
            }
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
              label: 'Nombres (Ley de Identidad de Género 26.743 art.12)',
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
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              pattern: '\\d{11}',
              required: true,
              placeholder: 'Ingrese un CUIL',
            }
          },
          {
            key: 'Lugar de nacimiento',
            type: 'input',
            templateOptions: {
              label: 'Lugar de nacimiento',
              placeholder: 'Ingrese un lugar de nacimiento'
            }
          },
          {
            key: 'Fecha de nacimiento',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'date',
              placeholder: 'Ingrese una fecha de nacimiento',
              label: 'Fecha de nacimiento',
            }
          },
          {
            key: 'Nacionalidad',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Nacionalidad',
              placeholder: 'Ingrese una nacionalidad'
            }
          },
          {
            key: 'Domicilio',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Domicilio',
              placeholder: 'Ingrese un domicilio'
            }
          },
          {
            key: 'Correo electrónico personal',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Correo electrónico personal',
              placeholder: 'Ingrese un correo electrónico'
            }
          },
          {
            key: 'Correo electrónico alternativo',
            type: 'input',
            templateOptions: {
              label: 'Correo electrónico alternativo',
              placeholder: 'Ingrese un correo electrónico'
            }
          },
          {
            key: 'Correo electrónico alternativo 2',
            type: 'input',
            templateOptions: {
              label: 'Correo electrónico alternativo 2',
              placeholder: 'Ingrese un correo electrónico'
            }
          },
          {
            key: 'Teléfono móvil',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Teléfono móvil',
              placeholder: 'Ingrese un teléfono móvil',
              pattern: '\\d{1,25}',
            }
          },
          {
            key: 'Teléfono laboral',
            type: 'input',
            templateOptions: {
              label: 'Teléfono laboral',
              placeholder: 'Ingrese un teléfono laboral',
              pattern: '\\d{1,25}',
            }
          },
          {
            key: 'Teléfono alternativo',
            type: 'input',
            templateOptions: {
              label: 'Teléfono alternativo',
              placeholder: 'Ingrese un teléfono alternativo',
              pattern: '\\d{1,25}',
            }
          },
          {
            key: 'Máximo nivel de estudio alcanzado',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'Máximo nivel de estudio alcanzado',
              options: [
                { value: 'Primario incompleto', label: 'Primario incompleto' },
                { value: 'Primario completo', label: 'Primario completo' },
                { value: 'Secundario incompleto', label: 'Secundario incompleto' },
                { value: 'Secundario completo', label: 'Secundario completo' },
                { value: 'Tercario incompleto', label: 'Terciario incompleto' },
                { value: 'Terciario completo', label: 'Terciario completo' },
                { value: 'Universitario incompleto', label: 'Universitario incompleto' },
                { value: 'Universitario completo', label: 'Universitario completo' },
              ]
            }
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
                { value: 'Nivel Universitario', label: 'Nivel Universitario' },
                { value: 'Nivel Posgrado', label: 'Nivel Posgrado' },
              ]
            }
          },
          {
            key: 'Institución',
            type: 'input',
            templateOptions: {
              label: 'Institución',
              placeholder: 'Ingrese una institución'
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Ingrese una localidad'
            }
          },
          {
            key: 'Provincia',
            type: 'input',
            templateOptions: {
              label: 'Provincia',
              placeholder: 'Ingrese una provincia'
            }
          },
          {
            key: 'País',
            type: 'input',
            templateOptions: {
              label: 'País',
              placeholder: 'Ingrese un país'
            }
          },
          {
            key: 'Completo, año de egreso',
            type: 'input',
            templateOptions: {
              pattern: '\\d{4}',
              label: 'Completo. Año de egreso',
              placeholder: 'Ingrese un año'
            }
          },
          {
            key: 'Incompleto, años de cursado de',
            type: 'input',
            templateOptions: {
              pattern: '\\d{4}',
              label: 'Incompleto. Años de cursado desde:',
              placeholder: 'Ingrese un año'
            }
          },
          {
            key: 'Incompleto, años de cursado desde',
            type: 'input',
            templateOptions: {
              pattern: '\\d{4}',
              label: 'hasta:',
              placeholder: 'Ingrese un año'
            }
          },
          {
            key: 'Titulo orientado a',
            type: 'input',
            templateOptions: {
              label: 'Titulo orientado a',
              placeholder: 'Ingrese un titulo'
            }
          }
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-formacion-complementaria',
      template: '<div><h2>Formación complementaria en la/s especialidad/es</h2></div>',
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
            key: 'Nombre del curso',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Nombre del curso',
              placeholder: 'Ingrese un nombre'
            }
          },
          {
            key: 'Carga horaria (reloj)',
            type: 'input',
            templateOptions: {
              label: 'Cargar horaria (reloj)',
              placeholder: 'Ingrese una carga horaria'
            }
          },
          {
            key: 'Certificación',
            type: 'select',
            templateOptions: {
              label: 'Certificación',
              options: [
                { value: 'Oficial', label: 'Oficial' },
                { value: 'No oficial', label: 'No oficial' }
              ]
            }
          },
          {
            key: 'Intitución',
            type: 'input',
            templateOptions: {
              label: 'Institución',
              placeholder: 'Ingrese una institución',
            }
          },
          {
            key: 'Año',
            type: 'input',
            templateOptions: {
              label: 'Año',
              placeholder: 'Ingrese un año',
              pattern: '\\d{4}'
            }
          }
        ]
      }
    },
    {
      className: 'info-formacion-complementaria',
      template: '<h3>Cursos, talleres de formación relacionados a los cursos/especialidades que se postula con una carga minima de 20 hs.</h3>'
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
              placeholder: 'Ingrese un nombre'
            }
          },
          {
            key: 'Carga horaria (reloj)',
            type: 'input',
            templateOptions: {
              label: 'Cargar horaria (reloj)',
              placeholder: 'Ingrese una carga horaria'
            }
          },
          {
            key: 'Certificación',
            type: 'select',
            templateOptions: {
              label: 'Certificación',
              options: [
                { value: 'Oficial', label: 'Oficial' },
                { value: 'No oficial', label: 'No oficial' }
              ]
            }
          },
          {
            key: 'Intitución',
            type: 'input',
            templateOptions: {
              label: 'Institución',
              placeholder: 'Ingrese una institución',
            }
          },
          {
            key: 'Año',
            type: 'input',
            templateOptions: {
              label: 'Año',
              placeholder: 'Ingrese un año',
              pattern: '\\d{4}'
            }
          }
        ]
      }
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
              placeholder: 'Ingrese una institución, organización o empresa'
            }
          },
          {
            key: 'Especialidad o curso desarrollado',
            type: 'input',
            templateOptions: {
              label: 'Especialidad o curso desarrollado',
              placeholder: 'Ingrese una especialidad o un curso desarrollado'
            }
          },
          {
            key: 'Rol docente',
            type: 'select',
            templateOptions: {
              label: 'Rol docente',
              options: [
                { value: 'A cargo de la capacitación', label: 'A cargo de la capacitación' },
                { value: 'Auxiliar', label: 'Auxiliar' }
              ]
            }
          },
          {
            key: 'Fecha desde',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha desde',
              placeholder: 'Ingrese una fecha',
            }
          },
          {
            key: 'Fecha hasta',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha hasta',
              placeholder: 'Ingrese una fecha',
            }
          }
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-experiencia-sector-socio-productivo',
      template: '<div><h2>Experiencia laboral en el sector socio productivo</h2></div>',
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
            key: 'Institución, organización o empresa',
            type: 'input',
            templateOptions: {
              required: true,
              label: 'Institución, organización o empresa',
              placeholder: 'Ingrese una institución, organización o empresa'
            }
          },
          {
            key: 'Cargo',
            type: 'input',
            templateOptions: {
              label: 'Cargo',
              placeholder: 'Ingrese un cargo'
            }
          },
          {
            key: 'Funciónes principales',
            type: 'input',
            templateOptions: {
              label: 'Funciónes principales',
              placeholder: 'Ingrese una función principal'
            }
          },
          {
            key: 'Período desde',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha desde',
              placeholder: 'Ingrese una fecha',
            }
          },
          {
            key: 'Período hasta',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Período hasta',
              placeholder: 'Ingrese una fecha',
            }
          }
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-nivel-digital',
      template: '<div><h2>Nivel de conocimiento en herramientas digitales</h2></div>',
    },
    {
      key: 'Tabla nivel de conocimiento en herramientas digitales',
      type: 'no repeat',
      templateOptions: {
        addText: 'Insertar tabla',
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
              ]
            }
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
              ]
            }
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
              ]
            }
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
              ]
            }
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
              ]
            }
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
              ]
            }
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
              ]
            }
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
              ]
            }
          },
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------
  ]



  createPdf() {

    if (this.form.valid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');


      doc.setFont('helvetica')

      let m = 5;
      let y = 0;
      let x = 15;
      let i = 0; //
      //var arr:JSON[];

      for (let seccion of modelo) {

        let arr: any = seccion[1];

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
            if (y > 240 && x === 110) {
              doc.addPage();
              m = 5;
              y = 0;
              x = 15;
            }
            i++;
            if (i % 2 != 0) { x = 15; y = y + 12; }
            else { x = 110; }
            doc.setFontSize(10);
            doc.setDrawColor(100);

            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            doc.text(registro[1], x, m + y); //valor
            doc.line(x, m + y + 1, x + 90, m + y + 1); // linea horizontal
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


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}
