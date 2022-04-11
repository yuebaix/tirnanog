package main

import "testing"

func TestRect(t *testing.T) {
	var shape Shape = &Rect{40, 20}
	if shape.Area() != 800 {
		t.Error("func area error")
	}
	if shape.Perimeter() != 120 {
		t.Error("func perimeter error")
	}
}
