package com.yuebaix.tirnanog.kotlinzzz

import kotlinx.coroutines.reactor.mono
import reactor.core.publisher.Mono
import java.util.function.Supplier

class TryKotlin {
    fun call() {
        println("kotlin")
    }

    fun <T> kMono(supplier: Supplier<T>): Mono<T> {
        return mono {
            println("2 这是中文")
            supplier.get()
        }
    }
}