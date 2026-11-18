import { useState } from "react";
import type { FileCache, FileTypes } from "./util/types";
import { FileCacheContext } from "./contexts";

export const FileCacheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [files, setFiles] = useState<FileCache>({});

    const setFile = (key: string, file: FileTypes) => {
        setFiles(prev => ({ ...prev, [key]: file }));
    };

    return (
      <FileCacheContext.Provider value= {{ files, setFile }}>
        { children }
      </FileCacheContext.Provider>
    );
};
