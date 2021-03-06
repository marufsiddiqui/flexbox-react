import React, { PropTypes } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

class FlexItem extends React.Component {
  styles() {
    return prefixer.prefix({
      alignSelf: this.props.alignSelf,
      flex: this.props.flex,
      flexBasis: this.props.flexBasis,
      flexGrow: this.props.flexGrow,
      flexShrink: this.props.flexShrink,
      height: this.props.height,
      margin: this.props.margin,
      order: this.props.order,
      padding: this.props.padding,
      width: this.props.width,
    });
  }
  render() {
    return (
      <div style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

FlexItem.propTypes = {
  alignSelf: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  children: React.PropTypes.node,
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  height: PropTypes.string,
  margin: PropTypes.string,
  order: PropTypes.number,
  padding: PropTypes.number,
  width: PropTypes.string,
};

export default FlexItem;
