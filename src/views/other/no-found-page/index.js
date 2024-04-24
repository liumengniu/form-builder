/**
 * 描述： 404页面
 * @author liumengniu
 * @date 2021/12/18
 */
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import ThButton from "@comp/button";

function NoFoundPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<ThButton title={'返回首页'} onClick={() => navigate('/')} />}
    />
  )
}

export default NoFoundPage;

