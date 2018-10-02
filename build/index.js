"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = wxApolloFetcher;
function wxApolloFetcher(url, _ref) {
    var body = _ref.body,
        method = _ref.method,
        headers = _ref.headers;

    return new Promise(function (resolve, reject) {
        return wx.request({
            url: url,
            header: headers,
            method: method,
            data: body,
            dataType: "text",
            success: function success(_ref2) {
                var data = _ref2.data;
                return resolve({
                    text: function text() {
                        return Promise.resolve(data);
                    }
                });
            },
            fail: reject
        });
    });
}