// track the searches made by an user
import Toast from 'react-native-toast-message';
import { Client, Databases, Query, ID } from "react-native-appwrite"

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const FAVOURITE_ID = process.env.EXPO_PUBLIC_APPWRITE_FAVOURITE_ID!;
const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;

interface FavMovieProps {
    id: number;
    poster_path: string;
    title: string;
    
}

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);


export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("searchTerm", query)
        ])
        // check is a record of that search has already been stored
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];

            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    // if a document is found, increment the searchCount field
                    count: existingMovie.count + 1
                }
            )
        } else {
            // if no document is found 
            // then create a new document in Appwrite database -> 1
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query,
                movie_id: movie.id,
                count: 1,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count"),
        ])
        return result.documents as unknown as TrendingMovie[];
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

// Favourite Movies

export const ToggleFavouriteMovies = async ({
    id,
    poster_path,
    title, }: FavMovieProps) => {

    // Look for if the movie is already in the database 
    try {
        const result = await database.listDocuments(DATABASE_ID, FAVOURITE_ID, [
            Query.equal("movie_id", id)
        ]);

        let added: boolean;

        if (result.documents.length === 0) {
            // If the movie is not added, add it
            await database.createDocument(DATABASE_ID, FAVOURITE_ID, ID.unique(), {
                movie_id: id,
                title: title,
                poster_url: `https://image.tmdb.org/t/p/w500${poster_path}`
            });
            added = true;
        } else {
            // Else remove it
            await database.deleteDocument(
                DATABASE_ID, FAVOURITE_ID, result.documents[0].$id
            )
            added = false;
        }
        Toast.show({
            type: added ? "success" : "info",
            text1: added ? "Added to Favourites 💖" : "Removed from Favourites 💔",
            position: "bottom",
            visibilityTime: 500
        })
        return { added };

    } catch (error) {
        console.error("❌ Error updating favourites:", error);
        Toast.show({
            type: "error",
            text1: "Something went wrong!",
            text2: "Please try again later.",
            position: "bottom",
        });
    }

}

export const isFavouriteMovie = async (id: number): Promise<boolean> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, FAVOURITE_ID, [
            Query.equal("movie_id", id)
        ]);

        return result.documents.length > 0;
    } catch (error) {
        console.log("Error checking favourite:", error);
        return false;
    }
};

export const getFavouriteMovies = async (): Promise<FavouriteMovie[] | undefined> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, FAVOURITE_ID, [
            Query.orderDesc("$createdAt"),
        ])
        return result.documents as unknown as FavouriteMovie[];
    } catch (error) {
        console.log(error);
        return undefined;
    }
}