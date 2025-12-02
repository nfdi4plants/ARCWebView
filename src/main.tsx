import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BaseStyles, ThemeProvider } from '@primer/react'

declare global {
  interface Window {
    arcwebview: {
      getROCJson: () => Promise<string>;
    };
  }
}

function isPlugin() {
  return !!window.arcwebview && !!window.arcwebview.getROCJson;
}

/// add getROCJson to to test plugin mode
// window.arcwebview = {
//   getROCJson: async () => {
//     const json = await loadExmpJson();
//     return json;
//   },
// }

import '@primer/primitives/dist/css/functional/themes/light.css'
import "@primer/css/dist/primer.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <App />
        {/* <App /> */}
      </BaseStyles>
    </ThemeProvider>
  </StrictMode>,
)
