import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import Amplify, { Auth } from "aws-amplify";
import { HeaderProvider } from "../contexts/HeaderContext";
import { ShoppingProvider } from "../contexts/ShoppingContext";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
      <ShoppingProvider>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </ShoppingProvider>
    </HeaderProvider>
  );
}

export default MyApp;
