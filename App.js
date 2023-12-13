import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator ,DrawerToggleButton} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Chats from './Screens/Chats/Chats';
import Updates from './Screens/Updates';
import Calls from './Screens/Calls';
import {Ionicons} from '@expo/vector-icons';
import Profile from './Drawer/Profile';
import AddContact from './Drawer/AddContact';
import AddGroup from './Drawer/AddGroup';
import Chatting from './Screens/Chats/Chatting';
import { Provider } from 'react-redux'; 
import ChatProfile from './Screens/Chats/ChatProfile';
import { ChatStore } from './Redux-state/ReduxStore';
const Drawer=createDrawerNavigator();
const Top=createMaterialTopTabNavigator();
const Stack=createStackNavigator();

function TopOverView(){
  return(
       <Top.Navigator>
             <Top.Screen name='Chats'  component={Chats}></Top.Screen>
             <Top.Screen name='Stories' component={Updates}></Top.Screen>
             <Top.Screen name='Calls' component={Calls}></Top.Screen>
        </Top.Navigator>
  )
}

function DrawerOverview(){
  return(
    <Drawer.Navigator  screenOptions={({navigation})=>({ drawerPosition: 'right',
    drawerType:"front",
    headerLeft:false,
    headerStyle:{backgroundColor:"#FFA500"},
    headerRight:()=>
    <View style={styles.rightIcons}> 
                 
       <Ionicons style={{marginRight:16}} name="camera" size={25} />
       <Ionicons  name="search" size={25} onPress={()=> {navigation.navigate("Chats",{searchEn:true})}} />

       <DrawerToggleButton  />
       
     </View> 
  ,
     drawerStyle: {
      width:"50%",
    } })}>
        <Drawer.Screen name='ChatApp' component={TopOverView}></Drawer.Screen>
        <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
          <Drawer.Screen name='Add Contact' component={AddContact}></Drawer.Screen>
          <Drawer.Screen name='Add Group' component={AddGroup}></Drawer.Screen>

    </Drawer.Navigator>
    
  )
}

export default function App() {
  
  return (
    <Provider store={ChatStore}>
    <NavigationContainer>
         <Stack.Navigator >
             {/* <Stack.Screen name='WhatsApp' component={TopOverView}></Stack.Screen> */}
             <Stack.Screen name='DrawerOverview' options={{headerShown:false}} component={DrawerOverview}></Stack.Screen>
             <Stack.Screen name='chatting' component={Chatting} options={{
              headerStyle:{backgroundColor:"#FFA500"},
              
              headerRight:()=>
              <View style={styles.rightIcons}> 
                           
                 <Ionicons style={{marginRight:16}} name="videocam" size={25} />
                 <Ionicons  name="call" style={{marginRight:12}} size={25}/>
                 <Ionicons name="ellipsis-vertical" size={25}/>
               </View> 
             }} ></Stack.Screen>
             <Stack.Screen name='ChatProfile' options={{headerShown:false}} component={ChatProfile} ></Stack.Screen>
         </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcons:{
   flexDirection:"row",
   justifyContent:"space-around",

  }
});
