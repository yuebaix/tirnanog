package main

import "fmt"

type Shape interface {
	Area() float64
	Perimeter() float64
}

type Rect struct {
	width  float64
	height float64
}

func (p *Rect) Area() float64 {
	return p.width * p.height
}
func (p *Rect) Perimeter() float64 {
	return 2 * (p.width + p.height)
}

func main() {
	var shape Shape = &Rect{10, 20}
	fmt.Println(shape.Area())
	fmt.Println(shape.Perimeter())
}
