import React, { useMemo, useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { GUESTS } from './guests';

const baseUrl = () => window.location.origin + window.location.pathname;

export default function Admin() {
  const [q, setQ] = useState('');
  const [copied, setCopied] = useState('');

  const rows = useMemo(
    () => GUESTS.map((g, i) => ({ ...g, no: i + 1, link: `${baseUrl()}#${g.code}` })),
    []
  );
  const keyword = q.trim().toLowerCase();
  const shown = rows.filter((r) => `${r.name} ${r.other} ${r.self} ${r.code}`.toLowerCase().includes(keyword));

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(''), 1500);
    } catch {
      window.prompt('Sao chép thủ công:', text);
    }
  };

  const copyAll = () => copy(rows.map((r) => `${r.name}\t${r.link}`).join('\n'), 'all');

  return (
    <main className="site-shell admin-page">
      <div className="section-heading">
        <p className="eyebrow">TRANG QUẢN TRỊ</p>
        <h2>Link thiệp mời</h2>
        <p>{rows.length} khách mời · mỗi người một link riêng</p>
      </div>

      <div className="admin-tools">
        <input
          className="admin-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm theo tên, xưng hô hoặc mã"
          aria-label="Tìm khách mời"
        />
        <button className="wine-button" onClick={copyAll}>
          {copied === 'all' ? <Check size={15} /> : <Copy size={15} />} Sao chép tất cả (tên + link)
        </button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>#</th><th>Người nhận</th><th>Xưng hô</th><th>Mã</th><th>Link</th><th></th></tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.code}>
                <td>{r.no}</td>
                <td><b>{r.name}</b></td>
                <td>{r.other} - {r.self}</td>
                <td><code>{r.code}</code></td>
                <td className="admin-link">{r.link}</td>
                <td className="admin-actions">
                  <button className="outline-button" onClick={() => copy(r.link, r.code)}>
                    {copied === r.code ? <Check size={14} /> : <Copy size={14} />} {copied === r.code ? 'Đã chép' : 'Chép link'}
                  </button>
                  <a className="outline-button" href={r.link} target="_blank" rel="noreferrer">
                    Xem <ExternalLink size={13} />
                  </a>
                </td>
              </tr>
            ))}
            {shown.length === 0 && <tr><td colSpan="6" className="admin-empty">Không tìm thấy khách mời nào.</td></tr>}
          </tbody>
        </table>
      </div>
    </main>
  );
}
