/**
 * Effect code for Update on Response
 * @typedef { import("gadget-server").UpdateResponseActionContext } UpdateResponseActionContext
 * @param {UpdateResponseActionContext} context - Everything for running this effect, like the api client, current record, params, etc
 */
module.exports = async ({ api, record, params, logger }) => {
  if (record.conversionState == "quiz completed") {
    const potentialResults = await api.answer.findMany({
      filter: {
        response: { isSet: true },
      },
      select: {
        id: true,
        result: {
          id: true,
        },
        response: {
          id: true,
        },
      },
    });

    const filteredResults = [];
    potentialResults.forEach((p) => {
      if (p.response && parseInt(p.response.id) === parseInt(record.id) && p.result) {
        filteredResults.push(parseInt(p.result.id));
      }
    });

    // In the case where the mode of filteredResults is bi-modal
    // or multi-modal, select the first result as our successful result
    // (arbitrary selection)
    const result = mode(filteredResults)[0];
    if (result) {
      const updatedRecord = await api.response.update(record.id, {
        response: {
          result: {
            _link: result.toString(),
          },
          conversionState: "result mapped",
        },
      });
      return updatedRecord;
    }
  }

  return true;
};

function mode(numbers) {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]

  const modes = [];
  const count = [];
  let i;
  let number;
  let maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
}
