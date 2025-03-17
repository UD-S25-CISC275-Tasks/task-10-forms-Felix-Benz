import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="color-options"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
