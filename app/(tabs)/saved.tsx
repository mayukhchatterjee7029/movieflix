import { View, Text, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import TrendingCard from '@/components/TrendingCard'
import { getTrendingMovies } from '@/services/appwrite'


const Saved = () => {

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError
  } = useFetch(getTrendingMovies);

  return (
    <View className='flex-1 bg-primary relative' >
      <Image source={images.bg} className='w-full absolute z-0 flex flex-row justify-center' />
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10, }}>
        <View className='mt-16 px-6 '>
          <Text className='text-white text-lg font-bold pb-6'>My Favourites</Text>

          {trendingLoading ? (
            <ActivityIndicator size={"large"} color={"#00f"} className="mt-10 self-center" />
          ) : trendingError ? (
            <Text>Error: {trendingError?.message}</Text>
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              className="mb-4 mt-3"
              data={trendingMovies}
              renderItem={({ item }) => (
                <TrendingCard movie={item} />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
            />

          )}
        </View>


      </ScrollView>

    </View>
  )
}

export default Saved