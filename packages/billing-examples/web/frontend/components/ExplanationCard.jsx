import { Card, TextContainer } from "@shopify/polaris";

export const ExplanationCard = ({ title, description }) => {
  return (
    <Card sectioned>
      <TextContainer>
        <p>
          <b>{title}</b>
        </p>
        <p>{description}</p>
      </TextContainer>
    </Card>
  );
};
