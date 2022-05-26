import { Layout, Select, Stack, TextField } from "@shopify/polaris";
import { useState, useEffect } from "react";

export const QuizResultsForm = ({ updateQuizResult, result, quiz, products, _id }) => {
  // Body
  const [body, setBody] = useState(result.body);
  const handleChangeBody = (value) => {
    setBody(value);
  };

  // Image URL
  const [imageUrl, setImageUrl] = useState(result.imageUrl);
  const handleChangeImageUrl = (value) => {
    setImageUrl(value);
  };

  // Products
  products.flatMap((p) => {
    p.edges;
  });

  const destructuredProducts = [];
  products.forEach((p) => {
    p.variants.edges.forEach((v, i) => {
      destructuredProducts.push({
        label: p.title + ` - ` + v.node.title,
        value: v.node.id,
        key: i,
      });
    });
  });

  const [productSuggestion, setProductSuggestion] = useState();
  const handleChangeProductSuggestion = (value) => {
    setProductSuggestion(value);
  };

  useEffect(() => {
    updateQuizResult({
      body,
      imageUrl,
      quiz,
      productSuggestion,
      _id,
    });
  }, [body, imageUrl, productSuggestion, quiz, _id]);

  return (
    <Layout.Section>
      <Stack>
        <TextField label="Body text" value={body} requiredIndicator onChange={handleChangeBody} type="text" placeholder="Body Text" />
        <TextField label="Image URL (optional)" value={imageUrl} onChange={handleChangeImageUrl} type="text" placeholder="Image Url" />
        <Select
          label="Shopify Product to Recommend"
          placeholder="Product"
          options={destructuredProducts}
          value={productSuggestion}
          onChange={handleChangeProductSuggestion}
          requiredIndicator
        />
      </Stack>
    </Layout.Section>
  );
};
