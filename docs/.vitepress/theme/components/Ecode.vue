<script setup lang="ts">
  
interface Props {
    desc: string
    code: string
}
  
const props = withDefaults(defineProps<Props>()， {
    desc: ''，
    code: ''，
})

</script>

<script src="./Ecode/ecode.js" setup lang="js">
</script>

<template>
    <div class="ecode" desc="{{ props.desc }}">{{ props.code }}
    </div>
</template>

<style>
@import url(./Ecode/ecode.css);
</style>
