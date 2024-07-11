
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Contexts/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
