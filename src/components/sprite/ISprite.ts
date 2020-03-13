
export declare type SpriteOptions = {
  path: string,
  classname?: string
}

export abstract class ISprite {

  public state: SpriteOptions = {
    path: ""
  };

  protected constructor(cfg: SpriteOptions) {
    this.state.path = cfg.path;
  }

}