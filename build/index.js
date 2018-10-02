"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = wxApolloFetcher;
function wxApolloFetcher(url, _ref) {
    var body = _ref.body,
        method = _ref.method,
        headers = _ref.headers;

    return new Promise(function (resolve) {
        return wx.request({
            url: url,
            header: headers,
            method: method,
            data: body,
            dataType: "text",
            complete: function complete(_ref2) {
                var data = _ref2.data,
                    statusCode = _ref2.statusCode,
                    errMsg = _ref2.errMsg;
                return resolve({
                    ok: function ok() {
                        return statusCode >= 200 && statusCode < 300;
                    },
                    statusText: function statusText() {
                        return errMsg;
                    },
                    text: function text() {
                        return Promise.resolve(data);
                    }
                });
            }
        });
    });
}