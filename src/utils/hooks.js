import * as React from 'react'

function useAsync() {
    const [status, setStatus] = React.useState("loading");
    const [error, setError] = React.useState()

    const isLoading = status === "loading";
    const isResolved = status === "resolved";
    const isRejected = status === "rejected";
    return {
        isLoading,
        isResolved,
        isRejected,
        status,
        setStatus,
        error,
        setError
    }
}

export default useAsync;