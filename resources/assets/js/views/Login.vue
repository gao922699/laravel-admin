<template>
    <el-container style="height:100%">
        <el-main>
            <div class="main">
                <div class="login-form">
                    <h1>站群系统用户登陆</h1>
                    <div class="head">
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <form>
                        <input type="text" v-model="email" class="text" placeholder="邮箱">
                        <input type="password" v-model="password" placeholder="密码">
                        <div class="submit">
                            <input type="submit" @click="login()" value="登 录">
                        </div>
                    </form>
                </div>
            </div>
        </el-main>
        <el-footer height="30px;">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<style scoped>
    /* horizontal menu */
    img {
        max-width: 100%;
    }

    .login-form {
        background: #eee;
        width: 26%;
        margin: 9% auto 4% auto;
        position: relative;
        -webkit-border-radius: 0.4em;
        -o-border-radius: 0.4em;
        -moz-border-radius: 0.4em;
    }

    .head {
        position: absolute;
        top: -15%;
        left: 35%;
    }

    .head img {
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -o-border-radius: 50%;
        -moz-border-radius: 50%;
        border: 6px solid rgba(221, 218, 215, 0.23);
    }

    .main {
        height: 100%;
        width: 100%;
        position: relative;
    }

    .main h1 {
        font-size: 25px;
        color: #676767;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        padding-top: 19%;
        text-align: center;
    }

    .main form {
        width: 80%;
        margin: 0 auto;
        padding: 6% 0 9% 0;
    }

    .main p {
        text-align: center;
    }

    .main form p a {
        color: #888;
        font-family: 'Open Sans', sans-serif;
    }

    form p a:hover {
        color: #409eff;
    }

    input[type="text"], input[type="password"] {
        text-align: left;
        position: relative;
        width: 92%;
        padding: 3%;
        background: #D3D3D3;
        margin-bottom: 6%;
        font-family: 'Open Sans', sans-serif;
        color: #676767;
        font-weight: 600;
        font-size: 16px;
        outline: none;
        border: none;
        border-radius: 5px;
        border: 1px solid #DED6D6;
        -webkit-appearance: none;
    }

    input[type="text"]:hover, input[type="password"]:hover {
        border: 1px solid #949494;
        transition: 0.5s;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        -ms-transition: 0.5s;

    }

    input[type="submit"] {
        width: 99%;
        padding: 3%;
        margin-bottom: 8%;
        background: #21A957;
        font-family: 'Open Sans', sans-serif;
        color: #ECECEC;
        box-shadow: inset 0px 0px 10px #666464;
        -webkit-text-shadow: 0px 0px 3px #000;
        -moz-text-shadow: 0px 0px 3px #000;
        -o-text-shadow: 0px 0px 3px #000;
        -ms-text-shadow: 0px 0px 3px #000;
        font-size: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 500;
        border-radius: 5px;
        transition: 0.5s;
        -webkit-appearance: none;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        -ms-transition: 0.5s;
    }

    input[type="submit"]:hover {
        background: #128A42;
        color: #fff;
    }

    /*-----start-responsive-design------*/
    @media (max-width: 1440px) {
        .login-form {
            width: 30%;
            margin: 11% auto 4% auto;
        }

        .main h1 {
            padding-top: 23%;
        }

    }

    @media (max-width: 1366px) {
        .login-form {
            width: 32%;
            margin: 10% auto 4% auto;
        }
    }

    @media (max-width: 1280px) {
        .login-form {
            margin: 8% auto 0;
            width: 34%;
        }

    }

    @media (max-width: 1024px) {
        .login-form {
            margin: 12% auto 0;
            width: 45%;
        }

    }

    @media (max-width: 768px) {
        .login-form {
            margin: 16% auto 0;
            width: 59%;
        }

    }

    @media (max-width: 640px) {
        .login-form {
            margin: 20% auto 0;
            width: 63%;
        }

    }

    @media (max-width: 480px) {
        .login-form {
            margin: 32% auto 0;
            width: 74%;
        }

        .main h1 {
            font-size: 22px;
        }

        .head img {
            width: 78%;
        }

        .head {
            top: -15%;
            left: 34%;
        }

        input[type="text"], input[type="password"], input[type="submit"] {
            font-weight: 600;
            margin-bottom: 4%;
        }

        @media (max-width: 320px) {
            .login-form {
                margin: 20% auto 0;
                width: 85%;
            }

            .main h1 {
                padding-top: 20%;
                font-size: 20px;
            }

            .head img {
                width: 60%;
                border: 5px solid rgba(221, 218, 215, 0.23);
            }

            .head {
                top: -15%;
                left: 36%;
            }

            input[type="text"], input[type="password"], input[type="submit"] {
                font-weight: 600;
                font-size: 15px;
            }

            .main form p a {
                font-size: 15px;
            }

            input[type="submit"] {
                padding: 4%;
            }

        }
    }
</style>
<script>
    import Footer from '../layouts/Footer';
    import {api_login} from '../axios/apis';

    export default {
        components: {
            Footer,
        },
        data() {
            return {
                'email': '',
                'password': '',
            }
        },
        methods: {
            login() {
                let vm = this;
                api_login({
                    email: vm.email,
                    password: vm.password
                }).then(function (response) {
                    vm.$store.commit('login', response);
                    vm.$router.push('/');
                }).catch(function (error) {
                    if (error.response.status == 422) {
                        vm.$message.error('用户名或密码错误');
                    } else {
                        vm.$message.error('登陆失败，请稍后再试');
                    }
                });
            }
        },
        mounted: function () {
            this.$store.commit('logout');
        }
    }
</script>