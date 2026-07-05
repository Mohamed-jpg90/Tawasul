import React from "react";
import Image from "next/image";
import img from "../../imag/rightSighn.png";
import './sector.css'
export default function WhySectorsUseTwasul({
  title = 'لماذا الشركات الاستشارية تختار "تـــــواصل"؟',
  point1,
  point2,
  point3,
  point4,
}) {
  const points = [point1, point2, point3, point4];

  return (
    <section className="whySectorsUseTwasul">
      <div className="whySectorsUseTwasulContent">
        <div className="sectionText">
          <h2 className="headerSeciont">{title}</h2>
        </div>

        <div className="pointsWrapper">
          {points.map(
            (point, index) =>
              point && (
                <div className="pointsContent" key={index}>
                  <div className="PointImage">
                    <Image src={img} alt="check" width={28} height={28} />
                  </div>

                  <div className="pointText">
                    <p>{point}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}