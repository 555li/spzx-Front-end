import request from '@/utils/request'

const base_api = '/admin/system/sysUser'

// 用户列表
export const GetSysUserListPage = (current,limit,queryDto) => {
  return request({
    url: `${base_api}/findByPage/${current}/${limit}`,
    method: 'get',//提交方式
    //接口@RequestBody 前端 data:名称 ，以json格式传输
    //接口没有注解，前端 params: 名称
    params: queryDto //
  })
}

//用户添加
export const SaveSysUser=(sysUser)=>{
    return request({
        url: `${base_api}/saveSysUser`,
        method: 'post',//提交方式
        //接口@RequestBody 前端 data:名称 ，以json格式传输
        //接口没有注解，前端 params: 名称
        data: sysUser 
      })
}

//用户修改
export const UpdateSysUser=(sysUser)=>{
    return request({
        url: `${base_api}/updateSysUser`,
        method: 'put',//提交方式
        //接口@RequestBody 前端 data:名称 ，以json格式传输
        //接口没有注解，前端 params: 名称
        data: sysUser 
      })
}

//用户删除
export const DeleteSysUser=(userId)=>{
    return request({
        url: `${base_api}/deleteSysUser/${userId}`,
        method: 'delete',//提交方式
      })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assginRoleVo) => {
  return request({
      url: `${base_api}/doAssign`,
      method: 'post',
      data: assginRoleVo
  })
}