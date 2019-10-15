import axios from 'axios';
import urls from './URL';

const appkey = "wangshengcai_1553946484946";
const size = 5;

const myAjax = axios.create({
    baseURL: urls.baseUrl,
    method: 'get',
    params: {
        appkey
    }
});

export default {
    // 搜索学生
    searchStudent(search, page) {
        return myAjax({
            url: urls.searchStudent,
            params: {
                sex: -1,
                search: search,
                page,
                size
            }
        })
    },
    // 新增学生
    addStudent(data) {
        return myAjax({
            url: urls.addStudent,
            params: {
                ...data
            }
        })
    },
    // 编辑学生
    upDateStudent(student) {
        return myAjax({
            url: urls.upDateStudent,
            params: {
                ...student
            }
        })
    },
    // 删除学生
    delStudent(sNo) {
        return myAjax({
            url: urls.delStudent,
            params: {
                sNo,
            }
        })  
    },
    // 分页
    turnPage(page) {
        return myAjax({
            url: urls.turnPage,
            params: {
                page,
                size,
            }
        })
    },
}