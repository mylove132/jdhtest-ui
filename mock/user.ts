import { ok } from 'assert'
import { MockMethod } from 'vite-plugin-mock'
const loginData = {"code": 0, "result": {accessToken: "1234534", refreshToken: "ssadwqeas"}, "msg": "success"}
export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ query }) => {
      return loginData
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
] as MockMethod[]