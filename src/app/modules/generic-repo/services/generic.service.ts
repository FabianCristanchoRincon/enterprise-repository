import { Injectable } from '@angular/core';
import { GenericModel } from '../models/generic.model';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  genericRepo:Array<GenericModel> = [
    {
      code: 'comites_calidad',
      name: 'Comités de Calidad',
      path: '/comites_de_calidad',
      section: [
        {
          id: 1,
          name: 'Actas Comités de Calidad',
          files: [
            {
              id: 1,
              title: 'Acta N° 5',
              path: 'assets/documents/1.comites_calidad/actas/acta_5_calidad'
            }
          ]
        }
      ]
    },
    {
      code: 'procedimientos_calidad',
      name: 'Procedimientos Calidad',
      path: '/procedimientos_calidad',
      section: [
        {
          id: 1,
          name: 'Grafilación y Trefilación',
          files: [
            {
              id: 1,
              title: 'Medición resalte de Grafil',
              path: 'assets/documents/4.procedimientos_calidad/grafilacion_y_trefilacion/medicion_resalte.pdf'
            },
            {
              id: 2,
              title: 'Peso, metro y diámetro',
              path: 'assets/documents/4.procedimientos_calidad/grafilacion_y_trefilacion/peso_metro_diametro.pdf'
            }
          ]
        },
        {
          id: 2,
          name: 'Malla Electrosoldada',
          files: [
            {
              id: 1,
              title: 'Dimensiones y cuantía',
              path: 'assets/documents/4.procedimientos_calidad/malla_electrosoldada/dimensiones_y_cuantia.pdf'
            },
            {
              id: 2,
              title: 'Ensayo Tracción de grafil y malla',
              path: 'assets/documents/4.procedimientos_calidad/malla_electrosoldada/ensayo_traccion_grafil.pdf'
            },
            {
              id: 3,
              title: 'Resistencia al corte de soldadura',
              path: 'assets/documents/4.procedimientos_calidad/malla_electrosoldada/resistencia_al_corte_de_soldadura.pdf'
            }
          ]
        }
      ]
    }
  ]

  constructor() { }

  getRepoByCode(code:string | null): GenericModel | undefined{
    return this.genericRepo.find(repo => {
      return repo.code == code;
    })
  }
}
