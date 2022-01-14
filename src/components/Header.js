import React,{useState ,useEffect} from 'react';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    return(
        <div className="headercontainer">
            <div className="myname">Mohan Dandigam</div>
            {(toggleMenu || screenWidth > 500) && <ul className="menu">
                <li className="menuitem">Home</li>
                <li className="menuitem">Resume</li>
                <li className="menuitem">Works</li>
                <li className="menuitem">About</li>
                <li className="menuitem">Contact</li>
            </ul>}
            <img className="mobile-menu" onClick={toggleNav}src="images/menu.JPG" alt="Open Navigation"/>
        </div>
    )
}
export default Header