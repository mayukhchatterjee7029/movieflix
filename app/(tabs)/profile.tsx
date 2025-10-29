import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import ProfileButtons from '@/components/ProfileButtons'
import { Link, router } from 'expo-router'
import UserProfile from '@/components/UserProfile'


const Profile = () => {
  return (
    <View className='bg-primary flex-1 relative'>
      <Image source={images.bg} className='w-full absolute z-0 flex flex-row justify-center' />


      <View className='mt-12 px-6 '>

        <TouchableOpacity className='mb-4 flex-row items-center gap-2 justify-start' onPress={router.back}>
          <Image source={icons.back} className='rotate-180 size-4 ' />
          <Text className='text-white font-semibold'>Profiles & More</Text>
        </TouchableOpacity>

        <View className='flex-row justify-between mb-4'>
          
          <UserProfile username={"Apple"} icon={images.apple} />
          <UserProfile username={"Orange"} icon={images.orange} />
          <UserProfile username={"Pear"} icon={images.pear} />
        </View>

        <TouchableOpacity className='flex-row gap-2 items-center justify-center mb-4'>
          <Image source={icons.pencil} className='size-6' />
          <Text className='text-white'>Manage Profiles</Text>
        </TouchableOpacity>

        <View className='mt-2'>
          <Link href={"/saved"} asChild><ProfileButtons title={"My List"} icon={icons.mylist} /></Link>
          <ProfileButtons title={"App Settings"} icon={icons.gear} size={'5'} />
          <ProfileButtons title={"Profile"} icon={icons.user} />
          <ProfileButtons title={"Help"} icon={icons.help} />
        </View>

        <TouchableOpacity className='flex-row gap-2 items-center justify-center my-4' onPress={() => router.push("/")} >
          <Image source={icons.logout} className='size-4' />
          <Text className='text-white text-lg'>Sign Out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Profile