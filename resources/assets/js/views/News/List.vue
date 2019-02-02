<template>
    <div>
        <Breadcrumb v-bind:path-name="$route.name"></Breadcrumb>
        <el-table
                :data="tableData"
                stripe
                :row-class-name="tableRowClassName"
                style="width: 100%">
            <el-table-column
                    prop="title"
                    label="标题">
            </el-table-column>
            <el-table-column
                    prop="category"
                    label="分类">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者">
            </el-table-column>
            <el-table-column
                    prop="created_at"
                    label="创建时间"
                    width="200">
            </el-table-column>
            <el-table-column
                    label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="showDetail(scope.$index, scope.row)">详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    layout="total,sizes, prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :page-sizes="[15,30,50,100]"
                    :total="totalCount">
            </el-pagination>
        </div>
        <el-dialog title="文章详情" :visible.sync="dialogFormVisible">
            <div class="break"><{{ detailInfo }}</div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style scoped>
    .el-table .even {
        background: oldlace;
    }

    .el-col {
        text-align: left;
    }

    .break {
        word-break: break-all;
    }
</style>
<script>
    import Breadcrumb from '../../layouts/Breadcrumb';
    import {api_news_list} from '../../axios/apis';

    export default {
        components: {
            Breadcrumb,
        },
        data() {
            return {
                user: '',
                tableData: [],
                totalCount: 0,
                currentPage: 1,
                pageSize: 15,
                dialogFormVisible: false,
                detailInfo: ''
            }
        },
        methods: {
            getNewsList() {
                let vm = this;
                api_news_list({
                    page: vm.currentPage,
                    page_size: vm.pageSize,
                })
                    .then(function (response) {
                        vm.tableData = response.data;
                        vm.totalCount = response.total_count;
                    });
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 == 0) {
                    return 'even';
                }
                return '';
            },
            handleSizeChange(page_size) {
                this.currentPage = 1;
                this.pageSize = page_size;
                this.getNewsList();
            },
            handleCurrentChange(page) {
                this.currentPage = page;
                this.getNewsList();
            },
            showDetail(index, row) {
                this.dialogFormVisible = true;
                this.detailInfo = row.detail;
            }
        },
        mounted: function () {
            this.getNewsList();
        }
    }
</script>