import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
// Import the constants we just created
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    // Use the imported constants
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    // Pull in your site from your `astro.config.mjs`
    site: context.site,
    // Array of `<item>`s in XML feed
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Creates a valid link to the post
      link: `/blog/${post.slug}/`,
    })),
    // (Optional) Add a stylesheet to make the XML feed readable in the browser
    stylesheet: '/rss/styles.xsl',
  });
}