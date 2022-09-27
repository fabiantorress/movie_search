import * as React from "react";

const StatusContext = React.createContext();

function StatusProvider({ children }) {
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState();

  const isLoading = status === "loading";
  const isResolved = status === "resolved";
  const isRejected = status === "rejected";

  const value = {
    setStatus,
    isLoading,
    error,
    isRejected,
    setError,
    isResolved,
  };

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}

function useAsync() {
  const context = React.useContext(StatusContext);
  if (!context) {
    throw new Error("Error, useAsync must be used within a StatusProvider");
  }
  return context;
}

export { useAsync, StatusProvider };
