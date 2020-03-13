import React, {PureComponent} from 'react';

type SceneManagerProps = {
  children: any
}

export default class SceneManager extends PureComponent<SceneManagerProps> {

  constructor(props: SceneManagerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="app-scene-manager">
        {this.props.children}
      </div>
    );
  };

}