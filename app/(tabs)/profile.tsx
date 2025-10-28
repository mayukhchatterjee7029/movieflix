import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const Profile = () => {
  return (
    <View className='flex-1 bg-primary px-10 relative' >
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />

      <View className='justify-center items-center flex-1 flex-col gap-5 '>
        <Image source={icons.person} className='size-10' tintColor={"#fff"} />
        <Text className='text-gray-500 text-base'>Profile</Text>
      </View>
    </View>
  )
}

export default Profile