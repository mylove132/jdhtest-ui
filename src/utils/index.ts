import { RouteRecordRaw } from "vue-router";
export const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV!);
export const IS_DEV = ['development'].includes(process.env.NODE_ENV!);
const generateUUID = () => {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}
export function isString(val: unknown): val is string {
  return is(val, 'String');
}
/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, "Function");
}

const routesToMenuTree = (
  routes: Array<RouteRecordRaw> = [],
  parentKey = "/"
) => {
  const menuTree: RouteRecordRaw[] = [];
  routes.forEach( route => {
    let routeChild: RouteRecordRaw[] = [];
    const key = parentKey + route.path;
    const { children = [], component, meta, ...other } = route;
    if (children && children.length) {
      routeChild = routesToMenuTree(children, key + "/");
    }
    if (!meta?.hide) {
      if (routeChild.length) {
        menuTree.push({
          children: routeChild,
          component,
          meta,
          ...other,
        } as RouteRecordRaw);
      } else {
        menuTree.push({
          ...other,
          ...meta,
        } as RouteRecordRaw);
      }
    }
  });
  return menuTree;
};

export { generateUUID, routesToMenuTree };
