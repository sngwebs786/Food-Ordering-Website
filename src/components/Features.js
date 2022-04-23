import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import featureImg from "../assets/images/feature.png";
import '../assets/styles/Features.css'

export default function Features() {
  return (
    <Flex
      className="margin-top"
      w={"full"}
      h={"100vh"}
      backgroundImage={
        featureImg
        // "url(https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center 60px"}
      backgroundAttachment={"fixed"}
    >
      <VStack
        w={"full"}
        align={"flex-start"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          {/* <Text
            // color={"black.600"}
            color={"black"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          >
            Explox The Best Burger <br /> Place Near You
          </Text> */}
          <div className="heading-minimal-feature">
            <div className="sub-title-feature">Top Foods</div>
            <h3 className="head-title-feature">Explore the Best Food</h3>
            <div className="bottom-dots-feature  clearfix-feature center">
              <span className="dot-feature line-dot-feature"></span>
              <span className="dot-feature"></span>
              <span className="dot-feature"></span>
              <span className="dot-feature"></span>
            </div>
          </div>
          <Text
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
            className="feature-para"
          >
            Pioneering the art of burger-making and gourmet in Pakistan, The
            Foodota strives to provide premium quality fast food, without the
            hefty price tags.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"black"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blackAlpha.800" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.700"}
              rounded={"full"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.900" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
