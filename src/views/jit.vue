<template>
    <h2>偽元素</h2>
    <div
        class="text-gray-700 before:text-white after:text-white before:p-2 after:p-2 before:content-['before'] before:block before:bg-blue-500 after:flex after:bg-pink-300 after:content-['after']"
    >
        ----
    </div>
    <!-- 分隔線 -->
    <div class="border-2 border-gray-400 my-5"></div>
    <!-- 分隔線 -->
    
    <h2 class="mt-5">透明度</h2>
    <div class="bg-red-500/25 w-20 h-20 flex justify-center items-center">透明度</div>

    <!-- 分隔線 -->
    <div class="border-2 border-gray-400 my-5"></div>
    <!-- 分隔線 -->

    <h2>建立變數並使用</h2>
    <h2 class="title">使用變數</h2>
    <h2>直接使用變數在模板上</h2>
    <h2 class="bg-[color:var(--bgc)] text-[color:var(--color)] text-[length:var(--fontSize)]">使用變數2</h2>

    <!-- 分隔線 -->
    <div class="border-2 border-gray-400 my-5"></div>
    <!-- 分隔線 -->

    <h2 class="mt-5">focus 狀態時修改游標顏色</h2>
    <input type="text" class="caret-red-400 p-2 border-2 focus:border-blue-300 focus:outline-none" />
</template>
