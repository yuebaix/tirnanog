from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .config('hive.metastore.uris','thrift://localhost:9083') \
    .enableHiveSupport() \
    .appName("yuebaix_0001") \
    .getOrCreate()

spark.sql("show tables").show()

df = spark.sql('select * from yuebaix.test limit 10')
print(df.show())
