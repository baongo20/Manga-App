import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const allGenreUrl = "https://api.jikan.moe/v4/genres/manga";
const getAllGenre = async () => {
    const response = await axios.get(allGenreUrl);
    return response.data;
};

export const UseGetAllGenre = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['allGenre'],
        queryFn: getAllGenre,
        refetchOnReconnect: 'always',
    });
    return { data, isLoading };
};