// @packages
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// @scripts
import { RootRouter } from "../router";
import { DefaultFallback } from "../../features/common/components";
import { theme } from "../theme";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<DefaultFallback />}>
        <Router>
          <RootRouter />
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
};
