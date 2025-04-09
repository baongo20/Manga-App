import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const recommendMangaUrl = "https://api.jikan.moe/v4/recommendations/manga";
const getRecommendManga = async () => {
    const response = await axios.get(recommendMangaUrl);
    return response.data;
};

export const UseGetRecommendManga = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['allRecommend'],
        queryFn: getRecommendManga,
        refetchOnReconnect: 'always',
    });
    return { data, isLoading };
};