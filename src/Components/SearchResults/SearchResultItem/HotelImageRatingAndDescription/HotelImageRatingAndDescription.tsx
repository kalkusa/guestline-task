import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Flex, Image, Box, Spacer } from "@chakra-ui/react";
import { Hotel } from "../../../../Types/Hotel";

interface HotelImageRatingAndDescriptionProps {
  hotel: Hotel;
}
export const HotelImageRatingAndDescription = ({ hotel }: HotelImageRatingAndDescriptionProps) => {
  return (
    <Flex direction="row" justifyContent="flex-end">
      <AspectRatio minW="200px" maxW="500px" ratio={4 / 3} mr="5">
        <Image src={hotel.images[0].url} alt="hotel image" objectFit="cover" />
      </AspectRatio>
      <Box id="nameAndAddress" textAlign="left">
        <p>{hotel.name}</p>
        <p>{hotel.address1}</p>
        <p>{hotel.address2}</p>
      </Box>
      <Spacer />
      <Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < hotel.starRating ? "teal.500" : "gray.300"} />
            ))}
        </Box>
      </Box>
    </Flex>
  );
};
