const Mock = require('mockjs')

module.exports = [
  {
    url: '/user/list',
    type: 'post',
    response: config => {
      const items = Mock.mock({
        'items|1-10': [{
          date: '2016-05-02',
          name: '@cname',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }).items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
