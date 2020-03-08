import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Library from './js/Library.js';

const BOOKS = [
  { title: 'React.js & Next.js超入門', author: '掌田津耶乃', description: '最近のWebサイトを見ると、まるで普通のアプリケーションのように自在に画面が変化します。これはWebサイトをJavaScriptで操作しているからです。' },
  { title: '作りながら学ぶReact入門', author: '吉田裕美', description: 'Facebook開発の最新JSライブラリーを、シンプルなアプリケーションを、作りながら学べます!ていねいな開発環境構築ではじめての人も安心。WindowsとMacに対応。' },
  { title: 'React Native＋Expoではじめるスマホアプリ開発', author: '松澤太郎', description: 'JavaScriptによるネイティブアプリ開発の現場のノウハウ、教えます！' },
  { title: 'React入門 React・Reduxの導入からサーバサイドレンダリングによるUXの向上まで', author: '穴井宏幸', description: 'Webアプリケーションを高速で動作させる！ Reactの概念からデプロイまでモダンWebアプリケーション開発の全体像がわかる！' },
  { title: 'ReAct', author: '雨宮ひとみ', description: '海斗(カイト)と流歌(ルカ)との関係が崩れてから約一年の月日を、未来(ミク)は閉鎖病棟で過ごしていた。自らが犯した罪の重さに自責の念を絶やさない未来はあるとき' }
];

ReactDOM.render(
  <Library books={BOOKS} />,
  document.getElementById('container')
);