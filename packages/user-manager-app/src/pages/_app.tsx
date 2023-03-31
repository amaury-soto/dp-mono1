import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
//import { ReactQueryProvider } from "../lib/react-query";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
