import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center p-5 m-5'>
                <ul className='flex gap-5'>
                    <li> <Link href={'/'}>Home</Link> </li>
                    <li> <Link href={'/destinations'}>Destinations</Link> </li>
                    <li> <Link href={'/my-bookings'}>My Bookings</Link> </li>
                    <li> <Link href={'/add-destination'}>Add Destinatio</Link> </li>

                </ul>
                <div>
                    <Image src={'/assets/Wanderlast.png'} alt={"logo"} width={200} height={200}>
                    </Image>
                </div>

                  <ul className='flex gap-5'>
                    <li> <Link href={'/profile'}>Profile</Link> </li>
                    <li> <Link href={'/login'}>Login</Link> </li>
                    <li> <Link href={'/sign-up'}>Sign Up</Link> </li>
                </ul>
        </nav>
            

    );
};

export default NavBar;