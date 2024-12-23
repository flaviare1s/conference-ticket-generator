import './App.css'
import { Footer } from './components/Footer'
import { TicketGenerator } from './components/TicketGenerator'

export function App() {

  return (
    <main className='font-inconsolata flex flex-col items-center justify-center m-auto'>
      <TicketGenerator />
      <Footer />
    </main>
  )
}
