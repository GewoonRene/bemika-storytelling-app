
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import SceneManager from "@containers/scene-manager/SceneManager";
import Sprite from "@components/sprite/Sprite";

import HeaderColor from './assets/header-color.svg';
import FirstPhone from './assets/Scherm2.svg';
import SecondPhone from './assets/schermagenda.svg';
import RobinAssistant from  './assets/Robin.svg';
import PointerDown from './assets/pointerdown.svg';
import Arrow from './assets/arrow.svg';

/*
 * App Component
 * * * */
export const Daily = (): JSX.Element => (
    <div className="quote">
        YOUR DAILY ASSISTANT
    </div>
);

export const Button = (): JSX.Element => (
  <div className="button">
          <a href="#">IK MELD ME AAN</a>
  </div>
);

export const Scroll = (): JSX.Element => (
  <div className="scrollDown">
      SCROLL OM TE BEGINNEN
  </div>
);

export const App = (): JSX.Element => (
  <Fragment>
    <SceneManager>
      {/*  HEADER*/}
      <Sprite classname="first" path={HeaderColor}/>
      <Sprite classname="robin" path={RobinAssistant}/>
      <Daily />
      <Button />
      <Sprite classname="secondPhone" path={SecondPhone}/>
      <Sprite classname="firstPhone" path={FirstPhone}/>
      <Scroll />
      <Sprite classname="outerPointer" path={PointerDown} />
      <Sprite classname="innerPointer" path={Arrow} />
    {/*  END HEADER*/}
    </SceneManager>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));