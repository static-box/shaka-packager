# shaka-packager

```typescript
type Item = {
  path: string;
  version: string;
};
type PackagerMap = {
  "linux-arm64": Item;
  "linux-x64": Item;
  "osx-x64": Item;
  "win-x64": Item;
  "win-x32": Item;
};
// 获取shaka-packager相关文件路径
import { packagerMap } from "@static-box/shaka-packager";
```

```typescript
// 获取与系统版本号匹配的shaka-packager文件的路径
import { packager } from "@static-box/shaka-packager";
```
