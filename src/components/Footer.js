import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import PlayStoreBadge from "../assets/images/google-play.png";

import AppStoreBadge from "../assets/images/app-store.png";
// import PlayStoreBadge from "../assets/images/deal1.png";

// var children = "Company"
// var href = "sda"
// var label = "sda"
// var

// const ListHeader = () => {
//   return (
//     // <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
//     //   {children}
//     // </Text>
//   );
// };

const SocialButton = () => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      // href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {/* <VisuallyHidden>{label}</VisuallyHidden> */}
      {/* {children} */}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      background="url(https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/dots-new.png)"
      // bg={useColorModeValue("gray.50", "gray.900")}
      backgroundColor="#262626"
      color={useColorModeValue("white", "white")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight="bold">Company</Text>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold">Support</Text>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold">Legal</Text>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"} style={{ display: "inline-block" }}>
            <Text fontWeight="bold" marginBottom="20px">
              Install App
            </Text>
            <img
              src={PlayStoreBadge}
              height="30px"
              width="30px"
              style={{ display: "inline-block" }}
            />
            <img
              src={AppStoreBadge}
              height="30px"
              width="30px"
              style={{ display: "inline-block", marginLeft: "20px" }}
            />
          </Stack>
        </SimpleGrid>
      </Container>
      {/* Copyright Bar  */}
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Foodota. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
