/**
 * 描述：内容模块-顶部面包屑导航
 * @author liumengniu
 * @date 2021/12/27
 */

import { Link, useLocation } from "react-router-dom";
import _ from "lodash";
import routers from "@/routers";
import { Breadcrumb } from 'antd';
import styled from "styled-components"

/**
 * 获取路由path和中文名称之间的map
 */
let breadcrumbNameMap = {};
const getRouterMap = routes =>{
  routes.map(r=>{
    breadcrumbNameMap[r.path] = r.title;
    !_.isEmpty(r.children) && getRouterMap(r.children);
  })
}
getRouterMap(routers);

function BreadcrumbBox({className}){

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <>
          {
            //中间的路由其实是包裹路由，不导向任何界面（也可以导航到第一个子级路由）
            index === 2 ? <span>{breadcrumbNameMap[url]}</span> : <Link to={url}>{breadcrumbNameMap[url]}</Link>
          }
        </>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      {/*首页和路由并没有嵌套关系*/}
      {/*<Link to="/">首页</Link>*/}
    </Breadcrumb.Item>,
  ].concat(!_.isEmpty(extraBreadcrumbItems)? [_.drop(extraBreadcrumbItems)] : []);   //此处是去掉首部的 斜杠

  return (
    <>
      <Breadcrumb className={className}>{breadcrumbItems}</Breadcrumb>
    </>
 )
}

export default styled(BreadcrumbBox)`
  margin-bottom: 20px;
`;


