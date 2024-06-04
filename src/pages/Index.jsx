import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Box as="main" p={4}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">Welcome to Financial Times</Heading>
          <Text fontSize="lg">
            Stay updated with the latest news and insights from around the world. Our mission is to provide high-quality journalism that informs and inspires.
          </Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Text textAlign="center">&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;