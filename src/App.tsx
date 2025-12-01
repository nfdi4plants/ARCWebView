import WebViewer from './components/WebViewer';
import { useEffect, useState, useRef } from 'react';
import {Banner, Blankslate} from '@primer/react/experimental'
import Icons from './components/Icons';
import { FileCacheProvider, SearchCacheProvider } from './ContextProvider';
import { marked } from 'marked';
import { Flash, Button } from "@primer/react";
import { UploadIcon, XIcon } from "@primer/octicons-react";


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

function BlankSlate() {
  return (
    <Blankslate>
      <Blankslate.Visual>
        <Icons.SearchIcon />
      </Blankslate.Visual>
      <Blankslate.Heading>Welcome to the ARC web viewer</Blankslate.Heading>
      <Blankslate.Description>
        This viewer allows you to explore and visualize your ARC metadata. Currently no data is loaded.
      </Blankslate.Description>
      {/* <Blankslate.PrimaryAction href="#">Create the first page</Blankslate.PrimaryAction> */}
    </Blankslate>
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

interface AppProps {
  jsonString?: () => Promise<string>;
  readmefetch?: () => Promise<string>;
  licensefetch?: () => Promise<string>;
}

function UploadJsonButton({ onUpload }: { onUpload: (text: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result;
      if (typeof text === "string") {
        onUpload(text);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Button
        leadingVisual={UploadIcon}
        onClick={handleClick}
        variant="primary"
      >
        Upload ARC RO-Crate JSON
      </Button>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="application/json"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </>
  );
}

function App({ jsonString: outerJson, readmefetch, licensefetch }: AppProps) {

  const [jsonString, setJsonString] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const [flashType, setFlashType] = useState<"success" | "danger">("success");

  const [isUploaded, setIsUploaded] = useState(false);

  const handleUploadedJson = (text: string) => {
    try {
      JSON.parse(text); // "validate" JSON, replace with an arctrl function later
      setJsonString(text);
      setError(null);

      setFlashMessage("JSON file uploaded successfully.");
      setFlashType("success");

      setIsUploaded(true); // mark that this JSON came from upload
    } catch {
      setFlashMessage("The file does not contain valid JSON.");
      setFlashType("danger");
    }
  };

  // remove the flash message after 4 seconds, maybe fading it would be nicer in the future
  useEffect(() => {
    if (!flashMessage) return;

    const timer = setTimeout(() => {
      setFlashMessage(null);
    }, 4000); // auto-close after 4 seconds

    return () => clearTimeout(timer);
  }, [flashMessage]);

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
        console.warn('arcwebview.getROCJson is not available.');
        setLoading(false);
      }
    };
    fetchJson();
    }, [outerJson]);

  return (
    <FileCacheProvider>
      <SearchCacheProvider>

        {flashMessage && (
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <Flash variant={flashType}>
              {flashMessage}
              <Button
                style={{ position: "absolute", right: "0.5rem", top: "0.5rem" }}
                onClick={() => setFlashMessage(null)}
                size="small"
                variant="invisible"
                leadingVisual={XIcon}
                aria-label="Close flash message"
              />
            </Flash>
          </div>
        )}

        <div style={{ padding: "1rem" }}>
          <UploadJsonButton onUpload={handleUploadedJson} />
        </div>

        {
          error && <ErrorBanner error={error} />
        }
        {
          loading || !jsonString 
            ? <BlankSlate /> 
            : <WebViewer 
                jsonString={jsonString} 
                readmefetch={isUploaded ? undefined : readmefetch} 
                licensefetch={isUploaded ? undefined : licensefetch} 
              />
        }
      </SearchCacheProvider>
    </FileCacheProvider>

  )
}

export default App
