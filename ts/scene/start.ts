export class StartScene extends Phaser.Scene {
  create() {
    let text = this.add.text(100, 100, 'Phaser 3').setFontSize(64).setColor('#ff0');
  }
}