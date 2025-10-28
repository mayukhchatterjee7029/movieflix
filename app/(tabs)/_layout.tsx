import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const TabIcon = ({ title, icon, focused }: any) => {

    if (focused) {

        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden gap-2" >

                <Image source={icon} tintColor={"#151312"} className='size-5' />
                <Text>{title}</Text>

            </ImageBackground>

        )
    }

    return (

        <View
            className="size-full mt-4 justify-center items-center rounded-full" >

            <Image source={icon} className='size-5' />
        </View>
    )

}

const _Layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            },
            tabBarStyle: {
                backgroundColor: "#0f0d23",
                borderRadius: 50,
                marginHorizontal: 12,
                marginBottom: 36,
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0f0d23",
                height: 52
            }
        }}

        >
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon title={"Home"} icon={icons.home} focused={focused} />
                    )
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon title={"Search"} icon={icons.search} focused={focused} />
                    )
                }}
            />

            <Tabs.Screen
                name='saved'
                options={{
                    headerShown: false,
                    title: "Saved",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon title={"Saved"} icon={icons.save} focused={focused} />
                    )
                }}

            />

            <Tabs.Screen
                name='profile'
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon title={"Profile"} icon={icons.person} focused={focused} />
                    )
                }}
            />


        </Tabs >
    )
}

export default _Layout
