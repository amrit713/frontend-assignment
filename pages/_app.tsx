import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { store } from '@/src/app/store';

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
  <QueryClientProvider client={queryClient}>
 <Component {...pageProps} />
  </QueryClientProvider>
  </Provider>)
 
}
