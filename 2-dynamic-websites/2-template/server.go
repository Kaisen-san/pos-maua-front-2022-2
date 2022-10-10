package main

import (
	"log"
	"net/http"
	"text/template"
)

type HelloView struct {
	Name string
	Age  int
}

var helloTemplate = template.Must(template.ParseFiles("index.html"))

func handleHello(rw http.ResponseWriter, r *http.Request) {
	data := HelloView{Name: "Felipe", Age: 28}

	helloTemplate.Execute(rw, data)
}

func main() {
	http.HandleFunc("/", handleHello)

	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
