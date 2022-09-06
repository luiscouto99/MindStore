// @ts-nocheck

import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";

function Header(props) {
	const { loginColor, registerColor, profileColor, productPageColor, cartColor } = props;
	const fetchedToken = localStorage.getItem("token");
	// console.log("fetchedToken from Header \n", fetchedToken);
	// const { userId } = useParams();

	const [isLoginClicked, setIsLoginClicked] = useState(false);
	const [isRegisterClicked, setIsRegisterClicked] = useState(false);
	const [isCartClicked, setIsCartClicked] = useState(false);
	const [isProductPageClicked, setIsProductPageClicked] = useState(false);
	const [isProfileClicked, setIsProfileClicked] = useState(false);
	// const [token, setToken] = useState(null);

	// setToken(fetchedToken);

	function handleLoginClick() {
		setIsLoginClicked(!isLoginClicked);
	}

	function handleRegisterClick() {
		setIsRegisterClicked(!isRegisterClicked);
	}

	function handleCartClick() {
		setIsCartClicked(!isCartClicked);
	}

	function handleProductPageClick() {
		setIsProductPageClicked(!isProductPageClicked);
	}

	function handleProfileClick() {
		setIsProfileClicked(!isProfileClicked);
	}

    function handleLogout() {
        console.log("trying to logout");
        localStorage.removeItem("token");
		localStorage.removeItem("adminToken");
    }

	if (fetchedToken === null) {
		return (
			<>
				<header>
					<nav>
						<Link to="/" className="logo-div">
							Mind<span className="bold">Store</span>
						</Link>
						{/* {isLoginClicked} */}

						<div className="links-div">
							<Link to="/productlistpage" className={productPageColor ? "active" : ""} onClick={handleProductPageClick}>
								Products
							</Link>
							<Link to="/login" className={loginColor ? "active" : ""} onClick={handleLoginClick}>
								Login
							</Link>
							<Link to="/register" className={registerColor ? "active" : ""} onClick={handleRegisterClick}>
								Register
							</Link>
							{/* <Link to="/profile" className={profileColor ? "active" : ""} onClick={handleProfileClick}>Profile</Link> */}
							{/* <Link to="/cart" className={cartColor ? "pink-cart" : "black-cart"} onClick={handleCartClick}></Link>  */}
						</div>
					</nav>
				</header>
			</>
		);
	} else {
        return(
            <>
			<header>
				<nav>
					<Link to="/" className="logo-div">
						Mind<span className="bold">Store</span>
					</Link>
					{/* {isLoginClicked} */}

					<div className="links-div">
						<Link to="/productlistpage" className={productPageColor ? "active" : ""} onClick={handleProductPageClick}>
							Products
						</Link>
						{/* <Link to={`/profile/${userId}`} className={profileColor ? "active" : ""} onClick={handleProfileClick}> */}
						<Link to={`/profile`} className={profileColor ? "active" : ""} onClick={handleProfileClick}>
							Profile
						</Link>
						<Link to="/" onClick={handleLogout}>
							Logout
							</Link>
							
							{/* <Link to="/cart" className={cartColor ? "pink-cart" : "black-cart"} onClick={handleCartClick}></Link> */}
							<Link to={`/cart/${localStorage.getItem("Id")}`} className={cartColor ? "pink-cart" : "black-cart"} onClick={handleCartClick}></Link>
					</div>
				</nav>
			</header>
		</>
        );
    }

	// return (
	// 	<>
	// 		<header>
	// 			<nav>
	// 				<Link to="/" className="logo-div">
	// 					Mind<span className="bold">Store</span>
	// 				</Link>
	// 				{/* {isLoginClicked} */}

	// 				<div className="links-div">
	// 					<Link to="/login" className={loginColor ? "active" : ""} onClick={handleLoginClick}>
	// 						Login
	// 					</Link>
	// 					<Link to="/register" className={registerColor ? "active" : ""} onClick={handleRegisterClick}>
	// 						Register
	// 					</Link>
	// 					<Link to="/profile" className={profileColor ? "active" : ""} onClick={handleProfileClick}>
	// 						Profile
	// 					</Link>
	// 					<Link to="/productlistpage" className={productPageColor ? "active" : ""} onClick={handleProductPageClick}>
	// 						Product
	// 					</Link>
	// 					<Link to="/cart" className={cartColor ? "pink-cart" : "black-cart"} onClick={handleCartClick}></Link>
	// 				</div>
	// 			</nav>
	// 		</header>
	// 	</>
	// );
}

export default Header;

/*
   return (
        <>
            <header>
                <nav>
                    <Link to="/" className="logo-div">Mind<span className="bold">Store</span></Link>
                    <div className='links-div'>
                        <Link to="/login" className={loginColor ? "active" : ""} onClick={handleLoginClick}>Login</Link>
                        <Link to="/register" className={registerColor ? "active" : ""} onClick={handleRegisterClick}>Register</Link>
                        <Link to="/profile" className={profileColor ? "active" : ""} onClick={handleProfileClick}>Profile</Link>
                        <Link to="/productlistpage" className={productPageColor ? "active" : ""} onClick={handleProductPageClick}>Product</Link>
                        <Link to="/cart" className={cartColor ? "pink-cart" : "black-cart"} onClick={handleCartClick}></Link> 
                    </div>
                </nav>
            </header>
        </>
    )
*/
