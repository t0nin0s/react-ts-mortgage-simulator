import * as React from 'react';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';
import Card from '../../components/Card/Card';
import * as FontAwesome from 'react-fontawesome';
const styles = require('../signupForm.css');

interface SignupFormPersonalProps {
    title: string;
    name: string;
    surname: string;
    handleOnChange: (event: any) => void;
    handleNext: () => void;
}

class SignupFormPersonal extends React.Component<SignupFormPersonalProps, { error: boolean } > {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
  }

  validate = () => {
    let error = false;
    let inputs = {
      title: this.props.title,
      name: this.props.name,
      surname: this.props.surname
    };
    Object.entries(inputs).forEach(([key, value]) => {
      if (!value) {
        error = true;
        this.setState({
          error: error
        });
      }
    });

    if (!error) {
      this.props.handleNext();
    }
  }

  render () {
    return (
      <Card
        formTitle="Sign up"
        icon="address-card-o"
        footer={true}
      >
        <div className={styles.form__question}>
          Please tell us your name...
        </div>
        <form className={styles.form__body} onSubmit={() => this.handleSubmit}>
          <FormGroup>
            <FormControl
              value={this.props.title}
              onChange={this.props.handleOnChange}
              id="title"
              type="String"
              componentClass="select"
              placeholder="Select your title"
            >
              <option value="">Select your title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl
              value={this.props.name}
              onChange={this.props.handleOnChange}
              className="form-control"
              id="name"
              type="string"
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              value={this.props.surname}
              onChange={this.props.handleOnChange}
              className="form-control"
              id="surname"
              type="string"
              placeholder="Surname"
            />
          </FormGroup>
          { this.state.error &&
            <div className={styles.error_message}>
              Please select first your gender...
            </div>
          }
          <div className={styles.form__submit}>
            <FontAwesome
              name="arrow-circle-right"
              size="3x"
              style={{ color: '#ECECEC'}}
              onClick={this.validate}
            />
          </div>
        </form>
      </Card>
    );
  }
}

export default SignupFormPersonal;
