package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 100; i++ {
		fmt.Println(i)
	}

	j := 0
	for {
		if j == 5 {
			break
		}
		fmt.Printf("current j is %d\n", j)
		j++
	}

	strArr := []string{"aa", "bb", "cc", "dd", "ee"}
	strSlice := strArr[1:3]
	fmt.Println(strSlice)

	for i, str := range strSlice {
		fmt.Printf("strSlice i %d is str %s\n", i, str)
	}

	dict := map[string]int {
		"apple": 1,
		"watermelon": 2,
	}
	for k,v := range dict{
		fmt.Printf("dict k %s is v %d\n", k, v)
	}
}
