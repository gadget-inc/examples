import {
  Card,
  Stack,
  TextContainer,
  Heading,
  Image,
  Button,
} from "@shopify/polaris";
import { trophyImage } from "../assets";

export const BillingCard = ({ title, description, onClick, children }) => {
  return (
    <>
      <Card sectioned>
        <Stack wrap={true} spacing="extraTight" distribution="center">
          <Stack.Item>
            <TextContainer spacing="loose">
              <Heading>{title}</Heading>
            </TextContainer>
          </Stack.Item>
          <Stack.Item>
            <Image
              source={trophyImage}
              alt="Nice work on building a Shopify app"
              width={120}
            />
          </Stack.Item>
          <Stack.Item>
            <div style={{ padding: "0 20px" }}>
              <Button onClick={onClick}>{description}</Button>
            </div>
          </Stack.Item>
        </Stack>
      </Card>
      {children}
    </>
  );
};
