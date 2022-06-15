//react 라이브러리에 존재하는 컴포넌트 클래스를 사용하기 위해 import
//컴포넌트의 render()라는 시스템을 react라는 라이브러리에서 비롯되었음
import React, {Component} from 'react'
import {Text, View, Button, StyleSheet, Image} from 'react-native'

//RN에서는 반드시 컴포넌트를 상속한 클래스만 화면에 보일 수 있음.
class MyApp extends Component{

    //리액트의 컴포넌트클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    render(){

        //함수안에 있으므로 지역변수(이 함수 안에서만 사용가능)
        let name='SAM'
        let btnTitle='Click me' //버튼에 보여질 글씨

        //이 메소드에서 리턴한 컴포넌트가 화면에 보여짐
        //랜더메소드render()의 리턴은 오직 한 개만 가능함
        // return <Text>Hello World</Text>
        // <Text>Nice to mee you</Text>

        //그래서 여러 컴포넌트들을 묶는 컴포넌트 그룹이 필요함. (안드로이드의 뷰그룹처럼...리니어...릴리티브)
        //그룹용으로 만들어진 컴포넌트 [View]
        //JSX언어의 특징은 js안에서 xml를 명시할 수 있고, 반대로 xml안에서 js'변수'나 '함수'를 사용할 수 있음
        //xml영역 안에서 자바스크립트의 변수나 함수호출문을 사용하고 싶다면 {}만 표시하면 됨 *****
        //기본적으로 보여지는 스타일링은 css를 모티브로 적용되어 있음.
        //단, 스타일을 css문서로 적용하는 것이 아니라 
        //스타일 값을 가진 '객체'를 만들어 속성으로 지정해서 적용함.
        // return(
        //     <View style={style.rootContainer}>
        //         <Text style={style.mainText}>Hello {name}</Text>
        //         <Text style={style.plainText}>Nice to meet you</Text>
        //         {/* //버튼은 스타일 작업이 불가함 style속성이 없음 */}
        //         <View style={{marginTop:10, width:150}}>
        //             <Button title={btnTitle}></Button>
        //         </View>
        //     </View>
        // )


        //이미지 컴포넌트도 한번 연습해보기... 별도 수업예정
        return(
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hello {name}</Text>
                <Text style={style.plainText}>Nice to meet you</Text>

                <Button title='button'></Button>
                <Button title={btnTitle} color='orange'></Button>
                <View style={ {marginTop:10, width:200} }>
                    <Button title='버튼' color='#841584'></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* 이미지의 경로를 그냥 ""문자열로 쓰는게 아니라 */}
                {/*  자바스크립트의 require()함수를 이용해야만 함  */}
                <Image source={require("./image/moana01.jpg")} style={{margin:4, flex:1, resizeMode:'cover', width:null}}></Image>
            </View>
        )
    }


}//MyApp class...

//아래처럼 개별 스타일객체를 만들면 관리도 어렵고 자동완성기능도 제한적이어서
//모든 스타일 관련 객체를 하나로 묶는 클래스가 존재함
const style= StyleSheet.create( {
    rootContainer:{
        backgroundColor:'#AAFFCC',
        flex:1,
        padding:16,
    },
    mainText:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        margin:16,
    },
    plainText:{
        margin:8,
        color:'black',
    }
} )

//MyApp클래스가 보여주는 컴포넌트들의 스타일값을 가진 객체를 생성
//1. 텍스트의 스타일 작업(css와 비슷하지만 약간 다름)
const textStyle= {
    color:'red', 
    fontSize:20,
    fontWeight:'bold',
    margin: 16 //단위: 기본dp
}

//2. 전체 View의 스타일 작업
const rootView={
    backgroundColor:'#AAFFCC',
    //View의 기본 높이는 warp으로 됨
    //height: 500, //디바이스마다 높이가 달라 정확한 사이즈 알지못함
    //height: '100%' //이 방법도 있지만 
    //RN의 권장사이즈 기법
    //RN은 기본적으로 무조건 디스플레이속성이 'flex스타일'로 설정되어 있음
    //그리고 기본 flex 의 방향인 flex-direction값이 수직방향(column)으로 되어있음
    //그래서 배치방향을 변경하고 싶다면...
    //flexDirection: 'row'
    //flex의 속성 중에서 다른 뷰와 비례적으로 사이즈를 결정하는 속성값
    //마치 안드로이드의 layout_weight과 유사한 값
    flex:1, //flex-grow속성과 같은 역할
    padding:16

}

//중간글씨 스타일
const plainText={
    margin:8,
    color:'black'
}

//버튼스타일객체 - 컴포넌트중에 스타일이 안되는 객체도 있음
const btnStyle={
    marginTop:40,
    backgroundColor:'yellow'
}



//다른문서 index.js 에서 이 MyApp클래스를 사용하려면(import)
//반드시 여기서 추출(export)해야만 함
//하나의 js문서에서 export는 여러개 할 수 있음, 단 그 중에 반드시 1개는
//export defult여야만 함
export default MyApp