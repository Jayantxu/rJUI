export interface MenuArrInfo {
    name: string,
    url: string,
    menuName: string,
    children: Array<MenuArrInfo>
}
const menuArr: Array<MenuArrInfo> = [
    {
        name: 'guide',
        url: '/guide',
        children: [
            { name: 'RJUI', url: '', menuName: 'RJUI 介绍', children: [
                { name: '介绍', url: '/guide/introduction', menuName: '介绍', children: [] }
            ] },
        ],
        menuName: 'RJUI指南'
    },
    {
        name: 'components',
        url: '/components',
        children: [
            { name: '通用', url: '', menuName: '通用', children: [
                { name: '按钮', url: '/components/button', menuName: 'Button 按钮', children: [] },
                { name: '输入框', url: '/components/input', menuName: 'Input 输入框', children: [] },
            ] 
            },
            { name: '布局', url: '', menuName: '布局', children: [] },
            { name: '数据', url: '', menuName: '数据', children: [] },
        ],
        menuName: '所有组件'
    }
];
export const menuHeadDatas = menuArr;