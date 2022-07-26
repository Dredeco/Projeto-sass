import About from "./components/About";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Team from "./components/Team";

import './styles/components/App.sass'


export default function App() {

  return (
    <div className="App">
      <Header />

      <Content />

      <Products />

      <About />

      <Team />

      <Contact />

      <Footer />
    </div>
  )
}
