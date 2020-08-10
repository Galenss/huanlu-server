import axios from 'axios'
const { basePath } = 'http://localhost:4000/'
const request = (url, params) => {
  return axios({
    url: basePath + '/' + url,
    ...params
  })
}

const exportFunc = () => {
  return {
    // 查询全部
    getAll(url, params = {}) {
      return request(url, {
        method: 'POST',
        data: {
          pageNo: 1,
          pageSize: 100000,
          ...params
        }
      })
    },
    // 自定义查询
    get_(url, params = {}) {
      return request(url, {
        method: 'GET',
        params: params
      })
    },
    // 自定义查询
    get(url, params = {}) {
      return request(url, {
        method: 'POST',
        data: params
      })
    },
    // 单条创建
    create(url, params = {}) {
      const formData = new FormData()
      Object.keys(params).forEach(item => {
        if (params[item] !== undefined) {
          formData.append(item, params[item])
        }
      })
      return request(url, {
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
    },
    // 批量创建
    createBatch(url, params = {}) {
      return request(url + '/create/batch', {
        method: 'POST',
        data: params
      })
    },
    // 完全自定义调用
    customCall(url, params = {}) {
      return request(url, params)
    },
    // 单条修改
    edit(url, params = {}) {
      const formData = new FormData()
      Object.keys(params).forEach(item => {
        formData.append(item, params[item])
      })
      return request(url, {
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      })
    }
  }
}
export default exportFunc();

function ajax(url,data){
  return new Promise(function(open,err){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        open(xhr.responseText);
      } 
    }
    //data: {uname:zhangdong, upwd:123456}
    if(data!==undefined){
      var arr=[];
      for(var key in data){
        arr.push(`${key}=${data[key]}`);
      }
      url+=`?${arr.join("&")}`;
    }
    xhr.open("get",url,true);
    xhr.send(null);
  })
}