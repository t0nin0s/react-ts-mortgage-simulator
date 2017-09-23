import * as React from 'react';
import Card from '../../components/Card/Card';
const styles = require('../signupForm.css');

interface SignupFormResults {
  title: string;
  name: string;
  surname: string;
  resident: string;
  gender: string;
}

const SignupFormResults: React.SFC<SignupFormResults> = (props) => {
  return (
    <Card
      formTitle="Sign up"
      icon="handshake-o"
      footer={true}
    >
      <div className={styles.form__question}>
        Congratulations! Below is your data
      </div>
      <div className={styles.form__body}>
        <pre>
          {JSON.stringify(props)}
        </pre>
      </div>
      <div className={styles.form__submit} />
    </Card>
  );
};

export default SignupFormResults;
