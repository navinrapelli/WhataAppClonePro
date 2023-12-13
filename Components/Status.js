import { Text,View,Pressable,Image,StyleSheet,Modal,Button} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import { useState } from "react";
import {launchCameraAsync} from 'expo-image-picker'


function Status(){
    const [statusImg,setImg]=useState();
    const [modalOpen,setModel]=useState(false);

    async function getImage(){
        const img=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        });

        if (!img.canceled) {
            setImg(img.assets[0].uri);
          }
    }

    const statusIamgeStyle=[StatusStyle.image];

    if(statusImg){
        statusIamgeStyle.push(StatusStyle.imgouter);
    }

    function showImgHandler(){
        setModel(true);
    }

    function backHandler(){
        setModel(false);
    }
    function delteHandler(){
         
        setModel(false);
        setImg("");
    }

    return(
        
        <View style={StatusStyle.main}>
            <Modal visible={modalOpen}>
                <View >
                <View style={{alignItems:"center",backgroundColor:"#FFA500",padding:15,}} >
                    <Text style={{fontWeight:"bold"}}>My Status</Text>
                </View>
                <View>
                   <Image style={StatusStyle.modelIamge} source={{uri:statusImg}}/>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                     <Button title="Back" onPress={backHandler}/>
                     <Button title="Delete" onPress={delteHandler}/>
                </View>
                </View>
            </Modal>
            <View>
                {!statusImg &&(<Image style={StatusStyle.image} source={require("../Image/pp.jpg")}/>)}
                {statusImg &&(
                <Pressable onPress={showImgHandler}>
                   <Image style={statusIamgeStyle} source={{uri:statusImg}}/>
                </Pressable>)}
            </View>
            {!statusImg &&(
                <Pressable  onPress={getImage}>
                <View style={StatusStyle.camer} >
                <Ionicons name="add-circle" size={25} color="#FFA500"/>
                </View>
            </Pressable>
            )}
            <View >
                <Text style={{fontWeight:"bold",marginBottom:2}}>My Status</Text>
            </View>
         </View>
         
    )
}


export default Status;


const StatusStyle=StyleSheet.create({
    main:{
      margin:10,
      flexDirection:"row",
      justifyContent:"flex-start",
      borderBottomWidth:1,
      borderBottomColor:"#c3c3c3",
      alignItems:"center"
      
      
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"orange",
        marginBottom:10

      },
    imgouter:{
        borderWidth:3,
        borderColor:"#FFA500",
        marginRight:10
        

    },
      camer:{
        position:"relative",
        zIndex:2,
        top:10,
        right:18
       

   },
   modelIamge:{
    width:500,
    height:580

   }

})