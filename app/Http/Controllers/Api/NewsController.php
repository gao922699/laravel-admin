<?php
/**
 * Created by PhpStorm.
 * User: Gao
 * Date: 2019/2/2
 * Time: 9:43
 */

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    /**
     * 新闻列表
     * @return array
     */
    public function index()
    {
        return [
            'total_count' => 4,
            'data' => [
                [
                    'title' => '示例新闻1',
                    'author' => '作者',
                    'category' => '分类1',
                    'detail'=>'详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
                    'created_at' => '2019-02-01',
                ],
                [
                    'title' => '示例新闻2',
                    'author' => '作者',
                    'category' => '分类1',
                    'detail'=>'详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
                    'created_at' => '2019-02-01',
                ],
                [
                    'title' => '示例新闻3',
                    'author' => '作者',
                    'category' => '分类2',
                    'detail'=>'详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
                    'created_at' => '2019-02-02',
                ],
                [
                    'title' => '示例新闻4',
                    'author' => '作者',
                    'category' => '分类2',
                    'detail'=>'详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
                    'created_at' => '2019-02-02',
                ],
            ]
        ];
    }
}