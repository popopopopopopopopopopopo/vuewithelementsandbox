<template>
  <div class="elpopovernestedcomponent">
    <el-popover
      ref="popover1"
      placement="top-start"
      title="pop-title"
      width="500"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="date"></el-table-column>
        <el-table-column width="100" property="name" label="name"></el-table-column>
        <el-table-column width="300" property="address" label="address"></el-table-column>
      </el-table>
    </el-popover>
    <el-button v-popover:popover1>Hover the popover</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElPopoverNestedComponent',
  data: () => ({
    gridData: [
      {
        date: '2016-05-02',
        name: 'Jack',
        address: 'New York City'
      }, {
        date: '2016-05-04',
        name: 'Jack',
        address: 'New York City'
      }, {
        date: '2016-05-01',
        name: 'Jack',
        address: 'New York City'
      }, {
        date: '2016-05-03',
        name: 'Jack',
        address: 'New York City'
      },
    ],
  }),
};
</script>

<style scoped>

</style>
