import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const Saved = () => {
    return (
      <View className='flex-1 bg-primary relative' >
        <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
  
        <View className='justify-center items-center flex-1 flex-col gap-5 '>
          <Image source={icons.save} className='size-10' tintColor={"#fff"} />
          <Text className='text-gray-500 text-base'>Saved</Text>
        </View>
      </View>
    )
}

export default Saved