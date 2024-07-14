import { useEffect, useState } from 'react'
import { NotesContainer } from './components/NotesContainer'
import { Header } from './components/Header'
import { NewNote } from './components/NewNote'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect( () => {
    getData()
  }, [])

  const getData = async () => {
    const url = import.meta.env.VITE_URL;
    const response = await fetch(url + "/notes");
    const json = await response.json();
    setData(json)
  }

  return (
    <>
      <header>
        <Header getData = { getData } />
      </header>
      <section className='cards-holder'>
        <NotesContainer data = { data } getData = { getData }/>
      </section>
      <footer>
        <NewNote  data = { data } getData = { getData } />
      </footer>
    </>
  )
}

export default App
