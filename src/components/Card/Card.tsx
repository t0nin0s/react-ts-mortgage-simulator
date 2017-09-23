import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
const styles = require('./Card.css');

interface CardProps {
  formTitle: string;
  icon: string;
  footer?: boolean;
}

const Card: React.SFC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        {props.formTitle}
      </div>
      <div className={styles.card__icon}>
        <FontAwesome
          name={props.icon}
          size="4x"
          style={{ color: '#A06FEF' }}
        />
      </div>
      <div className={styles.card__options}>
        {props.children}
      </div>
      <div className={styles.card__footer}>
        { props.footer &&
          'Why do you need this?'
        }
      </div>
    </div>
  );
};

export default Card;
