import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

class AppErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error('secure_note_app render error:', error);
  }

  render() {
    if (this.state.error) {
      return <main className="startup-error"><div><span className="brand-mark"><LeafFallback /></span><h1>App could not load</h1><p>{this.state.error.message}</p><button onClick={() => window.location.reload()}>Reload app</button></div></main>;
    }
    return this.props.children;
  }
}

function LeafFallback() {
  return <span aria-hidden="true">✳</span>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>);
