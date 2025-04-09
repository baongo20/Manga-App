// src/contexts/SavedMangaContext.tsx
import React, { createContext, useContext, useState } from "react";

type MangaItem = {
    id: number;
    title: string;
    image: string;
    chapter: number;
};

type SavedMangaContextType = {
    savedManga: MangaItem[];
    addManga: (manga: MangaItem) => void;
};

const SavedMangaContext = createContext<SavedMangaContextType>(null);

export const SavedMangaProvider = ({ children }) => {
    const [savedManga, setSavedManga] = useState<MangaItem[]>([]);

    const addManga = (newManga: MangaItem) => {
        setSavedManga((prev) => {
            const exists = prev.some((m) => m.id === newManga.id);
            return exists ? prev : [...prev, newManga];
        });
    };

    return (
        <SavedMangaContext.Provider value={{ savedManga, addManga }}>
            {children}
        </SavedMangaContext.Provider>
    );
};

export const useSavedManga = (): SavedMangaContextType => {
    const context = useContext(SavedMangaContext);
    if (!context) {
        throw new Error("useSavedManga must be used within a SavedMangaProvider");
    }
    return context;
};
