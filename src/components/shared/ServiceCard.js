import Image from "next/image";
import defaultImage from "../../imag/serviceImage.png";
import "./shared.css";

export default function ServiceCard({
  img = defaultImage,
  description,
  title,
}) {
  return (
    <article className="serviceCard">
      <div className="serviceCardContent">
        <div className="serviceCardImage">
          <Image
            src={img}
            alt={title || "Service image"}
            className="serviceImage"
          />
        </div>

        <h2 className="serviceCardTitle">{title}</h2>

        {description && (
          <p className="serviceCardDescription">{description}</p>
        )}
      </div>
    </article>
  );
}