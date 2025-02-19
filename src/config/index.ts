if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
}

if (!process.env.NEXT_PUBLIC_DATA_PATH) {
  throw new Error('NEXT_PUBLIC_DATA_PATH is not defined');
}

export const config = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  DATA_PATH: process.env.NEXT_PUBLIC_DATA_PATH
} as const;
