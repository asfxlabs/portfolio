import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App