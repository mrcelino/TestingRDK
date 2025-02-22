import { AUTO, Game } from 'phaser';
import { Menu } from './[scene]/main-menu';
import { GameScene } from './[scene]/game';
import { Preloader } from './[scene]/Preloader';
import { papan } from './[scene]/papan';
import { Masjid } from './[scene]/Masjid';
import { Textbox } from './[scene]/Textbox';
import { Pause } from './[scene]/Pause';
import { Ending } from './[scene]/Ending';
import rexVirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin';
import { ControllerScene } from './[scene]/ControllerScene';
import { MusicScene } from './[scene]/MusicScene';

import { TutorialScene } from './[scene]/Tutorial';
import { Escape } from './[scene]/Escape';
//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig




const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    parent: "game-containter",
    width: 1024,
    height: 708,
    scale: {
        mode: Phaser.Scale.FIT,
    },
    plugins: {
        global: [
            { key: "rexVirtualJoystickPlugin", plugin: rexVirtualJoystickPlugin, start: true }
        ],
        scene: []
    },
    backgroundColor: '#028af8',
    render: {
        pixelArt: true,
    },
    scene: [
        Preloader,
        Menu,
        GameScene,
        papan,
        Masjid,
        Textbox,
        Pause,
        Ending,
        ControllerScene,
        MusicScene,
        TutorialScene,
        Escape
    ],
    physics: {
        default: 'Arcade',
        arcade: {
            debug: false
        }
    },
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;