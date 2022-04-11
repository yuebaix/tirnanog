package main

import "fmt"

var globalStr string
var globalInt int

func main() {
	var localStr string
	var localInt int
	localStr = "localStr"
	localInt = 10
	globalStr = "globalStr"
	globalInt = 20
	fmt.Printf("globalStr is %s \n", globalStr)
	fmt.Printf("globalInt is %d \n", globalInt)
	fmt.Printf("localStr is %s \n", localStr)
	fmt.Printf("localInt is %d \n", localInt)
}
