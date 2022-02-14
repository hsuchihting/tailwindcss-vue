<template>
    <div class="py-4 bg-gray-500 text-white px-4 mx-auto">
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-700 duration-200">
            <router-link to="/">home</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/card-demo">card demo3.2.5</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/card-demo2">card demo3.3.1</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/box">box3.3.3</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/button">button3.5.1</router-link>
        </a>
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/groupHover">group-hover3.7.1</router-link>
        </a>
         <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/customVariants">custom variants3.9.3</router-link>
        </a>
    </div>
    <div class="px-8 py-4">
        <router-view></router-view>
    </div>
</template>
