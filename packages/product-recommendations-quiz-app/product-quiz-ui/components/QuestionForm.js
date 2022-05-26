import { Layout, Stack, TextField, RadioButton } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import _ from "lodash";

export const QuestionForm = ({ updateQuestion, question, _id }) => {
  // Title
  const [title, setTitle] = useState(question.title);
  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  // Body
  const [body, setBody] = useState(question.body);
  const handleChangeBody = (value) => {
    setBody(value);
  };

  // Required?
  const [required, setRequired] = useState(question.required);
  const handleChangeRequired = (value) => {
    setRequired(value);
  };

  // Image URL
  const [imageUrl, setImageUrl] = useState(question.imageUrl);
  const handleChangeImageUrl = (value) => {
    setImageUrl(value);
  };

  // sequence
  const [sequence, setSequence] = useState(question.sequence);
  const handleChangeSequence = (value) => {
    setSequence(value);
  };

  useEffect(() => {
    updateQuestion({
      title,
      body,
      imageUrl,
      required,
      sequence,
      _id,
    });
  }, [title, body, required, imageUrl, sequence, _id]);

  return (
    <Layout.Section>
      <Stack>
        <TextField label="Title" value={title} onChange={handleChangeTitle} type="text" requiredIndicator placeholder="Title" />
        <TextField label="Body text (optional)" value={body} onChange={handleChangeBody} type="text" placeholder="Body Text" />
        <TextField label="Image URL (optional)" value={imageUrl} onChange={handleChangeImageUrl} type="text" placeholder="Image Url" />
        <RadioButton value={required} onChange={handleChangeRequired} label="Required?" />
        <TextField
          requiredIndicator
          step={1}
          type="number"
          autoComplete="off"
          value={sequence}
          onChange={handleChangeSequence}
          label="Position in sequence of questions"
        />
      </Stack>
    </Layout.Section>
  );
};
