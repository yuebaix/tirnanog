package com.yuebaix.tirnanog.kotlinzzz

import java.util.function.Supplier

object App {
    @JvmStatic
    fun main(args: Array<String>) {
        println("kotlinzzz")
        TryKotlin().kMono<Unit>(
            { println("这是中文") }
        ).block()
    }
}