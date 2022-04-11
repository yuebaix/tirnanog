package main

import "fmt"

func main() {
	var localStr string = "localStr"
	fmt.Printf("localStr is %s \n", localStr)

	var strArr = [10]string{"aa", "bb", "cc", "dd", "ee"}
	fmt.Printf("strArr is %+v\n", strArr)

	var strSlice = make([]string, 0)
	strSlice = strArr[1:3]
	fmt.Printf("sliceArr is %+v\n", strSlice)
	strSlice[0] = "ff"
	fmt.Printf("sliceArr is %+v\n", strSlice)
	strSlice = append(strSlice, "ee")
	fmt.Printf("sliceArr is %+v\n", strSlice)

	var dict = map[string]int {
		"apple":1,
		"watermelon":2,
	}
	fmt.Printf("dic is %+v\n", dict)
	fmt.Printf("apple is %+v\n", dict["apple"])
}
