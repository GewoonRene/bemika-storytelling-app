
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';



export const App = (): JSX.Element => (
  <Fragment>

  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));