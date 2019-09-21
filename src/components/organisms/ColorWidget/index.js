import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColors } from '../../../../store/actions/colorActions/referenceActions';
import ColorBox from '../../atoms/ColorBox';
import { Button } from '../../atoms/button';


class ColorWidget extends Component {
  componentDidMount() {
    this.props.getColors();
  }


  render() {
    const { usuarios } = this.props.colors;
    console.log(usuarios);
    return (
      <div>
        <h1>Usuarios</h1>
        <Button onclick={this.paintColors}>
          Hola
        </Button>
      </div>
    );
  }
}


const mapStateToProps = (reducer) => ({ ...reducer });

export default connect(mapStateToProps, { getColors })(ColorWidget);
