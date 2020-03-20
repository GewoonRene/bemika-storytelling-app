import React, {PureComponent} from 'react';
import {ISprite, SpriteOptions} from './ISprite';

export default class Sprite extends PureComponent<SpriteOptions> implements ISprite {

	public state: SpriteOptions = {
		classname: "app-sprite",
		path: "",
	};

	constructor(cfg: SpriteOptions) {
		super(cfg);
	}

	public componentDidMount(): void {
		this.setState({path: this.props.path});
	}

	public static getDerivedStateFromProps(newProps: Readonly<SpriteOptions>, currentState: Readonly<SpriteOptions>) {
		if (newProps.classname === undefined || newProps.path == currentState.path) {
			return null;
		}
		if (currentState.classname !== newProps.classname) {
			return {
				classname: `${currentState.classname} ${newProps.classname}`,
			}
		}
		return null;
	}

	public render(): JSX.Element {
		const {path, classname} = this.state;
		return <img className={classname} src={path} alt={this.props.path}/>
	}

}

