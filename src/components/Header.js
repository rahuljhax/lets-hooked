const Header = () => {
    return (
      <>
        <div className="top-bar">Welcome to Namaste Food</div>
        <div className="container">
          <header>
            <div className="logo">
              <img
                src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
                alt="Food loto"
              />
            </div>
            <nav className="navbar">
              <ul>
                <li>
                  <a href="/">Punjabi</a>
                </li>
                <li>
                  <a href="/">South Indian</a>
                </li>
                <li>
                  <a href="/">Continental</a>
                </li>
                <li>
                  <a href="/">Italian</a>
                </li>
              </ul>
            </nav>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </header>
        </div>
      </>
    );
  };
export default Header;