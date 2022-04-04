import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadGames } from "./actions/gamesAction"

function App() {
  const dispatch = useDispatch()

  // As soon as the "App" component renders, we will "dispatch" loadGames() information:
  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
