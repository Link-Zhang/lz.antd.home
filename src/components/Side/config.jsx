// 最多2级菜单,key值唯一不可重复
module.exports = [
    {
        key: '#',  // url，必选
        name: '仪表盘',  // name,必选
        svg: 'DashboardOutlined',  // 图标，1级必选，其他可选,

    },
    {
        key: 'community',  // url，必选
        name: '小区',  // name,必选
        svg: 'DeploymentUnitOutlined',  // 图标，1级必选，其他可选
    },
    {
        key: 'house',  // url，必选
        name: '房屋',  // name,必选
        svg: 'HomeOutlined',  // 图标，1级必选，其他可选
    },
];
