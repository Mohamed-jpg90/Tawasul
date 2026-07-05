import React from "react";
import Button from "./Button";
import "./shared.css";

export default function PriceingCard({
  primary = false,
  title,
  subtitle,
  price,
  monthely,
  feattures = [],
  buttonText,
  badge,
}) {
  return (
    <div className={primary ? "priceingCard priceingCardActive" : "priceingCard"}>
      {badge && <div className="cardBadge">{badge}</div>}

      <div className="PriceingCardCpntent">
        <div className={ primary? "cardHeaderPrimary" :"cardHeader" }>
          <h3 className="cardTitle">{title}</h3>
          {subtitle && <p className="cardSubtitle">{subtitle}</p>}
        </div>

        <div className="cardPrice">
          {price === 0 || price === "مجانا" ? (
            <span className="priceFree">مجانا</span>
          ) : (
            <>
              <span className="priceValue">{price}</span>
              <span className="priceCurrency">ريال</span>
            </>
          )}
          {monthely && price !== "مجانا" && price !== 0 && (
            <span className="priceMonthly">شهري</span>
          )}
        </div>

        <ul className="featuresList">
          {feattures.map((feature, index) => (
            <li key={index} className="featureItem">
              <span className="checkIcon">✓</span>
              <span className="featureText">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="cardFooter">
          {
            primary? (<Button text={buttonText} primary={false} />):(<Button text={buttonText} primary={true} />)
          }
         
        </div>
      </div>
    </div>
  );
}