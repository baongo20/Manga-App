import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SavedMangaProvider } from "./src/components/SavedMangaContext";
import { initDB } from "./src/screens/auth/db-service";
import { UserContext, UserProvider } from "./src/UserContext";

const queryClient = new QueryClient();

const App = () => {

  // const [dbReady, setDbReady] = useState(false);

  // useEffect(() => {
  //   initDB()
  //     .then(() => {
  //       console.log('Database initialized');
  //       setDbReady(true);
  //     })
  //     .catch(err => console.error('DB init failed:', err));
  // }, []);

  // if (!dbReady) return null; // or a loading screen

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SavedMangaProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SavedMangaProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;