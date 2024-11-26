import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
