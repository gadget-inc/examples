package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"
)

// grab your project's API key from Settings -> API Keys in Gadget
const (
	GADGET_APP_SLUG = "<your-gadget-slug>"
	GADGET_API_KEY  = "<your Gadget API key>"
)

func main() {
	// READ DATA (QUERY)
	// findMany foos
	// jsonData := map[string]string{
	//     "query": `
	// 			{
	// 				foos {
	// 					edges {
	// 						node {
	// 							id
	// 							bar
	// 						}
	// 					}
	// 				}
	// 			}
	//     `,
	// }

	// WRITE DATA (MUTATION)
	// creates a new Foo with bar field set to 1
	jsonData := map[string]interface{}{
		"query": `
			mutation ($foo: CreateFooInput) {
				createFoo(foo: $foo) {
					success
					errors {
						message
						... on InvalidRecordError {
							validationErrors {
								apiIdentifier
								message
							}
						}
					}
					foo {
						id
						bar
					}
				}
			},
		
		`,
		"variables": map[string]interface{}{
			"foo": map[string]int{
				"bar": 1,
			},
		},
	}
	jsonValue, err := json.Marshal(jsonData)
	if err != nil {
		log.Fatal(err)
	}

	// send the GraphQL request to your Gadget app
	request, err := http.NewRequest("POST", fmt.Sprintf("https://%s.gadget.app/api/graphql", GADGET_APP_SLUG), bytes.NewBuffer(jsonValue))
	if err != nil {
		log.Fatal(err)
	}

	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Authorization", fmt.Sprintf("Bearer %s", GADGET_API_KEY))

	// send the request
	client := &http.Client{Timeout: time.Second * 10}
	response, err := client.Do(request)
	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()

	// print out the response
	data, _ := io.ReadAll(response.Body)
	fmt.Println(string(data))
}
