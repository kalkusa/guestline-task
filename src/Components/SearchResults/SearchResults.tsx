import { GridItem, VStack } from "@chakra-ui/react";
import { SearchResultItem } from "./SearchResultItem/SearchResultItem";
import { SearchResults as SearchResultsType } from "../../Types/SearchResults";

interface SearchResultsProps {
  searchResults: SearchResultsType;
}

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  const searchResultsArray = Array.from(searchResults.values());

  return (
    <GridItem w="100%" h="3">
      <VStack spacing={8}>
        {searchResultsArray.map((item) => {
          return <SearchResultItem searchResult={item} key={item.hotel.id} />;
        })}
      </VStack>
    </GridItem>
  );
};
