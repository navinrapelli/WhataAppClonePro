import { Text,View,FlatList,Modal,TextInput,StyleSheet,Button } from "react-native";
import ChatComp from "../Components/ChatComp";
import { useEffect ,useState} from "react";
import { GetData } from "../HttpsReq/HttpData";
import { useSelector,useDispatch } from "react-redux";
function ChatOut({isSearchText}){
          const chatData=useDispatch((state)=>state.ChatStoreState);
    console.log(chatData);
    
    const [inputData,setInputData]=useState([]);
    const [inpuText,setInpuText]=useState();

    

   useEffect(()=>{
        async function ggg(){
         const chatData=await GetData();
         console.log(chatData);

         if(isSearchText){
            setInputData(chatData.filter((a)=>a.name.first.toLowerCase().startsWith(isSearchText.toLowerCase())).sort())
         }else if(isSearchText==="")
         {
            setInputData(chatData)
         }
         
        }

        ggg();
      
   },[isSearchText])

    function ourData(itemData){
        if(itemData.item.id.name && itemData.item.id.name!="null")
        {
           return <ChatComp name={itemData.item.name.first} imgUri={itemData.item.picture.medium}/>
        }
        
     }
    return(
        
        <FlatList data={inputData} renderItem={ourData} keyExtractor={(item)=>item.email} />
        
    )
}

export default ChatOut;

const ChatOutStyle=StyleSheet.create({
    mainModal:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
    },
    innerContinder:{
        width: 380,
        height: 120,
        backgroundColor:"white",
        alignItems:"center"
    },
    searchText:{
        fontWeight:"bold",
        alignContent:"center"
        
    },
    searchTextInput:{
        paddingVertical:10,
        backgroundColor:"orange"
    }


})

