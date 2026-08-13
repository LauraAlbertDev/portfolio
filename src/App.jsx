import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About" 
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Contact } from "@/sections/Contact"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { LanguageProvider } from "@/i18n/LanguageContext"

function App() {
  useScrollReveal()
  
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
