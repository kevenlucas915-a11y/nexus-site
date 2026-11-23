import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Erro na renderização da aplicação:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px 20px', color: '#fff', background: '#090a0f', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', background: 'rgba(255,255,255,0.05)', padding: 32, borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: 24, marginBottom: 12 }}>Atualização em andamento</h2>
            <p style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 20 }}>
              Recarregue a página para visualizar as últimas alterações.
            </p>
            <pre style={{ color: '#f87171', background: '#000', padding: 16, borderRadius: 12, overflowX: 'auto', textAlign: 'left', fontSize: 12 }}>
              {this.state.error?.toString()}
            </pre>
            <button 
              onClick={() => window.location.reload()} 
              style={{ marginTop: 24, padding: '12px 28px', background: '#38bdf8', color: '#000', border: 'none', borderRadius: 9999, fontWeight: 'bold', fontSize: 13, cursor: 'pointer' }}
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
