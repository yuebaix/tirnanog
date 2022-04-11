package main

import (
	"log"
	"net/http"
)

func SayHello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello"))
}

func main() {
	http.HandleFunc("/sayHello", SayHello)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Println("ListenAndServe:", err)
		return
	}
}
