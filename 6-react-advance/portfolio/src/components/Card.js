import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack
            color="black"
            backgroundColor="white"
            borderRadius="lg"
            overflow="hidden"
            spacing={4}
            alignItems="flex-start"
        >
            <Image src={imageSrc} alt={title} width="100%" />
            <VStack spacing={2} p={4} alignItems="flex-start" flex={1}>
                <Heading as="h3" size="md">
                    {title}
                </Heading>
                <Text color="gray.600">{description}</Text>
            </VStack>
            <HStack p={4} w="100%" justifyContent="flex-end">
                <Text color="blue.600" fontWeight="bold">
                    See more
                </Text>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    color="#3182ce"
                />
            </HStack>
        </VStack>
    )
}

export default Card
