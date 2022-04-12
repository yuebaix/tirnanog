package main

import (
	"fmt"
	"github.com/spf13/cobra"
)

func runPs() {
	fmt.Println("ps ... ")
}

func main() {

	// 定义ps命令
	var cmdPs = &cobra.Command{
		Use:   "ps",
		Short: "List containers",
		Run: func(cmd *cobra.Command, args []string) {
			runPs()
		},
	}
	// 定义根命令
	var rootCmd = &cobra.Command{Use: "play_docker"}
	// 加入ps命令
	rootCmd.AddCommand(cmdPs)
	// 初始化cobra
	rootCmd.Execute()
}
