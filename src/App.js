import React, { Component } from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout'
import Parametros from './Components/Parametros'
import Precios from './Components/Precios'
import InformacionAdicional from './Components/InformacionAdicional'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(){
    super()
    this.state = {
      cantidad:'1000',
      multiplicidad: 2,
      moldes: 4,
      untal: 50,
      diseno: 1000,
      gg:0.65,
      utilidad: 0.5,
      impuesto: 0.26,
      valorResma: 2900,
      hojasPorResma: 500,
      valorImpresion: 1.6,
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>

          <div key="a" data-grid={{x: 0, y: 0, w: 4, h: 2, static: true}}>
            <Parametros {...this.state}/>
          </div>

          <div key="b" data-grid={{x: 4, y: 0, w: 4, h: 2, minW: 2, maxW: 4}}>
            <Precios {...this.state}/>
          </div>

          <div key="c" data-grid={{x: 8, y: 0, w: 4, h: 2}}>
            <InformacionAdicional {...this.state}/>
          </div>

        </ReactGridLayout>
      </MuiThemeProvider>
    );
  }
}

export default App;
