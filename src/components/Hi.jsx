import React from 'react';
import './Hi.css';

const Hi = () => {
  return (
    <div className="hi-container">
      {/* Hero 메시지 */}
      <section className="hi-hero">
        <h1>
          환자의 안전을 지키는 <span className="highlight">작은 혁신</span>
        </h1>
        <p>의약품 라벨 불량 판정의 새로운 기준을 만듭니다.</p>
      </section>

      {/* 인삿말 */}
      <section className="hi-message">
        <h2 className="section-title">인삿말</h2>
        <p>
          저희는 공장에서 생산되는 의약품 라벨 속 작은 오류 하나가  
          환자의 안전을 위협할 수 있다는 사실을 잘 알고 있습니다.
          <br />
          그래서 AI와 컴퓨터 비전 기술을 통해  
          빠르고 정확한 불량 판정 시스템을 만들고 있습니다.
        </p>
      </section>

      {/* 핵심 가치 */}
      <section className="hi-values">
        <h2 className="section-title">핵심 가치</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>정확성</h3>
            <p>1픽셀의 오차도 허용하지 않는 분석</p>
          </div>
          <div className="value-card">
            <h3>신뢰성</h3>
            <p>제약·의료업계가 믿고 맡길 수 있는 품질</p>
          </div>
          <div className="value-card">
            <h3>혁신</h3>
            <p>AI 기반의 검사 프로세스 혁신</p>
          </div>
        </div>
      </section>

      {/* 비전 & 미션 */}
      <section className="hi-vision-mission">
        <div className="vision-box">
          <h3>Vision</h3>
          <p>의약품 품질 검사에서 전 세계가 신뢰하는 표준</p>
        </div>
        <div className="mission-box">
          <h3>Mission</h3>
          <p>AI 기술로 오류 없는 검사 환경을 구축</p>
        </div>
      </section>
    </div>
  );
};

export default Hi;