const base = {
    get() {
        return {
            url : "http://localhost:8080/jiuyeguanli/",
            name: "jiuyeguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiuyeguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "毕业生就业管理系统"
        } 
    }
}
export default base
