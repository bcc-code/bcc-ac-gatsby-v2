import React from 'react'
import { ITopicNavItem } from '@/types'
import Link from '@/components/CustomLink'
import { chunkArray } from '@/helpers'
import { SlateDarkUnfollowButton, ToggleBookmarkIconOnly } from '@/components/PostElements/TopicToggleFollow.tsx'
interface ILinkGroup {
    name: string
    items: ITopicNavItem[]
}
interface IProps {
    groups: ILinkGroup[]
}
//const regex = new RegExp(keyword, "i")
const TopicItem: React.FC<ITopicNavItem> = (t) => {
    return (
        <div className="flex justify-between items-center">
            <Link className="block text-xs" to={`/${t.to}`}>{t.name}</Link>
            <div className="max-w-12 sm:hidden">
                <SlateDarkUnfollowButton id={t.id} />
            </div>
            <div className="hidden sm:block pr-4">
                <ToggleBookmarkIconOnly id={t.id} />
            </div>
        </div>
    )
}
const TaxonomyIndex: React.FC<IProps> = ({ groups }) => {
    const getOrderedItems = () => {

        let desktopFlexItemArray: JSX.Element[] = []

        groups.map(({ name, items }) => {

            desktopFlexItemArray.push(
                <div className="font-bold border-t uppercase"
                >
                    {name}
                </div>)



            items.sort((a, b) => a.name.localeCompare(b.name)).map(t => {

                desktopFlexItemArray.push(
                    <TopicItem {...t} />
                )

                return null

            })

        })

        return desktopFlexItemArray
    }


    const desktopFlexItem = getOrderedItems()
    /*     const mobileFlexItem = groups.map(item => ({title: item.name, topic: chunkArray(item.items, 4) })) */
    return (
        <div className="w-full">
            <div className="hidden sm:block staggered-boxes standard-max-w-px">
                {desktopFlexItem}
            </div>
            <div className="flex flex-col sm:hidden pt-4 mx-4">
                {desktopFlexItem.map((item, k) => (
                    <div className="mb-4" key={k}>
                        {desktopFlexItem}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TaxonomyIndex