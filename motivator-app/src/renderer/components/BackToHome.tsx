import { Link } from 'react-router-dom';
import '../pages/Home.css';

function BackToHome() {
  return (
    <div className="back__home--button">
      <Link to="/">&gt; ホームに戻る</Link>
    </div>
  );
}

export default BackToHome;
