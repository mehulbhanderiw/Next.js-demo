import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

function Carousel({ options, children, className }) {
  return (
    <OwlCarousel className={className} {...options}>
      {children}
    </OwlCarousel>
  );
}

export default Carousel;
