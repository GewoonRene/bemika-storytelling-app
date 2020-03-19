
import React, { Fragment } from "react";
import {render} from "react-dom";
import s from './story.module.less';
import './index.less';

import SceneManager from "@containers/scene-manager/SceneManager";
import Sprite from "@components/sprite/Sprite";

import HeaderColor from './assets/header-color.svg';
import FirstPhone from './assets/Scherm2.svg';
import SecondPhone from './assets/schermagenda.svg';
import RobinAssistant from  './assets/Robin.svg';
import PointerDown from './assets/pointerdown.svg';
import Arrow from './assets/arrow.svg';

import Petra from './assets/svg/hero/petra.svg';
import PetraMobile from './assets/svg/hero/petra-mobile.svg';
import Familie from './assets/svg/hero/familie.svg';
import Rosa from './assets/svg/hero/rosa.svg';
import Levi from './assets/svg/hero/levi.svg';

import Thee from './assets/svg/hero-functions/thee.svg';
import Wekker from './assets/svg/hero-functions/wekker.svg';
import Wasmachine from './assets/svg/hero-functions/wasmachine.svg';
import Rek from './assets/svg/hero-functions/rek.svg';
import Bed from './assets/svg/hero-functions/bed.svg';

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

      {/*  Header*/}
      <Sprite classname="first" path={HeaderColor}/>
      <Sprite classname="robin" path={RobinAssistant}/>
      <Daily />
      <Button />
      <Sprite classname="secondPhone" path={SecondPhone}/>
      <Sprite classname="firstPhone" path={FirstPhone}/>
      <Scroll />
      <Sprite classname="outerPointer" path={PointerDown} />
      <Sprite classname="innerPointer" path={Arrow} />
      {/*  END Header*/}

      <div className={s.storyContainer}>

        <div className={s.story}>
          <div className={s.storyText}>
            <h1>BEGELEIDEN VAN A.S.S</h1>
            <p>Dit is Petra, zij is actief als begeleider met mensen die A.S.S hebben. Mensen begeleiden is haar passie. Al de activiteiten die ze met haar cliënten doet schrijft zij op om alles bij te houden. Soms is het lastig bij te houden door al het papierwerk.</p>
          </div>
          <div className={s.firstSprite}>
            <Sprite path={Petra}/>
          </div>
        </div>

        <div className={s.story}>
          <div className={s.storyText}>
            <h1>BEGELEIDING IS PER CLIENT VERSCHILLEND</h1>
            <p>Elke client heeft een andere dag indeling. Door middel van een planning houdt Petra bij wat ze met een client samen doet. De ene client heeft meer begeleiding nodig dan de andere.</p>
          </div>
          <div className={s.secondSprite}>
            <Sprite path={Familie}/>
          </div>
        </div>

        <div className={s.hero}>
          <div className={s.heroStory}>
            <div className={s.herobanner}>
              <Sprite path={Rosa} />
            </div>
            <div className={s.heroContainer}>
              <div className={s.heroText}>
                <h1>IK BEN ROSA</h1>
                <p>“Ik ben 24 jaar oud en Petra begeleidt mij al een aantal jaren”</p>
              </div>
              <div className={s.heroFunctions}>
                <Sprite path={Wekker} />
                <Sprite path={Bed} />
                <Sprite path={Thee} />
              </div>
            </div>
          </div>

          <div className={s.heroStory}>
            <div className={s.herobanner}>
              <Sprite path={Levi} />
            </div>
            <div className={s.heroContainer}>
              <div className={s.heroText}>
                <h1>IK BEN LEVI</h1>
                <p>“Ik ben 16 jaar oud. Ik krijg begeleiding omdat ik Heller heb”.</p>
              </div>
              <div className={s.heroFunctions}>
                <Sprite classname="function" path={Thee} />
                <Sprite classname="function" path={Rek} />
                <Sprite classname="function" path={Wasmachine} />
              </div>
            </div>
          </div>
        </div>

        <div className={s.story}>
          <div className={s.storyText}>
            <h1>ROBIN ASSISTANT</h1>
            <p>Al dat papierwerk werd Petra te veel. De mappen stapelden op. Op dit moment gebruikt zij Robin Assistant om de taken per client bij te houden. Ze houdt nu ook per client meer tijd over en alles is makkelijk in een schema bij te houden via de telefoon of computer.</p>
          </div>
          <div className={s.firstSprite}>
            <Sprite path={PetraMobile}/>
          </div>
        </div>

      </div>

    </SceneManager>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));