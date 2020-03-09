import React, { PureComponent } from 'react';
import * as Pixi from 'pixi.js';

type IProps = {
  children: JSX.Element[]
};

class SceneManager extends PureComponent<IProps> {
  private app: Pixi.Application | undefined;
  private gameCanvas: HTMLDivElement | undefined;

  constructor(props: Readonly<IProps>) {
    super(props);
  }

  public componentDidMount(): void {
    this.app = new Pixi.Application({ width: window.innerWidth, height: window.innerHeight });
    this.gameCanvas.appendChild(this.app.view);
    this.app.start();
  }

  public componentWillUnmount(): void {
    this.app.stop();
  }

  public render(): JSX.Element {
    const component = this;
    return (
      <div ref={(div: HTMLDivElement) => {
        component.gameCanvas = div;
      }} />
    )
  }

}

export default SceneManager;