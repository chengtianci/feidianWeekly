<style>
    .page404 {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin-bottom: 80px;
        }
        p a {
            font-size: 1.0rem;
        }
    }
</style>

<template>
    <div class="page404">
        <img src="../../static/images/404.jpg" alt="404">
        <p><a href="javascript: window.history.go(-1);">返回上一页</a></p>
    </div>
</template>