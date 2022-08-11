# Golang Read/Write Sample

This is a small Go script that illustrates how you can read or write to Gadget's GraphQL API.

Not using Go? You can still take a look at the code snippet to figure out how to send a request to your Gadget app's API.

## Run the script

You can test this out yourself by adding a model called **Foo** that has a number field **Bar** to any Gadget app. Make sure to add your Gadget application's app slug and API Key.

You must have [Go installed](https://go.dev/doc/install). Then enter `go run .` into your terminal. You should see Foo values added to your Gadget app.

You can also uncomment the _READ DATA (QUERY)_ section to try reading data (Foo.id = 1 by default) from your application.

## Gadget concepts covered

- How to request data from or write data to a Gadget app without using the generated API client npm package
  - GraphQL query using automatically generated CRUD API
  - Use of API Keys as a Bearer token

## Learn more

To learn more about Gadget:

- [Gadget documentation](https://docs.gadget.dev) - learn about Gadget's features and connectivity
- check out the Authentication and GraphQL sections of your Gadget project's API docs
