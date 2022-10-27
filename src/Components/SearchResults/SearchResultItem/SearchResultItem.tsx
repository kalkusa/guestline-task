import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Hotel } from "../../../Types/Hotel";

interface SearchResultItemProps {
  hotel: Hotel;
}

export const SearchResultItem = ({ hotel }: SearchResultItemProps) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={hotel.images[0].url} alt="hotel image" />

      <Box p="6">
        {/* <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box> */}

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {hotel.name}
        </Box>

        <Box>
          {123}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < hotel.starRating ? "teal.500" : "gray.300"} />
            ))}
          {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
