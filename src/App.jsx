import Header from "./components/Header/Header"
import TextInfoSection from './components/TextInfoSection'
import DifferencesSection from "./components/DifferensesSection"
import IntroSection from "./components/IntroSection"
import TabSection from "./components/TabSection"
import FeedBackSection from "./components/FeedBackSection"
import EffectSection from "./components/EffectSection"
import { useState } from "react"


function App() {
const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
          <TextInfoSection />
          <DifferencesSection />
        </>
      )}
       
        {tab === 'feedback' &&  <FeedBackSection />}

        {tab === 'effect' &&  <EffectSection/>}
      </main>
    </>
  )
}


export default App
