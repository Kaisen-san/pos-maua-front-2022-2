package main

import (
	"log"
	"net/http"
	"text/template"
)

type InMemoryDB struct {
	Users []User
}

type User struct {
	Name    string
	Age     int
	BGColor string
}

var dbInstance = InMemoryDB{
	Users: []User{
		{Name: "Felipe", Age: 28, BGColor: "red"},
		{Name: "Murilo", Age: 35, BGColor: "blue"},
	},
}

var helloTemplate = template.Must(template.ParseFiles("index.html"))

func handleHello(rw http.ResponseWriter, r *http.Request) {
	data := dbInstance.Users

	helloTemplate.Execute(rw, data)
}

func main() {
	http.HandleFunc("/", handleHello)

	log.Println("Listening on port 8080")
	http.ListenAndServe(":8080", nil)
}
