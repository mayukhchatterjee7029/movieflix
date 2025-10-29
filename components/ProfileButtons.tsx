import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface ProfileProps {
    title: string;
    icon: ImageSourcePropType;
    size?: string;
}

const ProfileButtons = ({ title, icon, size, ...props }: ProfileProps) => {
    return (
        <View className='flex flex-row justify-center w-full'>
            <TouchableOpacity className='w-full bg-dark-200 my-1 px-6 py-6 rounded-lg' {...props}>
                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image className={`size-${size || 6}`} source={icon} />
                    <Text className='text-white font-bold text-md pl-1'>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileButtons