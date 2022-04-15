---
sidebar_position: 5
---

# Neovim Plugin

[Neovim httpx plugin](https://github.com/servicex-sh/httpx.vim) supplies syntax highlight and command to make request call for http file.

### Install

```
git clone https://github.com/httpx-sh/httpx.vim.git ~/.config/nvim/pack/github/start/httpx.vim
```

### How to use?

Open index.http file and move the cursor to a request, then invoke `:Httpx` command.
You can bind keymap with `nnoremap <c-h> :Httpx<CR>` and press `ctrl-h` to make request call.

# Abbreviations

httpx vim plugin with following abbreviations by default, and you can add more customized abbreviations.

```vim
autocmd FileType httpfile :iabbrev <buffer> hget 
\<CR>### http get
\<CR>GET http://httpbin.org/ip

autocmd FileType httpfile :iabbrev <buffer> hpost 
\<CR>### http post
\<CR>POST http://httpbin.org/post
\<CR>Content-Type: application/json
\<CR>
\<CR>
```

### Screenshot

![Neovim httpx](../static/img/blog/nvim-screenshot.png)

