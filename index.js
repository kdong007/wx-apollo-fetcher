export default function wxApolloFetcher(url, { body, method, headers }) {
    return new Promise(resolve =>
        wx.request({
            url,
            header: headers,
            method,
            data: body,
            dataType: "text",
            complete: ({ data, statusCode, errMsg }) =>
                resolve({
                    ok: () => statusCode >= 200 && statusCode < 300,
                    statusText: () => errMsg,
                    text: () => Promise.resolve(data),
                }),
        })
    );
}
