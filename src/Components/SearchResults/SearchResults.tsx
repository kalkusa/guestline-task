import { GridItem, VStack } from "@chakra-ui/react";
import { Hotel } from "../../Types/Hotel";
import { SearchResultItem } from "./SearchResultItem/SearchResultItem";

interface SearchResultsProps {
  hotels: Hotel[];
}

export const SearchResults = ({ hotels }: SearchResultsProps) => {
  return (
    <GridItem w="100%" h="3">
      <VStack spacing={8}>
        {hotels.map((hotel) => (
          <SearchResultItem hotel={hotel} />
        ))}
      </VStack>
    </GridItem>
  );
};
