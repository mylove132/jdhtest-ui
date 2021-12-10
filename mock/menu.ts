import { MockMethod } from 'vite-plugin-mock'
const menuResult = { "code": 0, "result": [{ "title": "工作台", "path": "/dashBoard", "isLeaf": true, "iconType": "icon-fengche", "parentId": null, "order": 1, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c9d78c13777955be80b", "slots": { "icon": "icon" } }, { "title": "表单", "path": "/form", "isLeaf": false, "iconType": "icon-gouwu", "parentId": null, "order": 2, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c4efeef2d21209dbfee7", "slots": { "icon": "icon" }, "children": [{ "title": "基础表单", "path": "/form/baseForm", "isLeaf": true, "iconType": "icon-liwu", "parentId": "6065c4efeef2d21209dbfee7", "order": 5, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c518eef2d21209dbfee8", "slots": { "icon": "icon" } }, { "title": "行内表单", "path": "/form/inlineForm", "isLeaf": true, "iconType": "icon-xiaoxiong", "parentId": "6065c4efeef2d21209dbfee7", "order": 8, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c548eef2d21209dbfeea", "slots": { "icon": "icon" } }, { "title": "步骤表单", "path": "/form/stepForm", "isLeaf": true, "iconType": "icon-yuncai", "parentId": "6065c4efeef2d21209dbfee7", "order": 9, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c532eef2d21209dbfee9", "slots": { "icon": "icon" } }] }, { "title": "表格", "path": "/table/baseTable", "isLeaf": false, "iconType": "icon-yinliao", "parentId": null, "order": 3, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6096c72f0dea8914c64dc6c4", "slots": { "icon": "icon" }, "children": [{ "title": "基础表格", "path": "/table/baseTable", "isLeaf": true, "iconType": "icon-xiaoxiong", "parentId": "6096c72f0dea8914c64dc6c4", "order": 4, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6096c7b50dea8914c64dc6c5", "slots": { "icon": "icon" } }, { "title": "高级表格", "path": "/table/superTable", "isLeaf": true, "iconType": "icon-niudan", "parentId": "6096c72f0dea8914c64dc6c4", "order": 17, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2cdc78c13777955be80c", "slots": { "icon": "icon" } }] }, { "title": "示例中心", "path": "/exampleCenter", "isLeaf": false, "iconType": "icon-fengche", "parentId": null, "order": 6, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c0678c13777955be806", "slots": { "icon": "icon" }, "children": [{ "title": "二维码生成", "path": "/exampleCenter/qrCode", "isLeaf": true, "iconType": "icon-dangao", "parentId": "610a2c0678c13777955be806", "order": 13, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c2678c13777955be807", "slots": { "icon": "icon" } }, { "title": "图标展示", "path": "/exampleCenter/iconGallery", "isLeaf": true, "iconType": "icon-dianzan", "parentId": "610a2c0678c13777955be806", "order": 14, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c3f78c13777955be808", "slots": { "icon": "icon" } }, { "title": "平铺选择器", "path": "/exampleCenter/flatSelect", "isLeaf": true, "iconType": "icon-niudan", "parentId": "610a2c0678c13777955be806", "order": 15, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c5b78c13777955be809", "slots": { "icon": "icon" } }, { "title": "富文本编辑", "path": "/exampleCenter/wangEditor", "isLeaf": true, "iconType": "icon-hua", "parentId": "610a2c0678c13777955be806", "order": 16, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2c7378c13777955be80a", "slots": { "icon": "icon" } }] }, { "title": "嵌套菜单", "path": "/multiLevelMenu", "isLeaf": false, "iconType": "icon-lihua", "parentId": null, "order": 7, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c6c6eef2d21209dbfef6", "slots": { "icon": "icon" }, "children": [{ "title": "菜单-1", "path": "/multiLevelMenu/level-1", "isLeaf": false, "iconType": "icon-lihua", "parentId": "6065c6c6eef2d21209dbfef6", "order": 10, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c6f8eef2d21209dbfef7", "slots": { "icon": "icon" }, "children": [{ "title": "菜单-1-1", "path": "/multiLevelMenu/level-1/level-1-1", "isLeaf": false, "iconType": "icon-lihua", "parentId": "6065c6f8eef2d21209dbfef7", "order": 11, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c71deef2d21209dbfef8", "slots": { "icon": "icon" }, "children": [{ "title": "菜单-1-1-1", "path": "/multiLevelMenu/level-1/level-1-1/level-1-1-1", "isLeaf": true, "iconType": "icon-lihua", "parentId": "6065c71deef2d21209dbfef8", "order": 12, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "6065c74aeef2d21209dbfef9", "slots": { "icon": "icon" } }] }] }] }, { "title": "配置中心", "path": "/setting", "isLeaf": false, "iconType": "icon-fengzheng", "parentId": null, "order": 18, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2d0578c13777955be80d", "slots": { "icon": "icon" }, "children": [{ "title": "角色配置", "path": "/setting/roleConfig", "isLeaf": true, "iconType": "icon-xiangji", "parentId": "610a2d0578c13777955be80d", "order": 19, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2d4178c13777955be810", "slots": { "icon": "icon" } }, { "title": "权限配置", "path": "/setting/permissionConfig", "isLeaf": true, "iconType": "icon-caiqian", "parentId": "610a2d0578c13777955be80d", "order": 20, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2d3478c13777955be80f", "slots": { "icon": "icon" } }, { "title": "菜单配置", "path": "/setting/menuConfig", "isLeaf": true, "iconType": "icon-dianzan", "parentId": "610a2d0578c13777955be80d", "order": 21, "createTime": "2021-08-29 16:37:58", "updateTime": "2021-08-29 16:37:58", "_id": "610a2d2178c13777955be80e", "slots": { "icon": "icon" } }] }], "message": "请求成功！" }
export default [
  {
    url: '/api/getMenuList',
    method: 'get',
    response: ({ query }) => {
      return menuResult
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