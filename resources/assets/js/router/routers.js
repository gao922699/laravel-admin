import Login from '../views/Login';
import Main from '../layouts/Main';
import Index from '../views/Index';
import NewsList from '../views/News/List';

export default [
    {
        name: '登陆',
        path: '/login',
        hidden: true,
        component: Login
    },
    {
        path: '/',
        component: Main,
        iconCls: 'glyphicon glyphicon-home',
        noDropdown: true,
        children: [
            {path: '', component: Index, name: '控制面板'}
        ]
    },
    {
        path: '/news',
        component: Main,
        name: '文章管理',
        iconCls: 'glyphicon glyphicon-cog',
        noDropdown: false,
        children: [
            {path: 'list', iconCls: 'glyphicon glyphicon-th-list', component: NewsList, name: '文章列表'},

        ]
    },

];