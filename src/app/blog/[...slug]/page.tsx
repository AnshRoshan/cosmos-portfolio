import { posts } from '#site/content'
import { MDXContent } from '@/components/main/mdx-components'
import { notFound } from 'next/navigation'
import './style.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Tag } from '@/components/sub/Tag'

interface PostPageProps {
    params: {
        slug: string[]
    }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', post.title)

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: post.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    }
}

async function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join('/')
    const post = posts.find((post) => post.slugAsParams === slug)
    return post
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params)

    if (!post || !post.published) {
        notFound()
    }

    return (
        <article className='container prose mx-auto max-w-7xl py-6 dark:prose-invert'>
            <h1 className='mb-2'>{post.title}</h1>
            {post.description ? (
                <p className='mt-0 text-xl text-muted-foreground'>{post.description}</p>
            ) : null}
            <div className='mb-2 flex gap-2'>
                {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
            </div>
            <hr className='my-4' />
            <MDXContent code={post.body} />
        </article>
    )
}