<template>
    <div class="flex h-screen">

        <div class="relative flex-1 hidden w-64 lg:block">
            <img 
            class="absolute inset-0 object-cover object-cover w-full h-full" 
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" 
            alt="">
        </div>
        
        <div class="flex flex-col justify-center flex-1 w-32 px-4 py-12 
        sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <AuthForm />
        </div>
    </div>
</template>