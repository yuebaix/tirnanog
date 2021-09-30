package com.yuebaix.tirnanog.kotlinzzz

import kotlinx.coroutines.*
import kotlinx.coroutines.reactor.flux
import kotlinx.coroutines.reactor.mono
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.function.Supplier

object TryKotlin {
    fun call() {
        println("kotlin")
    }

    fun <T> kMono(supplier: Supplier<T>): Mono<T> {
        return mono {
            println("2 这是中文")
            supplier.get()
        }
    }

    @JvmStatic
    fun <T> k(vararg suppliers: Supplier<T>): List<T> {
        return runBlocking {
            val deferredList = ArrayList<Deferred<T>>()
            for (supplier in suppliers) {
                val deferred = async {
                    supplier.get()
                }
                deferredList.add(deferred)
            }
            val resultList = ArrayList<T>()
            for (deferred in deferredList) {
                resultList.add(deferred.await())
            }
            resultList
        }
    }
}