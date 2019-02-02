<?php
/**
 * Created by PhpStorm.
 * User: Gao
 * Date: 2019/2/1
 * Time: 18:28
 */

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use AuthenticatesUsers;

    /**
     * 登陆接口
     * @param Request $request
     * @return mixed|\Symfony\Component\HttpFoundation\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);
        if ($this->attemptLogin($request)) {
            return $request->user();
        }
        return $this->sendFailedLoginResponse($request);
    }
}