import Carousel from "../Carousel/Carousel";

function Slider() {
  const options = {
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    navText: [
      "<i class='icon-angle-left'></i>",
      "<i class='icon-angle-right'></i>",
    ],
    responsive: {
      768: {
        nav: true,
        dots: false,
      },
    },
  };
  const data = [
    {
      imageUrl: "/assets/images/demos/demo-3/slider/slide-1.jpg",
      subtitle: "Daily Deals",
      title: "AirPods Earphones",
      price: "$247",
      sub: ".99",
      link: "category.html",
    },
    {
      imageUrl: "/assets/images/demos/demo-3/slider/slide-2.jpg",
      subtitle: "Deals and Promotions",
      title: "Echo Dot 3rd Gen",
      oldPrice: "$49.99",
      price: "$29",
      sub: ".99",
      link: "category.html",
    },
  ];

  return (
    <>
      <Carousel
        options={options}
        className={
          "intro-slider owl-carousel owl-simple owl-dark owl-nav-inside"
        }
      >
        {data.map((item, index) => (
          <div key={item.id} className="">
            <div className="intro-slide" key={index}>
              <img src={item.imageUrl} alt="Image Desc" />
              <div className="intro-content">
                <h3 className="intro-subtitle text-primary">{item.subtitle}</h3>
                <h1 className="intro-title w-75">{item.title}</h1>
                {item.oldPrice && (
                  <div className="intro-price">
                    <sup className="intro-old-price">{item.oldPrice}</sup>
                    <span className="text-primary">
                      {item.price}
                      <sup>{item.sub}</sup>
                    </span>
                  </div>
                )}
                {!item.oldPrice && (
                  <div className="intro-price">
                    <sup>Today: </sup>
                    <span className="text-primary">
                      {item.price}
                      <sup>{item.sub}</sup>
                    </span>
                  </div>
                )}
                <a href={item.link} className="btn btn-primary btn-round">
                  <span>Click Here</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <span className="slider-loader" /> */}
    </>
  );
}

export default Slider;
