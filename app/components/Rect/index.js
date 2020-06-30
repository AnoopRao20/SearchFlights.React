import React from 'react';
import PropTypes from 'prop-types';

function Rect(props) {
  return (
    <div
      style={{
        width: props.rectWidth,
        height: props.rectHeight,
        backgroundColor: props.colorCode,
      }}
    />
  );
}

Rect.propTypes = {
  rectWidth: PropTypes.number,
  rectHeight: PropTypes.number,
  colorCode: PropTypes.string,
};

export default Rect;
