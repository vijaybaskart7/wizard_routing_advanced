import React from 'react'
import './App.css'

import Wizard, {
  useWizardProgress,
  useWizardButtons,
  useWizardPages
} from './wizard'

const Progress = () => {
  const { currentIndex, steps } = useWizardProgress()
  return (
    <div className='wizard__progress'>
      State {currentIndex} of {steps}
    </div>
  )
}

const Navigation = () => {
  const { activePageIndex, goNextPage, goPrevPage, steps } = useWizardButtons()
  console.log({ activePageIndex })
  return (
    <div className='wizard__buttons'>
      <button
        onClick={goPrevPage}
        className='wizard__buttons-left'
        disabled={activePageIndex <= 0}
      >
        PREVIOUS
      </button>
      <button
        onClick={goNextPage}
        className='wizard__buttons-right'
        disabled={activePageIndex >= steps - 1}
      >
        NEXT
      </button>
    </div>
  )
}

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
  </div>
)

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
  </div>
)
const Page3 = () => (
  <div>
    <h1>Page 3</h1>
  </div>
)

const Page4 = () => (
  <div>
    <h1>Page 4</h1>
  </div>
)

const Pages = ({ children }) => {
  const { activePageIndex } = useWizardPages(React.Children.count(children))
  return (
    <div className='wizard__content'>
      {React.Children.toArray(children)[activePageIndex]}
    </div>
  )
}

const App = () => {
  return (
    <Wizard>
      <Navigation />
      <Pages>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Pages>
      <Progress />
    </Wizard>
  )
}
export default App
