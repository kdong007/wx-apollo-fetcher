# wx-apollo-fetcher

在微信小程序中使用apollo client所需要的fetcher

# 安装
```
npm install wx-apollo-fetcher --save
```
或者
```
yarn add wx-apollo-fetcher
```

# 使用

```js
import { createHttpLink } from "apollo-link-http"; // 或者 apollo-link-batch-http
import wxApolloFetcher from "wx-apollo-fetcher";

const link = createHttpLink({ 
    uri: "xxxxx",
    fetch: wxApolloFetcher,
});

```


