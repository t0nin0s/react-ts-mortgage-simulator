import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
const styles = require('./button.css');

interface ButtonProps {
  id: string;
  color?: string | boolean;
  icon: string;
  value: string;
  text: string;
  handleOnChange: (event: React.MouseEvent<HTMLInputElement>) => void;
  large?: boolean;
}

const MyButton: React.SFC<ButtonProps> = (props) => {
  let buttonStyle: string;
  if (props.large) {
    buttonStyle = [styles.button, styles.fullWidth].join(' ');
  } else {
    buttonStyle = [styles.button, styles.halfWidth].join(' ');
  }
  return (
    <button
      className={buttonStyle}
      id={props.id}
      value={props.value}
      onClick={props.handleOnChange}
    >
      <span
        className={styles.button__text}
      >
        {props.text}
      </span>
      <span className={styles.button__icon}>
        <FontAwesome
          value={props.value}
          name={props.icon}
          size="3x"
          style={{ color: props.color }}
        />
      </span>
    </button>
  );
};

export default MyButton;
