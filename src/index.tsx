
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import SceneManager from "@containers/scene-manager/SceneManager";
import Sprite from "@components/sprite/Sprite";

import Blackbird from './assets/blackbird.svg';

/*
 * App Component
 * * * */
export const App = (): JSX.Element => (
  <Fragment>
    <SceneManager>
      <Sprite classname="first" path={Blackbird} />
      <Sprite path={Blackbird} />
    </SceneManager>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));