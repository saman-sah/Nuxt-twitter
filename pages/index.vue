<template>
    <div :class="{ 'dark': darkMode }">

        <div class="bg-white dark:bg-dim-900">

        

            <div class="min-h-full">

                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

                    <!-- Left Sidebar -->
                    <div class="hidden sm:block sm:col-span-1  md:col-span-1 xl:col-span-2">
                        <SidebarLeft />
                    </div>

                    <!-- Main Content -->
                    <main class="col-span-12 bg-red-500 sm:block sm:col-span-8 md:col-span-8 xl:col-span-6">
                        <h1>Main Section</h1>
                    </main>


                    <!-- Right Sidebar -->
                    <div class="hidden col-span-12 sm:block sm:col-span-3  md:col-span-3 xl:col-span-4">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>
<script setup>
    const darkMode= ref(false)
</script>