import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface CheckAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: CheckAnswerProps): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Your answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
