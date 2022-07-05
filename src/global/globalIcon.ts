import * as Elicons from '@element-plus/icons-vue'
import type { App } from 'vue'
export default function (app: App): void {
  for (const [key, component] of Object.entries(Elicons)) {
    app.component(key, component)
  }
}
