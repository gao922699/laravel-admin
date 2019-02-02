<template>
    <el-menu
            :unique-opened="true"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
        <template v-for="item in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="item.name" v-if="!item.noDropdown">
                <template slot="title">
                    <i :class="item.iconCls"></i>&nbsp;&nbsp;&nbsp;
                    <span slot="title">{{item.name}}</span>
                </template>
                <el-menu-item v-if="!child.hidden" v-for="child in item.children" :key="child.path"
                              :index="item.path+'/'+child.path">
                    <i :class="child.iconCls"></i>&nbsp;&nbsp;&nbsp;{{child.name}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.noDropdown"
                          :index="item.path">
                <template slot="title">
                    <i :class="item.iconCls"></i>&nbsp;&nbsp;&nbsp;
                    <span slot="title">{{item.children[0].name}}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>