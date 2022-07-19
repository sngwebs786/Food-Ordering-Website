import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
  
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            // color={"black.600"}
            color={"whiteAlpha.800"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          >
            Order Healthy <br /> And Fresh Food Any Time
          </Text>
          <Stack direction={"row"}>
            <a href="#deals">
              <Button
                bg={"#f7c305"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "yellow.500" }}
              >
                Explore Deals
              </Button>
            </a>

            <a href="#team">
              <Button
                bg={"whiteAlpha.700"}
                rounded={"full"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.900" }}
              >
                Meet our Team
              </Button>
            </a>
          </Stack>
        </Stack>
      </VStack>
    
    </Flex>
    
  );
}
