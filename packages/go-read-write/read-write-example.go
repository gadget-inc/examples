package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	// READ DATA (QUERY)
	// jsonData := map[string]string{
	//     "query": `
	//         { 
	//             foo(id: 1) {
	//                 id,
	//                 bar
	//             }
	//         }
	//     `,
	// }


	// WRITE DATA (MUTATION)
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
	jsonValue, _ := json.Marshal(jsonData)

	// send the GraphQL request to your Gadget app
	request, _ := http.NewRequest("POST", "https://<your-gadget-slug>/api/graphql", bytes.NewBuffer(jsonValue))
	request.Header.Set("Content-Type", "application/json")
	// grab your project's API key from Settings -> API Keys in Gadget
	request.Header.Set("Authorization", "Bearer <your Gadget API Key>")

	// send the request
	client := &http.Client{Timeout: time.Second * 10}
	response, err := client.Do(request)

	if err != nil {
			fmt.Printf("The HTTP request failed with error %s\n", err)
	}
	defer response.Body.Close()

	// print out the response
	data, _ := io.ReadAll(response.Body)
	fmt.Println(string(data))
}