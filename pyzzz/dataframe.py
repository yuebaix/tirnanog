'''
import pandas as pd
import numpy as np

df=pd.DataFrame(np.arange(1,10).reshape(3,3))
my_col=dict(zip(range(3),['A','B','C']))
df.rename(columns=my_col,inplace=True)
print(df)
print(type(df))
'''

from numpy.lib.shape_base import column_stack
from pyspark.sql import SparkSession
import pandas as pd

def transfer():
    data = [['豆', 10], ['奶', 5]]
    column = ['keyword', 'count']

    # create pandas dataframe
    df = pd.DataFrame(data, columns=column)

    print('create pandas dataframe')
    print(df)
    print(df.values.tolist())

    # create spark dataframe
    spark = SparkSession.builder.appName("DataFrame").getOrCreate()
    sDf = spark.createDataFrame(data, column)

    print('create spark dataframe')
    print(sDf.show())
    print(sDf.collect())

    # pandas dataframe -> spark dataframe
    print('pandas dataframe -> spark dataframe')
    sDfFromDf = spark.createDataFrame(df.values.tolist(), list(df.columns))
    print(sDfFromDf.show())

    # spark dataframe -> pandas dataframe
    print('spark dataframe -> pandas dataframe')
    dfFromSDf = sDf.toPandas()
    print(dfFromSDf)

    # spark dataframe -> spark rdd
    print('spark dataframe -> spark rdd')
    rddFromSDf = sDf.rdd
    print(rddFromSDf.collect())

    # spark rdd -> spark dataframe
    print('spark rdd -> spark dataframe')
    sDfFromRdd = spark.createDataFrame(rddFromSDf)
    print(sDfFromRdd.show())

def test():
    data = [['豆', 'x'], ['奶', 'y']]
    column = ['keyword', 'count']

    df = pd.DataFrame(data, columns=column)
    data = df.values.tolist()
    column = df.columns.tolist()

    print(data)
    print(column)

    spark = SparkSession.builder.appName("DataFrame").getOrCreate()
    sDf = spark.createDataFrame(data, column)
    print(sDf.show())

transfer()
# test()
