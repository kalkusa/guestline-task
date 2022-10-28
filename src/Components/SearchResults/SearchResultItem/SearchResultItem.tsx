import { Box } from "@chakra-ui/react";
import { Hotel } from "../../../Types/Hotel";
import { HotelImageRatingAndDescription } from "./HotelImageRatingAndDescription/HotelImageRatingAndDescription";

interface SearchResultItemProps {
  hotel: Hotel;
}

export const SearchResultItem = ({ hotel }: SearchResultItemProps) => {
  console.log("hotel: %o", hotel);
  return (
    <Box w="3xl" borderWidth="1px" borderRadius="lg" p={5} id="searchResultItem">
      <HotelImageRatingAndDescription hotel={hotel} />
    </Box>
  );
};
