import Hero from '../components/Hero'
import Products from '../components/Products'
import ServiceAreas from '../components/ServiceAreas'
import AboutShort from '../components/AboutShort'
import PaymentInfo from '../components/PaymentInfo'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <ServiceAreas />
      <AboutShort />
      <PaymentInfo />
    </>
  )
}
