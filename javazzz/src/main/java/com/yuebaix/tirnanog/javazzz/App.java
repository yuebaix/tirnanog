package com.yuebaix.tirnanog.javazzz;

import com.yuebaix.tirnanog.kotlinzzz.ReactorKit;
import com.yuebaix.tirnanog.kotlinzzz.TryKotlin;
import com.yuebaix.tirnanog.scalazzz.TryScala;
import lombok.SneakyThrows;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ForkJoinPool;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class App {
    private static final App app = new App();

    public static void main(String[] args) {
        app.elastic(82);
    }

    private static void call() {
        //new TryKotlin().call();
        new TryScala().call();
    }

    /*private void reactor() {
        Mono.just("1 这是中文").doOnNext(System.out::println).subscribeOn(Schedulers.single()).block();
        new TryKotlin().kMono(()-> {
            System.out.println("3 这是中文");
            return Void.TYPE;
        }).block();
    }*/

    @SneakyThrows
    public void elastic(int size) {
        Supplier<Integer> supplier = () -> {
            SimplePseudoKit.fakeIO();
            return 0;
        };
        List<Supplier<Integer>> list = IntStream.range(0, size).mapToObj(i -> supplier).collect(Collectors.toList());
        Supplier<Integer>[] suppliers = list.toArray(new Supplier[0]);
        /*Flux flux = ReactorKit.elastic(suppliers);
        flux.blockLast();*/

        TryKotlin.k(suppliers);
        System.out.println();
        Thread.sleep(100000L);
    }

    public <T> Flux<T> parallelPublisher(Supplier<T>... suppliers) {
        Flux<T> flux = Flux.empty();
        if (suppliers != null && suppliers.length > 0) {
            List<Mono<T>> monoList = Arrays.stream(suppliers).map(this::elasticPublisher).collect(Collectors.toList());
            Mono<T>[] monoArr = monoList.toArray(new Mono[0]);
            flux = Flux.merge(monoArr);
        }
        return flux;
    }

    public <T> Mono<T> elasticPublisher(Supplier<T> supplier) {
        return Mono.fromSupplier(supplier).subscribeOn(Schedulers.boundedElastic());
    }

    /*public <T> Mono<T> kElasticPublisher(Supplier<T> supplier) {
        new TryKotlin().kMono(()-> {
            System.out.println("3 这是中文");
            return Void.TYPE;
        });
        return Mono.fromSupplier(supplier).subscribeOn(Schedulers.boundedElastic());
    }*/
}
