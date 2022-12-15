import { useFindMany } from "@gadgetinc/react";
import {
  FormLayout,
  TextField,
  Button,
  TextContainer,
  Heading,
  Spinner,
  Stack,
  Form,
  Icon,
} from "@shopify/polaris";
import { CirclePlusMajor } from "@shopify/polaris-icons";
import { useCallback } from "react";
import { useState } from "react";
import { api } from "../api";
import { QuizQuestion } from "./QuizQuestion";

export function QuizForm({ quiz, onSave }) {
  // empty state definitions
  const emptyAnswer = {
    id: "",
    answer: "",
    recommendedProduct: {
      id: "",
      productSuggestion: "",
      image: {
        file: null,
        token: null,
      },
    },
  };
  const emptyQuestion = {
    id: "",
    question: "",
    answers: [emptyAnswer],
  };

  const [quizName, setQuizName] = useState(quiz?.name || "");
  const [quizDescription, setQuizDescription] = useState(
    quiz?.description || ""
  );
  const [questions, setQuestions] = useState(
    quiz?.questions || [emptyQuestion]
  );

  const [deletedQuestionIds, setDeletedQuestionIds] = useState([]);

  const updateQuizName = useCallback((name) => {
    setQuizName(name);
  });
  const updateQuizDescription = useCallback((description) => {
    setQuizDescription(description);
  });

  const [productsResponse] = useFindMany(api.shopifyProduct, {
    select: {
      id: true,
      title: true,
    },
  });

  // update question state (add or remove questions to quiz)
  const addQuestion = useCallback(() => {
    setQuestions([...questions, emptyQuestion]);
  });
  const removeQuestion = useCallback((index, questionId) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
    if (questionId) {
      setDeletedQuestionIds([...deletedQuestionIds, questionId]);
    }
  });
  const updateQuestion = useCallback((index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  });

  // handle state updates for possible answers to questions
  const [deletedAnswerIds, setDeletedAnswerIds] = useState([]);

  const addAnswer = useCallback((questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push(emptyAnswer);
    setQuestions(updatedQuestions);
  });
  const removeAnswer = useCallback((questionIndex, answerIndex, answerId) => {
    const updatedQuestions = [...questions];
    const updatedQuestion = updatedQuestions[questionIndex];
    const updatedAnswers = [...updatedQuestion.answers];

    updatedAnswers.splice(answerIndex, 1);
    updatedQuestion.answers = updatedAnswers;

    setQuestions(updatedQuestions);
    if (answerId) {
      setDeletedAnswerIds([...deletedAnswerIds, answerId]);
    }
  });

  const saveQuiz = () => {
    onSave(
      quizName,
      quizDescription,
      questions,
      deletedQuestionIds,
      deletedAnswerIds
    );
  };

  if (productsResponse.fetching) {
    return (
      <></>
      // <Stack>
      //   <Spinner /> <span>Fetching products...</span>
      // </Stack>
    );
  }

  return (
    <Form onSubmit={saveQuiz}>
      <FormLayout>
        <Stack distribution="trailing">
          <Button primary submit>
            Save quiz
          </Button>
        </Stack>
        <TextField
          label="Name"
          requiredIndicator
          value={quizName}
          onChange={updateQuizName}
          autoComplete="quiz-name"
        />
        <TextField
          label="Description"
          value={quizDescription}
          onChange={updateQuizDescription}
          autoComplete="off"
        />
        <TextContainer>
          <Heading>Quiz questions</Heading>
        </TextContainer>
        {questions.map((quizQuestion, i) => (
          <QuizQuestion
            key={`question-${i}`}
            question={quizQuestion}
            index={i}
            products={productsResponse.data}
            disableRemove={questions.length <= 1}
            removeQuestion={removeQuestion}
            updateQuestion={updateQuestion}
            addAnswer={addAnswer}
            removeAnswer={removeAnswer}
          />
        ))}

        <Button plain onClick={addQuestion}>
          <Stack alignment="center">
            <Icon source={CirclePlusMajor} />
            <p>Add question</p>
          </Stack>
        </Button>
        <Stack distribution="trailing">
          <Button primary submit>
            Save quiz
          </Button>
        </Stack>
      </FormLayout>
    </Form>
  );
}
