import { Box } from "@chakra-ui/react";
import { SearchResult } from "../../../Types/SearchResult";
import { HotelImageRatingAndDescription } from "./HotelImageRatingAndDescription/HotelImageRatingAndDescription";

interface SearchResultItemProps {
  searchResult: SearchResult;
}

export const SearchResultItem = ({ searchResult }: SearchResultItemProps) => {
  return (
    <Box w="3xl" borderWidth="1px" borderRadius="lg" p={5} id="searchResultItem">
      <HotelImageRatingAndDescription hotel={searchResult.hotel} />
    </Box>
  );
};
