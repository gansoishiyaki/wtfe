import 'phaser';
import { StartScene } from "./class/scene/start"

//あとでコメントアウトを解除する
//import Scenes from './scenes/scenes';

//コンフィグ
const config = {
  //画面サイズ
  width: 32*6,
  height: 32*11,
  type: Phaser.AUTO,
  pixelArt: true,
  //ゲーム画面を描画するcanvasを書き出す先
  parent: 'game',
  //ゲーム画面を伸縮して表示させるための設定
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
  },

  scene: [StartScene],
};

//HTMLがロードされた後にインスタンスを生成する
window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});