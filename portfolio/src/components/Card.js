import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack align="left" bgColor="white" spacing={1} rounded={10}>
      <Image src={imageSrc} rounded={10} />
      <Heading as="h1" size="l" color="black" p={4}>
        {title}
      </Heading>
      <Text color="black" p={4}>
        {description}
      </Text>
      <HStack color="black" p={4}>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
