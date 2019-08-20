import PostalCode from "./postalCodeService";

let postalService = [
  new PostalCode(
    "44100",
    "Guadalajara Centro",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    true
  ),
  new PostalCode(
    "44110",
    "Vallarta Poniente",
    "Fraccionamiento",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Rural",
    3,
    false
  ),
  new PostalCode(
    "44120",
    "Arcos Vallarta",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    false
  ),
  new PostalCode(
    "44130",
    "Arcos",
    "Fraccionamiento",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    true
  ),
  new PostalCode(
    "44140",
    "Obrera Centro",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Rural",
    3,
    true
  ),
  new PostalCode(
    "44150",
    "Lafayette",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    false
  ),

  new PostalCode(
    "44160",
    "Barrera",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    true
  ),
  new PostalCode(
    "44158",
    "Deitz",
    "Colonia",
    "Guadalajara",
    "Jalisco",
    "Guadalajara",
    "Urbano",
    3,
    false
  )
];

export function getListPostalCodes() {
  return postalService;
}

export function getZones() {
  return [{ _id: 1, name: "Urbano" }, { _id: 2, name: "Rural" }];
}

const estados = [
  { _id: 1, name: "Aguascalientes" },
  { _id: 2, name: "Baja California" },
  { _id: 3, name: "Baja California Sur" },
  { _id: 4, name: "Campeche" },
  { _id: 5, name: "Chiapas" },
  { _id: 6, name: "Chihuahua" },
  { _id: 7, name: "Ciudad de México" },
  { _id: 8, name: "Colima" },
  { _id: 9, name: "Jalisco" },
  { _id: 10, name: "Nayarit" },
  { _id: 11, name: "Oaxaca" },
  { _id: 12, name: "Puebla" },
  { _id: 13, name: "Queretaro" }
];

export function getListaEstadosDelPais() {
  return estados;
}

export function savePostalCode(postalCode) {
  let postalCodeInDB =
    postalService.find(p => p.codigo === postalCode.codigo) || {};
  //Save postalCode data in postalCodeInDB object!
  if (!postalCodeInDB.asentamiento)
    postalCodeInDB.asentamiento = { asentamiento: "", tipoAsentamiento: "" };
  postalCodeInDB.asentamiento.asentamiento = postalCode.asentamiento;
  postalCodeInDB.asentamiento.tipoAsentamiento = postalCode.tipoAsentamiento;

  postalCodeInDB.municipio = postalCode.municipio;
  postalCodeInDB.estado = postalCode.estado;

  if (!postalCodeInDB.ciudad)
    postalCodeInDB.ciudad = { ciudad: "", zona: "", claveCiudad: "" };
  postalCodeInDB.ciudad.ciudad = postalCode.ciudad;
  postalCodeInDB.ciudad.zona = postalCode.zona;
  postalCodeInDB.ciudad.claveCiudad = postalCode.clave;

  //Check if postalCodeInDB object has the property "codigo" if it doesnt, it means that it is a new postal code... so, we need to save it!
  if (!postalCodeInDB.codigo) {
    postalCodeInDB.codigo = postalCode.codigo;
    postalService.push(postalCodeInDB);
  }

  return postalCodeInDB;
}

export function getPostalCode(codePostalCode) {
  return postalService.find(postalCode => postalCode.codigo === codePostalCode);
}

export function deletePostalCode(postalCode) {
  postalService = postalService.filter(postCode => {
    return postCode.codigo !== postalCode.codigo;
  });
}
