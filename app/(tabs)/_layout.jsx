import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '././../../constants/Colors'
export default function Tablayout() {
  return (
    <Tabs screenoptions={{headerShown:false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
        <Tab.Screen name='home' 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />
        }}
        />
        <Tab.Screen name="explore" 
        options= {{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => <AntDesign name="compass" size={24} color={color}/>
        }}
        />
        <Tab.Screen name="profile" 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color}/>
        }}
        />

    </Tabs>
  )
}