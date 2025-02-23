import { Scene } from "phaser";
import { Control } from "./utils/control";
import rexVirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin';




export class ControllerScene extends Scene
{

    control!: Control;

    constructor()
    {
        super('ControllerScene');
    }

    init( data: {control: Control})
    {
        this.control = data.control;
    }
    preload()
    {
        this.scale.on('enterfullscreen', () => {
            this.sys.canvas.classList.remove('hidden')
            this.sys.canvas.classList.add('block')
            this.scale.refresh()

            this.scene.resume();
        });

        this.scale.on('leavefullscreen', () => {
            this.sys.canvas.classList.remove('block')
            this.sys.canvas.classList.add('hidden')
            this.scene.pause();

        });

        
        const url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);   
    }

    create()
    {   


        const joystickPlugin = (this.plugins.get('rexVirtualJoystickPlugin') as rexVirtualJoystickPlugin);
        const joyStick = joystickPlugin.add(this, {
            x: 200,
            y: 550,
            radius: 50,
            base: this.add.circle(0, 0, 50, 0x888888),
            thumb: this.add.circle(0, 0, 25, 0xcccccc),
            dir: '8dir', // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
            forceMin: 16,
            enable: true
        });



        const actionButton = this.add.circle(800, 550, 30, 0x888888).setInteractive();
        actionButton.setInteractive(new Phaser.Geom.Circle(0, 0, 30), Phaser.Geom.Circle.Contains);
        
        actionButton.on('pointerdown', () => {
            this.control.actionButtonPressed();
            actionButton.setFillStyle(0x555555); // Change color to a darker grey on click
        });

        actionButton.on('pointerup', () => {
            actionButton.setFillStyle(0x888888); // Change color back to grey when released
        });

        this.control.setJoystick(joyStick)

    }

    
}