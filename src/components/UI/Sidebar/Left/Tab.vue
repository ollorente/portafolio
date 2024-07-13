<script setup lang="ts">
import { computed } from "vue"
import useTailwindConfig from "@/composables/useTailwindConfig.js"
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
  active: {
    type: Boolean,
    defult: false
  },
  url: {
    type: String,
    default: "#"
  }
})

const textClasses = computed(() => props.active ? "font-semibold" : "font-normal")
</script>

 <template>
  
  <RouterLink :to="props.url" class="flex items-center p-3 text-black w-min rounded-full hover:bg-gray-200 dark:hover:bg-gray-100 dark:text-white dark:hover:text-gray-950" :class="defaultTransition">
    
    <div class="w-6 h-6 text-dark">
      <slot name="icon"></slot>
    </div>
    
    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  
  </RouterLink>

</template>