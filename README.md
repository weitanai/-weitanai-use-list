# @weimax/use-list

## Motivation
- efficient to query, filter table data


## Features:

- auto import cmj or esm

## Use

```bash
npm install @weimax/use-list

```

```bash
<template>
    <div v-for="(item, index) in list" :key="item.name + item.age">
    </div>
</template>

<script setup lang='ts'>
import useList from '@weimax/use-list';

const { list, curPage, loadData, reset } = useList(getList, { filterOption });


</script>


```

# Notice
- peer-denpendency need vue3

## License

