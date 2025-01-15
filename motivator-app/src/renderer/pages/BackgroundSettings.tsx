import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BackToHome from '../components/BackToHome';

function BackgroundSettings() {
  return (
    <div>
      <Header />
      <BackToHome />
      <div>背景設定画面</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default BackgroundSettings;
