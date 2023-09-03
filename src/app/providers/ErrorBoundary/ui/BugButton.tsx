import { useEffect, useState } from "react";

// Testing component for ErrorBoundary

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        // eslint-disable-next-line
        <button type="button" onClick={onThrow}>
            throw error
        </button>
    );
};
