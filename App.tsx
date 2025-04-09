import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SavedMangaProvider } from "./src/components/SavedMangaContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SavedMangaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SavedMangaProvider>
    </QueryClientProvider>
  );
};

export default App;