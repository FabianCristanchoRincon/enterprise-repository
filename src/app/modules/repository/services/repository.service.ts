import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  calibration: Array<any> = [
    {
      year: 2019,
      content: [
        {
          id: 1,
          title: 'Balanza Sentronick',
          path: 'assets/documents/3.programa_calibracion/2019/balanza sentronick.pdf'
        },
        {
          id: 2,
          title: 'Balanza Tanitas Jaz',
          path: 'assets/documents/3.programa_calibracion/2019/balanza tanitas jaz.pdf'
        },
        {
          id: 3,
          title: 'Bloque Patrón 3.0 mm',
          path: 'assets/documents/3.programa_calibracion/2019/bloque patron 3.0 mm.pdf'
        },
        {
          id: 4,
          title: 'Bloque Patrón 5.0 mm',
          path: 'assets/documents/3.programa_calibracion/2019/bloque patron 5.0 mm.pdf'
        },
        {
          id: 5,
          title: 'Bloque Patrón 10.0 mm',
          path: 'assets/documents/3.programa_calibracion/2019/bloque patron 10.0 mm.pdf'
        },
        {
          id: 6,
          title: 'Bloque Patrón 20.0 mm',
          path: 'assets/documents/3.programa_calibracion/2019/bloque patron 20.0 mm.pdf'
        },
        {
          id: 7,
          title: 'Certificado Pie de Rey',
          path: 'assets/documents/3.programa_calibracion/2019/certificado pie de rey.pdf'
        },
        {
          id: 8,
          title: 'Comparador de Carátula',
          path: 'assets/documents/3.programa_calibracion/2019/comparador de caratula.pdf'
        },
        {
          id: 9,
          title: 'Flexómetro 1',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 1.pdf'
        },
        {
          id: 10,
          title: 'Flexómetro 2',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 2.pdf'
        },
        {
          id: 11,
          title: 'Flexómetro 3',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 3.pdf'
        },
        {
          id: 12,
          title: 'Flexómetro 4',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 4.pdf'
        },
        {
          id: 13,
          title: 'Flexómetro 5',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 5.pdf'
        },
        {
          id: 14,
          title: 'Flexómetro 6',
          path: 'assets/documents/3.programa_calibracion/2019/flexometro 6.pdf'
        },
        {
          id: 15,
          title: 'Goniómetro',
          path: 'assets/documents/3.programa_calibracion/2019/goniometro.pdf'
        },
        {
          id: 16,
          title: 'Máquina Ensayos',
          path: 'assets/documents/3.programa_calibracion/2019/maquina ensayos.pdf'
        },
        {
          id: 17,
          title: 'Micrómetro 1',
          path: 'assets/documents/3.programa_calibracion/2019/Micrometro 1.pdf'
        },
        {
          id: 18,
          title: 'Micrómetro 2',
          path: 'assets/documents/3.programa_calibracion/2019/Micrometro 2.pdf'
        },
        {
          id: 19,
          title: 'Micrómetro 3',
          path: 'assets/documents/3.programa_calibracion/2019/Micrometro 3.pdf'
        },
        {
          id: 20,
          title: 'Regla Métrica',
          path: 'assets/documents/3.programa_calibracion/2019/regla metrica.pdf'
        }
      ]
    },
    {
      year: 2020,
      content: [
        {
          id: 1,
          title: 'Bloques Patrón y Regla Patrón',
          path: 'assets/documents/3.programa_calibracion/2020/Bloques patron y regla patron.pdf'
        },
        {
          id: 2,
          title: 'Certificado EM-1',
          path: 'assets/documents/3.programa_calibracion/2020/Certificado EM-1.pdf'
        },
        {
          id: 3,
          title: 'Certificado Goniómetro 2020',
          path: 'assets/documents/3.programa_calibracion/2020/Certificado Goniometro 2020.pdf'
        },
        {
          id: 4,
          title: 'Certificado MP-1',
          path: 'assets/documents/3.programa_calibracion/2020/Certificado MP-1.pdf'
        },
        {
          id: 5,
          title: 'Certificado MP-2',
          path: 'assets/documents/3.programa_calibracion/2020/Certificado MP-2.pdf'
        },
        {
          id: 6,
          title: 'Certificado MP-3',
          path: 'assets/documents/3.programa_calibracion/2020/Certificado MP-3.pdf'
        },
        {
          id: 7,
          title: 'Certificado MP-4',
          path: 'assets/documents/3.programa_calibracion/2020/certificado MP-4.pdf'
        },
        {
          id: 8,
          title: 'Comparador de Carátula',
          path: 'assets/documents/3.programa_calibracion/2020/COMPARADOR DE CARATULA 15-03-2021.pdf'
        },
        {
          id: 9,
          title: 'Comparador COMCAR-1',
          path: 'assets/documents/3.programa_calibracion/2020/Comparador de caratula COMCAR-1.pdf'
        }
      ]
    },
    {
      year: 2021,
      content: [
        {
          id: 1,
          title: 'Bloques Calibre en Acero',
          path: 'assets/documents/3.programa_calibracion/2021/calibración bloques calibres en acero.pdf'
        },
        {
          id: 2,
          title: 'Calibración Máquina de Ensayos',
          path: 'assets/documents/3.programa_calibracion/2021/certificado de calibracion maquina de ensayos.pdf'
        },
        {
          id: 3,
          title: 'Certificado Regla Métrica',
          path: 'assets/documents/3.programa_calibracion/2021/certificado regla metrica.pdf'
        },
        {
          id: 4,
          title: 'Certificado LML-0104-21',
          path: 'assets/documents/3.programa_calibracion/2021/Certificado_I-LML-0104-21_comparador caratula.pdf'
        },
        {
          id: 5,
          title: 'Certificado LML-0666-21',
          path: 'assets/documents/3.programa_calibracion/2021/Certificado_LML-0666-21_ GONIOMETRO.pdf'
        },
        {
          id: 6,
          title: 'CMP 5699',
          path: 'assets/documents/3.programa_calibracion/2021/CMP 5699  GRUPO PRONUM S.A.S  PESA INDIVIDUAL C M 1 20 g.pdf'
        },
        {
          id: 7,
          title: 'CMP 5700',
          path: 'assets/documents/3.programa_calibracion/2021/CMP 5700 GRUPO PRONUM S.A.S  PESA INDIVIDUAL C M 1 50 g.pdf'
        },
        {
          id: 8,
          title: 'CMP 5701',
          path: 'assets/documents/3.programa_calibracion/2021/CMP 5701 GRUPO PRONUM S.A.S  PESA INDIVIDUAL C M 1 100 g.pdf'
        },
        {
          id: 9,
          title: 'CMP 5702',
          path: 'assets/documents/3.programa_calibracion/2021/CMP 5702 GRUPO PRONUM S.A.S  PESA INDIVIDUAL C M 1 200 g.pdf'
        },
      ]
    }
  ]

  constructor() { }

  getCalibration(){
    return this.calibration;
  }

  getDocsByYear(year:string | null){
    return this.calibration.filter(item => {
      return item.year == year;
    })
  }

  getDocumentByYearAndId(year:string | null, id:string | null){
    let docYear:Array<any> = this.getDocsByYear(year)[0].content;
    return docYear.find(item => {
      return item.id == id;
    });
  }
}
