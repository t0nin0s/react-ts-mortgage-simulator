import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import Card from '../../components/Card/Card';
import MyButton from '../../components/Button/Button';
const styles = require('../signupForm.css');

interface SignupFormGenderProps {
  gender: string;
  handleOnChange: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

class SignupFormGender extends React.Component<SignupFormGenderProps, { error: boolean } > {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  validate = () => {
    if (this.props.gender) {
      this.setState({
        error: false
      });
      this.props.handleNext();
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <Card
        formTitle="Sign up"
        icon="question-circle-o"
        footer={true}
      >
        <div className={styles.form__question}>
          Please tell us your gender...
        </div>
        <div className={styles.form__body}>
          <MyButton
            id="gender"
            value="male"
            text="Male"
            icon="mars"
            large={true}
            handleOnChange={this.props.handleOnChange}
          />
          <MyButton
            id="gender"
            value="female"
            text="Female"
            icon="venus"
            large={true}
            handleOnChange={this.props.handleOnChange}
          />
        </div>
        { this.state.error &&
          <div className={styles.error_message}>
            Please select first your gender...
          </div>
        }
        <div className={styles.form__submit}>
          <FontAwesome
            name="arrow-circle-right"
            size="3x"
            style={{ color: '#ECECEC' }}
            onClick={this.validate}
          />
        </div>
      </Card>
    );
  }
}

export default SignupFormGender;
