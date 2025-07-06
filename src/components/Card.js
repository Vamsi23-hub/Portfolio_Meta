import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      spacing={4}
      align="start"
      maxW="sm"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />
      <VStack spacing={2} px={4} pb={4} align="start">
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <HStack spacing={2} pt={2} color="blue.500" fontWeight="semibold">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
