'use client'
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import StartGame from './main';
import { EventBus } from './EventBus';

export interface IRefPhaserGame {
    game: Phaser.Game | null;
    scene: Phaser.Scene | null;
}

interface IProps {
    currentActiveScene?: (scene_instance: Phaser.Scene) => void;
}

const PhaserGameComponent = forwardRef<IRefPhaserGame, IProps>(function PhaserGame({ currentActiveScene }, ref) {
    const game = useRef<Phaser.Game | null>(null);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if (!game.current) {
            game.current = StartGame("game-container");

            if (typeof ref === 'function') {
                ref({ game: game.current, scene: null });
            } else if (ref) {
                ref.current = { game: game.current, scene: null };
            }

            setLoading(false);
        }

        return () => {
            if (game.current) {
                game.current.destroy(true);
                game.current = null;
            }
        };
    }, [ref]); // ✅ Run only once on mount

    useEffect(() => {
        const handleSceneReady = (scene_instance: Phaser.Scene) => {
            if (currentActiveScene) {
                currentActiveScene(scene_instance);
            }

            if (typeof ref === 'function') {
                ref({ game: game.current, scene: scene_instance });
            } else if (ref) {
                ref.current = { game: game.current, scene: scene_instance };
            }
        };

        EventBus.on('current-scene-ready', handleSceneReady);

        return () => {
            EventBus.off('current-scene-ready', handleSceneReady); // ✅ Proper cleanup
        };
    }, [currentActiveScene, ref]);

    return (
        <div>
            {loading && <div>Loading...</div>}
            <div id="game-container" style={{ display: loading ? 'none' : 'block' }}></div>
        </div>
    );
});

// ✅ Disable SSR for PhaserGame
const PhaserGame = dynamic(() => Promise.resolve(PhaserGameComponent), { ssr: false });

export default PhaserGame;
