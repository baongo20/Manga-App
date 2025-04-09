import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const allPopularMangaUrl = "https://api.jikan.moe/v4/manga?order_by=popularity&sort=desc";
const getAllPopular = async () => {
    const response = await axios.get(allPopularMangaUrl);
    return response.data;
};

export const UseGetAllPopularManga = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['allPopular'],
        queryFn: getAllPopular,
        refetchOnReconnect: 'always',
    });
    return { data, isLoading };
};