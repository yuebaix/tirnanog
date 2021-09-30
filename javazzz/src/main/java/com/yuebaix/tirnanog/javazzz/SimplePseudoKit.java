package com.yuebaix.tirnanog.javazzz;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SimplePseudoKit {
    private SimplePseudoKit() {}

    public static void fakeIO() {
        fakeIO(1000L);
    }

    @SneakyThrows
    public static void fakeIO(long mili) {
        log.info("io start");
        Thread.sleep(mili);
        log.info("io end");
    }
}
