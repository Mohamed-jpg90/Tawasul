import Image from "next/image";
import "./Auth.css";
import img from '../../imag/login.png'
import logo from '../../imag/9433969339dc30ff23e7c765411625e87ebea061.png'


export default function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        {/* Left panel: background image + overlay + brand */}
        <div className="auth-visual">
          <Image
            src={img}
            alt=""
            fill
            priority
            className="auth-visual-image"
          />
          <div className="auth-visual-overlay" />

          <div className="auth-visual-content">
            <div className="auth-logo">
              <Image
                src={logo}
                alt="Tawasul"
                width={160}
                height={40}
                className="auth-logo-image"
              />
            </div>


          </div>
        </div>

        {/* Right panel: the actual form (Login / Register) */}
        <div className="auth-panel">
          <div className="auth-panel-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}