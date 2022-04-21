# Product Recommendations Quiz App Example

This is a [Next.js](https://nextjs.org/) project.

[Preview Site](https://product-recommendation-quiz-ui-whateverbee.vercel.app/) | [API Reference](https://docs.gadget.dev/api/alida-quiz-app-2)

This is an example of using Gadget to build a Product Recommendation Quiz App for a Shopify merchant, with both in-theme and headless front end implementations, and a lightweight back-end UI.

## Implementation notes

- We access data for the application using the Gadget Client from `@gadget-client/[your-app-name]`. We construct the Client object in `_app.js`.  

- We use `@gadgetinc/react` for type safe, easy access to our backend data in React components.

- For consistency with the Shopify admin UI, and for ease of building, we use `@shopify/polaris` React components.

## If you use this boilerplate to build your own app

- You will need to replace any [YOUR API KEY], [YOUR CLIENT HERE] and [YOUR DIRECT SCRIPT TAG] with the applicable values for your app.  

- You will need to ensure you have the required API fields from the tutorial (at a minimum) in order for the API queries and mutations to succeed.  

- The code effect you need to calculate the quiz result and push the Result reference to the Response object is in the `gadget-code-effects` folder.  

- The code for implementing the quiz front-end (for end users) in Shopify assumes you are using the Dawn theme, or a similar Shopify-built theme. You will find the code for in-theme implementation in the `shopify-code-files` folder.
