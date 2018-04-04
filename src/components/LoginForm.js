import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';

import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password });
  };

  renderError = () => {
    const { errorBox, errorMsg } = styles
    if (this.props.error) {
      return (
        <View style={errorBox}>
          <Text style={errorMsg}>{this.props.error}</Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <Button onPress={this.onButtonPress}>
          Login
        </Button>
      );
    }
  };

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="test@example.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            secure={true}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorBox: {
    backgroundColor: 'white'
  },
  errorMsg: {
    fontSize: 20,
    color: 'red'
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
