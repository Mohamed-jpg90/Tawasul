import Image from "next/image";
import defaultImage from "../../imag/cardImage.png";
import Button from "./Button";
import "./shared.css";

export default function Card({
  right = true,
  headtext = "إنشاء موقع إلكتروني خلال دقائق",
  headnumber,
  subtitles = [

  ],
  img = defaultImage,

  // New props with default values
  imageWidth = 500,
  imageHeight = 400,
  showButton = true,
  backgroundColor = " rgba(59, 93, 200, 0.1)",

  // Optional button defaults
  buttonText = "جرب الآن",
  buttonLink = "/register",
}) {
  return (
    <section
      className={`card ${right ? "cardRight" : "cardLeft"}`}
      style={{ backgroundColor }}
    >
      <div className="cardContent">
        <div
          className="cardImage"
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image
            src={img}
            alt={headtext}
            fill
            sizes="(max-width: 668px) 90vw, 700px"
            className="cardImg"
            priority
          />
        </div>

        <div className="cardtext">
          <div className="cardHeading">
            <span className="cardNumber">{headnumber}</span>
            <h2>{headtext}</h2>
          </div>
          
          {Array.isArray(subtitles) && subtitles.length > 0 && (
            <ul className="cardList">
              {subtitles.map((subtitle, index) => (
                <li key={index}>{subtitle}</li>
              ))}
            </ul>
          )}


          {showButton && (
            <Button text={buttonText} to={buttonLink} />
          )}
        </div>
      </div>
    </section>
  );
}