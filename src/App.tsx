import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <h1>Let's Start</h1>
    <Button> Start </Button>
    <Outlet></Outlet>
    </>
  )
}

export default App
