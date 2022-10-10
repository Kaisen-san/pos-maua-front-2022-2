package main

import (
	"fmt"
	"log"
	"net/http"
)

func handleHello(rw http.ResponseWriter, r *http.Request) {
	fmt.Fprint(rw, "Hello World!")
	// r.Method == "GET"
}

func main() {
	http.HandleFunc("/", handleHello)

	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
