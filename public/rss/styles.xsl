<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>RSS Feed</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 2rem; background-color: #f9fafb; color: #111827; }
                    h1, h2 { color: #1f2937; }
                    a { color: #2563eb; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                    .feed-header { border-bottom: 1px solid #d1d5db; padding-bottom: 1rem; margin-bottom: 2rem; }
                    .feed-title { font-size: 2.25rem; font-weight: 800; }
                    .feed-description { font-size: 1.125rem; color: #4b5563; }
                    .feed-link { margin-top: 0.5rem; }
                    .post-item { background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); }
                    .post-title { font-size: 1.5rem; font-weight: 600; }
                    .post-date { color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; }
                    .post-description { margin-top: 1rem; color: #374151; }
                </style>
            </head>
            <body>
                <div class="feed-header">
                    <h1 class="feed-title"><xsl:value-of select="/rss/channel/title"/></h1>
                    <p class="feed-description"><xsl:value-of select="/rss/channel/description"/></p>
                    <div class="feed-link">
                        <a href="{/rss/channel/link}" target="_blank" rel="noopener noreferrer">
                            <xsl:value-of select="/rss/channel/link"/>
                        </a>
                    </div>
                </div>
                <xsl:for-each select="/rss/channel/item">
                    <div class="post-item">
                        <h2><a href="{link}" target="_blank" rel="noopener noreferrer" class="post-title"><xsl:value-of select="title"/></a></h2>
                        <p class="post-date"><xsl:value-of select="pubDate"/></p>
                        <p class="post-description"><xsl:value-of select="description"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>