export default class PostalCode {
  constructor(
    codigo,
    asentamiento,
    tipoAsentamiento,
    municipio,
    estado,
    ciudad,
    zona,
    claveCiudad,
    like
  ) {
    this.codigo = codigo;
    this.asentamiento = {
      asentamiento: asentamiento,
      tipoAsentamiento: tipoAsentamiento
    };
    this.municipio = municipio;
    this.estado = estado;
    this.ciudad = {
      ciudad: ciudad,
      zona: zona,
      claveCiudad: claveCiudad
    };
    this.like = like;
  }
}
