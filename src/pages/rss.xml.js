import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Creates a valid link to the post
      link: `/blog/${post.slug}/`,
      // For Rogue Scholar and other feed readers to index the full content
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    stylesheet: '/rss/styles.xsl',
  });
}