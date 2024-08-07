import { slide as Menu } from 'react-burger-menu';
import NavLinks from './NavLinks';
import useViewport from '../../hooks/useViewport';


const NavBar = () => {

    const screenWidth = useViewport()
    const breakpoint = 1024

    return (
        <>
            { screenWidth >= breakpoint ? <NavLinks /> :
                <Menu
                    customBurgerIcon={<img src='./images/icon-menu.svg' />}
                    customCrossIcon={<img src='./images/icon-close.svg' />}
                    width={"69%"}
                >
                    <NavLinks />

                </Menu>
            }
        </>
    );
}

export default NavBar;
<>

</>