
import React, { Fragment } from "react";
import {render} from "react-dom";
import s from './center.module.less';
import './index.less';

import SceneManager from "@containers/scene-manager/SceneManager";
import Sprite from "@components/sprite/Sprite";

import Petra from './assets/svg/petra.svg';
import Bois from './assets/svg/petraandbois.svg';

/*
 * App Component
 * * * */
export const App = (): JSX.Element => (
  <Fragment>
    <SceneManager>

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
            <Sprite path={Bois}/>
          </div>
        </div>

        <div className={s.story}>
          <div className={s.storyText}>
            <h1>ROBIN ASSISTANT</h1>
            <p>Al dat papierwerk werd Petra te veel. De mappen stapelden op. Op dit moment gebruikt zij Robin Assistant om de taken per client bij te houden. Ze houdt nu ook per client meer tijd over en alles is makkelijk in een schema bij te houden via de telefoon of computer.</p>
          </div>
          <div className={s.firstSprite}>
            <Sprite path={Petra}/>
          </div>
        </div>

      </div>

    </SceneManager>
  </Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));