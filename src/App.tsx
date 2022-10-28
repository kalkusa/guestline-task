import * as React from "react";
import { ChakraProvider, Box, Grid, theme, GridItem } from "@chakra-ui/react";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { Header } from "./Components/Header/Header";
import { Hotel } from "./Types/Hotel";
import { useEffect } from "react";
import { Room } from "./Types/Room";
import { RatePlan } from "./Types/RatePlan";

type SearchResults = Map<string, { hotel: Hotel; rooms: Room[]; ratePlans: RatePlan[] }>;

export const App = () => {
  const [searchResults, setSearchResults] = React.useState<SearchResults>(new Map());

  useEffect(() => {
    fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
      .then((response) => response.json())
      .then((data) => {
        let result = new Map();
        data.forEach((hotel: Hotel) => {
          result.set(hotel.id, { hotel: hotel, rooms: [], ratePlans: [] });
        });
        setSearchResults(result);
      });
  }, []);

  console.log("search results", searchResults);

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
          <GridItem area={"main"}>{/* <SearchResults hotels={searchResults} /> */}</GridItem>
          {/* <GridItem area={"footer"}>&copy; 2022 by Arkadiusz Kałkus</GridItem> */}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
