export function handleLoginError(error) {
  console.error("Login error:", error);
  if (!error.response) {
    return "网络错误";
  }

  // 根据状态码返回错误
  switch (error.response.status) {
    case 401:
      return "无效的凭据，请重试。";
    case 403:
      return "你没有权限执行这个操作。";
    case 500:
      return "服务器错误，请稍后重试。";
    default:
      return error.response.data.msg || "登录失败, 请重试。";
  }
}
