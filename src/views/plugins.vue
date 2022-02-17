<template>
    <div class="ml-5 sm:w-96">
        <article class=" prose lg:prose-xl">

        <h2 >typography</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia, similique dolor facere excepturi veniam assumenda libero reprehenderit omnis quae a nam fuga inventore minima blanditiis animi laboriosam accusantium id!</p>
        </article>
        <h2 class="mt-2">Forms</h2>
        <label class="block mb-3">
            <input type="text" class="w-full rounded-md" placeholder="請輸入姓名" />
        </label>
        <label class="block mb-3">
            <input type="checkbox" name="" id="" />
            <span class="pl-2">複選題</span>
        </label>
        <label class="block mb-3">
            <input type="radio" name="" id="" />
            <span class="pl-2">單選題</span>
        </label>
        <label class="block mb-3">
            <input type="date" name="" id="" class="w-full rounded-md" />
        </label>
        <label class="block mb-3">
            <input type="email" name="" id="" class="w-full rounded-md" placeholder="name@email.com" />
        </label>
        <label class="block mb-3">
            <select name="" id="" class="w-full rounded-md">
                <option value="">--請選擇--</option>
                <option value="1">--項目一--</option>
                <option value="2">--項目二--</option>
            </select>
        </label>

        <label class="block">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="w-full rounded-md"
                placeholder="在想些什麼..."
            ></textarea>
        </label>
    </div>
</template>
