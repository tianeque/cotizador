
class Calculos {
  constructor(props){
      this.cantidad = props.cantidad
      this.multiplicidad = props.multiplicidad
      this.moldes = props.moldes
      this.untal = props.untal
      this.sobrantes = 10
      this.diseno = props.diseno
      this.gg = props.gg
      this.utilidad = props.utilidad
      this.impuesto = props.impuesto
      this.valorResma = props.valorResma
      this.hojasPorResma = props.hojasPorResma
      this.valorImpresion = props.valorImpresion
      this.pagoOperacionesMenores = 15
      this.pagoImpresion = 1600
      this.pagoAlzado = 600
  }
  tirajeTeorico() {
  	return this.cantidad * this.multiplicidad / this.moldes
  }
  tirajeReal(){
    return this.tirajeTeorico() + this.sobrantes * this.multiplicidad
  }
  costoPorHoja(){
    return this.valorResma/this.hojasPorResma
  }
  costoPapel(){
    return Math.round(this.costoPorHoja()*this.tirajeReal())
  }
  costoImpresionPapel(){
    return this.valorImpresion * this.tirajeReal()
  }
  costoImpresionMO(){
    return this.pagoImpresion * this.redondeoA1000(this.cantidad)/1000
  }
  costoAlzado(){
    return this.pagoAlzado * this.redondeoA1000(this.cantidad)/1000
  }
  costoSeparado(){
    return this.cantidad/this.untal*this.pagoOperacionesMenores
  }
  costoCorcheteado(){
    return this.cantidad/this.untal*this.pagoOperacionesMenores
  }
  costoCorte(){
    return this.cantidad/this.untal*this.pagoOperacionesMenores
  }
  costoPerforado(){
    return this.pagoAlzado * this.redondeoA1000(this.cantidad)/1000
  }
  costoTerminado(){
    return this.cantidad/this.untal*this.pagoOperacionesMenores
  }
  costoDiseno(){
    return this.diseno
  }
  costoOperacional(){
    return  this.costoDiseno() +
            this.costoPapel() +
            this.costoImpresionPapel() +
            this.costoImpresionMO() +
            this.costoAlzado()+
            this.costoSeparado() +
            this.costoCorcheteado() +
            this.costoCorte() +
            this.costoPerforado() +
            this.costoTerminado()
  }
  costoGG(){
    return this.costoOperacional() * this.gg
  }
  costoTotal(){
    return Math.round(this.costoOperacional() + this.costoGG())
  }
  utilidadObtenida(){
    return Math.round((this.costoTotal())*this.utilidad)
  }
  costoImpuesto(){
    //Valor de impuesto de primera categoría 26%
    return Math.round((this.utilidadObtenida())*this.impuesto)
  }
  precioNeto(){
    return (this.costoTotal() + this.utilidadObtenida() + this.costoImpuesto())
  }

  precioIva(){
    return this.precioNeto()*1.19
  }

  valorUnitario(){
    return this.precioNeto()/this.cantidad
  }

  redondeoA1000(cantidad){
    if (cantidad < 0) {
      return 0
    }
    if (cantidad % 1000 === 0) {
      return cantidad
    } else {
      return (Math.floor(cantidad/1000) + 1)*1000
    }
  }
}

export default Calculos
