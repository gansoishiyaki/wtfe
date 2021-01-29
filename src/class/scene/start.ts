export class StartScene extends Phaser.Scene {
  create() {
    let text = this.add.text(50, 50, 'Phaser3').setFontSize(32).setColor('#ff0');
  }
}