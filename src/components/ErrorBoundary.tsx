import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Alert, Button } from 'reactstrap';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container className="mt-5">
          <Alert color="danger">
            <h4 className="alert-heading">Something went wrong!</h4>
            <p>
              The application encountered an unexpected error. You can try reloading the page
              or resetting the game data.
            </p>
            <hr />
            <div className="d-flex gap-2">
              <Button color="primary" onClick={this.handleReload}>
                Reload Page
              </Button>
              <Button color="warning" onClick={this.handleReset}>
                Reset Game Data
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-3">
                <summary>Error Details</summary>
                <pre className="mt-2 small">
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </Alert>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;