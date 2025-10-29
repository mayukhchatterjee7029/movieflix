import { View, Text, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';

import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { getFavouriteMovies } from '@/services/appwrite'
import MovieCard from '@/components/MovieCard'



const Saved = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Load data from Appwrite
  const fetchData = async () => {
    setLoading(true)
    const data = await getFavouriteMovies()
    if (data) setMovies(data)
    setLoading(false)
  }

  // Refresh list whenever the Saved screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

  return (
    <View className='flex-1 bg-primary relative' >
      <Image source={images.bg} className='w-full absolute z-0 flex flex-row justify-center' />
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10, }}>
        <View className='mt-16 px-6 '>
          <Text className='text-white text-lg font-bold pb-6'>My Favourites</Text>

          {loading ? (
            <ActivityIndicator size="large" color="#00f" />
          ) : (
            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard id={item.movie_id} title={item.title} poster_path={item.poster_url} 
                />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 17,
                paddingRight: 5,
                marginBottom: 10
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />




          )}
        </View>


      </ScrollView>

    </View>
  )
}

export default Saved