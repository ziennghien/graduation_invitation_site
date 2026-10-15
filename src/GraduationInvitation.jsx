import React from "react";

import portrait from "./assets/IMG_4678.JPG";
import details from "./assets/IMG_5472.JPG";
import fullBody from "./assets/IMG_5249.JPG";
import tdtuLogo from "./assets/tdtu-logo.png";

const photos = {
  portrait,
  details,
  fullBody,
};

function DoodleHeart({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 40 36" aria-hidden="true">
      <path
        d="M20 31 C15 26 3 18 4 10 C5 2 15 1 20 9 C25 1 35 2 36 10 C37 18 25 26 20 31Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Photo({ src, alt, className = "", fallback }) {
  return (
    <div className={`photo ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const placeholder = event.currentTarget.nextElementSibling;
          if (placeholder) placeholder.style.display = "grid";
        }}
      />
      <div className="photo-fallback" style={{ display: "none" }}>
        {fallback}
      </div>
      <span className="tape" aria-hidden="true" />
    </div>
  );
}

export default function Main({ other = "bạn" }) {
  return (
    <main className="invitation-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Allura&display=swap');

        :root {
          --paper: #f6eddd;
          --paper-light: #fff9ee;
          --wine: #7c1f2a;
          --wine-dark: #5b1721;
          --navy: #203c61;
          --ink: #392b29;
          --gold: #c7a76b;
        }

        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #e8dfd2;
          color: var(--ink);
          font-family: 'Be Vietnam Pro', sans-serif;
        }
        .invitation-page {
          min-height: 100vh;
          padding: clamp(12px, 3vw, 34px);
          overflow: hidden;
          background:
            radial-gradient(ellipse at 12% 15%, rgba(124,31,42,.09), transparent 24%),
            radial-gradient(ellipse at 90% 80%, rgba(32,60,97,.10), transparent 25%),
            #eee5d8;
        }
        .scrapbook {
          position: relative;
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: clamp(22px, 4vw, 54px);
          border: 1px solid rgba(112, 76, 48, .18);
          background:
            linear-gradient(90deg, rgba(115,76,48,.025) 1px, transparent 1px),
            linear-gradient(rgba(115,76,48,.025) 1px, transparent 1px),
            var(--paper);
          background-size: 17px 17px;
          box-shadow: 0 22px 60px rgba(61, 42, 33, .17);
          isolation: isolate;
        }
        .scrapbook::before, .scrapbook::after {
          content: "";
          position: absolute;
          z-index: -1;
          pointer-events: none;
        }
        .scrapbook::before {
          width: 38%;
          height: 155px;
          top: 0;
          left: 0;
          background: var(--wine);
          clip-path: polygon(0 0, 100% 0, 93% 16%, 100% 29%, 91% 46%, 96% 64%, 85% 81%, 91% 100%, 0 100%);
          opacity: .97;
        }
        .scrapbook::after {
          width: 42%;
          height: 150px;
          right: 0;
          bottom: 0;
          background: var(--navy);
          clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%, 7% 77%, 0 58%, 9% 38%, 3% 18%);
          opacity: .96;
        }
        .corner-logo {
          position: absolute;
          top: 24px;
          left: 26px;
          z-index: 2;
          padding: 7px 11px;
          background: #fffaf0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, .2);
          transform: rotate(-3deg);
        }
        .corner-logo img {
          display: block;
          height: clamp(42px, 5vw, 58px);
          width: auto;
        }
        .corner-heart {
          position: absolute;
          top: 35px;
          left: 190px;
          width: 28px;
          color: #fff3dc;
          transform: rotate(-13deg);
        }
        .top-note {
          position: absolute;
          z-index: 3;
          top: 68px;
          left: 24%;
          width: 200px;
          padding: 14px 15px;
          color: var(--navy);
          background: #f4e5c9;
          box-shadow: 0 6px 13px rgba(50, 35, 20, .13);
          font-family: 'Allura', cursive;
          font-size: 27px;
          line-height: 1.05;
          text-align: center;
          transform: rotate(-7deg);
        }
        .hero {
          display: grid;
          grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
          gap: clamp(26px, 4vw, 58px);
          align-items: center;
          padding-top: 60px;
        }
        .hero-photo-wrap {
          position: relative;
          padding: 10px 8px 22px;
          background: #fffaf0;
          box-shadow: 0 10px 22px rgba(63, 40, 30, .18);
          transform: rotate(-2deg);
        }
        .hero-photo-wrap::before {
          content: "";
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(124,31,42,.18);
          pointer-events: none;
        }
        .hero-photo {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #dfd4c2;
        }
        .hero-photo img, .photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-photo img { object-position: center 35%; }
        .photo-fallback {
          height: 100%;
          min-height: 140px;
          padding: 20px;
          place-items: center;
          text-align: center;
          color: #6f5a4b;
          background: repeating-linear-gradient(135deg, #e6dac7 0 12px, #f4ead9 12px 24px);
          font-size: 13px;
        }
        .photo-caption {
          padding: 10px 4px 0;
          color: var(--wine);
          font-family: 'Allura', cursive;
          font-size: 29px;
          text-align: center;
        }
        .hero-copy { position: relative; padding: 0 0 12px; }
        .class-year {
          display: flex;
          align-items: center;
          gap: 13px;
          color: var(--wine);
          letter-spacing: .24em;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .class-year::before, .class-year::after {
          content: "";
          display: block;
          width: 35px;
          height: 1px;
          background: var(--gold);
        }
        .cap {
          position: absolute;
          top: -62px;
          right: 0;
          width: 86px;
          color: var(--navy);
          transform: rotate(8deg);
        }
        h1 {
          margin: 22px 0 0;
          color: var(--wine);
          font-family: 'Allura', cursive;
          font-size: clamp(62px, 8vw, 112px);
          font-weight: 400;
          line-height: .9;
        }
        .headline-sub {
          margin: 6px 0 18px;
          color: var(--wine);
          font-family: 'Playfair Display', serif;
          font-size: clamp(25px, 3.4vw, 44px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: .02em;
        }
        .recipient-line {
          margin: 4px 0 26px;
          font-family: 'Allura', cursive;
          line-height: 1;
        }
        .recipient-of {
          display: block;
          color: var(--ink);
          font-size: clamp(30px, 3.4vw, 40px);
        }
        .recipient-line strong {
          display: block;
          margin-top: 2px;
          color: #111;
          font-weight: 400;
          font-size: clamp(46px, 5.6vw, 72px);
          -webkit-text-stroke: .7px currentColor;
        }
        .details {
          display: grid;
          gap: 17px;
          padding: 20px 0;
          border-top: 1px solid rgba(124,31,42,.35);
          border-bottom: 1px solid rgba(124,31,42,.35);
        }
        .detail {
          display: grid;
          grid-template-columns: 34px 1fr;
          align-items: center;
          gap: 13px;
        }
        .detail-icon {
          width: 30px;
          height: 30px;
          color: var(--wine);
        }
        .detail-label {
          display: block;
          margin-bottom: 3px;
          color: #8a6c57;
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .detail-value {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;
        }
        .lower-grid {
          display: grid;
          grid-template-columns: 1fr 1fr .85fr;
          gap: 22px;
          align-items: center;
          margin-top: 48px;
        }
        .photo {
          position: relative;
          padding: 9px 9px 29px;
          background: #fffaf0;
          box-shadow: 0 9px 20px rgba(63,40,30,.17);
        }
        .photo img { aspect-ratio: 4 / 5; }
        .photo:nth-child(1) { transform: rotate(-4deg); }
        .photo:nth-child(2) { transform: rotate(3deg); }
        .tape {
          position: absolute;
          top: -10px;
          left: 30%;
          width: 42%;
          height: 23px;
          background: rgba(226, 208, 165, .82);
          transform: rotate(-3deg);
          box-shadow: 0 2px 4px rgba(80,55,30,.08);
        }
        .handwritten-note {
          padding: 20px 15px;
          color: var(--navy);
          font-family: 'Allura', cursive;
          font-size: clamp(25px, 3vw, 35px);
          line-height: 1.1;
          text-align: center;
          transform: rotate(3deg);
        }
        .handwritten-note small {
          display: block;
          margin-top: 12px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: .05em;
          text-transform: uppercase;
        }
        .bottom-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 45px auto 5px;
          color: var(--wine);
          text-align: center;
          font-family: 'Allura', cursive;
          font-size: clamp(28px, 3vw, 39px);
        }
        .bottom-note svg { width: 30px; flex: 0 0 auto; }
        .scrapbook-footer {
          margin-top: 28px;
          padding: 18px 0 24px;
          border-top: 1px solid #e8ddcf;
          color: rgba(255,248,233,.95);
          font-size: 10px;
          letter-spacing: .14em;
          text-align: left;
          text-transform: uppercase;
        }
        .tiny-star {
          position: absolute;
          color: var(--gold);
          font-size: 28px;
        }
        .star-one { top: 34%; left: 3%; transform: rotate(-12deg); }
        .star-two { right: 4%; top: 49%; color: var(--wine); transform: rotate(10deg); }
        .map-link {
          display: inline-flex;
          margin-top: 8px;
          padding: 10px 15px;
          border: 1px solid rgba(124,31,42,.45);
          border-radius: 999px;
          color: var(--wine);
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition: background .2s, color .2s;
        }
        .map-link:hover { background: var(--wine); color: #fff8ee; }
        @media (max-width: 760px) {
          .invitation-page { padding: 0; }
          .scrapbook { padding: 24px 20px 38px; }
          .scrapbook::before { height: 112px; width: 58%; }
          .scrapbook::after { height: 100px; width: 48%; }
          .corner-logo { top: 18px; left: 19px; padding: 5px 8px; }
          .corner-logo img { height: 38px; }
          .corner-heart { top: 23px; left: 155px; width: 22px; }
          .top-note { top: 83px; left: auto; right: 15px; width: 145px; font-size: 22px; }
          .hero { grid-template-columns: 1fr; gap: 32px; padding-top: 100px; }
          .hero-photo-wrap { width: min(390px, 90%); margin: 0 auto; }
          .hero-copy { padding: 8px 4px; }
          .cap { top: -35px; width: 60px; }
          h1 { font-size: clamp(66px, 17vw, 92px); }
          .headline-sub { font-size: clamp(27px, 7vw, 38px); }
          .lower-grid { grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 34px; }
          .handwritten-note { grid-column: 1 / -1; padding: 10px 18px; }
          .photo { padding: 6px 6px 22px; }
          .photo-caption { font-size: 23px; }
          .scrapbook-footer { position: relative; z-index: 1; margin-top: 35px; line-height: 1.7; }
          .star-one { top: 28%; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <section className="scrapbook">
        <div className="corner-logo">
          <img src={tdtuLogo} alt="Logo Trường Đại học Tôn Đức Thắng" />
        </div>
        <DoodleHeart className="corner-heart" />
        <div className="top-note">Có một loại tươi đẹp mang tên Thanh Xuân,<br />có một loại chia ly mang tên Tốt Nghiệp.</div>
        <span className="tiny-star star-one">✧</span>
        <span className="tiny-star star-two">♡</span>

        <section className="hero">
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src={photos.portrait}
                alt="Mỹ Duyên trong lễ phục tốt nghiệp, cầm giấy khen và bìa bằng"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  const placeholder = event.currentTarget.nextElementSibling;
                  if (placeholder) placeholder.style.display = "grid";
                }}
              />
              <div className="photo-fallback" style={{ display: "none" }}>
                Thêm ảnh IMG_4678.JPG vào thư mục public/images
              </div>
            </div>
            <div className="photo-caption">Một cột mốc, thật nhiều yêu thương ♡</div>
          </div>

          <div className="hero-copy">
            <div className="class-year">Class of 2026</div>
            <svg className="cap" viewBox="0 0 100 75" fill="none" aria-hidden="true">
              <path d="M5 25 50 5 95 25 50 46 5 25Z" fill="currentColor" opacity=".95" />
              <path d="M23 34v17c17 12 37 12 54 0V34L50 47 23 34Z" fill="currentColor" opacity=".78" />
              <path d="M94 26v28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="94" cy="57" r="4" fill="currentColor" />
            </svg>
            <h1>Thư mời</h1>
            <div className="headline-sub">DỰ LỄ TỐT NGHIỆP</div>
            <p className="recipient-line">
              <span className="recipient-of">của</span>
              <strong>Nguyễn Mỹ Duyên ♡</strong>
            </p>

            <div className="details">
              <div className="detail">
                <svg
                  className="detail-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="4"
                    y="7"
                    width="24"
                    height="22"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 3v8M22 3v8M4 14h24M10 19h3M18 19h4M10 24h3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <div>
                  <span className="detail-label">Thời gian</span>
                  <div className="detail-value">
                    17/10/2026 (Thứ 7)
                    <br />
                    Sáng: 10h00–11h00
                    <br />
                    Chiều: 15h00–16h00
                  </div>
                </div>
              </div>

              <div className="detail">
                <svg
                  className="detail-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M26 13c0 8-10 16-10 16S6 21 6 13a10 10 0 1 1 20 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="16"
                    cy="13"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                <div>
                  <span className="detail-label">Địa điểm</span>
                  <div className="detail-value">
                    Trường Đại học Tôn Đức Thắng
                    <br />
                    19 Nguyễn Hữu Thọ, Phường Tân Hưng,
                    <br />
                    TP. Hồ Chí Minh
                  </div>

                  <a
                    className="map-link"
                    href="https://www.google.com/maps/search/?api=1&query=Truong+Dai+hoc+Ton+Duc+Thang+19+Nguyen+Huu+Tho+Tan+Hung+Ho+Chi+Minh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem đường đi trên Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lower-grid" aria-label="Ảnh kỷ niệm tốt nghiệp">
          <Photo
            src={photos.details}
            alt="Kỷ niệm tốt nghiệp: giấy khen, huy chương và lễ phục"
            fallback="Ảnh kỷ niệm: giấy khen, huy chương và lễ phục"
          />
          <Photo
            src={photos.fullBody}
            alt="Mỹ Duyên trong lễ phục tại khuôn viên trường"
            fallback="Ảnh toàn thân tại khuôn viên trường"
          />
          <div className="handwritten-note">
            Tốt nghiệp không phải là kết thúc,
            mà là khởi đầu của một hành trình mới!
            <small>Rất mong được gặp {other} trong ngày đặc biệt này</small>
            <DoodleHeart />
          </div>
        </section>

        <div className="bottom-note">
          <DoodleHeart />
          <span>Cùng nhau viết tiếp thanh xuân nhé!</span>
          <DoodleHeart />
        </div>
        <div className="scrapbook-footer">A little scrapbook of a big milestone · TDTU · Class of 2026</div>
      </section>
    </main>
  );
}