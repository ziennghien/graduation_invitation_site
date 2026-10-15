import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, MapPinned, Navigation, Phone, Mail, CircleHelp, ExternalLink } from 'lucide-react';
import coverImage from './assets/page1-cover.JPG';
import campusMapImage from './assets/tdtu-campus-map.png';
import './styles.css';
import GraduationInvitation from "./GraduationInvitation";
import Admin from "./Admin";
import { ADMIN_CODE, findGuest } from "./guests";

const MAP_QUERY = 'Tượng đài Bác Tôn, Trường Đại học Tôn Đức Thắng, 19 Nguyễn Hữu Thọ, Tân Phong, Quận 7, Thành phố Hồ Chí Minh';
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;
const GATE9_URL = 'https://maps.app.goo.gl/NYxWExoiP4hbQgD88';
const DISCOVERY_URL = 'https://discovery.tdtu.edu.vn/';

// Link dạng <domain>/#<mã>, không để lộ tên trên thanh địa chỉ
const readCode = () => decodeURIComponent(window.location.hash.replace(/^#\/?/, '')).trim();
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);

function App() {
  const [page, setPage] = useState(1);
  const [code, setCode] = useState(readCode);
  useEffect(() => {
    const onHash = () => setCode(readCode());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const guest = findGuest(code);
  const recipient = guest ? (guest.display || guest.name) : '';
  const other = (guest?.other || 'bạn').toLowerCase();
  const self = (guest?.self || 'mình').toLowerCase();

  const go = (n) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (ADMIN_CODE && code === ADMIN_CODE) return <Admin />;

  // Không có mã hợp lệ (ví dụ mở từ thẻ xem trước trong ứng dụng chat) -> nhắc mở đúng link
  if (!guest) {
    return <main className="site-shell">
      <div className="info-page" style={{ textAlign: 'center', minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-heading">
          <p className="eyebrow">THÂN GỬI</p>
          <h2>Bạn chưa mở đúng link rồi</h2>
          <p>Vui lòng nhấn vào link Mỹ Duyên đã gửi (không phải phần xem trước) để xem được thiệp.</p>
        </div>
      </div>
    </main>;
  }

  return <main className="site-shell">
    <header className="topbar">
      <button className="brand" onClick={() => go(1)} aria-label="Về trang đầu"><span className="brand-mark">MD</span><span>Graduation · 2026</span></button>
      <nav className="page-nav" aria-label="Điều hướng trang">
        {[1,2,3,4].map(n => <button key={n} onClick={() => go(n)} className={page === n ? 'nav-number active' : 'nav-number'} aria-label={`Trang ${n}`}>{String(n).padStart(2,'0')}</button>)}
      </nav>
    </header>

    {page === 1 && <section className="cover-page">
      <img className="cover-photo" src={coverImage} alt="Ảnh tốt nghiệp của Nguyễn Mỹ Duyên" />
      <div className="cover-overlay" />
      <div className="cover-copy">
        <p className="eyebrow">A LITTLE NOTE FOR YOU</p>
        <h1>Thân gửi</h1>
        <div className="ornament"><span></span>✦<span></span></div>
        <p className="recipient">{recipient || 'Bạn thân mến'}</p>
        <p className="cover-desc">Có một cột mốc nhỏ {self} muốn chia sẻ cùng {other}.</p>
        <button className="gold-button" onClick={() => go(2)}>Mở thiệp mời <ArrowRight size={17}/></button>
      </div>
      <div className="cover-foot">NGUYỄN MỸ DUYÊN <span>·</span> TDTU K26</div>
    </section>}

    {page === 2 && (
      <section className="invitation-page">
        <GraduationInvitation other={other} />

        <div className="poster-actions">
          <button className="outline-button" onClick={() => go(1)}>
            <ArrowLeft size={16} />
            Trang trước
          </button>

          <button className="wine-button" onClick={() => go(3)}>
            Đường đi & gửi xe
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    )}

    {page === 3 && <section className="info-page">
      <div className="section-heading"><p className="eyebrow">COME FIND THE PLACE</p><h2>Đường đi & gửi xe</h2><p>{cap(self)} để sẵn bản đồ để {other} tiện xem đường trước khi đi nhé.</p></div>
      <div className="info-grid">
        <article className="info-card map-card">
          <div className="card-icon"><MapPinned size={22}/></div><h3>Điểm hẹn: Tượng đài Bác Tôn</h3>
          <p className="address">Trường Đại học Tôn Đức Thắng (TDTU), 19 Nguyễn Hữu Thọ, phường Tân Hưng, TP. Hồ Chí Minh.</p>
          <a className="campus-map-link" href={DISCOVERY_URL} target="_blank" rel="noreferrer" aria-label="Mở website trải nghiệm trực tuyến TDTU">
            <img className="campus-map-image" src={campusMapImage} alt="Bản đồ khuôn viên Trường Đại học Tôn Đức Thắng với các cổng 1 đến 9" />
            <span>Xem bản đồ trải nghiệm trực tuyến TDTU <ExternalLink size={14}/></span>
          </a>
          <a className="wine-button link-button" href={MAP_URL} target="_blank" rel="noreferrer">Mở chỉ đường đến Tượng đài Bác Tôn <ExternalLink size={16}/></a>
          <a className="outline-button link-button" href={GATE9_URL} target="_blank" rel="noreferrer">Mở chỉ đường đến Cổng 9 (gửi xe máy) <ExternalLink size={16}/></a>
          <p className="muted map-tip">{cap(other)} có thể mở bản đồ trải nghiệm để xem khuôn viên và xác định vị trí tượng đài trước khi đến.</p>
        </article>
        <article className="info-card parking-card">
          <div className="card-icon"><Navigation size={22}/></div><h3>Hướng dẫn di chuyển</h3>
          <div className="detail-line"><span className="detail-dot">01</span><div><b>Khách đi xe máy</b><p>Gửi xe tại <strong>Cổng 9</strong>, sau đó đi bộ đến Tượng đài Bác Tôn làm điểm hẹn.</p></div></div>
          <div className="detail-line"><span className="detail-dot">02</span><div><b>Khách đi xe công nghệ</b><p>Nên chọn <strong>Cổng 1 hoặc Cổng 2</strong> để hạn chế quãng đường đi bộ. Xe chỉ được trả khách ở bên ngoài cổng và <strong>không được đi vào khuôn viên trường</strong>.</p></div></div>
          <div className="detail-line"><span className="detail-dot">03</span><div><b>Điểm hẹn chung</b><p>Sau khi đến trường, mình hẹn gặp nhau tại <strong>Tượng đài Bác Tôn</strong>.</p></div></div>
          <div className="note-box"><CircleHelp size={18}/><span>Nếu bảo vệ hỏi thông tin sinh viên để xác minh, mã số sinh viên của Duyên là <strong>52200190</strong>. </span></div>
        </article>
      </div>
      <div className="page-actions"><button className="outline-button" onClick={() => go(2)}><ArrowLeft size={16}/> Thiệp mời</button><button className="wine-button" onClick={() => go(4)}>Liên hệ & tìm mình <ArrowRight size={16}/></button></div>
    </section>}

    {page === 4 && <section className="info-page contact-page">
      <div className="section-heading"><p className="eyebrow">SEE YOU THERE</p><h2>Liên hệ & tìm mình</h2><p>Nếu {other} đến nơi mà chưa thấy {self}, có thể dùng thông tin liên hệ bên dưới.</p></div>
      <div className="contact-layout single" style={{ gridTemplateColumns: '1fr' }}>
        <article className="contact-note" style={{ textAlign: 'center', alignItems: 'center' }}>
          <p className="script-label">Hẹn gặp {other} nhé</p><h3>Một ngày đặc biệt<br/>sẽ vui hơn khi có {other}.</h3>
          <div className="contact-row" style={{ justifyContent: 'center', textAlign: 'left' }}><span className="contact-icon"><Phone size={18}/></span><div><small>Điện thoại / Zalo</small><b><a className="phone-link" href="https://zalo.me/0334344010">0334 344 010</a></b></div></div>
          <div className="contact-row" style={{ justifyContent: 'center', textAlign: 'left' }}><span className="contact-icon"><Mail size={18}/></span><div><small>Điểm hẹn</small><b>Tượng đài Bác Tôn · TDTU</b></div></div>
        </article>
      </div>
      <div className="page-actions"><button className="outline-button" onClick={() => go(3)}><ArrowLeft size={16}/> Đường đi & gửi xe</button><button className="wine-button" onClick={() => go(1)}>Về trang đầu <ArrowRight size={16}/></button></div>
    </section>}

    <footer className="footer"><span>Made with love</span><span>NGUYỄN MỸ DUYÊN · 2026</span></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);