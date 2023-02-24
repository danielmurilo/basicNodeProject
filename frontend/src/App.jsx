import './App.css'
import Header from './components/Header/Header'
import ReadAll from './components/ReadAll/ReadAll'
import ReadById from './components/ReadById/ReadById'

function App() {
  return (
    <div className="App">
      <Header />
      <ReadAll />
      <ReadById />
    </div>
  )
}

export default App
