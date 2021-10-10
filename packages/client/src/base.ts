export class Api {
  protected parent: null | Api;
  protected url: string;

  protected getUrl(): string {
    return (this.parent?.getUrl() ?? "") + this.url;
  }
}
