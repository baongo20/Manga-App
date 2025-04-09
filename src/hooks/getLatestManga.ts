import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const latestMangaUrl = "https://api.jikan.moe/v4/manga?order_by=start_date&sort=desc";
const getLatestManga = async () => {
    const response = await axios.get(latestMangaUrl);
    return response.data;
};

export const UseGetLatestManga = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['latestManga'],
        queryFn: getLatestManga,
        refetchOnReconnect: 'always',
    });
    return { data, isLoading };
};