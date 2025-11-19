<script setup lang="ts">
interface Props {
    url: string
    title: string
    description: string
    logo: string
}

const props = withDefaults(defineProps<Props>(), {
    url: '',
    title: '',
    description: '',
    logo: '',
})
</script>


<template>
    <div class="linkcard">
        <a :href="props.url" target="_blank">
            <p class="description">{{ props.title }}<br><span>{{ props.description }}</span></p>
            <div class="logo">
                <img alt="logo" width="70px" height="70px" :src="props.logo" />
            </div>
        </a>
    </div>
</template>

<style>
/* 卡片背景 */
.linkcard {
    background-color: var(--vp-c-default-3);
	border-top: 1px solid var(--vp-button-brand-border);
    border-left: 1px solid var(--vp-button-brand-border);
    border-right: 1px solid var(--vp-button-brand-border);
	border-bottom: 1.3px solid rgb(from var(--vp-button-brand-border) calc(r * 0.9) calc(g * 0.9) calc(b * 0.9) / alpha);
    border-radius: 4px;
    padding: 8px 16px 8px 8px;
    transition: color 0.5s, background-color 0.5s;
    margin-top: 15px;
}

/* 卡片鼠标悬停 */
.linkcard:hover {
    background-color: var(--vp-c-default-1);
}

/* 链接样式 */
.linkcard a {
    display: flex;
    align-items: center;
}

/* 描述链接文字 */
.linkcard .description {
    flex: 1;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: var(--vp-c-text-1);
    margin: 0 0 0 16px;
    transition: color 0.5s;
}

/* 描述链接文字2 */
.linkcard .description span {
    font-size: 14px;
}

/* logo图片 */
.linkcard .logo img {
    margin-top: 5px;
    width: 60px;
    margin-bottom: 10px;
    object-fit: contain;
}

/* 链接下划线去除 */
.vp-doc a {
    text-decoration: none;
}
</style>
