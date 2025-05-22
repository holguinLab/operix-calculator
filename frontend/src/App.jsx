import './App.css'
import { Calculator } from './components/Calculator'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export function App() {

  return (
    <>
        <div className='min-h-screen flex flex-col'>
        <Navbar/>
        
        <main className='flex grow justify-center'>
          <Calculator/>
        </main>
        
        <Footer/>
        </div>
      
    </>
  )
}
