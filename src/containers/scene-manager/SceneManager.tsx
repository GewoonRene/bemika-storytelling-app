import React, { PureComponent } from 'react';
import * as Pixi from 'pixi.js';

type ManagerProps = {
  children: PIXI.Sprite[];
}

class SceneManager extends PureComponent<ManagerProps> {
  private app: Pixi.Application | undefined;
  private gameCanvas: HTMLDivElement | undefined;
  private container: Pixi.Container | undefined;

  public componentDidMount(): void {
    this.app = new Pixi.Application({
      resolution: 1,
      width: window.innerWidth, height: window.innerHeight,
      backgroundColor: 0xfffffff,
      antialias: true
    });
    this.container = new Pixi.Container();
    this.gameCanvas.appendChild(this.app.view);
    this.app.stage.addChild(this.container);
    this.assignSceneToRenderer(this.props.children);

    this.app.start();
  };

  public componentWillUnmount(): void {
    this.app.stop();
  };

  public assignSceneToRenderer = (scenes: PIXI.Sprite[]): void => {
    scenes.map((sprite: PIXI.Sprite, _i: number) => {
      this.container.addChild(sprite);
    })
  };

  public render(): JSX.Element {
    return (
      <div ref={(div: HTMLDivElement) => {
        this.gameCanvas = div;
      }} >

      </div>
    );
  };

}

export default SceneManager;