import React from 'react';
import TextField from 'material-ui/TextField';
import Calculos from './Calculos'


 class Parametros extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  calculos = new Calculos(this.props)

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="precio">
        <h3>Precio</h3>
        <TextField
          id="precioNeto"
          hintText="Ingrese la precioNeto"
          floatingLabelText="precioNeto"
          onChange={this.handleChange}
          value = {this.calculos.precioNeto()}
        />
        <TextField
          id="precioIVA"
          hintText="Ingrese la precioIVA"
          floatingLabelText="precioIVA"
          onChange={this.handleChange}
          value = {this.calculos.precioIva()}
        />
        <TextField
          id="Valor Unitario"
          hintText="Ingrese la Valor Unitario"
          floatingLabelText="Valor Unitario"
          onChange={this.handleChange}
          value = {this.calculos.valorUnitario()}
        />

      </div>
    );
  }
}

export default Parametros
