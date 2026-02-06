import {Header} from "@/components/header/Header.tsx";
import {Main} from "@/components/main/Main.tsx";
import {ViteThemeProvider} from "@space-man/react-theme-animation";
import {Footer} from "@/components/footer/Footer.tsx";

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