import { ThemeProvider } from "styled-components";
import { route } from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={route} />
    </ThemeProvider>
  );
}
