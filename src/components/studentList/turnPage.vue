<template>
    <ul id="turn-page">
        <!-- 上一页 -->
        <li class="prev-page" @click="turnPage('prev')">上一页</li>

        <!-- 总页数小于等于7 -->
        <template v-if="totalPage <= 7">
            <li v-for="i in totalPage" :key="i" :class="{'curPage':i == nowPage}" @click="turnPage(i)">{{ i }}</li>
        </template>
        
        <!-- 总页数大于7 -->
        <template v-if="totalPage > 7">
            <!-- nowPage小于等于4 -->
            <template v-if="nowPage <= 4">
                <li v-for="i in 6" :key="i" :class="{'curPage':i == nowPage}" @click="turnPage(i)">{{ i }}</li>
            </template>
            <!-- nowPage大于5 -->
            <template v-if="nowPage > 4">
                <li @click="turnPage(1)">1</li><span>...</span>
            </template>

            <!-- nowPage > 4 && nowPage <= totalPage - 4 -->
            <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
                <li v-for="i in 5" :key="nowPage - 3 + i" :class="{'curPage':nowPage - 3 + i == nowPage}" @click="turnPage(nowPage - 3 + i)">{{ nowPage - 3 + i }}</li>
            </template>
            
            <!-- nowPage > totalPage - 4 -->
            <template v-if="nowPage > totalPage - 4">
                <li v-for="i in 6" :key="i" :class="{'curPage':totalPage - 6 + i == nowPage}" @click="turnPage(totalPage - 6 + i)">{{ totalPage - 6 + i }}</li>
            </template>
            <!-- nowPage <= totalPage - 4 -->
            <template v-if="nowPage <= totalPage -4">
                <span>...</span><li @click="turnPage(totalPage)">{{ totalPage }}</li>
            </template>
        </template>

        <!-- 下一页 -->
        <li class="next-page" @click="turnPage('next')">下一页</li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        methods: {
            turnPage(n) {
                this.$store.dispatch('getStudentList', n);
            }
        },
        computed: {
            ...mapState(['totalPage','nowPage'])
        }
    }
</script>

<style>
    #turn-page{
        margin-top:10px;
        float:right;
        color:#424242;
    }
    #turn-page li{
        display:inline-block;
        cursor:pointer;
        padding:4px 8px;
        border-radius:5px;
        margin:0 2px;
        border:1px solid #d1cfcf;
    }
    #turn-page li.prev-page,
    #turn-page li.next-page{
        padding:5px 10px;
    }
    .curPage{
        color:#fff;
        background-color:rgb(14, 142, 233);
    }
</style>