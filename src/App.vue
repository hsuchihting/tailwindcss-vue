<template>
    <div class="py-4 bg-gray-500 text-white px-4 mx-auto">
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-700 duration-200">
            <router-link to="/">home</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/card-demo">card demo 3.2.5</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/card-demo2">card demo 3.3.1</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/box">box 3.3.3</router-link>
        </a>

        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/button">button 3.5.1</router-link>
        </a>
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/groupHover">group-hover 3.7.1</router-link>
        </a>
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/customVariants">custom variants 3.9.3</router-link>
        </a>
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/plugins">plugins 3.10</router-link>
        </a>
         <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/addBase">addBase 3.11.1</router-link>
        </a>
    </div>
    <div class="px-8 py-4">
        <router-view></router-view>
    </div>
</template>
