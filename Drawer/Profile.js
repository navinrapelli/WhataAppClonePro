import { View ,Text,Image,StyleSheet,TextInput,Pressable,Alert} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useState } from "react";
import ModalsCom from "../Components/ModalsCom";
import {launchCameraAsync} from 'expo-image-picker'


function Profile(){

 
    const [inputName,setInputName]=useState("")
    const [inputAbout,setinputAbout]=useState("")
    const [inputImage,setInputImage]=useState()
    const [ourName,setName]=useState(false);
    const [ourAbout,setAbout]=useState(false);

    function nameHandler(){
     setName(true);
    
    }

    function aboutHandler(){
        setAbout(true)
    }
    function cancelhandler(){
        setName(false);
        setAbout(false);
    }

    function getValueHandler(tt){
      setInputName(tt);
      cancelhandler();
    }

    function getAbouthandler(about){
        setinputAbout(about)
        cancelhandler();
    }

        async function imageHandler(){
            const image=await launchCameraAsync({
                allowsEditing:true,
                aspect:[16,9],
                quality:0.5
            });

            if (!image.canceled) {
                setInputImage(image.assets[0].uri);
              }
            
        }

    
    return(

        <View style={ProfileStyle.main}>
            
            <View style={{alignItems:"center"}}>
                {!inputImage&&(<Image style={ProfileStyle.image} source={require("../Image/pp.jpg")}/>)}
                {inputImage&&(<Image style={ProfileStyle.image} source={{uri:inputImage}}/>)}
            </View>
            <Pressable onPress={imageHandler}>
            <View style={ProfileStyle.camer}>
            <Ionicons   name="camera" size={45} color="#FFA500"/>
            </View>
            </Pressable>
            <View style={ProfileStyle.innerContainer}>
            <ModalsCom isVisible={ourName} 
              dismiss={cancelhandler}
              input={true}
              buttonContent="save" 
              content="Enter you name" 
              title="Name"
              defualtvalue=" "
              getValue={getValueHandler}/>
                    <View>
                         <Ionicons name="person" size={35}/>
                    </View>
                   
                    <View style={{marginRight:200}}>
                        <Text style={{fontWeight:"bold",marginBottom:2}}>Name</Text>
                        <Text>{inputName}</Text>
                    </View>
                    <Pressable onPress={nameHandler}>
                    <View>
                         <Ionicons name="pencil" size={25}/>
                    </View>
                    </Pressable>
                    
            </View>
            <View style={ProfileStyle.innerContainer}>
            <ModalsCom isVisible={ourAbout} 
              dismiss={cancelhandler}
              input={true}
              buttonContent="save" 
              content="Enter you about" 
              title="About"
              defualtvalue=" "
              getValue={getAbouthandler}/>
                    <View>
                         <Ionicons name="information-circle-outline" size={35}/>
                    </View>
                    <View style={{marginRight:200}}>
                        <Text style={{fontWeight:"bold",marginBottom:2}}>About</Text>
                        <Text>{inputAbout}</Text>
                    </View>
                    <Pressable onPress={aboutHandler}>
                    <View>
                         <Ionicons name="pencil" size={25}/>
                    </View>
                    </Pressable>
            </View>
            <View style={ProfileStyle.innerContainer}>
                    <View>
                         <Ionicons name="call-outline" size={35}/>
                    </View>
                    <View style={{marginRight:180}}>
                        <Text style={{fontWeight:"bold",marginBottom:2}}>Mobile Number</Text>
                        <Text>98786534236</Text>
                    </View>
            </View>
        </View>

    )
}

export default Profile;


const ProfileStyle=StyleSheet.create({
    main:{
     margin:20
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        backgroundColor:"orange",
      },
    innerContainer:{
        marginVertical:30,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    camer:{
         position:"relative",
         zIndex:10,
         top:-50,
         right:-220
        

    }

})