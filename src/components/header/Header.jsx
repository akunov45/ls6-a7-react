

import './Header.css'
import { GoSearch } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";

import { useContext } from "react"
import { APPCONTEXT } from "../../context/AppContext"

const Header = () => {
    const { cartData } = useContext(APPCONTEXT);
    console.log(cartData);

    return (
        <header >
            <div className='logo'>
                <img width={40} src="https://my-react-pizza-v2.netlify.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="" />
                <div>
                    <h4>React Pizza</h4>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className='search'>
                <span><GoSearch /></span>
                <input type="text" placeholder='Поиск пиццы...' />
            </div>
            <div className='cart-btn'>
                <a href="">
                    <span>100 $</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <span >
                        <PiShoppingCartSimple />
                        {cartData.length > 0 ? cartData.length : null}
                    </span>
                </a>
            </div>
        </header>
    )
}

export default Header