package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func sayHello(c *gin.Context) {
	c.String(http.StatusOK, "hello")
}

func main() {
	engine := gin.Default()
	engine.Handle(http.MethodGet, "/sayHello", sayHello)
	err := engine.Run(":8080")
	if err != nil {
		log.Println(err)
		return
	}
}
