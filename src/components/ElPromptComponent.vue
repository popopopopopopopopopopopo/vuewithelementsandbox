<template>
    <div class="elptomptcomponent">
      <el-button type="text" @click="showPrompt">Click to show prompt</el-button>
    </div>
</template>

<script>// e mail confirm
// コンファーム後のvalue、sampleではvalueをそのまま出してるけど、valueはobjectで、各プロパティ
let getEmailAddress = 'hogehoge';

export default {
  name: 'ElPromptComponent',
  methods: {
    showPrompt() {
      this.$prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
      }).then((value) => {
        this.$message({
          type: 'success',
          message: `Your email is:${value.value}`,
        });
        getEmailAddress = value.value;
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled',
        });
      });
    },
  },
};
</script>

<style scoped>

</style>
