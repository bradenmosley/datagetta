// https://github.com/GoogleChromeLabs/jsbi/issues/30#issuecomment-1466898661
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
BigInt.prototype.toJSON = function (): String {
    return this.toString();
};