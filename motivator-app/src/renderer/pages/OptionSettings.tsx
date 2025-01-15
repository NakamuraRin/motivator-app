import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BackToHome from '../components/BackToHome';

function OptionSettings() {
  return (
    <div>
      <Header />
      <BackToHome />
      <div>オプション設定画面</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default OptionSettings;
