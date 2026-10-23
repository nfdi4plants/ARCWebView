import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BaseStyles } from '@primer/react'
import { ThemeProvider } from '@primer/react/next'

import '@primer/primitives/dist/css/functional/themes/light.css'
import "@primer/css/dist/primer.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <App />
      </BaseStyles>
    </ThemeProvider>
  </StrictMode>,
)
