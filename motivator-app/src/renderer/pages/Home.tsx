import { Link } from 'react-router-dom';

import Header from '../components/Header';
import AnimationArea from '../components/AnimationArea';

function Home() {
  return (
    <div>
      <Header />
      <div className="home__container">
        <div className="home__container--left">
          <AnimationArea />
        </div>
        <div className="home__container--right">
          <div className="home__nav--container">
            <Link to="/todo">
              <div className="home__nav--button">ToDoリスト</div>
            </Link>
            <Link to="/dashboard">
              <div className="home__nav--button">過去の作業履歴</div>
            </Link>
            <Link to="achievement">
              <div className="home__nav--button">アチーブメント</div>
            </Link>
            <Link to="settings/background">
              <div className="home__nav--button">背景設定</div>
            </Link>
            <Link to="/settings/option">
              <div className="home__nav--button">オプション設定</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
