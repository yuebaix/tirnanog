package main

import (
	"fmt"
	"time"
)

var ch chan int

func main() {
	start := time.Now()
	fmt.Printf("start --- %s\n", start)

	ch = make(chan int)
	go consume()
	go produce()

	end := time.Now()
	fmt.Printf("end --- %s\n", end)
	fmt.Printf("take time --- %f\n", end.Sub(start).Seconds())

	time.Sleep(10 * time.Second)
}

func produce()  {
	fmt.Printf("produce start --- %s\n", time.Now())
	time.Sleep(2 * time.Second)
	ch <- 1
	fmt.Printf("produce end --- %s\n", time.Now())
}

func consume()  {
	fmt.Printf("consume start --- %s\n", time.Now())
	time.Sleep(1 * time.Second)
	i := <- ch
	fmt.Printf("value is %d\n", i)
	fmt.Printf("consume end --- %s\n", time.Now())
}