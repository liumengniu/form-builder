import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import React from "react";
import ThButton from "@comp/button";

/**
 * 描述：无权限访问界面
 * @author liumengniu
 * @date 2021/12/29
 */

function NoAuthorityPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉, 您没有权限访问该界面"
      extra={
        <ThButton title={"返回首页"} onClick={() => navigate('/')} />
      }
    />
  )
}

export default NoAuthorityPage;
