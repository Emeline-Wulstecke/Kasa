import "./banner.scss";

const Banner = ({ img, alt, txtAbout }) => {
  return (
    <header className="banner">
      <figure>
        <div className="banner-color"></div>
        <img src={img} alt={alt} className="banner-img"/>
        <figcaption className={`banner-txt ${txtAbout}`}> Chez vous, <span>partout et ailleurs</span></figcaption>
      </figure>
    </header>
  );
};

export default Banner;