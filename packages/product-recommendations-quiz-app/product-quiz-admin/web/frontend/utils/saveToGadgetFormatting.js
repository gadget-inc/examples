// format quiz question input for saving to Gadget models
export const formatQuizQuestions = (questionInput) => {
  const questions = questionInput.map((q) => {
    const answers = q.answers.map((a) => {
      // handle image upload
      let image = null;
      const recommendedProductImage = a.recommendedProduct.image;
      if (recommendedProductImage?.file?.name && recommendedProductImage?.token) {
        image = {
          directUploadToken: recommendedProductImage.token,
          fileName: recommendedProductImage.file.name,
        };
      }

      // update if the id already exists
      return a.id
        ? {
            update: {
              id: a.id,
              text: a.answer,
              recommendedProduct: {
                update: {
                  id: a.recommendedProduct.id,
                  image: image ? image : undefined,
                  productSuggestion: {
                    _link: a.recommendedProduct.productSuggestion,
                  },
                },
              },
            },
          }
        : // otherwise, create a new answer
          {
            create: {
              text: a.answer,
              recommendedProduct: {
                create: {
                  image: image ? image : undefined,
                  productSuggestion: {
                    _link: a.recommendedProduct.productSuggestion,
                  },
                },
              },
            },
          };
    });
    // update an existing question
    return q.id
      ? {
          update: {
            id: q.id,
            title: q.question,
            answers,
          },
        }
      : // or create a new question
        {
          create: {
            title: q.question,
            answers,
          },
        };
  });
  return questions;
};
