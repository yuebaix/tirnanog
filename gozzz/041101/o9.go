package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Item struct {
	Id string
	Version int64
}

func (Item) TableName() string {
	return "common_column_workbook"
}

func main() {
	username := ""
	password := ""
	address := ""
	database := ""
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local", username, password, address, database)
	fmt.Println(dsn)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Errorf("%s", err)
	}
	var item Item
	err = db.Where("1 = 1").First(&item).Error //查询User并将信息保存到tmpUser
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(item)
}
