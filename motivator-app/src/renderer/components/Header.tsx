import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Header() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }); // 現在時刻
      const date = new Date().toLocaleDateString('ja-JP', {
        // 現在日付
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      setCurrentTime(time); // 時間をstateに更新
      setCurrentDate(date); // 日付をstateに更新
    }, 1000); // 1秒ごとに更新

    // クリーンアップ関数でインターバルをクリア
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header__container">
      <div className="header__title">
        <Link to="/">MotivatorApp</Link>
      </div>
      <div className="header__datetime">
        <span className="header__date">{currentDate}</span>
        <span className="header__time">{currentTime}</span>
      </div>
    </div>
  );
}

export default Header;
