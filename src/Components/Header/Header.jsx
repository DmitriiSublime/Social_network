import './Header.css'

const Header = () => {
    return (
        <div className='header__content'>
            <div className='header__content-wrapper'>
                <a href="" ><img className='header__img-icon' src="https://cdn4.iconfinder.com/data/icons/is_beta_accounting/png/400/basket.png" /></a>
                <ul className='header__nav'>
                    <li className='header__nav-text'><a href={1}>Home</a></li>
                    <li className='header__nav-text'><a href={2}>News</a></li>
                    <li className='header__nav-text'><a href={3}>Messages</a></li>
                    <li className='header__nav-text'><a href={4}>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}
 export default Header;