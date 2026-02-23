import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import Apply from './pages/Apply'
import Sobre from './pages/Sobre'
import Roster from './pages/Roster'
import Horarios from './pages/Horarios'
import Home from './pages/Home'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </AppLayout>
  )
}