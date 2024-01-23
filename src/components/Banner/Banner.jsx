import "./banner.scss";

const Banner = ({ img, alt, text }) => {
  return (
    <header className="banner">
      <figure>
        <div className="banner-color"></div>
        <img src={img} alt={alt} className="banner-img"/>
        <figcaption>{text}</figcaption>
      </figure>
    </header>
  );
};

export default Banner;