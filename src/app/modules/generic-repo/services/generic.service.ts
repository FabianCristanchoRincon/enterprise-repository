import { Injectable } from '@angular/core';
import { FileGeneric } from '../models/file.generic.model';
import { GenericModel } from '../models/generic.model';
import { SectionGeneric } from '../models/section.generic.model';

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
              path: 'assets/documents/1.comites_calidad/actas/acta_5_calidad.pdf'
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
        },
        {
          id: 3,
          name: 'Patrones Operacionales',
          files: [
            {
              id: 1,
              title: 'Procedimiento para Identificación, Manipulación, Embalaje, Almacenamiento y Protección',
              path: 'assets/documents/4.procedimientos_calidad/patrones_operacionales/manipulacion_embalaje_almacenamiento.pdf'
            },
            {
              id: 2,
              title: 'Proceso Cargue en Planta',
              path: 'assets/documents/4.procedimientos_calidad/patrones_operacionales/cargue_en_planta.pdf'
            },
            {
              id: 3,
              title: 'Proceso de Malla Electrosoldada',
              path: 'assets/documents/4.procedimientos_calidad/patrones_operacionales/malla_electrosoldada.pdf'
            },
            {
              id: 4,
              title: 'Proceso de Enderezado y Corte',
              path: 'assets/documents/4.procedimientos_calidad/patrones_operacionales/enderezado_y_corte.pdf'
            },
            {
              id: 5,
              title: 'Proceso Trefilación y Grafilado',
              path: 'assets/documents/4.procedimientos_calidad/patrones_operacionales/trefilacion_y_grafilado.pdf'
            }
          ]
        },
        {
          id: 4,
          name: 'PQR',
          files: [
            {
              id: 1,
              title: 'Instructivo para el Tratamiento y Disposición de SNC',
              path: 'assets/documents/4.procedimientos_calidad/salidas_no_conformes/instructivo_snc.pdf'
            }
          ]
        },
        {
          id: 5,
          name: 'Otros',
          files: [
            {
              id: 1,
              title: 'Constrol Instrumentos de Medición',
              path: 'assets/documents/4.procedimientos_calidad/otros/instrumentos_medicion.pdf'
            },
            {
              id: 2,
              title: 'Incertidumbre',
              path: 'assets/documents/4.procedimientos_calidad/otros/incertidumbre.pdf'
            },
            {
              id: 3,
              title: 'Manual Laboratorio de Calidad',
              path: 'assets/documents/4.procedimientos_calidad/otros/manual_lab_calidad.pdf'
            },
            {
              id: 4,
              title: 'Plan de Aseguramiento Metrológico, Grafil y Malla Electrosoldada',
              path: 'assets/documents/4.procedimientos_calidad/otros/aseguramiento_grafil_malla.pdf'
            },
            {
              id: 5,
              title: 'Procedimiento de Acciones Correctivas, Preventivas y de Mejora',
              path: 'assets/documents/4.procedimientos_calidad/otros/acciones_corr_prev_mej.pdf'
            },
            {
              id: 6,
              title: 'Procedimiento para el Cálculo de la Incertidumbre del Laboratorio',
              path: 'assets/documents/4.procedimientos_calidad/otros/incertidumbre_laboratorio.pdf'
            },
            {
              id: 7,
              title: 'Procedimiento para el Manejo de Información Documentada',
              path: 'assets/documents/4.procedimientos_calidad/otros/.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'ingreso_materia_prima',
      name: 'Ingreso de Materia Prima',
      path: '/ingreso_materia_prima',
      section: [
        {
          id: 1,
          name: 'PROALCO',
          files: [
            {
              id: 1,
              title: 'Grafil 4,0 mm',
              path: 'assets/documents/5.ingreso_materia_prima/proalco/grafil_4mm.pdf'
            },
            {
              id: 2,
              title: 'Grafil 4,5 mm',
              path: 'assets/documents/5.ingreso_materia_prima/proalco/grafil_4_5mm.pdf'
            },
            {
              id: 3,
              title: 'Grafil 5 mm',
              path: 'assets/documents/5.ingreso_materia_prima/proalco/grafil_5mm.pdf'
            },
            {
              id: 4,
              title: 'Grafil 5,5 mm',
              path: 'assets/documents/5.ingreso_materia_prima/proalco/grafil_5_5mm.pdf'
            },
            {
              id: 5,
              title: 'Grafil 6,5 mm',
              path: 'assets/documents/5.ingreso_materia_prima/proalco/grafil_6_5mm.pdf'
            }
          ]
        },
        {
          id: 2,
          name: 'Otros',
          files: [
            {
              id: 1,
              title: 'Documento MP 6,35',
              path: 'assets/documents/5.ingreso_materia_prima/otros/doc_6_35.pdf'
            },
            {
              id: 1,
              title: 'Respuesta RRC-351',
              path: 'assets/documents/5.ingreso_materia_prima/otros/respuesta_rrc_351.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'capacitaciones',
      name: 'Capacitaciones',
      path: '/capacitaciones',
      section: [
        {
          id: 1,
          name: 'Documentos de Capacitaciones',
          files: [
            {
              id: 1,
              title: 'Presentación Patrones Operacionales variables a controlar Peso, Dimensiones y Diámetro',
              path: 'assets/documents/6.capacitaciones/belencito.pdf'
            },
            {
              id: 2,
              title: 'Capacitación Tocancipá',
              path: 'assets/documents/6.capacitaciones/capacitacion_tocancipa.pdf'
            },
            {
              id: 3,
              title: 'Certificación Icontec - Resolución 0277 y NTC 5806',
              path: 'assets/documents/6.capacitaciones/certificacion_icontec_0277_NTC_5806.pdf'
            },
            {
              id: 4,
              title: 'Presentación de Introducción',
              path: 'assets/documents/6.capacitaciones/introduccion.pdf'
            },
            {
              id: 5,
              title: 'Metrología',
              path: 'assets/documents/6.capacitaciones/metrologia.pdf'
            },
            {
              id: 6,
              title: 'Principios de Probabilidad e Incertidumbre',
              path: 'assets/documents/6.capacitaciones/probabilidad_e_incertidumbre.pdf'
            },
            {
              id: 7,
              title: 'Presentación Grupo PRONUM NTC 5806',
              path: 'assets/documents/6.capacitaciones/pronum_NTC_5806.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'formatos',
      name: 'Formatos',
      path: '/formatos',
      section: [
        {
          id: 1,
          name: 'Formatos',
          files: [
            {
              id: 1,
              title: 'Diámetro y Ángulo',
              path: 'assets/documents/7.formatos/diametro_y_angulo.pdf'
            },
            {
              id: 2,
              title: 'Etiquetas Producto no Conforme',
              path: 'assets/documents/7.formatos/producto_no_conforme.pdf'
            },
            {
              id: 3,
              title: 'Ficha Técnica de Requisitos MP',
              path: 'assets/documents/7.formatos/ficha_tecnica_requisitos_mp.pdf'
            },
            {
              id: 4,
              title: 'Análisis de Acciones Correctivas y Preventivas',
              path: 'assets/documents/7.formatos/acciones_correctivas_y_preventivas.pdf'
            },
            {
              id: 5,
              title: 'Evaluación a Formaciones',
              path: 'assets/documents/7.formatos/evaluacion_a_formaciones.pdf'
            },
            {
              id: 6,
              title: 'Evaluación y Reevaluación a Proveedores',
              path: 'assets/documents/7.formatos/evaluacion_y_reevaluacion_proveedores.pdf'
            },
            {
              id: 7,
              title: 'Entrega de Equipos y Herramientas',
              path: 'assets/documents/7.formatos/entrega_equipos_y_herramientas.pdf'
            },
            {
              id: 8,
              title: 'Organigrama por Centro de Operaciones',
              path: 'assets/documents/7.formatos/organigrama_centro_de_operaciones.pdf'
            },
            {
              id: 9,
              title: 'Referencias Aprobadas por el Icontec',
              path: 'assets/documents/7.formatos/ref_aprobadas_icontec.pdf'
            },
            {
              id: 10,
              title: 'Referencias Aprobadas por el Icontec',
              path: 'assets/documents/7.formatos/ref_aprobadas_icontec.pdf'
            },
            {
              id: 11,
              title: 'Referencias de Malla Electrosoldada',
              path: 'assets/documents/7.formatos/ref_malla_electrosoldada.pdf'
            },
            {
              id: 12,
              title: 'Registro de Ingreso al Laboratorio',
              path: 'assets/documents/7.formatos/registro_ingreso_laboratorio.pdf'
            },
            {
              id: 13,
              title: 'Tabla de Contenido Duitama',
              path: 'assets/documents/7.formatos/tabla_contenido_duitama.pdf'
            },
            {
              id: 14,
              title: 'Tabla de Rendimiento para Grafil +- 6%',
              path: 'assets/documents/7.formatos/tabla_rendimiento_grafil_6.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'muestras_a_ciegas',
      name: 'Muestras a Ciegas',
      path: '/muestras_a_ciegas',
      section: [
        {
          id: 1,
          name: 'Documentos Muestras a Ciegas',
          files: [

          ]
        }
      ]
    },
    {
      code: 'normas',
      name: 'Normas',
      path: '/normas',
      section: [
        {
          id: 1,
          name: 'Lista de Normas',
          files: [
            {
              id: 1,
              title: 'GTC-115. Incertidumbre para principiantes',
              path: 'assets/documents/9.normas/gtc-115.pdf'
            },
            {
              id: 2,
              title: 'Norma ISO 9001 2015',
              path: 'assets/documents/9.normas/ISO-9001.pdf'
            },
            {
              id: 3,
              title: 'NTC-330. Requisitos Generales para Alambrón y Alambre de Acero AL C y Acero Aleado',
              path: 'assets/documents/9.normas/NTC-330.pdf'
            },
            {
              id: 4,
              title: 'NTC-2031. Instrumentos de Pesaje de Funcionamiento no Automático - Requisitos Metrológicos y Técnicos',
              path: 'assets/documents/9.normas/NTC-2031.pdf'
            },
            {
              id: 5,
              title: 'NTC-5806. Alambre de Acero Liso y Grafilado y Mallas Electrosoldadas para Refuerzo de Concreto',
              path: 'assets/documents/9.normas/NTC-5806.pdf'
            },
            {
              id: 6,
              title: 'NTC-1724. Metrología Cintas Métricas Comerciales',
              path: 'assets/documents/9.normas/NTC-1724.pdf'
            },
            {
              id: 7,
              title: 'NTC-4303. Pie de Rey - Requisitos y Ensayos',
              path: 'assets/documents/9.normas/NTC-4303.pdf'
            },
            {
              id: 8,
              title: 'NTC-4352. Micrómetros para Mediciones exteriores - Construcción Normal de Conceptos, Requisitos y Ensayos',
              path: 'assets/documents/9.normas/NTC-4352.pdf'
            },
            {
              id: 9,
              title: 'NTC-4537. Requisitos Generales para Barras, Chapas, Perfiles y Tablestacos de Acero Laminado de Calidad Estructural',
              path: 'assets/documents/9.normas/NTC-4537.pdf'
            },
            {
              id: 10,
              title: 'NTC-5806. Alambre de Acero Liso y Grafilado y Mallas Electrosoldads para refuerxo de Concreto',
              path: 'assets/documents/9.normas/NTC-5806.pdf'
            },
            {
              id: 11,
              title: 'Tabla NTC-5806',
              path: 'assets/documents/9.normas/NTC-5806_tabla.pdf'
            },
            {
              id: 12,
              title: 'NTC-ISO-IEC-17025-2017 Competencia de Laboratorios',
              path: 'assets/documents/9.normas/NTC-ISO-IEC-17025-2017.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'no_conformes',
      name: 'No Conformes',
      path: '/no_conformes',
      section: [
        {
          id: 1,
          name: 'Documentos - No Conformes',
          files: [
            {
              id: 1,
              title: 'Acta de Liberación',
              path: 'assets/documents/10.no_conformes/acta_liberacion.pdf'
            },
            {
              id: 2,
              title: 'Matriz de Disposición Final',
              path: 'assets/documents/10.no_conformes/matriz_de_disposicion_final.pdf'
            },
            {
              id: 3,
              title: 'Registro de Salidas no Conformes',
              path: 'assets/documents/10.no_conformes/registro_salidas_no_conformes.pdf'
            },
            {
              id: 4,
              title: 'Registro y Análisis de Acciones Correctivas, Preventivas y/o Mejora',
              path: 'assets/documents/10.no_conformes/analisis_acciones.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'pqr',
      name: 'PQR',
      path: '/pqr',
      section: [
        {
          id: 1,
          name: 'Formatos PQR',
          files: [
            {
              id: 1,
              title: 'Encuesta de Satisfacción de Clientes',
              path: 'assets/documents/11.pqr/encuesta_satisfaccion_clientes.pdf'
            },
            {
              id: 2,
              title: 'Registro de Peticiones, Quejas y Reclamos (PQR)',
              path: 'assets/documents/11.pqr/registro_de_pqr.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'aseguramiento_metrologico_y_verificacion',
      name: 'Aseguramiento Metrológico y Verificación',
      path: '/aseguramiento_metrologico_y_verificacion',
      section: [
        {
          id: 1,
          name: 'Documentos de Aseguramiento Metrológico y Verificación',
          files: [
            {
              id: 1,
              title: 'Ángulo de Inclinación de Grafil',
              path: 'assets/documents/12.aseguramiento_metrologico_y_verificacion/angulo_inclinacion_grafil.pdf'
            },
            {
              id: 2,
              title: 'Aseguramiento Metrológico 2021',
              path: 'assets/documents/12.aseguramiento_metrologico_y_verificacion/aseguramiento_metrologico_2021.pdf'
            },
            {
              id: 3,
              title: 'Control de Diámetro Bulones de Doblado',
              path: 'assets/documents/12.aseguramiento_metrologico_y_verificacion/control_diametro_bulones.pdf'
            },
            {
              id: 4,
              title: 'Control Instrumentos de Medición',
              path: 'assets/documents/12.aseguramiento_metrologico_y_verificacion/control_instrumentos_de_medicion.pdf'
            },
            {
              id: 5,
              title: 'Fechas de Calibración',
              path: 'assets/documents/12.aseguramiento_metrologico_y_verificacion/fechas_de_calibracion.pdf'
            }
          ]
        }
      ]
    },
    {
      code: 'auditorias',
      name: 'Auditorías',
      path: '/auditorias',
      section: [
        {
          id: 1,
          name: 'Documentos de Auditoría',
          files: [
            {
              id: 1,
              title: 'Comparativo Ejemplo',
              path: 'assets/documents/13.auditorias/comparativo_ejemplo.pdf'
            },
            {
              id: 2,
              title: 'Comparativo Laboratorio CDA-CONCRELAB',
              path: 'assets/documents/13.auditorias/comparativo_cda_concrelab.pdf'
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

  getFileByRepoAndId(codeRepo:string | null, idSection: string | null, idFile: string | null): FileGeneric | undefined{
    let repo = this.getRepoByCode(codeRepo);
    let section = repo?.section.find(sect => {
      return String(sect.id) == idSection;
    });
    return section?.files.find(file => {
      return String(file.id) == idFile
    })
  }
}
