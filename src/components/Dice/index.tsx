import React, {useEffect, useRef, useState} from "react";
import "./dice.css";

// Cube rotation that brings each face to the front. Face placement (in
// dice.css) puts opposite faces summing to 7, matching a real die.
const FACE_ROTATIONS: Record<number, { x: number; y: number }> = {
    1: {x: 0, y: 0},
    2: {x: 90, y: 0},
    3: {x: 0, y: -90},
    4: {x: 0, y: 90},
    5: {x: -90, y: 0},
    6: {x: 0, y: 180},
};

// Pip positions on a 3x3 grid, cells numbered 1-9 left-to-right, top-to-bottom.
const PIP_CELLS: Record<number, number[]> = {
    1: [5],
    2: [3, 7],
    3: [3, 5, 7],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
};

// Must match the die-jump animation duration in dice.css. The cube's face
// rotation transition is shorter so the face settles before touchdown.
const ROLL_MS = 1400;

interface DiceProps {
    onChange: (value: number, rolling: boolean) => void;
    accent?: string;
    disabled?: boolean;
}

export default function Dice({onChange, accent = "#c70039", disabled = false}: DiceProps) {
    const [rolling, setRolling] = useState(false);
    const [landed, setLanded] = useState(false);
    const [rotation, setRotation] = useState({x: 0, y: 0});
    const turnsRef = useRef({x: 0, y: 0});
    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const roll = () => {
        if (rolling || disabled) return;
        const value = 1 + Math.floor(Math.random() * 6);

        // Add 2-3 full tumbles per axis each roll so the cube always travels,
        // never snaps, and never repeats the exact same path.
        turnsRef.current = {
            x: turnsRef.current.x + 2 + Math.floor(Math.random() * 2),
            y: turnsRef.current.y + 2 + Math.floor(Math.random() * 2),
        };
        const target = FACE_ROTATIONS[value];
        setRotation({
            x: turnsRef.current.x * 360 + target.x,
            y: turnsRef.current.y * 360 + target.y,
        });
        setRolling(true);
        setLanded(false);
        if (navigator.vibrate) navigator.vibrate(15);
        onChange(value, true);

        timerRef.current = setTimeout(() => {
            setRolling(false);
            setLanded(true);
            if (navigator.vibrate) navigator.vibrate([10, 40, 25]);
            onChange(value, false);
        }, ROLL_MS);
    };

    return (
        <button
            type="button"
            className={`die${rolling ? " die-rolling" : ""}${landed ? " die-landed" : ""}`}
            style={{"--die-accent": accent} as React.CSSProperties}
            onClick={roll}
            disabled={disabled}
            aria-label="Roll the die"
        >
            <span className="die-shadow"/>
            <span className="die-lift">
                <span
                    className="die-cube"
                    style={{transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`}}
                >
                    {[1, 2, 3, 4, 5, 6].map((face) => (
                        <span key={face} className={`die-face die-face-${face}`}>
                            {PIP_CELLS[face].map((cell) => (
                                <span
                                    key={cell}
                                    className="die-pip"
                                    style={{
                                        gridRow: Math.ceil(cell / 3),
                                        gridColumn: ((cell - 1) % 3) + 1,
                                    }}
                                />
                            ))}
                        </span>
                    ))}
                </span>
            </span>
        </button>
    );
}
