import { useQuery } from "@tanstack/react-query";
import axios from "axios";


// const allRankMangaUrl = "https://api.jikan.moe/v4/manga?order_by=rank&sort=asc";
const allRankMangaUrl = "https://api.jikan.moe/v4/manga?order_by=members";
const getAllRank = async () => {
    const response = await axios.get(allRankMangaUrl);
    return response.data;
};

export const UseGetAllRankManga = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['allRank'],
        queryFn: getAllRank,
        refetchOnReconnect: 'always',
    });
    return { data, isLoading };
};