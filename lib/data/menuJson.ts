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
            { name: 'myself', url: '/guide/mmyself', menuName: 'myself', children: [] },
            { name: 'myself1', url: '/guide/mmyself1', menuName: 'myself1', children: [] },
        ],
        menuName: 'RJUI指南'
    },
    {
        name: 'components',
        url: '/components',
        children: [
            { name: '通用', url: '', menuName: '通用', children: [
                { name: '文本', url: '/components/text', menuName: 'Text 文本', children: [] },
                { name: '按钮', url: '/components/button', menuName: 'Button 按钮', children: [] },
            ] 
            },
            { name: '布局', url: '', menuName: '布局', children: [] },
            { name: '数据', url: '', menuName: '数据', children: [] },
        ],
        menuName: '所有组件'
    }
];
export const menuHeadDatas = menuArr;