import React, { Profiler } from 'react'
import loadable from '@loadable/component'
import LazyLoad from '@/components/LazyLoad';
import { useSelector } from 'react-redux'
import LazysizesFeaturedImage from '@/components/Images/LazysizesImage'
import shortid from 'shortid'
/* const AudioPlayer */
import AudioMediaPlayer from '@/components/MediaPlayer/AudioBanner'
const VideoMediaPlayer = loadable(() => import('@/components/MediaPlayer/VideoPlayer'))
import Content from '@/components/Content'
import PostContent from '@/components/Content/PostContent'
import { ToggleFollowWithName } from '@/components/PostElements/TopicToggleFollow'

/* import ViewNext from '@/layout-parts/PostLayout/ViewNext' */
import { formatsAll } from '@/strings/static/topic-ids'
import { PostH1 } from '@/components/Headers'
import { SubscribePodcast } from "@/components/Podcast/PodcastPlatforms"

import FromAuthorsSection from '@/layout-parts/PostLayout/FromAuthors'
import {
    AuthorBookmarkShareSection,
    Translations,
    ShareBookmarkTopShortCuts
} from '@/layout-parts/PostLayout/PostSections'

import { ReadingTimingAuthor } from '@/components/PostElements'
import TwoToOneImg from "@/components/Images/Image2To1"

const acApiModule = import('@/util/api')
import { currentMediaSelector } from '@/state/selectors/other'
import { followedTopicsSelector, loggedInSelector } from '@/state/selectors/user'
import { debounce, normalizeAvailableLanguages } from '@/helpers'
import { IPostProps } from '@/types'
import { IRootState } from '@/state/types'

// mock data

import ac_strings from '@/strings/ac_strings.js'


type IMediaType = "audio" | "video"

export const PostLayout: React.FC<IPostProps> = (post) => {

    const {
        id,
        title,
        slug,
        excerpt,
        authors,
        image,
        types,
        topics,
        format,
        reading_time,
        content,
        langs,
        glossary,
        readMorePosts,
        views,
        likes,
        duration,
        media,
        credits,
        seoTitle
    } = post


    const [currentMediaType, setCurrentMediaType] = React.useState<IMediaType | "none">("none")
    const [mediaTypes, setMediaMtypes] = React.useState<IMediaType[]>([])
    const isCurrentMeida = useSelector(currentMediaSelector)
    const isLoggedIn = useSelector(loggedInSelector)
    const contentEl = React.useRef<HTMLDivElement>(null);
    const lastScroll = React.useRef(null);

    React.useEffect(() => {
        if (isLoggedIn === "success") {
            lastScroll.current = Date.now() + 5000
            if (id) {
                acApiModule.then(res => {
                    const acApi = res.default
                    acApi
                        .visitsPost(id)
                        .catch((err: any) => {
                            console.log(err)
                        })
                })

            }
            const handleScroll = (e: any) => {
                if (lastScroll.current < Date.now()) {
                    lastScroll.current = Date.now() + 5000

                    if (id) {
                        acApiModule.then(res => {
                            const api = res.default
                            api
                                .readingPost(id)
                                .catch((err: any) => {
                                    console.log(err)
                                })
                        })

                    }
                }
            }
            const debounceScroll = debounce(handleScroll, 1000)
            window.addEventListener('scroll', debounceScroll);
            return () => window.removeEventListener('scroll', debounceScroll);
        }

    }, [post.slug])


    /*     React.useEffect(() => {
    
            const toAddMediaType: IMediaType[] = []
    
            let toUpdateCurrentMediaType: IMediaType | "none" = "none"
            if (media.audio) {
                toAddMediaType.push("audio")
                toUpdateCurrentMediaType = "audio"
            }
            if (media.video && media.video.src) {
    
                toAddMediaType.push("video")
                toUpdateCurrentMediaType = "video"
            }
    
            if (toAddMediaType.length > 0) {
                setMediaMtypes(toAddMediaType)
            }
            setCurrentMediaType(toUpdateCurrentMediaType)
    
    
        }, [media]) */


    const postId = id
    const imageUrl = image;
    const tranlsatedUrl = normalizeAvailableLanguages(langs, false)
    const isPodcast = format?.findIndex(f => `${f.id}` === formatsAll.podcast && formatsAll.podcast.keyId)
    const defaultHeight = {
        "audio": 88,
        "video": typeof window !== 'undefined' ? ((9 / 16) * (window.innerWidth)) + 60 : 250,
        "none": 100
    }

    const currentHeigt = defaultHeight[currentMediaType] + (mediaTypes.length > 1 ? 39 : 0)

    return (



        <article className="overflow-scroll sm:overflow-visible w-full relative pt-8 sm:pt-0">
            <ShareBookmarkTopShortCuts
                id={id}
                text={excerpt || title}
                shareSlug={slug}
                views={views}
                likes={likes}
                isPlayingAudio={!!isCurrentMedia.audio}
            />
            {/*             <ViewNext
                isPlayingAudio={!!isCurrentMedia.audio}
                slug={slug}

                position = {{
                height: contentEl.current && contentEl.current.clientHeight,
                    top: contentEl.current && contentEl.current.offsetTop
                }}
                postId={id}
                topics={topics}
                formats={format}
            /> */}
            <div className="fixed sm:relative w-full z-50">
                {currentMediaType === "video" && media.video && media.video.src && (
                    <VideoMediaPlayer src={media.video.src} key={shortid()} />

                )}
                {currentMediaType === "audio" && media.audio && (
                    <AudioMediaPlayer media={media} duration={duration?.listen} stopScrollingTitle={!!isCurrentMedia.audio} key={shortid()} />
                )}

                {mediaTypes.length > 1 && (
                    <div className="w-full flex justify-center pb-4  bg-mp-background sm:pt-4">
                        {mediaTypes.map((item, i) => (
                            <button
                                key={item}
                                className={`border-ac-slate-light text-ac-slate-light px-2 py-1 border-t border-b text-xs sm:text-sm ${i === 0 ? 'rounded-l  border-l' : 'rounded-r  border-r'} ${currentMediaType === item ? 'bg-ac-slate-light text-ac-slate-dark' : ''}`}
                                onClick={() => setCurrentMediaType(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="sm:hidden fixed inset-x top-0 w-full">
                {mediaTypes.length > 0 ? (
                    <div className='fixed bg-mp-background w-full' style={{ top: "96px", height: `${currentHeigt + 90}px` }}>

                    </div>
                ) : (
                        <div
                            className={`fixed transition-transform background-image w-full flex items-end`}
                            style={{ top: "96px", backgroundSize: "cover", height: "200px" }}
                        >
                            <LazysizesFeaturedImage {...image} alt={image.alt ? image.alt : title} className={`w-full bg-center bg-cover`} />
                        </div>

                    )}
            </div>
            <div className='w-full sm:hidden relative' style={{ top: "50px", height: `${currentHeigt}px` }}>

            </div>
            <div className="relative w-full h-full bg-white rounded-t-2xl sm:mt-24 pt-4 px-4 z-50 flex justify-center" >
                <div className="max-w-full sm:max-w-tablet relative">
                    <svg className="mx-auto mb-5 sm:hidden" width="44" height="5" viewBox="0 0 44 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="5" rx="2.5" fill="#D4D4D4" />
                    </svg>
                    <PostH1 title={title} />
                    <p className="text-ac-gray-dark mb-6 sm:mb-0 sm:font-medium sm:text-lg leading-normal" dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <div className="border-b w-1/6 my-8 border-ac-gray"></div>
                    <div className="pb-6 bg-white text-sm">
                        <ReadingTimingAuthor
                            duration={duration?.read}
                            authors={authors}

                        />
                    </div>
                    {(currentMediaType === "audio") && (
                        <div className="block relative sm:pt-10 mb-12 ">
                            <TwoToOneImg image={image} rounded alt={seoTitle} />
                            {isPodcast && isPodcast > -1 ? (
                                <div>
                                    <SubscribePodcast />
                                </div>
                            ) : null}
                        </div>
                    )}
                    {(currentMediaType === "none") && (
                        <div className="hidden sm:block relative sm:pt-10 mb-12 ">
                            <TwoToOneImg image={image} rounded alt={seoTitle} />
                        </div>
                    )}

                    <div>
                        <div ref={contentEl}>
                            <PostContent
                                content={content}
                                glossary={glossary}
                                slug={slug}
                                title={title}
                            />
                        </div>

                        {credits && (
                            <Content
                                content={credits}
                            />
                        )}
                        <div className="flex flex-wrap border-ac-gray py-6">
                            {topics && topics?.map(item => (
                                <ToggleFollowWithName {...item} />
                            ))}
                        </div>
                        <div className="border-b pb-6">
                            <AuthorBookmarkShareSection
                                id={id}
                                text={excerpt || title}
                                shareSlug={slug}
                                views={views}
                                likes={likes}
                                authors={authors}
                                formats={format}

                            />
                        </div>
                        {/*                         <LazyLoad>
                            <div className="pt-6">
                                <RecommendedPostsSection
                                    postId={id}
                                    topics={topics}
                                    readMorePosts={readMorePosts}
                                />
                            </div>
                        </LazyLoad> */}
                        {authors && (
                            <LazyLoad>
                                <FromAuthorsSection
                                    authors={authors}
                                    postId={postId}
                                />
                            </LazyLoad>
                        )}
                    </div>
                    <LazyLoad>
                        <Translations translatedUrls={tranlsatedUrl || []} />
                    </LazyLoad>

                </div>
            </div>

            <div className="mx-auto max-w-tablet main-content py-8 relative bg-white px-4 sm:px-0 z-50">
                <p className=""><em>{ac_strings.scripture_copyright}</em></p>
            </div>

        </article >

    )
}

export default PostLayout

