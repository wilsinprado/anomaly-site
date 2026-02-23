import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import Apply from './pages/Apply'
import Sobre from './pages/Sobre'
import Roster from './pages/Roster'
import Horarios from './pages/Horarios'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/apply" replace />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Navigate to="/apply" replace />} />
      </Routes>
    </AppLayout>
  )
}