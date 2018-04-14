<template>
    <div class="elmessagecustomizecomponent">
      <el-button type="text" @click="showDialog">Click to open Message Box</el-button>
    </div>
</template>

<script>
export default {
  name: 'ElMessageCustomizeComponent',
  methods: {
    showDialog() {
      const h = this.$createElement;
      this.$msgbox({
        title: 'custom dialog!',
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        showCancelButton: true,
        confirmButtonText: 'hogehoge',
        cancelButtonText: 'きゃんせる',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = 'Loading...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 2000);
          } else {
            done();
          }
        },
      })
        .then((action) => {
          this.$message({
            type: 'info',
            message: `action: ${action}`,
          });
        });
    },
  },
};
</script>

<style scoped>

</style>
