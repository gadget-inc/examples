import {
  TextField,
  Stack,
  Select,
  Button,
  DropZone,
  Thumbnail,
  Caption,
  Icon,
} from "@shopify/polaris";
import { CircleCancelMajor } from "@shopify/polaris-icons";
import { useCallback } from "react";
import { api } from "../api";

export function QuestionAnswer({
  answer,
  index,
  products,
  removeAnswer,
  updateAnswer,
  disableRemove,
}) {
  const { file } = answer.recommendedProduct.image;

  const productsOptions = products.map((p, i) => ({
    label: p.title,
    value: p.id,
    key: i,
  }));

  // format quiz question input for saving to Gadget models
  const handleFileUpload = async (file) => {
    const { url, token } = await api.getDirectUploadToken();

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    return token;
  };

  const onAnswerChange = useCallback((a) => {
    const updatedAnswer = { ...answer, answer: a };
    updateAnswer(updatedAnswer, index);
  });

  const onProductSuggestionChange = useCallback((p) => {
    const updatedRecommendedProduct = {
      ...answer.recommendedProduct,
      productSuggestion: p,
    };
    const updatedAnswer = {
      ...answer,
      recommendedProduct: updatedRecommendedProduct,
    };
    updateAnswer(updatedAnswer, index);
  });

  const handleDrop = useCallback(async (_droppedfile, acceptedfile) => {
    const token = await handleFileUpload(acceptedfile[0]);

    const updatedRecommendedProduct = {
      ...answer.recommendedProduct,
      image: {
        file: acceptedfile[0],
        token,
      },
    };
    const updatedAnswer = {
      ...answer,
      recommendedProduct: updatedRecommendedProduct,
    };
    updateAnswer(updatedAnswer, index);
  });

  const fileUpload = !file ? (
    <DropZone.FileUpload />
  ) : (
    <Stack>
      <Thumbnail
        size="small"
        alt={file.name || file.fileName}
        source={file.url || window.URL.createObjectURL(file)}
      />
      <div>
        {file.name}
        <Caption>{file.size || file.byteSize} bytes</Caption>
      </div>
    </Stack>
  );

  return (
    <>
      <Stack alignment="center">
        <Stack.Item fill>
          <TextField
            requiredIndicator
            label={`Answer ${index + 1}`}
            value={answer.answer}
            onChange={onAnswerChange}
          />
        </Stack.Item>
        <Stack.Item>
          <Select
            label="Recommended product"
            placeholder="-"
            options={productsOptions}
            value={answer.recommendedProduct.productSuggestion}
            onChange={onProductSuggestionChange}
            requiredIndicator
          />
        </Stack.Item>
        <Stack.Item>
          <DropZone
            accept="image/*"
            type="image"
            onDrop={handleDrop}
            allowMultiple={false}
          >
            {fileUpload}
          </DropZone>
        </Stack.Item>
        <Stack.Item>
          <Button
            plain
            destructive={!disableRemove}
            disabled={disableRemove}
            onClick={() => removeAnswer(index)}
          >
            <Icon source={CircleCancelMajor} />
          </Button>
        </Stack.Item>
      </Stack>
      <br />
    </>
  );
}
