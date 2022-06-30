import { useEffect, useState } from "react";
import { Layout, Stack, TextField } from "@shopify/polaris";

export const Answer = ({ updateAnswer, question, answer, _id }) => {
  // Text
  const [text, setText] = useState(answer.text);
  const handleChangeText = (value) => {
    setText(value);
  };

  // Sequence
  const [sequence, setSequence] = useState(answer.sequence);
  const handleChangeSequence = (value) => {
    setSequence(value);
  };

  useEffect(() => {
    updateAnswer({
      text,
      sequence,
      _id,
      question,
    });
  }, [text, sequence, question, _id]);

  return (
    <Layout.Section>
      <Stack>
        <TextField label="Text" value={text} onChange={handleChangeText} type="text" requiredIndicator placeholder="Text" />
        <TextField
          requiredIndicator
          step={1}
          type="number"
          autoComplete="off"
          value={sequence}
          onChange={handleChangeSequence}
          label="Position in sequence of answers"
        />
      </Stack>
    </Layout.Section>
  );
};
