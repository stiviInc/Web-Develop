import PostalCode from "./postalCodeService";

const postalService = [
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
