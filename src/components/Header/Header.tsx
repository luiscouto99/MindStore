// @ts-nocheck
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components/macro";
import Cart from "../../assets/shopping-cart.png";

const MainHeader = styled.header`
	background-color: white;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
    margin: 0 40px;
`;

const NavbarLogo = styled(Link)`
	font-family: "Prata", serif;
    font-size: 20px;
`;

const NavbarLogoBold = styled.span`
	font-weight: 800;
`;

const NavbarLinksContainer = styled.div`
    display: flex;
	align-items: center;
`;

const NavbarLink = styled(NavLink)`
	margin-left: 20px;
    position: relative;

	&:before {
			content: "";
			position: absolute;
			width: 0;
			height: 0.5px;
			bottom: 0;
			left: 0;
			background-color: var(--primary-color);
			visibility: hidden;
			transition: all 0.3s ease-in-out;
	}

	&:hover:before {
		visibility: visible;
		width: 100%;
	}

	&.active {
    	color: var(--primary-color);
	}
`;

const NavbarCart = styled.div`
    background: url(${Cart});
    background-repeat: no-repeat;
    background-position: center;
    height: 19px;
    width: 19px;
    display: inline-block;
`;


function Header() {
	const getToken = localStorage.getItem("token");

	if (getToken !== null) {
		return (
			<MainHeader>
				<Navbar>
					<NavbarLogo to="/">
						Mind
						<NavbarLogoBold>Store</NavbarLogoBold>
					</NavbarLogo>

					<NavbarLinksContainer>
						<NavbarLink to="/productlistpage">Products</NavbarLink>
						<NavbarLink to="/profile">Profile</NavbarLink>
						<NavbarLink to="/" onClick={() => localStorage.clear()}>Logout</NavbarLink>
						<NavbarLink to={`/cart/${localStorage.getItem("Id")}`}>
							<NavbarCart />
						</NavbarLink>
					</NavbarLinksContainer>
				</Navbar>
			</MainHeader>
		);
	} else {
		return (
			<MainHeader>
				<Navbar>
					<NavbarLogo to="/">
						Mind
						<NavbarLogoBold>Store</NavbarLogoBold>
					</NavbarLogo>

					<NavbarLinksContainer>
						<NavbarLink to="/productlistpage">Products</NavbarLink>
						<NavbarLink to="/login">Login</NavbarLink>
						<NavbarLink to="/register">Register</NavbarLink>
					</NavbarLinksContainer>
				</Navbar>
			</MainHeader>
		);
	}
}

export default Header;