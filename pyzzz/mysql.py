from pyspark.sql import SparkSession
import pymysql
import json

'''
# retrieve

rawSql = 'select * from test limit 10'

connection = pymysql.connect(
    host='localhost',
    port=3306,
    user='root',
    password='yuebaix',
    database='yuebaix',
    charset='utf8')

try:
    cursor = connection.cursor()
    cursor.execute(rawSql)
    data = cursor.fetchall()

    print(json.dumps(data))
except:
    print('mysql error')

connection.close()
'''

# create

rawSql = 'insert into test (name, click) values (%s, %s)'

data = [['豆', 10], ['奶', 5]]
column = ['name', 'click']

spark = SparkSession.builder.appName("DataFrame").getOrCreate()
sDf = spark.createDataFrame(data, column)
list = sDf.collect()

connection = pymysql.connect(
    host='localhost',
    port=3306,
    user='root',
    password='yuebaix',
    database='yuebaix',
    charset='utf8')

try:
    cursor = connection.cursor()
    cursor.executemany(rawSql, list)
    connection.commit()
except:
    print('mysql error')
    connection.rollback()

connection.close()