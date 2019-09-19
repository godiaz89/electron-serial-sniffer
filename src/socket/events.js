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
export const OLAPEXO={get:'genOLAPExO',take:'takeOLAPExO'}
export const OLAPEMT = { get: 'genOLAPEMT', take: 'takeOLAPEMT' }
export const OLAPTRM = { get: 'genOLAPTRM', take: 'takeOLAPTRM'}
export const OLAPMS = { get: 'genOLAPMS', take: 'takeOLAPMS'}
export const OLAPMM = { get: 'genOLAPMM', take: 'takeOLAPMM'}
export const OLAPOZAS = { get: 'genOLAPZAS', take: 'takeOLAPZAS'}
export const OLAPOZAD = { get: 'genOLAPZAD', take: 'takeOLAPZAD'}
export const OLAPFAXC = { get: 'genOLAPFAxC', take: 'takeOLAPFAxC'}