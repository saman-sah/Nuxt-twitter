<template>
    <div class="flex flex-col h-screen">

        
        <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min
        dark:hover:bg-white/20" :class="defaultTransition">
                <div class="w-8 h-8">
                    <nuxt-link to="/">
                        <LogoTwitter />
                    </nuxt-link>
                </div>
        </div>

        <!-- Home Icon -->
        <SidebarLeftTab active>
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:name>
                Home
            </template>
        </SidebarLeftTab>
        
        <!-- Explore Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <HashtagIcon />
            </template>
            <template v-slot:name>
                Explore
            </template>
        </SidebarLeftTab>
        
        <!-- Notification Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <BellIcon />
            </template>
            <template v-slot:name>
                Notification
            </template>
        </SidebarLeftTab>
        
        <!-- Messages Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <InboxIcon />
            </template>
            <template v-slot:name>
                Messages
            </template>
        </SidebarLeftTab>

        <!-- Bookmarks Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <BookmarkIcon />
            </template>
            <template v-slot:name>
                Bookmarks
            </template>
        </SidebarLeftTab>
        
        <!-- Lists Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <DocumentTextIcon />
            </template>
            <template v-slot:name>
                Lists
            </template>
        </SidebarLeftTab>
        
        <!-- Profile Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <UserIcon />
            </template>
            <template v-slot:name>
                Profile
            </template>
        </SidebarLeftTab>
        
        <!-- More Icon -->
        <SidebarLeftTab>
            <template v-slot:icon>
                <DotsCircleHorizontalIcon />
            </template>
            <template v-slot:name>
                More
            </template>
        </SidebarLeftTab>



    </div>
</template>


<script setup>
    import {HomeIcon} from "@heroicons/vue/solid"
    import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon,
    DocumentTextIcon, DotsCircleHorizontalIcon, UserIcon} from "@heroicons/vue/outline"
    const { defaultTransition } = useTailwindConfig();
</script>