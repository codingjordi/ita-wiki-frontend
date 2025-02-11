import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserCtxProvider from './context/UserCtxProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <UserCtxProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserCtxProvider>,
)
