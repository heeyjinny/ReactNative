/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

//처음 실행되는 컴포넌트를 지정하는 메소드실행
//첫 번째 파라미터 : 앱 이름
//두 번째 파라미터 : 처음 실행될 컴포넌트를 리턴해주는 콜백함수 지정
//AppRegistry.registerComponent(appName, () => App);

//새로만든 MyApp.js문서의 컴포넌트를 첫 시작 컴포넌트로 지정
//JSX언어사용
AppRegistry.registerComponent(appName, ()=> MyApp)
