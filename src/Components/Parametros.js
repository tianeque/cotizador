import React from 'react';
import TextField from 'material-ui/TextField';
// import Calculos from './Calculos'

 class Parametros extends React.Component {




  handleChange = (event) => {
  };

  render() {
    return (

      <div>
        <h3>Parámetros</h3>
        <TextField
          id="cantidad"
          hintText="Ingrese la cantidad"
          floatingLabelText="Cantidad"
          onChange={this.handleChange}
          value={this.props.cantidad}
        />
        <TextField
          id="multiplicidad"
          hintText="Ingrese la multiplicidad"
          floatingLabelText="multiplicidad"
          onChange={this.handleChange}
          value={this.props.multiplicidad}
        />

        <TextField
          id="moldes"
          hintText="Ingrese la moldes"
          floatingLabelText="moldes"
          onChange={this.handleChange}
          value={this.props.moldes}
        />
        <TextField
          id="unTal"
          hintText="Ingrese la unTal"
          floatingLabelText="unTal"
          onChange={this.handleChange}
          value={this.props.untal}
        />
        <TextField
          id="diseno"
          hintText="Ingrese la diseno"
          floatingLabelText="diseno"
          onChange={this.handleChange}
          value={this.props.diseno}
        />
        <TextField
          id="gg"
          hintText="Ingrese la gg"
          floatingLabelText="gg"
          onChange={this.handleChange}
          value={this.props.gg}
        />
        <TextField
          id="utilidad"
          hintText="Ingrese la utilidad"
          floatingLabelText="utilidad"
          onChange={this.handleChange}
          value={this.props.utilidad}
        />
        <TextField
          id="impuesto"
          hintText="Ingrese la impuesto"
          floatingLabelText="impuesto"
          onChange={this.handleChange}
          value={this.props.impuesto}
        />
        <TextField
          id="hojasPorResma"
          hintText="Ingrese la hojasPorResma"
          floatingLabelText="hojasPorResma"
          onChange={this.handleChange}
          value={this.props.hojasPorResma}
        />
        <TextField
          id="valorResma"
          hintText="Ingrese la valorResma"
          floatingLabelText="valorResma"
          onChange={this.handleChange}
          value={this.props.valorResma}
        />
        <TextField
          id="valorImpresión"
          hintText="Ingrese la valorImpresión"
          floatingLabelText="valorImpresión"
          onChange={this.handleChange}
          value={this.props.valorImpresion}
        />
      </div>
    );
  }
}

export default Parametros
