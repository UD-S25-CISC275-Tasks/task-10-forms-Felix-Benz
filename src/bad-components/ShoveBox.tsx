import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({ onClick }: { onClick: () => void }) {
    return <Button onClick={onClick}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    function move() {
        setPosition((prev) => prev + 4);
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton onClick={move} />
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
