package com.yuebaix.tirnanog.javazzz;

import com.yuebaix.tirnanog.kotlinzzz.TryKotlin;
import com.yuebaix.tirnanog.scalazzz.TryScala;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

public class App {
    private static final App app = new App();

    public static void main(String[] args) {
        app.reactor();
    }

    private static void call() {
        new TryKotlin().call();
        new TryScala().call();
    }

    private void reactor() {
        Mono.just("1 这是中文").doOnNext(System.out::println).subscribeOn(Schedulers.single()).block();
        new TryKotlin().kMono(()-> {
            System.out.println("3 这是中文");
            return Void.TYPE;
        }).block();
    }
}
