import * as React from "react";
import { ChakraProvider, Box, Grid, theme, GridItem } from "@chakra-ui/react";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { Header } from "./Components/Header/Header";
import { Hotel } from "./Types/Hotel";
import { useEffect } from "react";
import { SearchResults as SearchResultsType } from "./Types/SearchResults";

export const App = () => {
  const [searchResults, setSearchResults] = React.useState<SearchResultsType>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      const hotelListResponse = await fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG");
      const hotelList = await hotelListResponse.json();
      let result = new Map();
      await Promise.all([
        (async () => {
          for (const hotel of hotelList) {
            const hotelRoomsResponse = fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`);
            const hotelRooms = await (await hotelRoomsResponse).json();
            result.set(hotel.id, { hotel: hotel, rooms: hotelRooms?.rooms, ratePlans: hotelRooms?.ratePlans });
          }
        })(),
      ]);

      setSearchResults(result);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          templateAreas={`"header"
                  "main"
                  "footer"`}
          gridTemplateRows={"150px 1fr 30px"}
          gridTemplateColumns={"1fr"}
          minH="100vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={"header"}>
            <Header />
          </GridItem>
          <GridItem area={"main"}>{<SearchResults searchResults={searchResults} />}</GridItem>
          {/* <GridItem area={"footer"}>&copy; 2022 by Arkadiusz Kałkus</GridItem> */}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
