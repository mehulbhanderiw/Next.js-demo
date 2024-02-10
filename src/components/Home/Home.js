import Carousel from "../Carousel/Carousel";
import { Modal, Nav, Tab } from "react-bootstrap";
import Slider from "../Slider/Slider";
import React from "react";
import Popup from "../Popup/Popup";

const Home = () => {
  const productsOptions = {
    loop: false,
    margin: 20,
    dots: true,
    nav: true,
    navText: [
      "<i class='icon-angle-left angle-nav'></i>",
      "<i class='icon-angle-right angle-nav '></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  const brandOptions = {
    loop: false,
    margin: 30,
    dots: false,
    nav: false,
    navText: [
      "<i class='icon-angle-left angle-nav'></i>",
      "<i class='icon-angle-right angle-nav'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      420: {
        items: 3,
      },
      600: {
        items: 4,
      },
      900: {
        items: 5,
      },
      1024: {
        items: 6,
      },
    },
  };
  const trendingOptions = {
    nav: true,
    dots: false,
    margin: 20,
    navText: [
      "<i class='icon-angle-left angle-nav'></i>",
      "<i class='icon-angle-right angle-nav'></i>",
    ],
    loop: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };
  const topOptions = {
    nav: true,
    dots: false,
    margin: 20,
    navText: [
      "<i class='icon-angle-left angle-nav'></i>",
      "<i class='icon-angle-right angle-nav'></i>",
    ],
    loop: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [popupShow, setPopupShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPopupShow(true);
    }, 10000);
  }, []);

  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="page-wrapper">
        <header className="header header-intro-clearance header-3">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                <a href="tel:#">
                  <i className="icon-phone" />
                  Call: +0123 456 789
                </a>
              </div>
              <div className="header-right">
                <ul className="top-menu">
                  <li>
                    <a href="#">Links</a>
                    <ul>
                      <li>
                        <div className="header-dropdown">
                          <a href="#">USD</a>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <a href="#">Eur</a>
                              </li>
                              <li>
                                <a href="#">Usd</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="header-dropdown">
                          <a href="#">English</a>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <a href="#">English</a>
                              </li>
                              <li>
                                <a href="#">French</a>
                              </li>
                              <li>
                                <a href="#">Spanish</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#" onClick={() => setModalShow(true)}>
                          Sign in / Sign up
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-middle">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars" />
                </button>
                <a href="index.html" className="logo">
                  <img
                    src="/assets/images/demos/demo-3/logo.png"
                    alt="Molla Logo"
                    width={105}
                    height={25}
                  />
                </a>
              </div>
              <div className="header-center">
                <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search" />
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <button className="btn btn-primary" type="submit">
                        <i className="icon-search" />
                      </button>
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search product ..."
                        required=""
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-right">
                <div className="dropdown compare-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Compare Products"
                    aria-label="Compare Products"
                  >
                    <div className="icon">
                      <i className="icon-random" />
                    </div>
                    <p>Compare</p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="compare-products">
                      <li className="compare-product">
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                        <h4 className="compare-product-title">
                          <a href="product.html">Blue Night Dress</a>
                        </h4>
                      </li>
                      <li className="compare-product">
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                        <h4 className="compare-product-title">
                          <a href="product.html">White Long Skirt</a>
                        </h4>
                      </li>
                    </ul>
                    <div className="compare-actions">
                      <a href="#" className="action-link">
                        Clear All
                      </a>
                      <a href="#" className="btn btn-outline-primary-2">
                        <span>Compare</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wishlist">
                  <a href="wishlist.html" title="Wishlist">
                    <div className="icon">
                      <i className="icon-heart-o" />
                      <span className="wishlist-count badge">3</span>
                    </div>
                    <p>Wishlist</p>
                  </a>
                </div>
                <div className="dropdown cart-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <div className="icon">
                      <i className="icon-shopping-cart" />
                      <span className="cart-count">2</span>
                    </div>
                    <p>Cart</p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Beige knitted elastic runner shoes
                            </a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $84.00
                          </span>
                        </div>
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="/assets/images/products/cart/product-1.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                      </div>
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Blue utility pinafore denim dress
                            </a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $76.00
                          </span>
                        </div>
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="/assets/images/products/cart/product-2.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-cart-total">
                      <span>Total</span>
                      <span className="cart-total-price">$160.00</span>
                    </div>
                    <div className="dropdown-cart-action">
                      <a href="cart.html" className="btn btn-primary">
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom sticky-header">
            <div className="container">
              <div className="header-left">
                <div className="dropdown category-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Browse Categories"
                  >
                    Browse Categories <i className="icon-angle-down" />
                  </a>
                  <div className="dropdown-menu">
                    <nav className="side-nav">
                      <ul className="menu-vertical sf-arrows">
                        <li className="item-lead">
                          <a href="#">Daily offers</a>
                        </li>
                        <li className="item-lead">
                          <a href="#">Gift Ideas</a>
                        </li>
                        <li>
                          <a href="#">Beds</a>
                        </li>
                        <li>
                          <a href="#">Lighting</a>
                        </li>
                        <li>
                          <a href="#">Sofas &amp; Sleeper sofas</a>
                        </li>
                        <li>
                          <a href="#">Storage</a>
                        </li>
                        <li>
                          <a href="#">Armchairs &amp; Chaises</a>
                        </li>
                        <li>
                          <a href="#">Decoration </a>
                        </li>
                        <li>
                          <a href="#">Kitchen Cabinets</a>
                        </li>
                        <li>
                          <a href="#">Coffee &amp; Tables</a>
                        </li>
                        <li>
                          <a href="#">Outdoor Furniture </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-center">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-container active">
                      <a href="index.html" className="sf-with-ul">
                        Home
                      </a>
                      <div className="megamenu demo">
                        <div className="menu-col">
                          <div className="menu-title">Choose your demo</div>
                          <div className="demo-list">
                            <div className="demo-item">
                              <a href="index-1.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/1.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  01 - furniture store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-2.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/2.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  02 - furniture store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-3.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/3.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  03 - electronic store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-4.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/4.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  04 - electronic store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-5.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/5.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  05 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-6.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/6.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  06 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-7.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/7.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  07 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-8.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/8.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  08 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-9.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/9.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  09 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item">
                              <a href="index-10.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/10.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  10 - shoes store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-11.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/11.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  11 - furniture simple store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-12.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/12.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  12 - fashion simple store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-13.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/13.jpg)",
                                  }}
                                />
                                <span className="demo-title">13 - market</span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-14.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/14.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  14 - market fullwidth
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-15.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/15.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  15 - lookbook 1
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-16.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/16.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  16 - lookbook 2
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-17.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/17.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  17 - fashion store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-18.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/18.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  18 - fashion store (with sidebar)
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-19.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/19.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  19 - games store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-20.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/20.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  20 - book store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-21.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/21.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  21 - sport store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-22.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/22.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  22 - tools store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-23.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/23.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  23 - fashion left navigation store
                                </span>
                              </a>
                            </div>
                            <div className="demo-item hidden">
                              <a href="index-24.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      "url(/assets/images/menu/demos/24.jpg)",
                                  }}
                                />
                                <span className="demo-title">
                                  24 - extreme sport store
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="megamenu-action text-center">
                            <a
                              href="#"
                              className="btn btn-outline-primary-2 view-all-demos"
                            >
                              <span>View All Demos</span>
                              <i className="icon-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="category.html" className="sf-with-ul">
                        Shop
                      </a>
                      <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                          <div className="col-md-8">
                            <div className="menu-col">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Shop with sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-list.html">Shop List</a>
                                    </li>
                                    <li>
                                      <a href="category-2cols.html">
                                        Shop Grid 2 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category.html">
                                        Shop Grid 3 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-4cols.html">
                                        Shop Grid 4 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-market.html">
                                        <span>
                                          Shop Market
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <div className="menu-title">
                                    Shop no sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-boxed.html">
                                        <span>
                                          Shop Boxed No Sidebar
                                          <span className="tip tip-hot">
                                            Hot
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-fullwidth.html">
                                        Shop Fullwidth No Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Product Category
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="product-category-boxed.html">
                                        Product Category Boxed
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-category-fullwidth.html">
                                        <span>
                                          Product Category Fullwidth
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <div className="menu-title">Shop Pages</div>
                                  <ul>
                                    <li>
                                      <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                      <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                      <a href="dashboard.html">My Account</a>
                                    </li>
                                    <li>
                                      <a href="#">Lookbook</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="banner banner-overlay">
                              <a
                                href="category.html"
                                className="banner banner-menu"
                              >
                                <img
                                  src="/assets/images/menu/banner-1.jpg"
                                  alt="Banner"
                                />
                                <div className="banner-content banner-content-top">
                                  <div className="banner-title text-white">
                                    Last <br />
                                    Chance
                                    <br />
                                    <span>
                                      <strong>Sale</strong>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">
                        Product
                      </a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>
                              <ul>
                                <li>
                                  <a href="product.html">Default</a>
                                </li>
                                <li>
                                  <a href="product-centered.html">Centered</a>
                                </li>
                                <li>
                                  <a href="product-extended.html">
                                    <span>
                                      Extended Info
                                      <span className="tip tip-new">New</span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="product-gallery.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="product-sticky.html">Sticky Info</a>
                                </li>
                                <li>
                                  <a href="product-sidebar.html">
                                    Boxed With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-fullwidth.html">
                                    Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href="product-masonry.html">
                                    Masonry Sticky Info
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <a href="category.html">
                                <img
                                  src="/assets/images/menu/banner-2.jpg"
                                  alt="Banner"
                                />
                                <div className="banner-content banner-content-bottom">
                                  <div className="banner-title text-white">
                                    New Trends
                                    <br />
                                    <span>
                                      <strong>spring 2019</strong>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="sf-with-ul">
                        Pages
                      </a>
                      <ul>
                        <li>
                          <a href="about.html" className="sf-with-ul">
                            About
                          </a>
                          <ul>
                            <li>
                              <a href="about.html">About 01</a>
                            </li>
                            <li>
                              <a href="about-2.html">About 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" className="sf-with-ul">
                            Contact
                          </a>
                          <ul>
                            <li>
                              <a href="contact.html">Contact 01</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" className="sf-with-ul">
                        Blog
                      </a>
                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li>
                              <a href="single.html">Default with sidebar</a>
                            </li>
                            <li>
                              <a href="single-fullwidth.html">
                                Fullwidth no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="single-fullwidth-sidebar.html">
                                Fullwidth with sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements-list.html" className="sf-with-ul">
                        Elements
                      </a>
                      <ul>
                        <li>
                          <a href="elements-products.html">Products</a>
                        </li>
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="elements-banners.html">Banners</a>
                        </li>
                        <li>
                          <a href="elements-product-category.html">
                            Product Category
                          </a>
                        </li>
                        <li>
                          <a href="elements-video-banners.html">
                            Video Banners
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="elements-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="elements-portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="elements-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="elements-icon-boxes.html">Icon Boxes</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <i className="la la-lightbulb-o" />
                <p>
                  Clearance
                  <span className="highlight">&nbsp;Up to 30% Off</span>
                </p>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="intro-section pt-3 pb-3 mb-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div class="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                    <Slider />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="intro-banners">
                    <div className="banner mb-lg-1 mb-xl-2">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo-3/banners/banner-1.jpg"
                          alt="Banner"
                        />
                      </a>
                      <div className="banner-content">
                        <h4 className="banner-subtitle d-lg-none d-xl-block">
                          <a href="#">Top Product</a>
                        </h4>
                        <h3 className="banner-title">
                          <a href="#">
                            Edifier <br />
                            Stereo Bluetooth
                          </a>
                        </h3>
                        <a href="#" className="banner-link">
                          Shop Now
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="banner mb-lg-1 mb-xl-2">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo-3/banners/banner-2.jpg"
                          alt="Banner"
                        />
                      </a>
                      <div className="banner-content">
                        <h4 className="banner-subtitle d-lg-none d-xl-block">
                          <a href="#">Clearance</a>
                        </h4>
                        <h3 className="banner-title">
                          <a href="#">
                            GoPro - Fusion 360 <span>Save $70</span>
                          </a>
                        </h3>
                        <a href="#" className="banner-link">
                          Shop Now
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="banner mb-0">
                      <a href="#">
                        <img
                          src="/assets/images/demos/demo-3/banners/banner-3.jpg"
                          alt="Banner"
                        />
                      </a>
                      <div className="banner-content">
                        <h4 className="banner-subtitle d-lg-none d-xl-block">
                          <a href="#">Featured</a>
                        </h4>
                        <h3 className="banner-title">
                          <a href="#">
                            Apple Watch 4 <span>Our Hottest Deals</span>
                          </a>
                        </h3>
                        <a href="#" className="banner-link">
                          Shop Now
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container featured">
            <Tab.Container defaultActiveKey="products-featured-link">
              <Nav
                variant="pills"
                className="nav-border-anim nav-big justify-content-center mb-3"
              >
                <Nav.Item>
                  <Nav.Link eventKey="products-featured-link">
                    Featured
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="products-sale-link">On Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="products-top-link">Top Rated</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="tab-content-carousel">
                <Tab.Pane eventKey="products-featured-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={productsOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        <div className="product-price">$349.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="/assets/images/demos/demo-3/products/product-2-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - Apple Watch Series 3 with White Sport Band
                          </a>
                        </h3>
                        <div className="product-price">$214.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e2e2e2" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f2bc9e" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                        </h3>
                        <div className="product-price">
                          <span className="out-price">$339.99</span>
                          <span className="out-text">Out of Stock</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Digital Cameras</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Alpha a5100 Mirrorless Camera
                          </a>
                        </h3>
                        <div className="product-price">$499.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "70%" }}
                            />
                          </div>
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        <div className="product-price">$349.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="products-sale-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={productsOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Digital Cameras</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Alpha a5100 Mirrorless Camera
                          </a>
                        </h3>
                        <div className="product-price">$499.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "70%" }}
                            />
                          </div>
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        <div className="product-price">$349.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                        </h3>
                        <div className="product-price">
                          <span className="out-price">$339.99</span>
                          <span className="out-text">Out of Stock</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="/assets/images/demos/demo-3/products/product-2-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - Apple Watch Series 3 with White Sport Band
                          </a>
                        </h3>
                        <div className="product-price">$214.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e2e2e2" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f2bc9e" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="products-top-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={productsOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                        </h3>
                        <div className="product-price">
                          <span className="out-price">$339.99</span>
                          <span className="out-text">Out of Stock</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        <div className="product-price">$349.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Digital Cameras</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Alpha a5100 Mirrorless Camera
                          </a>
                        </h3>
                        <div className="product-price">$499.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "70%" }}
                            />
                          </div>
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="/assets/images/demos/demo-3/products/product-2-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - Apple Watch Series 3 with White Sport Band
                          </a>
                        </h3>
                        <div className="product-price">$214.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e2e2e2" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f2bc9e" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        <div className="product-price">$349.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
          <div className="mb-7 mb-lg-11" />
          <div className="container">
            <div
              className="cta cta-border cta-border-image mb-5 mb-lg-7"
              style={{
                backgroundImage: "url(/assets/images/demos/demo-3/bg-1.jpg)",
              }}
            >
              <div className="cta-border-wrapper bg-white">
                <div className="row justify-content-center">
                  <div className="col-md-11 col-xl-11">
                    <div className="cta-content">
                      <div className="cta-heading">
                        <h3 className="cta-title text-right">
                          <span className="text-primary">New Deals</span> <br />
                          Start Daily at 12pm e.t.
                        </h3>
                      </div>
                      <div className="cta-text">
                        <p>
                          Get
                          <span className="text-dark font-weight-normal">
                            FREE SHIPPING* &amp; 5% rewards
                          </span>
                          on <br />
                          every order with Molla Theme rewards program
                        </p>
                      </div>
                      <a href="#" className="btn btn-primary btn-round">
                        <span>Add to Cart for $50.00/yr</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light deal-container pt-7 pb-7 mb-5">
            <div className="container">
              <div className="heading text-center mb-4">
                <h2 className="title">Deals &amp; Outlet</h2>
                <p className="title-desc">Today’s deal and more</p>
              </div>
              <div className="row">
                <div className="col-lg-6 deal-col">
                  <div
                    className="deal"
                    style={{
                      backgroundImage:
                        'url("assets/images/demos/demo-3/deal/bg-1.jpg")',
                    }}
                  >
                    <div className="deal-top">
                      <h2>Deal of the Day.</h2>
                      <h4>Limited quantities.</h4>
                    </div>
                    <div className="deal-content">
                      <h3 className="product-title">
                        <a href="product.html">
                          Home Smart Speaker with Google Assistant
                        </a>
                      </h3>
                      <div className="product-price">
                        <span className="new-price">$129.00</span>
                        <span className="old-price">Was $150.99</span>
                      </div>
                      <a href="product.html" className="btn btn-link">
                        <span>Shop Now</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    <div className="deal-bottom">
                      <div className="deal-countdown" data-until="+10h" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="products">
                    <div className="row">
                      <div className="col-6">
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-5.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Digital Cameras</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Canon - EOS 5D Mark IV DSLR Camera
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$3,599.99</span>
                              <span className="old-price">Was $3,999.99</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-6.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Computers &amp; Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - Smart Keyboard Folio for 11-inch iPad
                                Pro
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$179.00</span>
                              <span className="old-price">Was $200.99</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-container text-center mt-3 mb-0">
                <a
                  href="#"
                  className="btn btn-outline-dark-2 btn-round btn-more"
                >
                  <span>Shop more Outlet deals</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <Carousel
              options={brandOptions}
              className={"owl-carousel mt-5 mb-5 owl-simple"}
            >
              <a href="#" className="brand">
                <img src="/assets/images/brands/1.png" alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src="/assets/images/brands/2.png" alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src="/assets/images/brands/3.png" alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src="/assets/images/brands/4.png" alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src="/assets/images/brands/5.png" alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src="/assets/images/brands/6.png" alt="Brand Name" />
              </a>
            </Carousel>
          </div>
          <div className="container">
            <hr className="mt-3 mb-6" />
          </div>
          <div className="container trending">
            <Tab.Container defaultActiveKey="trending-all-link">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">Trending Products</h2>
                </div>
                <div className="heading-right">
                  <Nav
                    variant="pills"
                    className="nav-border-anim justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="trending-all-link">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending-tv-link">TV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending-computers-link">
                        Computers
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending-phones-link">
                        Tablets &amp; Cell Phones
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending-watches-link">
                        Smartwatches
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending-acc-link">
                        Accessories
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5col d-none d-xl-block">
                  <div className="banner">
                    <a href="#">
                      <img
                        src="/assets/images/demos/demo-3/banners/banner-4.jpg"
                        alt="banner"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4-5col">
                  <Tab.Content className="tab-content-carousel just-action-icons-sm">
                    <Tab.Pane eventKey="trending-all-link" className="p-0">
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-7.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Headphones</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundSport wireless headphones
                              </a>
                            </h3>
                            <div className="product-price">$199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#69b4ff" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#ff887f" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-8.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Video Games</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Microsoft - Refurbish Xbox One S 500GB
                              </a>
                            </h3>
                            <div className="product-price">$279.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-9.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Smartwatches</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple Watch Series 4 Gold Aluminum Case
                              </a>
                            </h3>
                            <div className="product-price">$499.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-10.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Sony - Class LED 2160p Smart 4K Ultra HD
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$1,699.99</span>
                              <span className="old-price">Was $1,999.99</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 10 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-15.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Samsung - 55" Class LED 2160p Smart
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trending-tv-link" className="p-0">
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-13.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-12.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Audio</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundLink Bluetooth Speaker
                              </a>
                            </h3>
                            <div className="product-price">$79.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-14.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Cell Phone</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Google - Pixel 3 XL 128GB
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$35.41</span>
                              <span className="old-price">Was $41.67</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 10 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#edd2c8" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#333333" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-15.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Samsung - 55" Class LED 2160p Smart
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="trending-computers-link"
                      className="p-0"
                    >
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-15.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Samsung - 55" Class LED 2160p Smart
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-13.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-12.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Audio</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundLink Bluetooth Speaker
                              </a>
                            </h3>
                            <div className="product-price">$79.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-14.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Cell Phone</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Google - Pixel 3 XL 128GB
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$35.41</span>
                              <span className="old-price">Was $41.67</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 10 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#edd2c8" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#333333" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trending-phones-link" className="p-0">
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-12.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Audio</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundLink Bluetooth Speaker
                              </a>
                            </h3>
                            <div className="product-price">$79.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-13.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-15.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Samsung - 55" Class LED 2160p Smart
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-14.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title=" "
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Cell Phone</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Google - Pixel 3 XL 128GB
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$35.41</span>
                              <span className="old-price">Was $41.67</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 10 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#edd2c8" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#333333" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trending-watches-link" className="p-0">
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <span className="product-label label-circle label-sale">
                              Sale
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-14.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Cell Phone</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Google - Pixel 3 XL 128GB
                              </a>
                            </h3>
                            <div className="product-price">
                              <span className="new-price">$35.41</span>
                              <span className="old-price">Was $41.67</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 10 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#edd2c8" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#333333" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-12.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Audio</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundLink Bluetooth Speaker
                              </a>
                            </h3>
                            <div className="product-price">$79.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-13.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trending-acc-link" className="p-0">
                      <Carousel
                        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        options={trendingOptions}
                      >
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-15.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">TV &amp; Home Theater</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Samsung - 55" Class LED 2160p Smart
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 5 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">
                              Top
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-11.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Laptops</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                MacBook Pro 13" Display, i5
                              </a>
                            </h3>
                            <div className="product-price">$1,199.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-12.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Audio</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Bose - SoundLink Bluetooth Speaker
                              </a>
                            </h3>
                            <div className="product-price">$79.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "60%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 6 Reviews )
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">
                              New
                            </span>
                            <a href="product.html">
                              <img
                                src="/assets/images/demos/demo-3/products/product-13.jpg"
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                            </div>
                            <div className="product-action product-action-dark">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="Add to cart"
                              >
                                <span>add to cart</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                              >
                                <span>quick view</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Tablets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">
                                Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                              </a>
                            </h3>
                            <div className="product-price">$899.99</div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <span className="ratings-text">
                                ( 4 Reviews )
                              </span>
                            </div>
                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a href="#" style={{ background: "#eaeaec" }}>
                                <span className="sr-only">Color name</span>
                              </a>
                              <a
                                href="#"
                                className="active"
                                style={{ background: "#333333" }}
                              >
                                <span className="sr-only">Color name</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
          <div className="container">
            <hr className="mt-5 mb-6" />
          </div>
          <div className="container top">
            <Tab.Container defaultActiveKey="top-all-link">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">Top Selling Products</h2>
                </div>
                <div className="heading-right">
                  <Nav
                    variant="pills"
                    className="nav-border-anim justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="top-all-link">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="top-tv-link">TV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="top-computers-link">
                        Computers
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="top-phones-link">
                        Tablets &amp; Cell Phones
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="top-watches-link">
                        Smartwatches
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="top-acc-link">Accessories</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Tab.Content className="tab-content-carousel just-action-icons-sm">
                <Tab.Pane eventKey="top-all-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="top-tv-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="top-computers-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="top-phones-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="top-watches-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="top-acc-link" className="p-0">
                  <Carousel
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    options={topOptions}
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        <div className="product-price">$1,199.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price">$79.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB
                          </a>
                        </h3>
                        <div className="product-price">$899.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
          <div className="container">
            <hr className="mt-5 mb-0" />
          </div>
          <div className="icon-boxes-container mt-2 mb-2 bg-transparent">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rocket" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Shipping</h3>
                      <p>Orders $50 or more</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rotate-left" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Returns</h3>
                      <p>Within 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-info-circle" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                      <p>when you sign up</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-life-ring" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">We Support</h3>
                      <p>24/7 amazing services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="cta cta-separator cta-border-image cta-half mb-0"
              style={{
                backgroundImage: "url(/assets/images/demos/demo-3/bg-2.jpg)",
              }}
            >
              <div className="cta-border-wrapper bg-white">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cta-wrapper cta-text text-center">
                      <h3 className="cta-title">Shop Social</h3>
                      <p className="cta-desc">
                        Donec nec justo eget felis facilisis fermentum. Aliquam
                        porttitor mauris sit amet orci.
                      </p>
                      <div className="social-icons social-icons-colored justify-content-center">
                        <a
                          href="#"
                          className="social-icon social-facebook"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="social-icon social-twitter"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="#"
                          className="social-icon social-instagram"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                        <a
                          href="#"
                          className="social-icon social-youtube"
                          title="Youtube"
                          target="_blank"
                        >
                          <i className="icon-youtube" />
                        </a>
                        <a
                          href="#"
                          className="social-icon social-pinterest"
                          title="Pinterest"
                          target="_blank"
                        >
                          <i className="icon-pinterest" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cta-wrapper text-center">
                      <h3 className="cta-title">Get the Latest Deals</h3>
                      <p className="cta-desc">
                        and <br />
                        receive
                        <span className="text-primary">$20 coupon</span> for
                        first shopping
                      </p>
                      <form action="#">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your Email Address"
                            aria-label="Email Adress"
                            required=""
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary btn-rounded"
                              type="submit"
                            >
                              <i className="icon-long-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="widget widget-about">
                    <img
                      src="/assets/images/demos/demo-3/logo-footer.png"
                      className="footer-logo"
                      alt="Footer Logo"
                      width={105}
                      height={25}
                    />
                    <p>
                      Praesent dapibus, neque id cursus ucibus, tortor neque
                      egestas augue, eu vulputate magna eros eu erat.
                    </p>
                    <div className="widget-call">
                      <i className="icon-phone" />
                      Got Question? Call us 24/7
                      <a href="tel:#">+0123 456 789</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Useful Links</h4>
                    <ul className="widget-list">
                      <li>
                        <a href="about.html">About Molla</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">How to shop on Molla</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Customer Service</h4>
                    <ul className="widget-list">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>
                    <ul className="widget-list">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">
                Copyright © 2019 Molla Store. All Rights Reserved.
              </p>
              <figure className="footer-payments">
                <img
                  src="/assets/images/payments.png"
                  alt="Payment methods"
                  width={272}
                  height={20}
                />
              </figure>
            </div>
          </div>
        </footer>
      </div>
      {showButton && (
        <button
          className="scrollToTop"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <i className="icon-arrow-up" />
        </button>
      )}
      <div className="mobile-menu-overlay" />
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required=""
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index-1.html">01 - furniture store</a>
                      </li>
                      <li>
                        <a href="index-2.html">02 - furniture store</a>
                      </li>
                      <li>
                        <a href="index-3.html">03 - electronic store</a>
                      </li>
                      <li>
                        <a href="index-4.html">04 - electronic store</a>
                      </li>
                      <li>
                        <a href="index-5.html">05 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-6.html">06 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-7.html">07 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-8.html">08 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-9.html">09 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-10.html">10 - shoes store</a>
                      </li>
                      <li>
                        <a href="index-11.html">11 - furniture simple store</a>
                      </li>
                      <li>
                        <a href="index-12.html">12 - fashion simple store</a>
                      </li>
                      <li>
                        <a href="index-13.html">13 - market</a>
                      </li>
                      <li>
                        <a href="index-14.html">14 - market fullwidth</a>
                      </li>
                      <li>
                        <a href="index-15.html">15 - lookbook 1</a>
                      </li>
                      <li>
                        <a href="index-16.html">16 - lookbook 2</a>
                      </li>
                      <li>
                        <a href="index-17.html">17 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-18.html">
                          18 - fashion store (with sidebar)
                        </a>
                      </li>
                      <li>
                        <a href="index-19.html">19 - games store</a>
                      </li>
                      <li>
                        <a href="index-20.html">20 - book store</a>
                      </li>
                      <li>
                        <a href="index-21.html">21 - sport store</a>
                      </li>
                      <li>
                        <a href="index-22.html">22 - tools store</a>
                      </li>
                      <li>
                        <a href="index-23.html">
                          23 - fashion left navigation store
                        </a>
                      </li>
                      <li>
                        <a href="index-24.html">24 - extreme sport store</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Shop</a>
                    <ul>
                      <li>
                        <a href="category-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="category-2cols.html">Shop Grid 2 Columns</a>
                      </li>
                      <li>
                        <a href="category.html">Shop Grid 3 Columns</a>
                      </li>
                      <li>
                        <a href="category-4cols.html">Shop Grid 4 Columns</a>
                      </li>
                      <li>
                        <a href="category-boxed.html">
                          <span>
                            Shop Boxed No Sidebar
                            <span className="tip tip-hot">Hot</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="category-fullwidth.html">
                          Shop Fullwidth No Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-category-boxed.html">
                          Product Category Boxed
                        </a>
                      </li>
                      <li>
                        <a href="product-category-fullwidth.html">
                          <span>
                            Product Category Fullwidth
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Lookbook</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                      <li>
                        <a href="product-centered.html">Centered</a>
                      </li>
                      <li>
                        <a href="product-extended.html">
                          <span>
                            Extended Info
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky Info</a>
                      </li>
                      <li>
                        <a href="product-sidebar.html">Boxed With Sidebar</a>
                      </li>
                      <li>
                        <a href="product-fullwidth.html">Full Width</a>
                      </li>
                      <li>
                        <a href="product-masonry.html">Masonry Sticky Info</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About</a>
                        <ul>
                          <li>
                            <a href="about.html">About 01</a>
                          </li>
                          <li>
                            <a href="about-2.html">About 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                        <ul>
                          <li>
                            <a href="contact.html">Contact 01</a>
                          </li>
                          <li>
                            <a href="contact-2.html">Contact 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-listing.html">Listing</a>
                      </li>
                      <li>
                        <a href="#">Grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid-2cols.html">Grid 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-4cols.html">Grid 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2cols.html">
                              Masonry 2 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">
                              Masonry 3 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-4cols.html">
                              Masonry 4 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">
                              Masonry sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">Blog mask grid</a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">
                              Blog mask masonry
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Post</a>
                        <ul>
                          <li>
                            <a href="single.html">Default with sidebar</a>
                          </li>
                          <li>
                            <a href="single-fullwidth.html">
                              Fullwidth no sidebar
                            </a>
                          </li>
                          <li>
                            <a href="single-fullwidth-sidebar.html">
                              Fullwidth with sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-list.html">Elements</a>
                    <ul>
                      <li>
                        <a href="elements-products.html">Products</a>
                      </li>
                      <li>
                        <a href="elements-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="elements-titles.html">Titles</a>
                      </li>
                      <li>
                        <a href="elements-banners.html">Banners</a>
                      </li>
                      <li>
                        <a href="elements-product-category.html">
                          Product Category
                        </a>
                      </li>
                      <li>
                        <a href="elements-video-banners.html">Video Banners</a>
                      </li>
                      <li>
                        <a href="elements-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="elements-accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="elements-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="elements-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="elements-blog-posts.html">Blog Posts</a>
                      </li>
                      <li>
                        <a href="elements-portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="elements-cta.html">Call to Action</a>
                      </li>
                      <li>
                        <a href="elements-icon-boxes.html">Icon Boxes</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas &amp; Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs &amp; Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee &amp; Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Body>
          <button
            type="button"
            className="close"
            onClick={() => setModalShow(false)}
          >
            <span aria-hidden="true">
              <i className="icon-close" />
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <Tab.Container defaultActiveKey="signin-tab">
                <Nav variant="pills" className="nav-fill nav-border-anim">
                  <Nav.Item>
                    <Nav.Link eventKey="signin-tab">Sign In</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register">Register</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content-carousel">
                  <Tab.Pane eventKey="signin-tab">
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="singin-email">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email"
                          name="singin-email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="singin-password"
                          name="singin-password"
                          required=""
                        />
                      </div>
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>LOG IN</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="signin-remember"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="signin-remember"
                          >
                            Remember Me
                          </label>
                        </div>
                        <a href="#" className="forgot-link">
                          Forgot Your Password?
                        </a>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="register-email">
                          Your email address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          name="register-email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="register-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          name="register-password"
                          required=""
                        />
                      </div>
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SIGN UP</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy"
                          >
                            I agree to the
                            <a href="#">privacy policy</a> *
                          </label>
                        </div>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Popup popupShow={popupShow} setPopupShow={setPopupShow} />
    </>
  );
};

export default Home;
