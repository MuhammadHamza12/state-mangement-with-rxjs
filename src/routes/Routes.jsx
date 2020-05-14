import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FirstPerson from '../components/FirstPerson';
import SwitchBetweenPerson from '../components/SwitchBetweenPerson';
import SecondPerson from '../components/SecondPerson';
import Layout from '../components/Layout/Layout';
export default function Routes(props) {
  return (
    <React.Fragment>
      <Layout>
      <Switch>
      <Route exact component={FirstPerson} path={'/'}  />
      <Route component={SecondPerson} path={'/Second'}  />
      </Switch>
      </Layout>
    </React.Fragment>
    )
}
