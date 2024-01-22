import "./banner.scss";

const Banner = ({ img, alt, text }) => {
  return (
    <figure >
      <div className="banner-color"></div>
      <img src={img} alt={alt}/>
      <figcaption>{text}</figcaption>
    </figure>
  );
};

export default Banner;