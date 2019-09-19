/***EVENTOS PARA CONSULTA DE CLIENTES Y SUS DETALLES */
export const CLIENTES = { get: 'getClientes', take: 'takeClientes'};
export const DATOSCLI = {get:'getDatosCliente',take:'takeDatosCliente'};
export const CONTACTOSCLI={get:'getContactosCliente',take:'takeContactosCliente'}
export const USUARIOSCLI={get:'getUsuariosCliente',take:'takeUsuariosCliente'}
export const ZONASCLI={get:'getZonasCliente',take:'takeZonasCliente'}
export const NOTASCLI={get:'getNotasCliente',take:'takeNotasCliente'}

/**EVENTOS PARA CHARTS */
export const EVENTOSXOPDIARIO={get:'getEventosxOp',take:'takeEventosxOp'}
export const EVENTOSXOPMENSUAL={get:'getEventosxOpMensuales',take:'takeEventosxOpMensuales'}


/**EVENTOS PARA MAPA */
export const MARKERSMAPA={get:'getLatLonMap',take:'takeLatLonMap'}

/**EVENTOS PARA TABLAS */
export const ZAS={get:'getZAS',take:'takeZAS'}
export const ZAD={get:'getZAD',take:'takeZAD'}


/** EVENTOS PARA OLAP */
export const OLAPEXO={get:'genOLAPExO',take:'takeOLAPExO',filename:'OLAPEXO',title:'Eventos por operador',comments:'Este reporte muestra los eventos cerrados en el mes por cada operador.',engine:'mysql'}
export const OLAPEMT = { get: 'genOLAPEMT', take: 'takeOLAPEMT',filename:'OLAPEMT',title:'Eventos mal tratados',comments:'Este reporte muestra los eventos mal tratados en el mes.',engine:'mysql' }
export const OLAPTRM = { get: 'genOLAPTRM', take: 'takeOLAPTRM',filename:'OLAPTRM',title:'Tiempo de respuesta',comments:'Este reporte muestra los tiempos de respuesta respecto al envio de moviles a eventos.',engine:'mysql'}
export const OLAPMS = { get: 'genOLAPMS', take: 'takeOLAPMS',filename:'OLAPMS',title:'Movil auditoria semanal',comments:'Este reporte muestra la auditoria semanal de moviles.',engine:'mysql'}
export const OLAPMM = { get: 'genOLAPMM', take: 'takeOLAPMM',filename:'OLAPMM',title:'Movil auditoria semanal',comments:'Este reporte muestra la auditoria mensual de moviles.',engine:'mysql'}
export const OLAPZAS = { get: 'genOLAPZAS', take: 'takeOLAPZAS',filename:'OLAPZAS',title:'Zonas anuladas semanal',comments:'Este reporte muestra las anulaciones de zonas en la semana.',engine:'mysql'}
export const OLAPZAD = { get: 'genOLAPZAD', take: 'takeOLAPZAD',filename:'OLAPZAD',title:'Zonas anuladas diiarias',comments:'Este reporte muestra las anulaciones de zonas en el dia.',engine:'mysql'}
export const OLAPFAXC = { get: 'genOLAPFAxC', take: 'takeOLAPFAxC',filename:'OLAPFAXC',title:'Falsas alarmas por cuenta',comments:' Este reporte muestra las falsas alarmas en cada cuenta.',engine:'mysql'}
export const OLAPLILO={get:'genOLAPLiLo',take:'takeOLAPLiLo',filename:'OLAPLILO',title:'Avaya Log in Log out',comments:'Este reporte muestra las inicio de sesion en un rango de tiempo por operador.',engine:'mssql'};
export const OLAPLLENT={get:'genOLAPLLent',take:'takeOLAPLLent',filename:'OLAPLLENT',title:'Avaya llamadas entrantes',comments:'Este reporte muestra entrantes en un rango de tiempo.',engine:'mssql'};
export const OLAPMSA={get:'genOLAPMSAct',take:'takeOLAPMSAct',filename:'OLAPMSA',title:'Avaya Minutos sin actividad',comments:'Este reporte muestra los horarios de logueo y deslogueo con el respectivo tiempo de descanso de cada operador.',engine:'mssql'};


export const REPORTS=[OLAPEXO,OLAPEMT,OLAPFAXC,OLAPLILO,OLAPLLENT,OLAPMM,OLAPMS,OLAPMSA,OLAPTRM,OLAPZAD,OLAPZAS]