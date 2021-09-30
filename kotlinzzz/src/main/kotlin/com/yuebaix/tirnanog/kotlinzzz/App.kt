package com.yuebaix.tirnanog.kotlinzzz

import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

object App {
    @JvmStatic
    fun main(args: Array<String>) {
        pre()
    }

    fun pre() {
        println("kotlinzzz")
        TryKotlin.kMono<Unit>(
            { println("这是中文") }
        ).block()

        runBlocking {
            repeat(1000) {
                launch {
                    delay(1000L)
                    print(".")
                }
            }
        }
        println()
        println("end")
    }
}