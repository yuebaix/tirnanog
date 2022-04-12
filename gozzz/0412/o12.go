package main

import (
	"fmt"
	"github.com/spf13/viper"
	"gopkg.in/yaml.v2"
	"log"
)

func main() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("Fatal error reading config file: %w \n", err))
	}

	appName := viper.Get("app.name")
	fmt.Println(appName)

	c := viper.AllSettings()
	bs, err := yaml.Marshal(c)
	if err != nil {
		log.Fatalf("unable to marshal config to yaml: %v \n", err)
	}
	yamlConfig := string(bs)
	fmt.Println(yamlConfig)
}
