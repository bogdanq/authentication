import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import propTypes from "prop-types";

import Preview from "../../ui/organisms/Preview";
import Input from "../../ui/atoms/Input";
import * as actions from "../../redux/auth/actions";
import styles from "./index.css";

class SignUp extends Component {
  state = {
    inputLogin: { value: "", error: "" },
    inputPass: { value: "", error: "" },
    inputName: { value: "", error: "" },
    inputLast: { value: "", error: "" }
  };

  render() {
    const { inputLogin, inputPass, inputLast, inputName } = this.state;
    const { actions, isLoad, authError } = this.props;
    const text = "Пройдите удобную, пошаговую и быструю регистрацию";

    return (
      <div className={styles.signin}>
        <Preview
          color="#0A64A4"
          title="Зарегистрируйтесь у нас"
          description={text}
        />
        <div className={styles.body}>
          <h1>Пожалуйста Зарегистрируйтесь</h1>
          <form className={styles.log}>
            <Input
              text="Логин"
              typeInput="text"
              value={inputLogin.value}
              updateField={e => this.updateInput("inputLogin", e.target.value)}
              placeholder="login"
              error={inputLogin.error}
            />

            <Input
              text="Пароль"
              typeInput="text"
              value={inputPass.value}
              updateField={e => this.updateInput("inputPass", e.target.value)}
              placeholder="password"
              error={inputPass.error}
            />

            <Input
              text="Введите имя"
              typeInput="text"
              value={inputName.value}
              updateField={e => this.updateInput("inputName", e.target.value)}
              placeholder="Name"
              error={inputName.error}
            />

            <Input
              text="Введите фамилию"
              typeInput="text"
              value={inputLast.value}
              updateField={e => this.updateInput("inputLast", e.target.value)}
              placeholder="last name"
              error={inputLast.error}
            />
            <button
              type="submit"
              onClick={this.submit}
              className={isLoad ? styles.load : styles.logButton}
            >
              Регистрация1
            </button>
          </form>
        </div>
      </div>
    );
  }

  submit = e => {
    const { inputLogin, inputPass, inputName, inputLast } = this.state;
    e.preventDefault();

    this.props.actions.signUp(
      inputLogin.value,
      inputPass.value,
      inputName.value,
      inputLast.value
    );
  };

  updateInput = (name, value) => {
    this.setState({
      [name]: { ...this.state[name], value: value }
    });
  };
}

SignUp.propTypes = {
  actions: propTypes.object.isRequired,
  authError: propTypes.string,
  isLoad: propTypes.bool
};

SignUp.defaultProps = {
  authError: "",
  isLoad: false
};

const mapStateToProps = state => ({
  isLoad: state.auth.isLoad,
  authError: state.auth.authError
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
