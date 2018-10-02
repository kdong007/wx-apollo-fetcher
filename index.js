

export default function wxApolloFetcher(url, { body, method, headers }) {
    return new Promise((resolve, reject) =>
        wx.request({
            url,
            header: headers,
            method,
            data: body,
            dataType: "text",
            success: ({ data }) => resolve({
                text: () => Promise.resolve(data)
            }),
            fail: reject
        })
    )
}   