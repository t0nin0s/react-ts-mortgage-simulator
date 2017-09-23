import * as React from 'react';
import { connect } from 'react-redux';
import SignupFormPersonal from './signupFormPersonal/SignupFormPersonal';
import SignupFormGender from './signupFormGender/SignupFormGender';
import SignupFormResident from './SignupFormResident/SignupFormResident';
import SignupFormResults from './signupFormResults/SignupFormResults';
import * as actions from '../actions';
import { AppState } from '../state/AppState';

interface SignupFormStateToProps {
  step: number;
  title: string;
  name: string;
  surname: string;
  gender: string;
  resident: string;
}

interface SignupFormDispatchToProps {
  updateField: (input: {value: string; id: string}) => void;
  goToNext: () => void;
}

type SignupFormProps = SignupFormStateToProps & SignupFormDispatchToProps;

class SignupForm extends React.Component<SignupFormProps, {}> {

  onChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const { value, id } = event.currentTarget;
    this.props.updateField({value, id});
  }

  render () {
    switch (this.props.step) {
      case 1:
        return  (
          <SignupFormPersonal
            title={this.props.title}
            name={this.props.name}
            surname={this.props.surname}
            handleOnChange={this.onChange}
            handleNext={this.props.goToNext}
          />
        );
      case 2:
        return (
          <SignupFormGender
            gender={this.props.gender}
            handleOnChange={this.onChange}
            handleNext={this.props.goToNext}
          />
        );
      case 3:
        return (
          <SignupFormResident
            resident={this.props.resident}
            handleOnChange={this.onChange}
            handleNext={this.props.goToNext}
          />
        );
      case 4:
        return (
          <SignupFormResults
            title={this.props.title}
            name={this.props.name}
            surname={this.props.surname}
            gender={this.props.gender}
            resident={this.props.resident}
          />
        );
      default:
        return (
          <div>Loading...</div>
        );
    }
  }
}

export const mapStateToProps: (state: AppState) => SignupFormStateToProps =
(state: AppState) => {
  return {
    step: state.formState.step,
    title: state.formData.title,
    name: state.formData.name,
    surname: state.formData.surname,
    gender: state.formData.gender,
    resident: state.formData.ukResident
  };
};

export const mapDispatchToProps: SignupFormDispatchToProps = ({
  goToNext: actions.goToNext,
  updateField: actions.updateField
});

export default connect<SignupFormStateToProps, SignupFormDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
