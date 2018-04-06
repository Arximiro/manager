import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';

import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress = () => {
    const { name, phone, shift} = this.props;
    const { uid } = this.props.employee;
    
    this.props.employeeSave({name, phone, shift, uid});
  };

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onRemove = () => {
    this.setState({visible: !this.state.visible});
  };

  onAccept = () => {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid })
  };

  onDecline = () => {
    this.setState({visible: !this.state.visible});
  };

  render() {
    const { name } = this.props;
    return (
      <Card>
        <EmployeeForm />
        
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onRemove}>
            Remove {name}
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.visible}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to remove {name} from your employee list?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
