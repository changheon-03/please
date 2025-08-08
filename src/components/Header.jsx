import React, { useState } from 'react';
import './Header.css';
import { FaUserCircle, FaGlobe } from "react-icons/fa";

const Header = ({ navigate }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const menuData = [
    {
      title: '회사소개',
      items: [
        { name: '인사말', page: 'hi' },
        { name: '홍보영상', page: 'promo' }
      ]
    },
    {
      title: '서비스',
      items: [
        { name: '제품 소개', page: 'intro' },
        { name: '체험', page: 'experience' }
      ]
    },
    {
      title: '문의사항',
      items: [
        { name: 'FAQ', page: 'faq' },
        { name: '1:1문의하기', page: 'questionform' }
      ]
    }
  ];

  const handleClick = (e, page) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <div 
      className="new-header-wrapper"
      onMouseEnter={() => setShowMegaMenu(true)}
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      {/* 메인 헤더 */}
      <div className="new-header">
        <div className="new-header-container">
          {/* 로고 */}
          <div className="new-logo">
            <a href="#" onClick={(e) => handleClick(e, 'home')}>눈봄</a>
          </div>
          
          {/* 네비게이션 메뉴 */}
          <nav className="new-nav">
            {menuData.map((menu) => (
              <div key={menu.title} className="new-nav-item">
                {menu.title}
              </div>
            ))}
          </nav>
          
          {/* 헤더 아이콘들 */}
    <div className="new-header-icons">
      <div className="new-icon">
        <FaGlobe size={22} /> {/* 언어 변경 아이콘 */}
      </div>
      <div className="new-icon">
        <FaUserCircle size={24} /> {/* 로그인 / 프로필 아이콘 */}
      </div>
    </div>
        </div>
      </div>

      {/* 메가 메뉴 - 헤더와 정확히 동일한 구조 */}
      {showMegaMenu && (
        <div className="new-mega-menu">
          <div className="new-mega-container">
            {/* 로고 자리 - 헤더와 동일한 위치 */}
            <div className="new-mega-logo-space"></div>
            
            {/* 메뉴 콘텐츠 - 헤더 nav와 동일한 구조 */}
            <div className="new-mega-content">
              {menuData.map((menu) => (
                <div key={menu.title} className="new-mega-column">
                  {menu.items.map((item) => (
                    <a 
                      key={item.name} 
                      href="#" 
                      onClick={(e) => handleClick(e, item.page)}
                      className="new-mega-link"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            
            {/* 아이콘 자리 - 헤더와 동일한 위치 */}
            <div className="new-mega-icons-space"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;