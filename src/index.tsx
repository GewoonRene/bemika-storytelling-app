
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';
// @ts-ignore
import BlackBird from './assets/sprites/blackbird.svg';

import SceneManager from "./containers/scene-manager/SceneManager";
import Scene from "./containers/scene-manager/components/Scene";

export const App = (): JSX.Element => (
  <Fragment>
    <SceneManager children={[
      Scene({ imgPath: "../assets/blackbird.svg" })
    ]} />
    <img src={BlackBird} alt="oke"/>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));