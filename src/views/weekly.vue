<style>
.weekly {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .weekly-container {
        width: 75%;
        display: flex;
        flex-direction: column;
    
        .weekly-guide {
            width: 100%;
            height: 400px;
            display: flex;

            .weekly-image {
                width: 270px;
                height: 400px;
                flex-shrink: 0;

                /* 标准的 320 * 400 的高度，黄金比例0.68 */
                img {
                    width: 100%;
                    height: 100%;
                    box-shadow: 2px 2px 5px #ccc;
                }

            }

            .weekly-info {
                flex-grow: 2;
                margin-left: 30px;
                width: auto;
                height: 400px;
                overflow: hidden;

                p {
                    width: 100%;
                    color: #666;
                    line-height: 30px;
                }
                .weekly-info-title {
                    height: 60px;
                    font-size: 2rem;
                    font-weight: 400;
                    color: #333;
                }
            }

        }

        .weekly-content {
            width: 100%;
            height: 1000px;
            margin-top: 20px;

            .mulu {
                width: 100%;
                height: 100px;
                line-height: 100px;
                font-size: 2.5rem;
                font-weight: 400;
                color: #666;
                text-indent:1rem;
            }

            .weekly-content-section {
                margin-bottom: 40px;

                .section-name {
                    height: 50px;
                    line-height: 50px;
                    font-size: 1.5rem;
                    text-indent: 2rem;
                    color: #666;
                    border-bottom: 1px dashed #666;
                    margin-bottom: 10px;
                }
                .section-item {
                    /* height: 40px; */

                    .section-item-name {
                        height: 50px;
                        line-height: 50px;
                        padding-left: 15rem;
                        font-weight: 400;

                        a {
                            color: #666;
                            transition: all 1s;
                        }
                        .iconfont {
                            margin-right: 5px;
                        }

                        &:hover a,
                        &:hover .iconfont  {
                            color: #6495ED;
                        }
                    }
                }
            }
        }
    }
}
</style>

<template>
    <wrapper>
        <div class="weekly">
            <div class="weekly-container">
                <div class="weekly-guide">
                    <div class="weekly-image">
                        <img src="../static/images/weekly.jpg" alt="周刊图片">
                    </div>
                    <div class="weekly-info">
                        <h2 class="weekly-info-title">沸点周刊 * 第一期</h2>
                        <p class="weekly-info-editor">编辑：某某某</p>
                        <p class="weekly-info-authors">撰稿人：作者一、作者二</p>
                        <p class="weekly-info-time">发布日期：2017年12月12日</p>
                        <p class="weekly-info-desc">导言：内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                    </div>
                </div>
                <div class="weekly-content">
                    <h2 class="mulu">Content</h2>
                    <div class="weekly-content-section">
                        <h2 class="section-name">前端开发</h2>
                        <div class="section-item">
                            <p class="section-item-name">
                                <i class="iconfont icon-favor"></i> 
                                <router-link to="/blog">名字名字名字名字名字名字名字名字名字</router-link>
                            </p>
                        </div>
                        <div class="section-item">
                            <p class="section-item-name">
                                <i class="iconfont icon-favor"></i> 
                                <router-link to="/blog">名字名字名字名字名字名字名字名字名字</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="weekly-content-section">
                        <h2 class="section-name">设计模式</h2>
                        <div class="section-item">
                            <p class="section-item-name">
                                <i class="iconfont icon-favor"></i> 
                                <router-link to="/blog">名字名字名字名字名字名字名字名字名字</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="weekly-content-section">
                        <h2 class="section-name">信息安全</h2>
                        <div class="section-item">
                            <p class="section-item-name">
                                <router-link to="/blog"><i class="iconfont icon-favor"></i>名字名字名字名字名字名字名字名字名字</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <weeklyList></weeklyList>
        </div>
    </wrapper>
</template>

<script>
import wrapper from '../components/wrapper.vue';
import blogItem from '../components/blogItem.vue';
import weeklyList from '../components/weeklyList.vue';

export default {
    components: {
        wrapper,
        blogItem,
        weeklyList
    },
    data() {
        return {
            
        }
    }
}
</script>

