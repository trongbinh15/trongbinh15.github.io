import React, { Component } from "react";


type MyProps = {
  Fallback: React.ComponentType<any>;
}

export default class ErrorBoundary extends Component<MyProps> {
  state = { error: false };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, Fallback } = this.props;

    if (error) return <Fallback {...error} />;
    return children;
  }
}
