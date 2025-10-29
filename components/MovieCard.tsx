import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'
import { FavouriteMovies, isFavouriteMovie } from '@/services/appwrite'



const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {

    const [liked, setLiked] = useState(false);
    useEffect(() => {
        const checkFavourite = async () => {
            const fav = await isFavouriteMovie(id);
            setLiked(fav);
        };
        checkFavourite();
    }, [id]);


    return (
        <View className='w-[30%] relative'>

            <TouchableOpacity
                className="absolute"
                style={{
                    right: -3.5,
                    zIndex: 10,
                    bottom: 58
                }}
                onPress={async () => {
                    setLiked(!liked)
                    await FavouriteMovies({ id, poster_path, title })
                }}
            >

                <Image source={liked ? icons.heart_red : icons.heart_outline} className='size-6' />

            </TouchableOpacity>


            <Link href={`/movies/${id}`} asChild>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : "https://via.placehold.co/600x400/1a1a1a/ffffff.png"
                        }}
                        className='w-full h-52 rounded-lg'
                        resizeMode='cover'

                    />

                    <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>

                    <View className='flex-row items-center justify-start gap-x-1'>
                        <Image className='size-4' source={icons.star} />
                        <Text className='text-xs font-bold text-white mt-2 uppercase'>{(vote_average / 2).toFixed(1)}</Text>
                    </View>
                    <View className='flex-row items-center justify-between '>
                        <Text className='text-xs text-light-300 font-medium mt-2'>
                            {release_date?.split("-")[0]}
                        </Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default MovieCard