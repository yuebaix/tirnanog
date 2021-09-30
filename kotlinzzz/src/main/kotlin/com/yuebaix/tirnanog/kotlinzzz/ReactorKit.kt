package com.yuebaix.tirnanog.kotlinzzz

import kotlinx.coroutines.reactor.flux
import kotlinx.coroutines.reactor.mono
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.util.concurrent.ForkJoinPool
import java.util.function.Supplier

object ReactorKit {
    @JvmStatic
    fun <T> elastic(vararg suppliers: Supplier<T>): Flux<T> {
        val flux = parallelPublisher(*suppliers)
        flux.blockLast()
        return flux
    }

    @JvmStatic
    fun <T> parallelPublisher(vararg suppliers: Supplier<T>): Flux<T> {
        var flux = Flux.empty<T>()
        if (suppliers.isNotEmpty()) {
            val list = suppliers.map { supplier -> elasticPublisher(supplier) }.toList()
            flux = Flux.merge(list)
        }
        return flux
    }

    @JvmStatic
    fun <T> elasticPublisher(supplier: Supplier<T>): Mono<T> {
        return mono {
            supplier.get()
        }.subscribeOn(Schedulers.fromExecutor(ForkJoinPool.commonPool()))
    }
}