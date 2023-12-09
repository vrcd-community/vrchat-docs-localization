# Markdown 语法扩展

除了[标准的 Markdown 语法](https://markdown.com.cn/)(如果您想直接看中文，可以移步[这里](https://markdown.com.cn/)) 和 [VitePress 默认的扩展语法](https://vitepress.dev/guide/markdown) 外，我们还支持以下扩展语法。

## 嵌入视频 / 音频 / 视频平台视频

> 由 [@vrcd-community/markdown-it-video](https://www.npmjs.com/package/@vrcd-community/markdown-it-video) 包提供。

@[youtube](https://youtu.be/Mb6ZYBEhxiI)

@[bilibili](https://www.bilibili.com/video/BV1aj411i7oJ)

@[video](/creators.vrchat.com/images/worlds/image-loader.mp4)

@[audio](/mixkit-tick-tock-clock-timer-1045.webm)

```markdown
@[youtube](https://youtu.be/Mb6ZYBEhxiI)

@[bilibili](https://www.bilibili.com/video/BV1aj411i7oJ)

@[video](/creators.vrchat.com/images/worlds/image-loader.mp4)

@[audio](/mixkit-tick-tock-clock-timer-1045.webm)
```

## 带描述的图片

> 由 [@mdit/plugin-figure](https://www.npmjs.com/package/@mdit/plugin-figure) 包提供。

::: info
虽然说 Markdown 标准语法里图片有描述，但是 VitePress 默认不会处理它们。
:::

![image with description](/img/still-working.png)

```markdown
![image with description](/img/still-working.png)
```

## 缩写

> 由 [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) 包提供。

*[HTML]: 超文本标记语言 (Hyper Text Markup Language)
*[W3C]:  万维网联盟 (World Wide Web Consortium)

HTML 规范是由 W3C 维护的。

```markdown
*[HTML]: 超文本标记语言 (Hyper Text Markup Language)
*[W3C]:  万维网联盟 (World Wide Web Consortium)

HTML 规范是由 W3C 维护的。
```

## 标记

> 由 [markdown-it-mark](https://www.npmjs.com/package/markdown-it-mark) 包提供。

这是==很重要==的东西喵！

## 脚注

> 由 [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) 包提供

::: tip
没有看到脚注？试试滚动到页面底部看看！
:::

这是一个脚注引用[^1]， 这是另一个[^longnote]。

```markdown
[^1]: 这是一个脚注。

[^longnote]: 这是个更长的脚注

    随后的段落被缩进，以表明它们属于前一个脚注。
```


[^1]: 这是一个脚注。

[^longnote]: 这是个更长的脚注

    随后的段落被缩进，以表明它们属于前一个脚注。
