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
  Button,
} from "@chakra-ui/react";
import getOrder from "../assets/images/getorder.png";
import "../assets/styles/GetOrder.css";
export default function GetOrder() {
  return (
    <Container maxW={"9xl"} py={12} style={{ marginTop: "120px" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <div className="heading-minimal-go">
            <div className="sub-title-go">DINE IN OR TAKE AWAY</div>
            <h3 className="head-title-go">
              Get Your Order 24/7 Right At <br />
              Your Doorsteps
            </h3>
            <div className="bottom-dots-go  clearfix-go center">
              <span className="dot-go line-dot-go"></span>
              <span className="dot-go"></span>
              <span className="dot-go"></span>
              <span className="dot-go"></span>
            </div>
          </div>
          <div className="go-para-div">
            <p>
              Plant-based diets may offer an advantage over those that are not
              plant based with respect to prevention and management of diabetes.
              the adventist health studies found that vegetarians have
              approximately half the risk of developing diabetes
            </p>
          </div>
          <Stack direction={"row"} className="go-buttons">
            <Button
              bg={"#f7c305"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "yellow.500" }}
            >
              Order Food
            </Button>
            <Button
              bg={"black"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blackAlpha.700" }}
            >
              Search Now
            </Button>
          </Stack>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              getOrder
              //   "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
