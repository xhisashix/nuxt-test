<template lang="pug">
.page-data
    p {{ text }}
    ul
        li
            p {{ lists[0].title }}
            p {{ lists[0].content }}
</template>

<script>
export default {
    data() {
        return {
            text: 'データの出力',
            lists: [{
                title: 'タイトル',
                content: 'コンテンツ',
            }, ],
        }
    },
}
</script>

<style lang="stylus"></style>
