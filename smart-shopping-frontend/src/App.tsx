import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support'
import PurchaseHistory from './PurchaseHistory'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path="/history/:customerId" element={<PurchaseHistory />} />

    </Routes>
  )
}

export default App
