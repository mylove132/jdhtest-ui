import http from '@/utils/http';
import { RouteRecordRaw } from 'vue-router';
import {
  MenuType
} from './model';

enum Api {
  getMenuList = '/getMenuList',
  dragDropMenu = '/dragDropMenu',
  getMenu = '/getMenu',
  updateMenu = '/updateMenu',
  delMenu = '/delMenu',
  getMenuFolder = '/getMenuFolder',
  createMenu = '/createMenu',
}

/**
 * @description: 根据用户id获取用户菜单
 */
export function getMenuList() {
  return http.request<MenuType[]>({
    url: Api.getMenuList,
    method: 'GET'
  });
}

/**
 * 
 * @returns 获取单个菜单节点详情
 */
export function dragDropMenu(data: any) {
  return http.request<any[]>({
    url: Api.dragDropMenu,
    method: 'POST',
    data: data
  });
}

/**
 * 
 * @param data 获取单个菜单节点详情
 * @returns 
 */
export function getMenu(data: any) {
  return http.request<any[]>({
    url: Api.getMenu,
    method: 'GET',
    data: data
  });
}

/**
 * 
 * @param data 更新单个菜单节点
 * @returns 
 */
export function updateMenu(data: any) {
  return  http.request<any[]>({
    url: Api.updateMenu,
    method: 'PUT',
    data: data
  })
}

/**
 * 
 * @param data 删除菜单
 * @returns 
 */
export function delMenu(data: any) {
  return  http.request<any[]>({
    url: Api.delMenu,
    method: 'DELETE',
    data: data
  })
}

/**
 * 
 * @param data 获取菜单目录。除去页面树形结构
 * @returns 
 */
export function getMenuFolder(data?: any) {
  return  http.request<any[]>({
    url: Api.getMenuFolder,
    method: 'GET',
    data: data
  })
}

/**
 * 添加菜单目录
 * @param data 
 * @returns 
 */
export function createMenu(data: any) {
  return  http.request<any[]>({
    url: Api.createMenu,
    method: 'POST',
    data: data
  })
}



