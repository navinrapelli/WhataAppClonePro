import { Text,View,Image ,StyleSheet,Pressable} from "react-native";
import { useLayoutEffect,useState, useCallback, useEffect} from "react";
import { HeaderBackButton } from '@react-navigation/elements';
import { GiftedChat } from 'react-native-gifted-chat'
function Chatting({route,navigation}){
   
  const userNamee=route.params.userName;
  const userImg=route.params.ImgUri;
  console.log(userNamee);
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  function showOverview(){
     navigation.navigate("ChatProfile");
  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:()=>{
        return(
          <Pressable onPress={showOverview}>
          <View style={{marginRight:80}}>
              <Text style={{fontWeight:"900"}}>{userNamee}</Text>
          </View>
          </Pressable>
        )
      },
         headerLeft:()=>{
         
         return (
           <View style={{flexDirection:"row",alignItems:"center"}}>
            <HeaderBackButton onPress={()=>{navigation.goBack()}}/>
            <Pressable onPress={showOverview}>
            <Image style={ChattingStlye.smallIamge} source={{uri:userImg}}/>
            </Pressable>
        </View>)
         },

         
    });
  },[navigation]);



    return(
      
        <GiftedChat 
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
      
        

    )
}


export default Chatting;


const ChattingStlye=StyleSheet.create({
  smallIamge:{
    width:50,
        height:50,
        borderRadius:25,
        marginLeft:3
  }
})