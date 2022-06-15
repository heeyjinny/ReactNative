import React,{Component} from 'react'
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native'

class MainComponent extends Component{

    //멤버변수(=프로퍼티)
    //Text컴포넌트가 보여줄 글씨를 가지고 있는변수
    aaa="Hello"

    //Component클래스 안에서 화면갱신에 영향을 주는 특별한 멤버변수가 이미 존재함
    //state(상태) - 가지고 있어야 할 값들이 여러개 있을 수 있으니 객체로 만들어 멤버변수를 가짐
    state= {
        msg:"Hello",
        //리콰이어 함수를 실행해 호출된 결과값
        img:require("./image/newyork.jpg")
    }

    render(){
        return (
            <View style={style.root}>
                {/* 이 컴포넌트에 글씨가 만약 변경되어야 한다면 */}
                {/* 이 텍스트 컴포넌트는 글씨를 직접 쓰지않고 변수를 만들어 값을 보여주도록 해야함 */}
                <Text style={style.plainText}>{this.state.msg}</Text>
               
                {/* <Button title='button' onPress={clickbtnFuntion3}></Button> */}
                {/* 클래스 외부에 함수를 버튼클릭 콜백함수로 사용해도 동작함 */}
                {/* 하지만 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식은 좋지않음 */}
                {/* 그래서 가급적 클래스의 콜백함수는 멤버함수(메소드)로 만들것을 권장함 */}

                {/* js에 메소드 안에서는 멤버를 지칭할 때 '반드시' this키워드가 필요함 */}
                <Button title='button' onPress={this.changeText3}></Button>

                <View style={{marginTop:40,}}></View>

                <Button title='change image' color='green' onPress={this.changeimage}></Button>
                <Image source={this.state.img} style={style.img}></Image>


            </View>
        )
    }

    //이미지를 변경하는 기능메소드*****
    changeimage= ()=>{
        //화면갱신에 영향을 주는 특별한 변수 state를 변경
        //Image 컴포넌트가 보여주는 이미지 값을 변겅
        //state에 여러 멤버값들이 있더라도 필요한 멤버만 설정하면 됨
        this.setState({img:require("./image/paris.jpg")})
    }

    //무조건 콜백함수는 멤버로 만들것을 권장*******
    clickbtn(){
        Alert.alert('clicked button')
    }

    //버튼클릭시에 텍스트컴포넌트 글씨 변경해보기
    //자바스크립트 함수는 클래스가 될 수 있기 떄문에 aaa가 자기 것인줄 앎
    changeText(){

        //텍스트 컴포넌트가 보여주는 값을 가진 aa변경
        this.aaa="Nice to mee you" //error
        //함수도 클래스의 특징을 가지기에 this.키워드가 이 메소드가 되어버림
        //우리가 원하는 것은 MainComponent클래스의 멤버 aaa를 원함

    }

    //함수는 함수지만 생성자 함수의 성질을 가지지 않는 [화살표함수]를 
    //클래스 안에서 멤버변수로 사용할 것을 강하게 권장
    changeText2= () => {
        //이 화살표함수 안에서의 this는  MainComponent클래스가 됨
        this.aaa="Nice to mee you" 
        //애석하게 변수값을 바꾸어도... 화면갱신이 안됨
        //모든 멤버변수가 화면갱신에 영향을 주진 않음
        //그래서 아주 특별한 변수(state*****)만이 화면갱신에 영향을 줌
    }

    //화면갱신에 영향을 주는 state라는 특별한 변수의 값을 변경*************************************
    changeText3=()=>{
        this.state.msg="Nice to meet you" //이렇게 해도 화면갱신이 안 됨
        //자동으로 화면갱신되려면... state값을 변경하는 기능메소드 호출해야함
        this.setState({msg:"Nice to meet you."})
    }

}//maincompmenet class


//버튼클릭시에 발동하도록 지정한 함수 [선언적함수]
function clickbtnFuntion(){
    //경고창 보이기
    alert('press button')
}

//[익명함수]
let clickbtnFuntion2 =function(){
    //리엑트네이티브 전용다이얼로그 제목글씨없음
    Alert.alert('press button!!')
}

//[화살표 콜백함수] ***** 권장
let clickbtnFuntion3 = () => {
    Alert.alert('press button!!!')
}



//스타일 객체
const style= StyleSheet.create({
    root:{
        flex: 1,
        padding: 16,
    },
    plainText:{
        marginBottom: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    img:{
        marginTop:8,
        flex:1,
        width: null,
        resizeMode:'cover'
    }
})

export default MainComponent