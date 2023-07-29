<template>
    <div>
        <label :for="props.value" v-if="props.label"
        class="block pl-3 ml-px text-sm font-medium text-gray-700">
            {{ props.label }}
        </label>
        <div class="mt-1">
            <input class="block px-4 w-full border-gray-300 rounded-full shadow-sm
            focus:ring-blue-500 sm:text-sm"
            :type="props.type" 
            :value="props.modelValue" 
            :placeholder="props.placeholder"
            @input="event=> emits('update:modelValue', event.target.value)">
        </div>
    </div>
</template>

<script setup>
const emits= defineEmits(['update:modelValue'])
    const props= defineProps({
        modelValue: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default:'text'
        }
    })
</script>