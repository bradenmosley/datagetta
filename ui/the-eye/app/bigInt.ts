export const replacer = (key: any, value: any) =>
    typeof value === 'bigint' ? value.toString() : value;