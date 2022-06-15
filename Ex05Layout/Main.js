import React,{Component} from "react";
import {View} from 'react-native'

export default class Main extends Component{
    render(){
        return(
            //flex or absolute??
            //align or direction???

            
            //RN은 한 개의 컴포넌트만 리턴할 수 있음. 
            //그래서 여러개의 컴포넌트를 배치하려면 가장 큰 뷰가 있어야함.
            //1) 3개의 자식뷰 배치
            // <View>
            //     {/* 뷰의 사이즈는 숫자(단위:dp (dip))나 %를 사용하거나, flex를 이용할 수 있음 */}
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:100, height:100, backgroundColor:'#00FF00'}}></View>
            //     <View style={{width:'70%', height:150, backgroundColor:'blue'}}></View>
            //     {/* 기본적으로 뷰들의 배치는 수직방향임 - RN은 flex스타일이며 기본 direction이 column임 */}
            // </View> 

            //2) 3개의 자식뷰 배치할 때 사이즈를 flex로 지정해보기(권장 : 해상도때문에)
            //   flex는 배치방향에 따라 width일수도 있고 height일수도 있음
            //   기본이 수직이므로 현재 flex는 height를 의미함
            //   최상위뷰는 한 개만 있으므로 화면전체를 사용하려면... 높이값을 100%
            //   100%도 되지만 RN은 사이즈를 정할 때 flex스타일을 권장함
            // <View style={{flex:1}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4, backgroundColor:'blue'}}></View>
            // </View>

            //기본배치방향은 수직임, 수평배치연습
            //기본적으로 스트레치 모드여서 화면 전체를 다 먹음
            // <View style={{flex:1, flexDirection:'row'}}>
            //     <View style={{backgroundColor:'red', flex:1}}></View>
            //     <View style={{backgroundColor:'blue', flex:2}}></View>
            //     <View style={{backgroundColor:'green', flex:4}}></View>
            //     {/* 수평배치일 때, 자식뷰들의 flex는 width를 의미함 */}
            // </View>

            //3) 자식뷰들에 사이즈를 직접주고... 배치(정렬)을 여러형태로 적용연습
            // [수직배치일 때]
            // justifyContent, alignItems 정렬속성 연습
            // <View style={{flex:1, flexDirection:'column', justifyContent: 'space-between', alignItems:'center'}}>
            //     <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'green'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
            // </View>

            // [수평배치일 때]
            // justifyContent, alignItems 정렬속성 연습
            // <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            //     <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'green', alignSelf:'flex-start'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
            // </View>

            // <View style={{flex:1}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>

            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:1, backgroundColor:'blue'}}></View>
            // </View>

            //중첩구조의 배치...수직/수평배치 혼재
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할 1:2비율로 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌.우로 2:1 바율배치 */}
                    <View style={{flex:2, backgroundColor:'red'}}>

                        {/* 절대위치(포지션:앱솔루트)를 이용하여 뷰들을 겹치도록 배치 */}
                        <View style={{width:50,height:50,backgroundColor:'white', left:10,top:10, position:'absolute'}}></View>
                        <View style={{width:50,height:50,backgroundColor:'gray', left:20,top:20,position:'absolute'}}></View>

                    </View>
                    <View style={{flex:1}}>
                        {/* 다시 수직으로 배치 */}
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>

                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌.우로 1:2 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2}}>
                        {/* 수직 1:1 */}
                        <View style={{flex:1,backgroundColor:'gray'}}></View>
                        <View style={{flex:1,backgroundColor:'brown'}}>
                            {/* 절대위치(포지션:앱솔루트)를 이용하여 뷰들을 겹치도록 배치 position:'absolute' */}
                            {/* 부모를 기준으로 */}
                            <View style={{width:50,height:50,backgroundColor:'white', left:10,top:10, position:'absolute'}}></View>
                            <View style={{width:50,height:50,backgroundColor:'gray', left:20,top:20,position:'absolute'}}></View>

                            <View style={{width:50,height:50,backgroundColor:'aqua', right:20,bottom:20,position:'absolute'}}></View>

                        </View>
                    </View>

                </View>

                {/* 절대위치 */}
                <View style={{width:100,height:100,backgroundColor:'orange', position:'absolute', bottom:50, left:80, borderRadius:50}}></View>

            </View>

        )
    }
}