import "./home.css";
import Button from "../shared/Button";

import Icons from "../shared/Icons";
import Icon1 from '../../imag/icon1.png'
import Icon2 from '../../imag/icon2.png'
import Icon3 from '../../imag/icon3.png'
import Icon4 from '../../imag/icon4.png'
import Icon5 from '../../imag/icon5.jpg'
// import Icon6 from '../../imag/icon6.png'
export default function HeroContactSection() {
      const floatingIcons = [
    { image: Icon1, className: "floatingIcon1" },
    { image: Icon2, className: "floatingIcon2" },
    { image: Icon3, className: "floatingIcon3" },
    { image: Icon4, className: "floatingIcon4" },
    { image: Icon5, className: "floatingIcon5" },
  ];
    return (
        <section className="herosection herosectionContact ">
            {/* Background ellipses */}
            {/* <div className="heroEllipse heroEllipseRight"></div>
            <div className="heroEllipse heroEllipseLeft"></div> */}
        {/* <div className="floatingIcons" aria-hidden="true">
        {floatingIcons.map((icon, index) => (
          <div key={index} className={`floatingIcon ${icon.className}`}>
            <Icons img={icon.image} />
          </div>
        ))}
      </div> */}
            <div className="herosectionContent">
                <div className="herosectionMainText">
                    <h1>
                   مستعدين نسمعك!
                        <br />
                    </h1>
                </div>

                <div className="herosectionDiscription">
                    <p>
كل فكرة عندك تهمنا وكل سؤال يقرّبنا أكثر من نجاحك <br/> سواء كنت في بداية مشروعك أو في منتصف طريق التوسع فريق "تواصل" معك بكل خطوة                    </p>
                </div>


            </div>
        </section>
    );
}