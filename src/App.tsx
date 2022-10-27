import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, GridItem } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { Header } from "./Components/Header/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      {/* <Grid minH="100vh">
        <GridItem w="100%" h="1" backgroundColor="blue">
          <ColorModeSwitcher justifySelf="flex-end" />
        </GridItem>
        <GridItem w="100%" h="3" backgroundColor="yellow">
          <VStack spacing={8}>
            <Header />
            <SearchResults />
          </VStack>
        </GridItem>
      </Grid> */}
      <Grid
        templateAreas={`"header"
                  "main"
                  "footer"`}
        gridTemplateRows={"150px 1fr 30px"}
        gridTemplateColumns={"1fr"}
        // h="200px"
        minH="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          &copy; 2022 by Arkadiusz Kałkus
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);
