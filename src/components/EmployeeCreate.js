import React, { Component } from 'react';

import { Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="name"
          />
        </CardSection>

        <CardSection>
          <Input
            label="phone"
            placeholder="123-456-7890"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
