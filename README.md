# MTV 视频网站

一个基于 Next.js 和 TypeScript 构建的现代化视频流媒体网站，提供电视剧、电影、综艺、动漫、纪录片和短视频内容。

## 🎯 项目特性

- 🎬 **多类型内容** - 涵盖电视剧、电影、综艺、动漫、纪录片、短视频
- 🎨 **现代化UI** - 使用 daisyUI 组件库，红色主题设计
- 🌙 **主题切换** - 支持亮色/暗色主题切换，自动检测系统偏好
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- 🗂️ **侧边抽屉** - 自定义右侧抽屉导航，移动端优化体验
- 🔍 **搜索功能** - 智能搜索视频内容
- 🎮 **视频播放器** - 自定义控件，支持全屏、音量调节
- 💬 **评论系统** - 用户互动，点赞和回复功能
- 🏷️ **分类筛选** - 多维度内容分类和标签
- 🎯 **推荐算法** - 个性化内容推荐

## 🛠️ 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v3 + daisyUI v4.1.2
- **组件库**: daisyUI (完整迁移自 shadcn/ui)
- **图标**: Lucide React
- **图片**: Unsplash API

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── tv-series/         # 电视剧页面
│   ├── movies/            # 电影页面
│   ├── variety/           # 综艺页面
│   ├── anime/             # 动漫页面
│   ├── documentary/       # 纪录片页面
│   ├── short-video/       # 短视频页面
│   └── video/[id]/        # 视频详情页
├── components/            # React 组件
│   ├── Header.tsx         # 自定义导航头部 + 右侧抽屉
│   ├── AdBannerSlider.tsx # 自定义广告轮播
│   ├── TVCategory.tsx     # 电视分类
│   ├── RecommendedShows.tsx # 推荐剧集
│   ├── TVItem.tsx         # 视频卡片
│   ├── VideoPlayer.tsx    # 视频播放器
│   ├── LoginModal.tsx     # 登录模态框
│   └── CommentsSection.tsx # 评论区域
├── hooks/                 # React Hooks
│   └── useTheme.ts        # 主题切换 Hook
└── lib/
    └── utils.ts           # 工具函数
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📱 页面功能

### 首页 (/)
- 广告轮播展示热门内容
- 视频分类导航
- 推荐剧集列表

### 分类页面
- **电视剧** (`/tv-series`) - 国产剧、韩剧、美剧等
- **电影** (`/movies`) - 动作片、喜剧片、科幻片等
- **综艺** (`/variety`) - 真人秀、音乐、访谈等
- **动漫** (`/anime`) - 热血、恋爱、科幻等
- **纪录片** (`/documentary`) - 自然、历史、人文等
- **短视频** (`/short-video`) - 搞笑、美食、旅行等

### 视频详情页 (`/video/[id]`)
- 高质量视频播放器
- 视频信息展示
- 剧集选择
- 演职人员信息
- 相关推荐
- 用户评论系统

## 🎨 设计系统

### 主题系统
- **亮色主题**: 红色主色调 + 白色背景
- **暗色主题**: 红色主色调 + 深色背景
- **自动切换**: 支持系统偏好检测
- **主题持久化**: 记住用户选择的主题

### 主题色彩
- **主色**: 红色 (#dc2626)
- **亮色背景**: 白色系 (#ffffff)
- **暗色背景**: 深色系 (#1f2937)
- **文本色**: 自适应主题

### 组件特点
- **daisyUI 组件**: 使用标准 daisyUI 类名
- **自定义抽屉**: 右侧滑出式导航抽屉
- **响应式设计**: 移动优先的设计理念
- **平滑动画**: 过渡效果和微交互
- **圆角设计**: 现代化 UI 风格
- **悬停效果**: 增强用户交互体验

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📈 项目更新记录

### v2.0 - daisyUI 完整迁移
- ✅ 从 shadcn/ui 完整迁移到 daisyUI v4.1.2
- ✅ 自定义右侧抽屉导航替换传统移动端菜单
- ✅ 优化所有组件的响应式设计
- ✅ 增强用户交互体验和动画效果

### v1.0 - 初始版本
- ✅ Next.js 16 + TypeScript 基础架构
- ✅ 多类型视频内容支持
- ✅ 响应式设计和基础 UI 组件
- ✅ 视频播放器和评论系统

## 📈 未来规划

- [ ] 用户认证系统
- [ ] 视频上传功能
- [ ] 个人中心页面
- [ ] 历史记录功能
- [ ] 收藏夹功能
- [ ] 实时聊天
- [ ] 直播功能
- [ ] 移动端 App

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔄 重要变更

### daisyUI 迁移说明
项目已从 shadcn/ui 完整迁移到 daisyUI，主要变更：
- **组件库**: shadcn/ui → daisyUI v4.1.2
- **主题系统**: 新增亮色/暗色主题切换
- **导航方式**: 自定义右侧抽屉导航
- **构建优化**: 解决了 daisyUI v5 的兼容性问题

### 版本兼容性
- **Node.js**: 18+
- **daisyUI**: v4.1.2 (稳定版本)
- **Tailwind CSS**: v3.x

---

**MTV 视频网站** - 为您提供最佳的在线观看体验 🎬