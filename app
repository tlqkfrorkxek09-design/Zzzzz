@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f8fafc; /* 밝은 회백색 배경 */
  --foreground: #0f172a; /* 어두운 네이비 텍스트 및 포인트 */
  --card-bg: #ffffff;
  --border-color: #e2e8f0; /* 연한 회색 테두리 */
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
}
