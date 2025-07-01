// src/components/home/CategoryShowcase.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CategoryShowcase.css"; // CategoryShowcase 스타일 파일

// 임시 카테고리 데이터
const categories = [
  {
    id: 1,
    name: "メルカリ",
    imageUrl:
      "	https://d1fm2tnjbkuv75.cloudfront.net/packs/media/service/vertical_mercari-5e66af2c.png",
    link: "https://jp.mercari.com/",
  },
  {
    id: 2,
    name: "amiami",
    imageUrl: "	https://www.amiami.jp/images/parts/amiami_logo.png",
    link: "https://www.amiami.jp/",
  },
  {
    id: 3,
    name: "제일복권",
    imageUrl: "	https://1kuji.com/images/common/logo_1kuji.png",
    link: "https://1kuji.com/products",
  },
];

function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <h2>구매 추천 사이트</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link to={cat.link} key={cat.id} className="category-card">
            <img src={cat.imageUrl} alt={cat.name} />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;
