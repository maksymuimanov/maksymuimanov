import {Header} from "@/components/header/Header.tsx";
import {Main} from "@/components/main/Main.tsx";
import {ViteThemeProvider} from "@space-man/react-theme-animation";

function App() {
  return (
      <ViteThemeProvider defaultTheme="system" defaultColorTheme="default">
          <Header></Header>
          <Main></Main>
      </ViteThemeProvider>
  )
}

export default App