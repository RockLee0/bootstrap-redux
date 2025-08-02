import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <h1>Let's Start</h1>
    <Button> Start </Button>
    <ModeToggle></ModeToggle>
    <Outlet></Outlet>
    </>
  )
}

export default App
