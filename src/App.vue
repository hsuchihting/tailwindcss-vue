<template>
    <div class="py-4 bg-gray-400 text-white px-4 mx-auto">
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200"
            ><router-link to="/">home</router-link></a
        >
        <a class="px-4 py-4 cursor-pointer hover:bg-gray-600 duration-200">
            <router-link to="/card-demo">card demo</router-link></a
        >
    </div>
    <div class="px-8 py-4">
        <router-view></router-view>
    </div>
</template>
