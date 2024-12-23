import './App.css'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export function App() {

  return (
    <main className='font-inconsolata flex flex-col items-center justify-center m-auto'>
      <Main />
      <Footer />
    </main>
  )
}
