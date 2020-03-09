import { Sprite, Texture } from 'pixi.js'

declare type SceneProps = {
  imgPath: string,
}

const Scene = (props: SceneProps): Sprite => {
  return new Sprite(Texture.from(props.imgPath));
};

export default Scene