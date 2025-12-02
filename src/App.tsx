import WebViewer from './components/WebViewer';
import { useEffect, useState, useRef, useCallback } from 'react';
import {Banner, Blankslate} from '@primer/react/experimental'
import Icons from './components/Icons';
import { FileCacheProvider, SearchCacheProvider } from './ContextProvider';
import { marked } from 'marked';
import {Button, Stack} from '@primer/react'
import {UploadIcon, SearchIcon} from '@primer/octicons-react'

function ErrorBanner({error}: {error: string}) {
  return (
    <Banner
      aria-label="Error"
      title="Error"
      description={error}
      variant="critical"
    />
  )
}
const loadExmpJson = async () => {
  const json = await import('./assets/arc-ro-crate-metadata.json?raw');
  return json.default;
}
function BlankSlate({handleClickExampleData, setJsonString}: {handleClickExampleData: () => void, setJsonString: (json: string) => void}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const text = await file.text();
      setJsonString(text);
    }
  };
  return (
    <>
      <input type="file" ref={inputRef} style={{ display: 'none' }} accept='.json,application/json' onChange={handleInputChange} />
      <Blankslate spacious>
        <Blankslate.Visual>
          <SearchIcon size={32} />
        </Blankslate.Visual>
        <Blankslate.Heading>Welcome to the ARC web viewer</Blankslate.Heading>
        <Blankslate.Description>
          This viewer allows you to explore and visualize your ARC metadata. Currently no data is loaded.
        </Blankslate.Description>
        <Blankslate.PrimaryAction onClick={handleClick}> 
          <Stack direction="horizontal" align="center" >
            <UploadIcon size={16} />
            Upload ROC-JSON
          </Stack>
        </Blankslate.PrimaryAction>
        <Button onClick={handleClickExampleData} variant='link'>
          Load example data
        </Button>
      </Blankslate>
    </>
  )
}

marked.use({
  renderer: {
    code: function (code) {
      if (code.lang == 'mermaid') return `<pre class="mermaid">${code.text}</pre>`;
      return `<pre>${code.text}</pre>`;
    }
  }
})

const loadExmpReadme = async () => {
  const readme = await import('./assets/README.md?raw');
  return readme.default;
}

interface AppProps {
  jsonString?: () => Promise<string>;
  readmefetch?: () => Promise<string>;
  licensefetch?: () => Promise<string>;
}

function App({ jsonString: outerJson, readmefetch, licensefetch }: AppProps) {

  const [jsonString, setJsonString] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [exampleData, setExampleData] = useState<boolean>(false);

  useEffect(() => {
    const fetchJson = async () => {
      if (outerJson) {
        try {
          setLoading(true);
          const json = await outerJson();
          setJsonString(json);
        } catch (err) {
          console.error('Error fetching JSON:', err);
          setError('Failed to load JSON data.');
        } finally {
          setLoading(false);
        }
      }
      if (window.arcwebview && window.arcwebview.getROCJson) {
        try {
          setLoading(true);
          const json = await window.arcwebview.getROCJson();
          setJsonString(json);
        } catch (err) {
          console.error('Error fetching JSON:', err);
          setError('Failed to load JSON data.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchJson();
    }, [outerJson]);

  const clear = useCallback(() => {
    setJsonString(null);
    setError(null);
    setExampleData(false);
    setError(null);
    setLoading(false);
  }, []);

  const handleClickExampleData = async () => {
    const json = await loadExmpJson();
    setJsonString(json);
    setExampleData(true);
  }

  return (
    <FileCacheProvider>
      <SearchCacheProvider>
        {
          error && <ErrorBanner error={error} />
        }
        {
          loading || !jsonString 
            ? <BlankSlate handleClickExampleData={handleClickExampleData} setJsonString={setJsonString} /> 
            : <>
              <WebViewer jsonString={jsonString} readmefetch={exampleData ? loadExmpReadme : readmefetch} licensefetch={licensefetch} clearJsonCallback={clear}/>
            </>
        }
      </SearchCacheProvider>
    </FileCacheProvider>

  )
}

export default App
