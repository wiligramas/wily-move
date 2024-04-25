import { Hero } from "./sections/hero"
import { NavBar } from "./sections/navbar"
import { Service } from "./sections/service"

export default function App() {
  return (
    <div className="">
      <NavBar />
      <Hero /> 
      <Service />
    </div>
  )
}