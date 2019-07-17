export class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
        super();
        this.errorCode = errorCode;
        this.code = code;
        this.msg = msg;
    }
}

export class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.code = 400;
        this.msg = msg || '参数错误';
        this.errorCode = errorCode || 10001;
    }
}

export class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.msg = msg || '资源未找到';
        this.errorCode = errorCode || 10002;
        this.code = 404;
    }
}
export class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.msg = msg || '授权失败';
        this.errorCode = errorCode || 10003;
        this.code = 404;
    }
}
export class Forbidden extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.msg = msg || '禁止访问';
        this.errorCode = errorCode || 10004;
        this.code = 404;
    }
}
