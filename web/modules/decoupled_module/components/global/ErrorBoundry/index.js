import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
    fetch("/decoupled/logger", {
      method: "post",
      body: JSON.stringify({ error: error.message, info }),
    })
      .then((r) => r.json())
      .then(console.log);
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? <div>ERRORRRRRRR</div> : children;
  }
}
