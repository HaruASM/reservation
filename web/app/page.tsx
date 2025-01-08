"use client";

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRowClick = (roomType: string) => {
    setSelectedRoom(roomType);
  };

  return (
    <div>
      <header className="header">
        <Image src="/logo.jpg" alt="Left Logo" width={100} height={100} />
        <div className="header-text">
          <h1>
            <a href="https://example.com">한국 호텔 HANGUK HOTEL</a>
          </h1>
          <p>320 Sofia Street Malabanias Angeles City 2009</p>
          <p>09684750856</p>
          <p>hanguk333 (kakao)</p>
        </div>
        <Image src="/logo.jpg" alt="Right Logo" width={100} height={100} />
        <a href="#" className="map-banner">
          <Image src="/bkg-map-entry.svg" alt="Map Background" width={150} height={80} />
          <Image src="/img-map-pin-red.svg" alt="Map Pin" width={24} height={24} className="map-pin" />
          <span className="map-link">지도에서 위치 보기</span>
        </a>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>객실 종류<br />ROOM TYPE</th>
              <th>최대 인원<br />MAXIMUM CAPACITY</th>
              <th>정상 요금<br />NORMAL RATE</th>
              <th>할인 요금<br />DISCOUNT RATE</th>
              <th>월방 요금<br />MONTHLY PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleRowClick('스탠다드 룸')}>
              <td>스탠다드 룸<br />STANDARD SUITE</td>
              <td>성인 2명<br />2 ADULTS</td>
              <td className="strikethrough">₱2,500.00</td>
              <td>₱2,000.00</td>
              <td>₱34,000.00</td>
            </tr>
            <tr onClick={() => handleRowClick('디럭스 스위트')}>
              <td>디럭스 스위트<br />DELUXE SUITE</td>
              <td>성인 2명<br />2 ADULTS</td>
              <td className="strikethrough">₱2,800.00</td>
              <td>₱2,300.00</td>
              <td>₱37,000.00</td>
            </tr>
            <tr onClick={() => handleRowClick('슈퍼 디럭스')}>
              <td>슈퍼 디럭스<br />SUPER DELUXE SUITE</td>
              <td>성인 2명<br />2 ADULTS</td>
              <td className="strikethrough">₱3,000.00</td>
              <td>₱2,500.00</td>
              <td>₱39,000.00</td>
            </tr>
            <tr onClick={() => handleRowClick('트윈 베드')}>
              <td>트윈 베드<br />TWIN BED SUITE</td>
              <td>성인 2명<br />2 ADULTS</td>
              <td className="strikethrough">₱3,300.00</td>
              <td>₱2,700.00</td>
              <td>₱45,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="input-form">
        <div className="input-group">
          <label>객실</label>
          <select onChange={(e) => setSelectedRoom(e.target.value)} value={selectedRoom}>
            <option value="">선택하세요</option>
            <option value="스탠다드 룸">스탠다드 룸</option>
            <option value="디럭스 스위트">디럭스 스위트</option>
            <option value="슈퍼 디럭스">슈퍼 디럭스</option>
            <option value="트윈 베드">트윈 베드</option>
          </select>
        </div>
        <div className="input-group">
          <label>체크인</label>
          <input type="date" />
        </div>
        <div className="input-group">
          <label>체크아웃</label>
          <input type="date" />
        </div>
        <div className="input-group">
          <label>객실당 인원 수</label>
          <select className="narrow-input">
            <option>객실 1개, 성인 2명, 어린이 0명</option>
          </select>
        </div>
        <button className="search-button">예약</button>
      </div>
    </div>
  );
}
