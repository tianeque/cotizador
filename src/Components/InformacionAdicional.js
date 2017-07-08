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
    console.log(this.calculos.tirajeTeorico())
    return (
      <div>
        <h3>Información Adicional</h3>
        <TextField
          id="tirajeTeorico"
          hintText="Ingrese la tirajeTeorico"
          floatingLabelText="tirajeTeorico"
          onChange={this.handleChange}
          value={this.calculos.tirajeTeorico()}
        />
        <TextField
          id="tirajereal"
          hintText="Ingrese la tirajereal"
          floatingLabelText="tirajereal"
          onChange={this.handleChange}
          value={this.calculos.tirajeReal()}
        />
        <TextField
          id="costoPapel"
          hintText="Ingrese la costoPapel"
          floatingLabelText="costoPapel"
          onChange={this.handleChange}
          value={this.calculos.costoPapel()}
        />
        <TextField
          id="costoImpresionPapel"
          hintText="Ingrese la costoImpresionPapel"
          floatingLabelText="costoImpresionPapel"
          onChange={this.handleChange}
          value={this.calculos.costoImpresionPapel()}
        />
        <TextField
          id="costoImpresionMO"
          hintText="Ingrese la costoImpresionMO"
          floatingLabelText="costoImpresionMO"
          onChange={this.handleChange}
          value={this.calculos.costoImpresionMO()}
        />
        <TextField
          id="costoAlzado"
          hintText="Ingrese la costoAlzado"
          floatingLabelText="costoAlzado"
          onChange={this.handleChange}
          value={this.calculos.costoAlzado()}
        />
        <TextField
          id="costoSeparado"
          hintText="Ingrese la costoSeparado"
          floatingLabelText="costoSeparado"
          onChange={this.handleChange}
          value={this.calculos.costoSeparado()}
        />
        <TextField
          id="costoCorcheteado"
          hintText="Ingrese la costoCorcheteado"
          floatingLabelText="costoCorcheteado"
          onChange={this.handleChange}
          value={this.calculos.costoCorcheteado()}
        />
        <TextField
          id="costoCorte"
          hintText="Ingrese la costoCorte"
          floatingLabelText="costoCorte"
          onChange={this.handleChange}
          value={this.calculos.costoCorte()}
        />
        <TextField
          id="costoPerforado"
          hintText="Ingrese la costoPerforado"
          floatingLabelText="costoPerforado"
          onChange={this.handleChange}
          value={this.calculos.costoPerforado()}
        />
        <TextField
          id="costoTerminado"
          hintText="Ingrese la costoTerminado"
          floatingLabelText="costoTerminado"
          onChange={this.handleChange}
          value={this.calculos.costoTerminado()}
        />

        <TextField
          id="costoOperacional"
          hintText="Ingrese la costoOperacional"
          floatingLabelText="costoOperacional"
          onChange={this.handleChange}
          value={this.calculos.costoOperacional()}
        />
        <TextField
          id="costoGG"
          hintText="Ingrese la costoGG"
          floatingLabelText="costoGG"
          onChange={this.handleChange}
          value={this.calculos.costoGG()}
        />
        <TextField
          id="costoTotal"
          hintText="Ingrese la costoTotal"
          floatingLabelText="costoTotal"
          onChange={this.handleChange}
          value={this.calculos.costoTotal()}
        />
        <TextField
          id="costoImpuesto"
          hintText="Ingrese la costoImpuesto"
          floatingLabelText="costoImpuesto"
          onChange={this.handleChange}
          value={this.calculos.costoImpuesto()}
        />
        <TextField
          id="Utilidad"
          hintText="Ingrese la Utilidad"
          floatingLabelText="Utilidad"
          onChange={this.handleChange}
          value={this.calculos.utilidadObtenida()}
        />
      </div>
    );
  }
}

export default Parametros
