/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import Rect from '../Rect';

const StyledDiv = styled.div`
  && {
    width: 256px;
    height: 128px;
    display: flex;
    flex-flow: row wrap;
  }
`;

function generateColors() {
  const colors = [];
  let index = 0;

  for (let r = 0; r < 256; r += 8) {
    for (let g = 0; g < 256; g += 8) {
      for (let b = 0; b < 256; b += 8) {
        colors.push({
          id: index,
          code: `rgb(${r},${g},${b})`,
        });
        index += 1;
      }
    }
  }
  return colors;
}

const renderColor = color => (
  <Rect key={color.id} rectWidth={1} rectHeight={1} colorCode={color.code} />
);

function ColorBox() {
  const [colorCodes] = useState(() => generateColors());

  return <StyledDiv>{colorCodes.map(renderColor)}</StyledDiv>;
}

export default ColorBox;
