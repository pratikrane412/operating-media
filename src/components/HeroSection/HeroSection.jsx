import { useEffect, useState } from "react";

export default function HeroUltra() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section className="hero">

      {/* GRID */}
      <div className="grid-bg"></div>

      <div className="container">

        {/* LEFT */}
        <div className={`left ${show ? "show" : ""}`}>

          <h1>
            Your <span className="orange">AI-Powered</span><br />
            Digital Marketing<br />
            Career <span className="highlight">Starts Here</span>
          </h1>

          <p className="desc">
            Join 30,000+ students community who transformed their careers with advanced digital marketing courses.
          </p>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>Rated by 30,000+ learners</span>
          </div>

          <div className="btns">
            <button className="primary">Book a Demo →</button>
            <button className="secondary">Download Brochure</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className={`right ${show ? "show" : ""}`}>

          {/* MERGED ORANGE GLOW */}
          <div className="glow"></div>

          {/* IMAGE */}
          <img
            src="/images/your-image.png"
            alt=""
            className="hero-img"
          />

          {/* ICONS */}
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" className="icon google" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="icon fb" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="icon insta" />
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="icon yt" />

          {/* CARDS */}
          <div className="card card1">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div className="card card2">
            <strong>400+</strong>
            <span>Hiring Partners</span>
          </div>

        </div>

      </div>

      <style>{`

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          font-family: 'Satoshi', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* GRID */
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(#eeeeee 1px, transparent 1px),
                            linear-gradient(90deg, #eeeeee 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          padding: 0 60px;
          align-items: center;
          z-index: 2;
        }

        /* LEFT */
        .left {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.6s ease;
        }

        .left.show {
          opacity: 1;
          transform: translateY(0);
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 4.6rem);
          font-weight: 900;
          line-height: 1.1;
          color: #0f172a;
        }

        .orange {
          color: #ECAB00;
        }

        .highlight {
          color: #2563eb;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 10px;
          border: 2px solid #ECAB00;
          border-radius: 999px;
        }

        .desc {
          margin-top: 20px;
          color: #525252;
          max-width: 480px;
          font-size: 15px;
        }

        .rating {
          margin-top: 20px;
          font-weight: 600;
          font-size: 14px;
          color: #374151;
        }

        .btns {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary {
          background: #ECAB00;
          color: white;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          border: none;
        }

        .secondary {
          border: 1px solid #2563eb;
          color: #2563eb;
          padding: 13px 26px;
          border-radius: 8px;
          background: transparent;
          font-weight: 700;
        }

        /* RIGHT */
        .right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(30px);
          transition: 0.6s ease;
        }

        .right.show {
          opacity: 1;
          transform: translateX(0);
        }

        /* MERGED GLOW */
        .glow {
          position: absolute;
          width: clamp(320px, 42vw, 540px);
          height: clamp(320px, 42vw, 540px);
          background: radial-gradient(circle, #fb923c 0%, #ECAB00 55%, transparent 70%);
          filter: blur(50px);
          z-index: 1;
        }

        .hero-img {
          position: relative;
          z-index: 2;
          width: clamp(340px, 40vw, 540px);
          height: auto;
          animation: float 6s ease-in-out infinite;
        }

        /* ICONS */
        .icon {
          position: absolute;
          width: 45px;
          background: #ffffff;
          padding: 6px;
          border-radius: 50%;
          z-index: 3;
        }

        .google { top: 8%; left: 12%; }
        .fb { top: -10%; right: 32%; }
        .insta { top: 35%; right: 2%; }
        .yt { bottom: 10%; right: 10%; }

        /* CARDS */
        .card {
          position: absolute;
          background: rgba(255,255,255,0.85);
          padding: 12px 14px;
          border-radius: 10px;
          z-index: 3;
        }

        .card1 { bottom: 4%; left: 8%; }
        .card2 { bottom: 25%; right: -3%; }

        .card strong {
          font-size: 24px;
          display: block;
          color: #111;
        }

        .card span {
          font-size: 18px;
    color: #666;
    font-weight: 500;
        }

        /* FLOAT */
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
            padding: 40px 20px;
          }

          .right {
            margin-top: 40px;
          }

          .hero-img {
            width: 280px;
          }

          .glow {
            width: 260px;
            height: 260px;
          }

          .icon {
            width: 28px;
          }
        }

      `}</style>
    </section>
  );
}