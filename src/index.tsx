
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import SceneManager from "@containers/scene-manager/SceneManager";
import Sprite from "@components/sprite/Sprite";

import HeaderColor from './assets/Rectangle.svg';
import FirstPhone from './assets/Scherm2.svg';
import SecondPhone from './assets/Scherm3.svg';
import RobinAssistant from  './assets/Robin.svg';

/*
 * App Component
 * * * */
export const App = (): JSX.Element => (
  <Fragment>
    <SceneManager>
      <Sprite classname="first" path={HeaderColor}/>
      <Sprite classname="robin" path={RobinAssistant}/>
      <Sprite classname="firstPhone" path={FirstPhone}/>
      <Sprite classname="secondPhone" path={SecondPhone}/>
    </SceneManager>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));