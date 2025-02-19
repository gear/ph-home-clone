import path from 'path';
import getConfig from 'next/config';

export const serverPath = (staticFilePath: string) => {
  const { publicRuntimeConfig } = getConfig() || {};
  // In client-side, use the public path
  const basePath = publicRuntimeConfig?.basePath || '/public';
  return path.join(basePath, staticFilePath);
};
