import { Text,View,StyleSheet,FlatList,Modal,TextInput,Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import ChatOut from "../../Components/ChatOut";
import { useLayoutEffect } from "react";
import { useState } from "react";
function Chats({route,navigation}){
    
   const [isSearch,setIsSearch]=useState(false);
   const [inputText,setInputText]=useState("")
   useLayoutEffect(()=>{
      if(route.params && route.params.searchEn){
         setIsSearch(true);
               navigation.getParent().setOptions({
                 
                  headerShown:false
               })
         route.params=false;

      }
   })
      
  
 
   
 function backHandler(){
   setIsSearch(false);
   setInputText("");
   navigation.getParent().setOptions({
      headerShown: true,
      
   })
     
}

   function setInputHandler(comingText){
      setInputText(comingText);
   }
     
   
   

    return(
 <View style={chatStyle.main}> 
     {isSearch &&(
      <View style={chatStyle.searchBar}>
      <TextInput style={chatStyle.searchInput} onChangeText={setInputHandler} value={inputText} placeholder="Search" />
     <Pressable onPress={backHandler}>
        <Ionicons style={chatStyle.iconStyle}  name="close-circle-outline" size={25}/>
     </Pressable>
  </View>
     )}
    <View style={chatStyle.archivee}>
         <View style={{flexDirection:"row",marginBottom:7}}>
           <Ionicons name="archive" size={23}/>
           <Text style={{marginLeft:6}}>Archived</Text>
         </View>
         <View >
           <Text>count</Text>
        </View>
    </View>

    <ChatOut isSearchText={inputText} />

 </View>

    )
}

export default Chats;

const chatStyle=StyleSheet.create({
   main:{
      flex:1,
      backgroundColor:"white"
   },
   archivee:{
      marginVertical:10,
      flexDirection:"row",
      justifyContent:"space-between",
      borderBottomWidth:1,
      borderBottomColor:"#c3c3c3"
   },
   searchBar:{
      margin:10,
      flexDirection:"row",
      justifyContent:"space-between",

   },
   searchInput:{
      backgroundColor:"orange",
      padding:10,
      width:"100%",
      borderRadius:25
   },
   iconStyle:{
      
      marginTop:8,
      marginLeft:2

   }
})

