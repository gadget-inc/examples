# Simple Form Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20simple-form-example)](https://vercel.com/gadget/simple-form-example) | [Preview Site](https://gadget-form-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/simple-ticket-example)

This is an example of using Gadget to build a user-facing form.

Implementation notes:

- we use the `@gadget-client/simple-ticket-example` NPM package from the Gadget app to access data. We construct a Gadget Client object in `lib/api.ts`.
- The Gadget backend has some validations which ensure that the data has the required fields when trying to create any Ticket records.
- we use `@gadgetinc/react` for type-safe, easy access to the `createTicket` GraphQL mutation with `useAction(api.ticket.create)`
- we provide our client to the React application by using `<Provider/>` from `@gadgetinc/react` in `pages/_app.tsx` so it's available for the `useAction` hooks in pages
- we use the nice error handling to access any server-side validation errors returned to the client with `error.validationErrors`.
