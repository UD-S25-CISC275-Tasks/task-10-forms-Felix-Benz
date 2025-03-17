import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setRequestedAttempts(Number(event.target.value));
    }

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        const parsedAttempts = parseInt(requestedAttempts.toString(), 10);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    }

    return (
        <div>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
