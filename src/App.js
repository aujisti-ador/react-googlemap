import React from 'react'
import './App.css'
import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from './components/MapComponent'

function App() {
  return (
    <div className='App'>
      <h1>Google Map Api</h1>
      <Wrapper apiKey={"AIzaSyDsbO72B33DI-2hpcHpc-kfL9FOkeP3I18"}>
        <MapComponent />
      </Wrapper>
    </div>
  )
}

export default App

