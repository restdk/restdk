export class BaseNode {
  nodeType?: string;
  text?: string; // 代码字符
  locPath?: string; // 代码块位置 语法 文件路径:行,列

  constructor() {
    this.nodeType = this.constructor.name;
  }
}
