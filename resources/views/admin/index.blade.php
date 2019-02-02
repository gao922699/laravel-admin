<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title>站群系统管理后台</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<style>
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
    }
    #app {
        height: 100%;
    }
</style>
<body>
<div id="app">
    <router-view></router-view>
</div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>

