---
tags:
  - 配置
  - 主题
  - 索引
---

# API接口

## 华为CDN


### 刷新华为CDN接口111  (兼容华为云腾讯云)

刷新华为CDN接口111刷新华为CDN接口111刷新华为CDN接口111
### 刷新华为CDN接口222  (兼容华为云腾讯云)
刷新华为CDN接口222刷新华为CDN接口222刷新华为CDN接口222
#### 参数

| 参数| 参数类型   | 描述                                                              |
| ------ |--------|-----------------------------------------------------------------|
| type | string | 1 UrlFlush url资源刷新， 2 UrlWarmUp URL预热 <br/>3 DirectoryFlush 目录刷新 |
| content | array  | 资源URL 列表                                                        |
| Authorization | string | 请求凭证                                                            |


#### 请求示例

```
POST https://sre-api.weiletest.com/api/operate/Tencent/cdn
Authorization: 
Content-Type: application/json

{
    "type": "UrlWarmUp",
    "content": ["https://tciahso.jiaxiangxm.com/866/66103866-180719-004703.png"]
}
```

#### Response
- Body
```
{
    "code": 20000,
    "data": {
        "task_id": "477105295588392444"
    },
    "msg": "ok"
}
```


## 腾讯CDN

I really like using Markdown.

### 刷新tcCDN接口111  
刷新tcCDN接口111  
### 刷新tcCDN接口222  
刷新tcCDN接口222


####jenkins

![An image](/jenkins/jenkins.png)










