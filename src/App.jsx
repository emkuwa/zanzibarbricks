import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import FaqPage from './pages/FaqPage'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </>
  )
}
