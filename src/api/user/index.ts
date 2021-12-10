import http from "@/utils/http";
import { BasicResponseModel } from "@/api/BasicResponseModel";
import { LoginParams, LoginResultModel } from "./model";
import { ContentTypeEnum } from "@/utils/http/httpEnum";

enum Api {
  login = "/login",
  logout = "/logout",
}

/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
  return http.request<any>({
    url: Api.login,
    method: "POST",
    headers: {
      "Content-Type": ContentTypeEnum.JSON,
    },
    params,
  });
}
export function register(params: any) {
  return http.request<BasicResponseModel<LoginResultModel>>(
    {
      url: Api.login,
      method: "POST",
      headers: {
        "Content-Type": ContentTypeEnum.JSON,
      },
      params,
    },
    {
      isTransformRequestResult: false,
    }
  );
}
/**
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: "POST",
      params,
    },
    {
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: 用户登出
 */
export function logout(params: any) {
  return http.request({
    url: Api.logout,
    method: "POST",
    params,
  });
}
