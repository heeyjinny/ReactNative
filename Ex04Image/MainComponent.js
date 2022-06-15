import React, {Component} from "react";
import {View, Image, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, Text, ImageBackground, ScrollView} from 'react-native'

export default class MainComponent extends Component{

    //화면갱신에 영향을 미치는 아주 틀별한 변수 state
    state={
        imgNum: 0, //보여줄 이미지를 가진 배열의 인덱스번호 

        //리콰이어함수는 결합연산자 사용불가 (moana + 01 ...)
        imgArr:[
            require('./image/moana01.jpg'),
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            //네트워크상에 있는 이미지는 
            {uri:'https://cdn.pixabay.com/photo/2022/06/03/23/33/cat-7240997_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2019/08/11/07/11/beach-4398269__340.jpg'},
        ]
    }

    render(){
        return(
            //전체뷰에 배경이미지 적용하기 - 스타일로 적용불가
            //배경이미지용 뷰가 따로있음.
            <ScrollView style={{flex:1}} horizontal={false}>
                <ImageBackground
                    style={{width:'100%', height: '100%', flexDirection:'column'}}
                    resizeMode="stretch"
                    source={{uri:'https://cdn.pixabay.com/photo/2022/04/09/18/21/rocky-coast-7122028_1280.jpg'}}>

                    {/* 그림이미지는 리콰이어()함수를 이용해야함 */}
                    <Image 
                        style={{width:200,height:100}}
                        source={require('./image/moana01.jpg')}> 
                    </Image>

                    {/* 네트워크상에 있는 이미지 보여주기 : uri라는 이름의 멤버를 가진 객체를 source로 설정 */}
                    {/* 네트워크 이미지는 사이즈지정이 없으면 보이지 않음 */}
                    <Image 
                        style={{width:200,height:100}}
                        source={{uri:'https://cdn.pixabay.com/photo/2022/06/03/23/33/cat-7240997_1280.jpg'}}>
                    </Image>

                    {/* 이미지에 클릭이벤트 처리 - 이미지는 onpress속성이 없음*/}
                    {/* 클릭 이벤트에 반응하는 컴포넌트들이 별도로 존재함. TouchableXXXXXXX */}
                    <TouchableOpacity onPress={this.clickImage}>
                        <Image
                            style={{width:200,height:100}}
                            source={require('./image/moana02.jpg')}> 
                            
                        </Image>
                    </TouchableOpacity>

                    <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:208}}>
                        <Image
                            style={{width:200,height:100}}
                            source={require('./image/moana03.jpg')}> 
                            
                        </Image>
                    </TouchableHighlight>

                    {/* 안드로이드의 클릭피드백 효과(물결효과) */}
                    <TouchableNativeFeedback 
                        onPress={this.clickImage}>
                        <View style={{padding:4, width:208, borderWidth:2, borderRadius:4, marginLeft:16}}>
                            <Text>MOANA</Text>
                            <Image
                            style={{width:200,height:100}}
                            source={require('./image/moana04.jpg')}> 
                                
                            </Image>
                        </View>
                        
                    </TouchableNativeFeedback>

                    {/* 선택하면 이미지 변경 */}
                    <TouchableOpacity onPress={this.changeImage}>
                        <Image
                            style={{width:200, height:100}}
                            source={this.state.imgArr[this.state.imgNum]}>
                        </Image>
                    </TouchableOpacity>

                    <Image 
                        style={{width:200,height:100}}
                        source={require('./image/moana01.jpg')}> 
                    </Image>
                    <Image 
                        style={{width:200,height:100}}
                        source={require('./image/moana01.jpg')}> 
                    </Image>
                    <Image 
                        style={{width:200,height:100}}
                        source={require('./image/moana01.jpg')}> 
                    </Image>
                    


                </ImageBackground>

                                
            </ScrollView>
        )
    }

    changeImage= ()=>{
        var index=this.state.imgNum + 1
        if(index>6) index=0
        this.setState({imgNum:index})
    }

    //이미지 클릭에 반응하는 콜백메소드
    clickImage= ()=>{
        //Alert.alert('clickes image')
    }

}