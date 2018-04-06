import React from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} titleStyle={{ alignSelf: 'center' }} title="Please Login" initial />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            rightButtonStyle={{ right: 0 }}
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>

      </Stack>
    </Router>
  );
};

export default RouterComponent;

// hideNavBar hides the extra navBar that is the result of having multiple scenes nested in the root.
// initial determines the default scene when the app is loaded.
