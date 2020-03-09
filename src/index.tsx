
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import SceneManager from "@/containers/scene-manager/SceneManager";

export const App = (): JSX.Element => (
  <Fragment>

  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));