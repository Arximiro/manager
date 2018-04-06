import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    const { pickerText } = styles;

    return (
      <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="name"
          value={name}
          onChangeText={text => employeeUpdate({ prop: "name", value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="123-456-7890"
          value={phone}
          onChangeText={text => employeeUpdate({ prop: "phone", value: text })}
        />
      </CardSection>

      <CardSection style={{flexDirection: 'column'}}>
        <Text style={pickerText}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={day => employeeUpdate({ prop: "shift", value: day })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
    );
  }
}

const styles = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 10
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
