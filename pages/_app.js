import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import { HeaderProvider } from "../contexts/HeaderContext";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </HeaderProvider>
  );
}

export default MyApp;
