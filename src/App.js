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
import TransParency from './components/TransParency';
import FormateDetermination from './components/FormatDetermination';
import BMICalculator from './components/BMICalculator';
import AddressAuto from './components/AddressAuto';

function App() {
  const [user] = useAuthState(auth);
  // 表示中のコンテンツを管理するState
  const [activeTab, setActiveTab] = useState("menu");


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
              <li onClick={() => setActiveTab("transparency")}>透明度調整</li>
              <li onClick={() => setActiveTab("formatdetermination")}>メール形式、電話番号形式判定</li>
              <li onClick={() => setActiveTab("bmicalc")}>BMI計算機</li>
              <li onClick={() => setActiveTab("addressauto")}>住所自動入力API</li>
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
              {activeTab === "transparency" && <TransParency />}
              {activeTab === "formatdetermination" && <FormateDetermination />}
              {activeTab === "bmicalc" && <BMICalculator />}
              {activeTab === "addressauto" && <AddressAuto />}
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
