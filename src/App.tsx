import { Starfield } from "@/components/Starfield"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Overview } from "@/components/Overview"
import { Deliverables } from "@/components/Deliverables"
import { Submission } from "@/components/Submission"
import { Rubric } from "@/components/Rubric"
import { CountdownTimer } from "@/components/CountdownTimer"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <>
      <Starfield />
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <Overview />
          <Deliverables />
          <Submission />
          <Rubric />
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <CountdownTimer />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
