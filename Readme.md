# Gadget Examples

This repo holds a collection of example applications built on top of [Gadget](https://gadget.dev) -- a fast backend builder.

## Related Products

[Code](https://github.com/gadget-inc/examples/tree/main/packages/related-products) | [Preview Site](https://gadget-related-products.vercel.app/) | [API Reference](https://docs.gadget.dev/api/related-products-example)

This is a related products picker for e-commerce merchants to select which products should be displayed together on their website.
This is the administration interface frontend built in next.js. This UI saves data to a Gadget backend, which then writes data to a Shopify store powering the actual storefront.

- Backend: Gadget via GraphQL
- Frontend: next.js with `@gadgetinc/react`

Features used:

- Gadget generated GraphQL API
- Shopify Connection
- `HasMany`, `BelongsTo`, and `HasManyThrough` relationships
- Generated API client (`@gadget-client/related-products-example` package) and React bindings (`@gadget-inc/react` package)

## Simple Blog

[Code](https://github.com/gadget-inc/examples/tree/main/packages/simple-blog) | [Preview Site](https://gadget-blog-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/simple-blog-example)

Everyone and their dog has a blog these days -- here's how you build a simple one in Gadget.

- Backend: Gadget via GraphQL
- Frontend: next.js with `@gadgetinc/react` and ChakraUI

Features used:

- Gadget generated GraphQL API
- Gadget authentication system (`User` model)
- Generated API client (`@gadget-client/simple-blog-example` package) and React bindings (`@gadget-inc/react` package)

## Login Logout

[Code](https://github.com/gadget-inc/examples/tree/main/packages/login-logout) | [Preview Site](https://gadget-login-logout.vercel.app/) | [API Reference](https://docs.gadget.dev/api/login-logout-example)

This is an example of using Gadget's built in authentication system to log users in and out, and then grant only logged in users access to some data.

- Backend: Gadget via GraphQL
- Frontend: next.js with `@gadgetinc/react`

Features used:

- Gadget generated GraphQL API
- Gadget authentication system (`User` model)
- Generated API client (`@gadget-client/login-logout-example` package) and React bindings (`@gadget-inc/react` package)

## File Uploads

[Code](https://github.com/gadget-inc/examples/tree/main/packages/file-uploads) | [Preview Site](https://gadget-file-uploads-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/files-example)

This is an example of using Gadget's built in authentication system to log users in and out, and then grant only logged in users access to some data.

- Backend: Gadget via GraphQL
- Frontend: next.js with `@gadgetinc/react`

Features used:

- Gadget generated GraphQL API
- Gadget authentication system (`User` model)
- Generated API client (`@gadget-client/login-logout-example` package) and React bindings (`@gadget-inc/react` package)
