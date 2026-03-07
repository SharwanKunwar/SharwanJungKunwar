# How to Set Up and Use README.md Format Blogs in Portfolios

Creating blogs using **README.md (Markdown) format** is a powerful way to maintain a developer-friendly blog in your portfolio or other websites. Markdown allows you to write **clean, readable, and formatted content** while keeping it simple to manage with GitHub.  

This guide explains step by step how to set up, write, and display Markdown blogs.

---

## Step 1: Create a GitHub Repository or Subfolder

1. Go to [GitHub](https://github.com/) and log in.
2. Create a **new repository** for your blogs or use your portfolio repo.
   - Example: `my-portfolio-blogs`
3. Inside your repository, create a folder called `blogs`.
4. All blog posts will be stored as **Markdown files** in this folder.

---

## Step 2: Write Your Blogs in Markdown

1. Markdown supports **headings, lists, code blocks, links, images, and more**.
2. Create a file for each blog, for example:  
3. Example content:

```markdown id="y4g9q2"
# How to Use Markdown Blogs

Markdown lets you write **formatted content easily**.

## Benefits

- Easy to maintain
- Version controlled via GitHub
- Supports code snippets, tables, images

## Example Code Block

```javascript
console.log("Hello, Markdown Blog!");

> Tip: Use **clear filenames** with numbers or dates for sorting: `2026-03-07-java.md`.

---

## Step 3: Upload Markdown Files to GitHub

1. Add your files locally using Git:

```bash
git add blogs
git commit -m "Add initial Markdown blogs"
git push origin main
```

## Step 4: Fetch and Render Blogs in Your Website
1. In react, install required packages:

```bash
npm install axios react-markdown
```

## 2 Fetch the Markdown files using GitHub API:

```javaScript
const githubAPI =
  "https://api.github.com/repos/<username>/<repo-name>/contents/blogs";
```

## 3. Fetch each file’s download_url to get the raw Markdown content and render using react-markdown.
```bash    
<ReactMarkdown>{blog.content}</ReactMarkdown>
```

    This will display the Markdown as formatted HTML on your website.