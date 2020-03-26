let url =
  'http://localhost:3000/projects/a-farming-food-infrastructure-chicken-farm?transactionId=4c87f0d7-cfcc-470b-85f2-fb60bd11bb34&transactionStatus=pending'
if (url.includes('?transactionId'))
  url = url.substring(0, url.indexOf('?transactionId'))

console.log('url: ', url)
