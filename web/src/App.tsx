import {Header} from "@/components/layout/Header.tsx";
import {Main} from "@/components/layout/Main.tsx";
import {ViteThemeProvider} from "@space-man/react-theme-animation";
import {Footer} from "@/components/layout/Footer.tsx";

function App() {
  return (
      <ViteThemeProvider defaultTheme="system" defaultColorTheme="default">
          <Header />
          <Main />
          <Footer />
      </ViteThemeProvider>
  )
}

export default App