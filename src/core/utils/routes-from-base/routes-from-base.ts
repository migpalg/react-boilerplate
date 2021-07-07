type WithBaseProp<T> = { base: string } & T;

export function routesFromBase<T>(base: string, paths?: T): WithBaseProp<T> {
  return {
    base,
    ...(paths
      ? (Object.entries(paths).reduce(
          (obj, [key, value]) => ({
            ...obj,
            [key]: `${base}${value}`,
          }),
          {}
        ) as any)
      : {}),
  };
}
