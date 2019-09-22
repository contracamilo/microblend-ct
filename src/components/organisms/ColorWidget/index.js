import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColors } from '../../../../store/actions/colorActions/referenceActions';
import ColorBox from '../../atoms/ColorBox';
import ColorGrid from '../../molecules/ColorGrid';
import Loader from '../../atoms/Loader';

class ColorWidget extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getColors(this.props.defaultValue);
  }

  handleChange(e) {
    const { getColors } = this.props;
    getColors(e.target.value);
  }

  renderGrid() {
    const { colors, error, loading } = this.props.colors;
    if (error) return 'Fatal';
    if (!colors.length || loading) return <Loader />;
    return (
      <ColorGrid>
        {colors.map((color) => <ColorBox key={color.fandeckid} {...color} />)}
      </ColorGrid>
    );
  }


  render() {
    return (
      <>
        <div>{this.renderGrid()}</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="selectColor">
            <select name="selectColor" value={this.props.defaultValue} onChange={this.handleChange}>
              <option>Selecciona un color aquí</option>
              <option value="173%2C216%2C230">Azul</option>
              <option value="128%2C0%2C128">Purpura</option>
              <option value="255%2C255%2C0">Amarillo</option>
              <option value="255%2C140%2C0">Naranja</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}


const mapStateToProps = (reducer) => ({
  ...reducer,
  defaultValue: '219%2C58%2C110'
});

export default connect(mapStateToProps, { getColors })(ColorWidget);
