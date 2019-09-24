import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({
  disabled,
  active,
  type,
  block,
  modalWidth,
  inGroup,
  blockInResponsive,
  size, className,
  id,
  typeBtn,
  action,
  children,
}) => {
  const buttonClassName = classnames(
    'btn',
    { 'btn-disabled': disabled },
    { [`btn-${type}`]: !disabled },
    { [`btn-${type}--active`]: active },
    { 'btn-block': block },
    { 'btn-modal': modalWidth },
    { 'btn-group': inGroup },
    { 'btn-block': block },
    { 'btn-block-responsive': blockInResponsive },
    { [`btn-${size}`]: size },
    { 'body-medium-small': size === 'sm' },
    className
  );
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      id={id}
      type={typeBtn}
      className={buttonClassName}
      disabled={disabled}
      onClick={action}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
  block: PropTypes.bool,
  blockInResponsive: PropTypes.bool,
  modalWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  inGroup: PropTypes.bool,
  className: PropTypes.string,
  typeBtn: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.string,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  disabled: false,
  active: false,
  block: false,
  blockInResponsive: false,
  modalWidth: false,
  inGroup: false,
  className: '',
  typeBtn: 'button',
  type: 'primary',
  size: 'md',
};

export default Button;
