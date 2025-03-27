
import { useState } from 'react'
import './App.css'
import BodyContent from './component/BodyContent'
import ListHeader from './component/Header'

type BodyComponent = "Home" | "SignIn" | "Features" | "Pricing" | "FAQs" | "About";

function App() {
  const [bodyComponent, setBodyComponent] = useState<BodyComponent>("Home");

  const handleSelect = (event: BodyComponent) => {
    console.log(event)
    setBodyComponent(event);
  }

  return (
    <>
      <div>
        <ListHeader handleClick={(item: string) => handleSelect(item as BodyComponent)} />
        <BodyContent bodyComponent={bodyComponent} />
      </div>
    </>
  )
}

export default App
