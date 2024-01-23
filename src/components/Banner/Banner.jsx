import "./banner.scss";

const Banner = ({ img, alt, text }) => {
  return (
    <section>
      <figure>
        <div className="banner-color"></div>
        <img src={img} alt={alt}/>
        <figcaption>{text}</figcaption>
      </figure>
    </section>
  );
};

export default Banner;