const replacer = (key: any, value: any) =>
    typeof value === 'bigint' ? { $bigint: value.toString() } : value;