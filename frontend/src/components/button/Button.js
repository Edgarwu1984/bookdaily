import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  const { title, styles, onClick, onSubmit } = props;

  return (
    <button className={styles} onClick={onClick} onSubmit={onSubmit}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  title: 'Button',
  styles: 'btn_primary',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Button;
