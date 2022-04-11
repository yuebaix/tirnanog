package main

import "fmt"

func main() {
	localStr := "localStr"
	fmt.Println(localStr)
	if localStr == "localStr" {
		fmt.Println("if")
	} else if localStr == "localStr" {
		fmt.Println("else if")
	} else {
		fmt.Println("else")
	}

	dict := map[string]int{
		"apple":      1,
		"watermelon": 2,
	}

	if num, ok := dict["apple"]; ok {
		fmt.Println(num)
	}

	switch dict["watermelon"] {
	case 1:
		fmt.Println(1)
	case 2:
		fmt.Println(2)
		//fallthrough
	default:
		fmt.Println(3)
	}
}
