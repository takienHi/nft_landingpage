import { Link, useLocation } from 'react-router-dom';
import { isChildrenPageActive, isParentPageActive } from 'src/utils/daynamicNavigation';
import { v4 as uuidV4 } from 'uuid';

const NavbarDesktop = () => {
  const { pathname } = useLocation();

  /* -------------------------------------------------------------------------- */
  /*                            dynamic navigation                            */
  /* -------------------------------------------------------------------------- */
  const home = {
    id: 1,
    name: 'Home',
    pages: [
      {
        id: uuidV4(),
        name: 'Home 1',
        path: '/',
      },
      {
        id: uuidV4(),
        name: 'Home 2',
        path: '/home/home_2',
      },
      {
        id: uuidV4(),
        name: 'Home 3',
        path: '/home/home_3',
      },
      {
        id: uuidV4(),
        name: 'Home 4',
        path: '/home/home_4',
      },
      {
        id: uuidV4(),
        name: 'Home 5',
        path: '/home/home_5',
      },
      {
        id: uuidV4(),
        name: 'Home 6',
        path: '/home/home_6',
      },
      {
        id: uuidV4(),
        name: 'Crypto Consultant',
        condition: true,
        path: '/home/home_7',
      },
      {
        id: uuidV4(),
        name: 'NFT Game',
        condition: true,
        path: '/home/home_8',
      },
      {
        id: uuidV4(),
        name: 'Dao Platform',
        condition: true,
        path: '/home/home_9',
      },
      {
        id: uuidV4(),
        name: 'Crypto App',
        condition: true,
        path: '/home/home_10',
      },
      {
        id: uuidV4(),
        name: 'Crypto Trading',
        condition: true,
        path: '/home/home_11',
      },
      {
        id: uuidV4(),
        name: 'ICO Landing',
        condition: true,
        path: '/home/home_12',
      },
    ],
  };

  const page = {
    id: 2,
    name: 'Pages',
    pages: [
      {
        id: uuidV4(),
        name: 'Maintenance',
        condition: true,
        path: '/maintenance',
      },
      {
        id: uuidV4(),
        name: 'Case Studies',
        condition: true,
        path: '/case-studies',
      },
      {
        id: uuidV4(),
        name: 'Single Case Study',
        condition: true,
        path: '/case-studies/case_study_1',
      },
      {
        id: uuidV4(),
        name: 'Careers',
        condition: true,
        path: '/careers',
      },
      {
        id: uuidV4(),
        name: 'Item Details',
        path: '/item/item_20',
      },
      {
        id: uuidV4(),
        name: 'Explore Collections',
        path: '/collection/explore_collection',
      },
      {
        id: uuidV4(),
        name: 'Collection',
        path: '/collection/avatar_1',
      },
      {
        id: uuidV4(),
        name: 'Activity',
        path: '/activity',
      },
      {
        id: uuidV4(),
        name: 'Rankings',
        path: '/rankings',
      },
      {
        id: uuidV4(),
        name: 'User',
        path: '/user/avatar_6',
      },
      {
        id: uuidV4(),
        name: 'Edit Profile',
        path: '/profile/user_avatar',
      },
      {
        id: uuidV4(),
        name: 'About',
        path: '/about',
      },
      {
        id: uuidV4(),
        name: 'Contact',
        path: '/contact',
      },
      {
        id: uuidV4(),
        name: 'Wallet',
        path: '/wallet',
      },
      {
        id: uuidV4(),
        name: 'Login',
        path: '/login',
      },
      {
        id: uuidV4(),
        name: 'Page 404',
        path: '/404',
      },
      {
        id: uuidV4(),
        name: 'Terms of Service',
        path: '/tarms',
      },
    ],
  };

  const explore = {
    id: 3,
    name: 'Explore',
    pages: [
      {
        id: uuidV4(),
        name: 'All NFTs',
        path: '/collection/explore_collection',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-jacarta-700'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Photography',
        path: '/collection/explore_collection',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#428AF8]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Art',
        path: '/art',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#10B981]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Sports',
        path: '/sports',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#737EF2]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Collectibles',
        path: '/collectibles',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#FEB240]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Trading Cards',
        path: '/tranding-cards',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#8DD059]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Domain Names',
        path: '/domain-names',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#8358FF]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Utility',
        path: '/utility',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#EF3D3D]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z' />
          </svg>
        ),
      },
      {
        id: uuidV4(),
        name: 'Virtual Worlds',
        path: '/virtual-worlds',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className='h-4 w-4 fill-[#46C7E3]'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z' />
          </svg>
        ),
      },
    ],
  };

  const resource = {
    id: 4,
    name: 'Resources',
    pages: [
      {
        id: uuidV4(),
        name: 'Help Center',
        path: '/help_center',
      },
      {
        id: uuidV4(),
        name: 'Platform Status',
        path: '/platform_status',
      },
      {
        id: uuidV4(),
        name: 'Partners',
        path: '/partners',
      },
      {
        id: uuidV4(),
        name: 'Blog',
        path: '/blog',
      },
      {
        id: uuidV4(),
        name: 'Single Post',
        path: '/single_post/post_1',
      },
      {
        id: uuidV4(),
        name: 'Newsletter',
        path: '/newsletter',
      },
    ],
  };

  return (
    <>
      <nav className='navbar w-full'>
        <ul className='flex flex-col lg:flex-row'>
          {/* home */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(home.pages, pathname) ? 'text-accent  dark:text-accent' : ''}>
                Home
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul className='dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'>
              {home?.pages?.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>
                    <a className='dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between '>
                      <span
                        className={`font-display ${
                          isChildrenPageActive(page.path, pathname)
                            ? 'text-accent dark:text-accent'
                            : 'text-jacarta-700'
                        } text-sm dark:text-white`}
                      >
                        {page.name}
                      </span>
                      {page.condition ? (
                        <span className='rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white ml-4'>
                          new
                        </span>
                      ) : undefined}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* page */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(page.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Pages
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul className='dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'>
              {page?.pages?.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>
                    <a className='dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between'>
                      <span
                        className={`font-display ${
                          isChildrenPageActive(page.path, pathname)
                            ? '!text-accent !dark:text-accent'
                            : 'text-jacarta-700 dark:text-white'
                        } text-sm `}
                      >
                        {page.name}
                      </span>
                      {page.condition ? (
                        <span className='rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white ml-4'>
                          new
                        </span>
                      ) : undefined}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* explore */}
          <li className='js-nav-dropdown nav-item dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(explore.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Explore
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul
              className='dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'
              aria-labelledby='navDropdown-1'
            >
              {explore?.pages?.map((page) => (
                <li key={page.id}>
                  <Link to='/'>
                    <a className='dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors'>
                      <span className='bg-light-base mr-3 rounded-xl p-[0.375rem]'>{page?.icon}</span>
                      <span className='font-display text-jacarta-700 text-sm dark:text-white'>{page?.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* resource */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(resource.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Resources
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul
              className='dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'
              aria-labelledby='navDropdown-4'
            >
              {resource?.pages?.map?.((page) => (
                <li key={page.id}>
                  <Link to={page?.path}>
                    <a className='dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors'>
                      <span
                        className={`font-display ${
                          isChildrenPageActive(page.path, pathname)
                            ? 'text-accent dark:text-accent'
                            : 'text-jacarta-700'
                        } text-sm dark:text-white`}
                      >
                        {page?.name}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* create */}
          <li className='group'>
            <Link to='/create'>
              <a>
                <button className='text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5'>
                  <span className={isChildrenPageActive(pathname, '/create') ? 'text-accent dark:text-accent' : ''}>
                    Create
                  </span>
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarDesktop;
