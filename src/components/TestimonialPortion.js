import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import client from "../assets/images/clients.png";
import Testimonial from "./Testimonial";
// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

export default function TestimonialPortion() {
  return (
    <Container maxW={"9xl"} py={12}>
      <Center>
        <div
          id="clients"
          className="heading-minimal"
          style={{ marginTop: "80px" }}
        >
          <div className="sub-title">SATISFIED CLIENTS</div>
          <h3 className="head-title">What Our Clients Say</h3>
          <div className="bottom-dots  clearfix center">
            <span className="dot line-dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Testimonial />
        </Stack>
        <Flex>
          <Image
            className="none"
            rounded={"md"}
            alt={"feature image"}
            src={client}
            // "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
