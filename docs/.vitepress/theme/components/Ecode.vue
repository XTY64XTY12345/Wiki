<script src="./Ecode/ecode.js" setup>
  
interface Props {
    desc: string
    code: string
}
  
const props = withDefaults(defineProps<Props>()， {
    desc: ""，
    code: ""，
})

</script>

<template>
    <div class="ecode" desc="{{ props.desc }}">{{ props.code }}
    </div>
</template>

<style>
@import url(./Ecode/ecode.css);
</style>
