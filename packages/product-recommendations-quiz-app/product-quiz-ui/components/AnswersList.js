import { Layout } from "@shopify/polaris";
import { Answer } from "./Answer.js";

export const AnswersList = ({ updateAnswer, question, answers, removeAnswer }) => {
  return (
    <Layout.Section>
      {answers.map((answer) => {
        return (
          <Answer
            key={answer._id}
            _id={answer._id}
            updateAnswer={(a) => updateAnswer(a)}
            question={question}
            answer={answer}
            removeAnswer={(id) => removeAnswer(id)}
          />
        );
      })}
    </Layout.Section>
  );
};
