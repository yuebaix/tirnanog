package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()
	fmt.Printf("start --- %s\n", start)

	go action1()
	go action2()
	go action3()

	end := time.Now()
	fmt.Printf("end --- %s\n", end)
	fmt.Printf("take time --- %f\n", end.Sub(start).Seconds())

	time.Sleep(6 * time.Second)
}

func action1() {
	fmt.Printf("action1 start --- %s\n", time.Now())
	time.Sleep(1 * time.Second)
	fmt.Printf("action1 end --- %s\n", time.Now())
}

func action2() {
	fmt.Printf("action2 start --- %s\n", time.Now())
	time.Sleep(2 * time.Second)
	fmt.Printf("action2 end --- %s\n", time.Now())
}

func action3() {
	fmt.Printf("action3 start --- %s\n", time.Now())
	time.Sleep(3 * time.Second)
	fmt.Printf("action3 end --- %s\n", time.Now())
}
