import { View,Modal ,Text,TextInput,Button,StyleSheet,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { State } from "react-native-gesture-handler";

function ModalsCom(props){
    console.log(props.isVisible);
    const [inpuText,setInputText]=useState(props.defualtvalue?props.defualtvalue:"");

    function textHandler(enterText){
        setInputText(enterText)
    }
    

    function submithandler(){
        props.getValue(inpuText);
    }
    console.log(inpuText);
    return(

    <Modal animationType="slide" transparent={true}
       visible={props.isVisible}  >

       <View style={ModalStyle.main}>
           <View style={ModalStyle.innerContinder}>
                <View style={ModalStyle.title}>
                  <Text>{props.title}</Text>
                </View>
                <View style={ModalStyle.content}>
                    {props.input &&(
                        <TextInput style={ModalStyle.input} onChangeText={textHandler} value={inpuText}/>
                    )}
                    <Text>{props.content}</Text>
                    
                </View>
                <View style={ModalStyle.buttons}>
                    <Button title={props.buttonContent} color="#ADD8E6" onPress={submithandler}/>
                    <Button title="cancel" color="#ADD8E6" onPress={props.dismiss}/>
                </View>
           </View>
       </View>
</Modal>

    )
}

export default ModalsCom;

const ModalStyle=StyleSheet.create({
    main:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
    },
    innerContinder:{
        padding:10,
        width: 300,
        height: 300,
        backgroundColor:"white",
        borderRadius:20
    },
    title:{
        backgroundColor:"#ADD8E6",
        padding:20,
        alignItems:"center",
        borderRadius:20
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    content:{
        flex:1
    },
    input:{
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"#ADD8E6",
        padding:10

    }
})

