import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import CounterApp from './components/CounterApp';
import CheckBox from './components/CheckBox'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useState } from 'react';
import RadioButton from './components/RadioButton';
import ToggleButton from './components/ToggleButton';
import ProgressBar from './components/ProgressBar';

function App() {
  const [user] = useAuthState(auth);
  // 表示中のコンテンツを管理するState
  const [activeTab, setActiveTab] = useState("menu");
  const BMICalculator = () => <div>BMI計算機作成中</div>

  return (
    <div>
      {user ? (
        <>
          <SignOut />
          
          {/* activeTabが"menu"の時だけリストを表示 */}
          {activeTab === "menu" ? (
            <ul>
              <li onClick={() => setActiveTab("counter")}>カウンターアプリ</li>
              <li onClick={() => setActiveTab("checkbox")}>チェックボックス</li>
              <li onClick={() => setActiveTab("radiobutton")}>ラジオボタン</li>
              <li onClick={() => setActiveTab("togglebutton")}>トグルボタン</li>
              <li onClick={() => setActiveTab("progressbar")}>プログレスバー</li>
              {/* 他の項目も同様に... */}
            </ul>
          ) : (
            <>
              {/* メニューに戻るボタン */}
              <button onClick={() => setActiveTab("menu")}>戻る</button>

              {/* Stateに合わせてコンポーネントを切り替え */}
              {activeTab === "counter" && <CounterApp />}
              {activeTab === "checkbox" && <CheckBox />}
              {activeTab === "radiobutton" && <RadioButton />}
              {activeTab === "togglebutton" && <ToggleButton />}
              {activeTab === "progressbar" && <ProgressBar />}

              {/* 他のコンポーネントもここに追加 */}
            </>
          )}
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
