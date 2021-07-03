// @packages
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// @scripts
import { client } from "../apollo/client";
import { DefaultFallback } from "../../features/common/components";
import { RootRouter } from "../router";
import { theme } from "../theme";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <React.Suspense fallback={<DefaultFallback />}>
          <Router>
            <RootRouter />
          </Router>
        </React.Suspense>
      </ApolloProvider>
    </ThemeProvider>
  );
};
