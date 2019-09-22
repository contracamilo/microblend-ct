import React from 'react';

const ColorBox = ({ rgb, colorname }) => {
  const styles = {
    backgroundColor: `rgba(${rgb})`
  };
  return (
    <div className={'box'}>
      <div className={'box--inner'} style={styles}>
        <div>
          <span>
            {colorname}
            <br />
          </span>
          <span>{`RGB:${rgb}`}</span>
        </div>
      </div>
    </div>
  );
};


export default ColorBox;
