import * as React from 'react';
import { IDrawerNav } from '@/layouts/AppWrapper'
import { useDispatch, useSelector } from 'react-redux'
import LanguageDropdown from '@/layout-parts/Nav/Languages'
import SocialPlatformas from '@/layout-parts/Nav/SocialPlatforms'
import { SideNavItem } from '@/components/Button'
import { confirm } from '@/components/Confirm'
import { openSignInModal } from '@/state/action'
import { initiateLogout } from '@/state/action/authAction'
import SideNavWrapper from './SideNavWrapper'

import ac_strings from '@/strings/ac_strings.js'

import UserMenu from './UserMenu'
import ResourceMenu from './ResourceMenu'
import menus from '@/strings/generated/menus.json'
const { side, sideResource, slugUser } = menus
import { loggedInSelector } from '@/state/selectors/user'

const SideMobile: React.FC<IDrawerNav> = ({ isSideNavOpen, setSideNavOpen, }) => {
    const [openUserMenu, setOpenUserMenu] = React.useState(false)
    const [openResourceMenu, setOpenResourceMenu] = React.useState(false)
    const loggedIn = useSelector(loggedInSelector)
    const close = () => {
        setSideNavOpen(false)
    }
    const dispatch = useDispatch()

    const handleSignIn = () => {
        dispatch(openSignInModal("signInOptions"))
        closeUserMenu()

    }

    const handleSignUp = () => {
        dispatch(openSignInModal("signUpOptions"))
        closeUserMenu()

    }
    const handleLogout = async () => {
        if (await confirm("Are your sure?")) {
            dispatch(initiateLogout())
            setOpenUserMenu(false)
            setSideNavOpen(false)
        }
    }

    const closeUserMenu = () => {
        setOpenUserMenu(false)
        setSideNavOpen(false)
    }

    const closeResourceMenu = () => {
        setOpenResourceMenu(false)
        setSideNavOpen(false)
    }

    return (
        <SideNavWrapper
            close={close}
            isSideNavOpen={isSideNavOpen}
            className="flex flex-col justify-between p-4"
        >
            {openUserMenu && <UserMenu
                isSideNavOpen={openUserMenu}
                close={closeUserMenu}
                back={() => setOpenUserMenu(false)}

            />
            }

            {openResourceMenu && <ResourceMenu
                menu={sideResource}
                isSideNavOpen={openResourceMenu}
                close={closeResourceMenu}
                back={() => setOpenResourceMenu(false)}
            />}

            <div className="w-full flex justify-center sm:hidden">
                <LanguageDropdown className="border border-ac-slate-dark font-roboto font-semibold text-ac-slate-dark rounded-full pl-4" />

            </div>
            <div className="mx-auto flex flex-col font-roboto items-center font-semibold w-full">

                <SideNavItem
                    next
                    onClick={() => { setOpenResourceMenu(true) }}
                >
                    {ac_strings.resource}
                </SideNavItem>
                {side.map((item, i) => {
                    return (
                        <SideNavItem
                            key={i}
                            to={item.to}
                            onClick={close}
                        >
                            {item.name}
                        </SideNavItem>
                    )
                })}

                {loggedIn === 'success' ? (
                    <div className={`w-full flex flex-col justify-center`}>

                        <SideNavItem
                            to={`/${slugUser}`}
                            hideOnMobile
                            onClick={close}

                        >
                            {ac_strings.my_profile}
                        </SideNavItem>
                        <SideNavItem
                            next
                            onClick={() => { setOpenUserMenu(true) }}
                            hideOnDeskop
                        >
                            {ac_strings.my_profile}
                        </SideNavItem>
                        <SideNavItem onClick={handleLogout} className="text-ac-slate-light">{ac_strings.logout}</SideNavItem>

                    </div>
                ) : (
                    loggedIn === "loading" ? (
                        <div className="px-2">
                            {ac_strings.loading}
                        </div>
                    ) : (
                        <div className={`flex flex-col`}>
                            <SideNavItem onClick={handleSignIn}>{ac_strings.login}</SideNavItem>
                            <SideNavItem onClick={handleSignUp}>{ac_strings.register}</SideNavItem>
                        </div>

                    )
                )}

            </div>

            <div className="pt-4 text-ac-slate-dark">
                <SocialPlatformas />
            </div>

        </SideNavWrapper>
    )
}

export default React.memo(SideMobile)
