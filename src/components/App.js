import Banner from "./Banner"
import logo from '../assets/logo.png'
import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import Footer from "./Footer"

const title = 'Jungle House'

function App() {
  return (
    <div className="App">
      <Banner>
        <div className="jh-banner">
          <img src={logo} alt={title} className='jh-logo' />
          <h1 className='jh-title'>{title}</h1>
        </div>
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default App
