import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceQuestionProps {
    expectedAnswer: string;
    options: string[];
}

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionProps): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Select your answer:</Form.Label>
                <Form.Select value={selectedChoice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
