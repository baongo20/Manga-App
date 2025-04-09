import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getSelectedManga = async id => {
    const selectedMangaUrl = `https://api.jikan.moe/v4/manga/${id}/full`;

    const response = await axios.get(selectedMangaUrl);
    return response.data;
};

export const UseGetSelectedManga = id => {
    const { isLoading, data } = useQuery({
        queryKey: ['selectedManga', id],
        queryFn: () => getSelectedManga(id),
        refetchOnReconnect: 'always'
    });
    return { data, isLoading };
};