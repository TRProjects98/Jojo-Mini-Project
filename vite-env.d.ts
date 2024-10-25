/// <reference types="vite/client" />
import '@testing-library/jest-dom';

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_SPACE_ID: string;
  readonly VITE_CONTENTFUL_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
