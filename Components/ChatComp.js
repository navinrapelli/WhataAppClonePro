import { Text,View,Pressable,Image,StyleSheet,Modal} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
function ChatComp({name,imgUri}){

  const navigation=useNavigation();

    const [inputImg,setImg]=useState();
    const [isVisible,setModal]=useState(false)
    function showImg(){
       console.log("img");
       setModal(true);
    }

    function showChat(){
        navigation.navigate("chatting",{userName:name,ImgUri:imgUri});
    }

    function closeHandler(){
      setModal(false);
    }
    return(
     
        <View style={ChatCompStyle.main}>
             <Modal visible={isVisible} animationType="fade"  transparent={true} onRequestClose={()=>this.setModal(false)}>
                <View style={ChatCompStyle.mainModal}>
                    
                    <View style={ChatCompStyle.innerContinder}>
                    <View style={{flexDirection:"row",padding:5,justifyContent:"space-between",backgroundColor:"#FFA500"}}>
                      <Text style={{fontWeight:"bold"}}>{name}</Text>
                    <Ionicons name="close" size={20} onPress={closeHandler} />
                    </View>
                       <Image style={ChatCompStyle.smallIamge} source={{uri:imgUri}}/>
                    </View>
                </View>
             </Modal>
              <View>
                <Pressable onPress={showImg}>
                    <Image style={ChatCompStyle.image} source={{uri:imgUri}}/>
                </Pressable>
              </View>
            
            <Pressable onPress={showChat}> 
            <View style={ChatCompStyle.chatsection}>
                <Text style={{fontWeight:"bold",marginBottom:2}}>{name}</Text>
                <Text>lastmessage</Text>
            </View>
            </Pressable>
         </View>
     
    )
}


export default ChatComp;


const ChatCompStyle=StyleSheet.create({
    main:{
      flexDirection:"row",
      justifyContent:"flex-start",
      borderBottomWidth:1,
      borderBottomColor:"#c3c3c3",
      margin:10
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
        marginBottom:7
        
      },
      chatsection:{
        marginLeft:50,
        marginRight:200
      },
      smallIamge:{
        width:250,
        height:220,
        borderRadius:20,
      },
      mainModal:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
    },
    innerContinder:{
        width: 255,
        height: 255,
        backgroundColor:"white",
        borderRadius:20,
        borderWidth:1,
        borderBlockColor:"#FFA500"
    }

})