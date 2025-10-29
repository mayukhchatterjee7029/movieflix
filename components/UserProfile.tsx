import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { images } from '@/constants/images';

interface UserProps {
    username: string;
    icon: ImageSourcePropType;
}

const UserProfile = ({ username, icon }: UserProps) => {
    return (
        <>
            <TouchableOpacity className='bg-dark-200 px-6 pt-4 pb-2 w-fit h-fit rounded-xl flex justify-center items-center'>
                <Image source={icon} className='size-16' />
                <Text className='text-white font-semibold text-xs pt-2'>{username}</Text>
            </TouchableOpacity>
        </>
    )
}

export default UserProfile