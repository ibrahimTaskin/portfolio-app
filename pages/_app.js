import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import {sky} from 'tailwindcss/colors'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={sky[600]} height={4} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
